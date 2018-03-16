import { Component, OnInit } from '@angular/core';
import { AppStartUpActions } from '../../actionHandlers/appStartUp.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private _appStartUpActions: AppStartUpActions,
  ) { }

  ngOnInit() {
    this._appStartUpActions.initializeGame();
  }
}
