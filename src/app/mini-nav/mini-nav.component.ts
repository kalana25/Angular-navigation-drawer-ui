import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mini-nav',
  templateUrl: './mini-nav.component.html',
  styleUrls: ['./mini-nav.component.css']
})
export class MiniNavComponent implements OnInit {

  @Output() menuclicked = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  public OnClicked() {
    this.menuclicked.emit(true);
  }

}
