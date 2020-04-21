import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  public lottieConfig: Object;
  private anim: any;

  constructor() {
    this.lottieConfig = {
      path: 'assets/anim5.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  ngOnInit() {
  }

}
