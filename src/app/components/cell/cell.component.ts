import { Component, OnInit, Input } from '@angular/core';

import { Piece } from '../../models/piece';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {

  @Input()
  piece: Piece;


}
