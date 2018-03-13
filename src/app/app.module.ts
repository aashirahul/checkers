import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
