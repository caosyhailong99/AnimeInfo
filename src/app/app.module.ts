import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeInfoScreenComponent } from './feature/anime-info/anime-info.component';
import { SearchedAnimeScreenComponent } from './feature/searched-anime/searched-anime.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TopAnimeComponent } from './feature/top-anime/top-anime.component';
import { AnimeItemComponent } from './shared/anime-item/anime-item.component';
import { MainLayoutComponent } from './shared/common/main-layout/main-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimeInfoScreenComponent,
    TopAnimeComponent,
    AnimeItemComponent,
    SearchedAnimeScreenComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
