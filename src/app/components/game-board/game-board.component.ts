import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Piece } from '../../models/piece';

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

}
