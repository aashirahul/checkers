import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as Constants from '../constants/constants';
import { Piece } from '../models/piece';
import { ApiService, REQUEST_TYPE_GET } from '../services/api.service';
import { DISPLAY_PIECES } from '../stores/pieces.store';

@Injectable()
export class AppStartUpActions {
    private pieces: Array<Piece>;

    constructor(
        private _store: Store<any>,
        private _api: ApiService,

    ) { }

    public initializeGame(): void {
        // Replace null with Piece.NONE
        const pieces = [
            [null, Piece.RED, null, Piece.RED, null, Piece.RED, null, Piece.RED],
            [Piece.RED, null, Piece.RED, null, Piece.RED, null, Piece.RED, null],
            [null, Piece.RED, null, Piece.RED, null, Piece.RED, null, Piece.RED],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [Piece.BLACK, null, Piece.BLACK, null, Piece.BLACK, null, Piece.BLACK, null],
            [null, Piece.BLACK, null, Piece.BLACK, null, Piece.BLACK, null, Piece.BLACK],
            [Piece.BLACK, null, Piece.BLACK, null, Piece.BLACK, null, Piece.BLACK, null]
        ];

        this._store.dispatch({ type: DISPLAY_PIECES, payload: pieces });
    }

  
}
