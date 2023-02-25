import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-anime-info-website';
  selectedIndex = 0;
  searchName = new FormControl('');
  constructor(
    private router: Router,
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

  onClickSideMenu() {
    let menu = document.querySelector(".horizontal-side-menu") as HTMLElement;
    let currentDisplay = menu.style.display;
    if(currentDisplay === "none")
      menu.style.display = "block";
    else
      menu.style.display = "none";
  }

  onPressedEnter() {
    console.log("OK");
    this.router.navigate(["/searched-anime-screen"], {queryParams: {'name': this.searchName.value}});
  }
}
