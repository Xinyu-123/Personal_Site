import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  id = 1;
  menuBtn ='menu-btn';
  menuBtnExit = 'menu-btn-exit'
  menu = 'menu';
  menuNav='menu-nav';
  menuBranding='menu-branding';
  navItem='nav-item';
  
  //menuBtn = document.getElementById('my-row').querySelector<HTMLInputElement>('.btn.menu').value
  
  showMenu=false;
  title='port'
  
  toggleMenu(){
    if(!this.showMenu){
      this.menuBtn ='menu-btn close';
      this.menuBtnExit = 'menu-btn-exit in'
      this.menu = 'menu show';
      this.menuNav='menu-nav show';
      this.menuBranding='menu-branding show';
      this.navItem='nav-item show';

      //Set Menu State
      this.showMenu = true;
    }else{
      this.menuBtn ='menu-btn';
      this.menuBtnExit = 'menu-btn-exit'
      this.menu = 'menu';
      this.menuNav='menu-nav';
      this.menuBranding='menu-branding';
      this.navItem='nav-item';

      //Set Menu State
      this.showMenu=false;
    }
    

  }
}


