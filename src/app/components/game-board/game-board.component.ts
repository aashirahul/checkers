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

  private isMoving = false;
  private originalPosition: Position;
  move(row, col) {
    if (!this.isMoving) {
      this.originalPosition = { row, col };
      this.isMoving = true;
    } else {
      if (this.isValid(this.originalPosition, { row, col })) {

      }
      this.isMoving = false;
    }
  }

  private isValid(from: Position, to: Position) {
    if (this.pieces[to.row][to.col] !== null) {
      return false;
    }

    if (from.row === to.row && [from.col - 1, from.col + 1].includes(to.col)) {
      return true;
    }

    if (from.col === to.col && [from.row - 1, from.row + 1].includes(to.row)) {
      return true;
    }

    return false;
  }
}
