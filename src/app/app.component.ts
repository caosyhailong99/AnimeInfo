import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-anime-info-website';
  selectedIndex = 0;
  constructor(
  ) { }

  ngAfterViewInit() {
    window.onpopstate = () => {
      this.onClickClose();
    }
  }

  setIndex(i: number) {
    this.selectedIndex = i;
  }

  onClickClose() {
    const closeButton = document.getElementsByClassName('close-button') as HTMLCollectionOf<HTMLElement>;
    let modal = document.getElementById('modal');
    closeButton[0].style.display = 'none';
    if(modal)
      modal.style.display = 'none';
    let video = document.getElementById('trailer-video') as HTMLIFrameElement || new HTMLIFrameElement();
    video.contentWindow?.postMessage('{"event":"command", "func":"stopVideo", "args":""}', '*');
  }
}
