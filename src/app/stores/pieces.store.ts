import { Action } from '@ngrx/store';
import { Piece } from '../models/piece';


export type State = Array<Array<Piece>>;

export const DISPLAY_PIECES = 'DISPLAY_PIECES';

export class DisplayAlbumAction implements Action {
    readonly type = DISPLAY_PIECES;
    payload: Array<Array<Piece>>;
}

export type Actions = DisplayAlbumAction;

export function pieces(state: State, action: Actions): State {
    switch (action.type) {
        case DISPLAY_PIECES:
            return action.payload;
        default:
            return state;
    }
}
