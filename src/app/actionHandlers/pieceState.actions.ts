import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Piece } from '../models/piece';
import { DISPLAY_PIECES } from '../stores/pieces.store';

@Injectable()
export class PieceStateActions {
    private pieces: Array<Piece>;

    constructor(
        private _store: Store<any>,
    ) { }

    public move(from: any, to: any): void {
        this._store.select('pieces').subscribe((pieces) => {
            pieces[to.row][to.col] = pieces[from.row][from.col];
            pieces[from.row][from.col] = null;
            this._store.dispatch({ type: DISPLAY_PIECES, payload: pieces });
        });
    }

    public jump(from: any, to: any, skipped: any): void {
        this._store.select('pieces').subscribe((pieces) => {
            pieces[to.row][to.col] = pieces[from.row][from.col];
            pieces[from.row][from.col] = null;
            pieces[skipped.row][skipped.col] = null;
            this._store.dispatch({ type: DISPLAY_PIECES, payload: pieces });
        });
    }
}
