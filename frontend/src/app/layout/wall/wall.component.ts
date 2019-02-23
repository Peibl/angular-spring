import {Component, Input, OnInit} from '@angular/core';
import {Wall} from '../../models/Wall';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {
  @Input() wall: Wall;
  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  onShare(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }
}
