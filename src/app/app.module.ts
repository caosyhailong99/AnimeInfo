import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeInfoScreenComponent } from './anime-info-screen/anime-info-screen/anime-info-screen.component';
import { TopAnimeComponent } from './top-anime-screen/top-anime/top-anime.component';
import { AnimeItemComponent } from './components/anime-item/anime-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchedAnimeScreenComponent } from './components/searched-anime-screen/searched-anime-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeInfoScreenComponent,
    TopAnimeComponent,
    AnimeItemComponent,
    SearchedAnimeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
