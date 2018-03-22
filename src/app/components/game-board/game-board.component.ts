import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Piece } from '../../models/piece';

type Position = { row: number, col: number };

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  pieces: Array<Array<Piece>>;
  public redPiece: boolean;



  constructor(private _store: Store<any>) { }

  ngOnInit() {
    this._store.select('pieces').subscribe((pieces) => this.pieces = pieces);

  }

  public moveSelected(row, col, piece) {
    if (!this.isMoving) {
      this.originalPosition = { row, col };
      this.isMoving = true;
    } else {
      if (this.isAJump(this.originalPosition, { row, col })) {
        this._pieceState.jump(this.originalPosition, { row, col }, this.skippedPosition);
      }
      if (this.isValidMove(this.originalPosition, { row, col })) {
        this._pieceState.move(this.originalPosition, { row, col });
      }
      this.isMoving = false;
      this.currentPlayer = this.currentPlayer === 'Player Red' ? 'Player Black' : 'Player Red';
    }
  }

  public isAJump(from: Position, to: Position) {
    const pieceSelected = this.pieces[from.row][from.col];
    if (pieceSelected === 1) {
      if (to.row > from.row) {
        if (from.col === to.col - 2) {
          this.skippedPosition.row = to.row + 1;
          this.skippedPosition.col = to.col - 1;
          return true;
        }
        if (from.col === to.col + 2) {
          this.skippedPosition.row = to.row + 1;
          this.skippedPosition.col = to.col + 1;
          return true;
        }
      }
    } else if (pieceSelected === 2) {
      if (to.row < from.row) {
        if (from.col === to.col - 2) {
          this.skippedPosition.row = to.row + 1;
          this.skippedPosition.col = to.col - 1;
          return true;
        }
        if (from.col === to.col + 2) {
          this.skippedPosition.row = to.row + 1;
          this.skippedPosition.col = to.col + 1;
          return true;
        }
      }
    }
    return false;

  }

  public isValidMove(from: Position, to: Position) {
    const checkIfSpaceEmpty = this.pieces[to.row][to.col];
    const pieceSelected = this.pieces[from.row][from.col];
    if (checkIfSpaceEmpty === 1 || checkIfSpaceEmpty === 2) {
      return false;
    }
    if (pieceSelected === 1) {
      if (to.row > from.row) {
        if (from.col === to.col - 1 || from.col === to.col + 1) {
          return true;
        }
      }
    } else if (pieceSelected === 2) {
      if (to.row < from.row) {
        if (from.col === to.col - 1 || from.col === to.col + 1) {
          return true;
        }
        // if (from.col === to.col - 2 || from.col === to.col + 2) {
        //   return true;
        // }
      }
    }
    return false;
  }
}
