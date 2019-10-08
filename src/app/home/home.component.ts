import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  menuBtn ='menu-btn';
  menuBtnExit = 'menu-btn-exit'
  menu = 'menu';
  menuNav='menu-nav';
  menuBranding='menu-branding';
  navItem='nav-item';
  navItemCurrent='nav-item current'
  
  showMenu=false;
  title='Home'
  
  toggleMenu(){
    if(!this.showMenu){
      this.menuBtn ='menu-btn close';
      this.menuBtnExit = 'menu-btn-exit in'
      this.menu = 'menu show';
      this.menuNav='menu-nav show';
      this.menuBranding='menu-branding show';
      this.navItem='nav-item show';
      this.navItemCurrent='nav-item current show'

      //Set Menu State
      this.showMenu = true;
    }else{
      this.menuBtn ='menu-btn';
      this.menuBtnExit = 'menu-btn-exit'
      this.menu = 'menu';
      this.menuNav='menu-nav';
      this.menuBranding='menu-branding';
      this.navItem='nav-item';
      this.navItemCurrent='nav-item current';

      //Set Menu State
      this.showMenu=false;
    }

  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior:"smooth"}); 
    
  }

  ngOnInit() {
  }

}
