import { Component,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { rotateAll } from './helper/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    rotateAll
  ]
})
export class AppComponent  implements AfterViewInit{

  @ViewChild (MatSidenav) sideNavigation : MatSidenav
  expandNavi:boolean = false;
  rotState:string ="end"

  ngAfterViewInit() {

    this.sideNavigation.openedStart
    .subscribe(res=>{
      this.expandNavi = true;
      this.rotState = "start"
    })
    
    this.sideNavigation.closedStart
    .subscribe(res=> {
      this.expandNavi = false;
      this.rotState = "end"
    })
  }

}
