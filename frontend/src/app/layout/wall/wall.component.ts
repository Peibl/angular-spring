import {Component, Input, OnInit} from '@angular/core';
import {Wall} from '../../models/Wall';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {
  @Input() wall: Wall;

  constructor() {
  }

  ngOnInit() {
  }

  onShare() {
    console.log('share');
  }
}
