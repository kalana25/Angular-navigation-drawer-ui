import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { fade, slideDown } from '../helper/animation';

@Component({
  selector: 'app-mini-nav',
  templateUrl: './mini-nav.component.html',
  styleUrls: ['./mini-nav.component.css'],
  animations:[
    fade,
    slideDown
  ]
})
export class MiniNavComponent implements OnInit {
  @Input () showHome:boolean;
  @Input () slideState:string;
  @Output() menuclicked = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  public OnClicked() {
    this.menuclicked.emit(true);
  }

}
