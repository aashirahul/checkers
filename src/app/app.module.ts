import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { APP_ACTION_HANDLERS } from './app.actionHandlers';
import { APP_STORES } from './app.stores';
import { APP_SERVICES } from './app.services';
import { APP_MOCK_INTERCEPTORS } from './app.mock.interceptors';
import { environment } from '../environments/environment';



import { AppComponent } from './components/app/app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { CellComponent } from './components/cell/cell.component';
import { PieceComponent } from './components/piece/piece.component';


@NgModule({
    declarations: [
        AppComponent,
        GameBoardComponent,
        CellComponent,
        PieceComponent
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot(APP_STORES),
        HttpModule,
        HttpClientModule,
    ],
    providers: [
        ...APP_ACTION_HANDLERS,
        ...APP_SERVICES,
        ...(environment.useMocking ? APP_MOCK_INTERCEPTORS : [])

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
