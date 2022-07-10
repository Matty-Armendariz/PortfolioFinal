import { Component, OnInit } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public showSidenav = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    if(this.showSidenav == false) this.showSidenav = true;
    else this.showSidenav = false;
  }

}
