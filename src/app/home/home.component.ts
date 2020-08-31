import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  //Menu Variables
  menuBtn ='menu-btn';
  menuBtnExit = 'menu-btn-exit'
  menu = 'menu';
  menuNav='menu-nav';
  menuBranding='menu-branding';
  navItem='nav-item';
  navItemCurrent='nav-item current'


  projects = [
    {name: "Music Review Application", image: "../../assets/img/projects/music.png", github: "https://github.com/Xinyu-123/Music-Review-Application", site: "http://ec2-18-225-31-29.us-east-2.compute.amazonaws.com/home"},
    {name: "Defeat the Dragon", image: "../../assets/img/projects/dragon.png", github: "https://github.com/Xinyu-123/Defeat-the-Dragon", site: "http://defeat-dragon.s3-website-us-east-1.amazonaws.com/"},
    {name: "Unity Space Shoot'em Up", image: "../../assets/img/projects/space.png", github: null, site: "https://simmer.io/@AimlessEggs/space-shooter"},
    {name: "Java Sketchpad", image: "../../assets/img/projects/sketchpad.png", github: "https://github.com/Xinyu-123/Sketchpad-application", site: null},
    {name: "Unity Racing Game", image: "../../assets/img/projects/racing.png", github: "https://github.com/Xinyu-123/UnityRacingGame", site: "https://simmer.io/@AimlessEggs/racer"},
  ]


  
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
