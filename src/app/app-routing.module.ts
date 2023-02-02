import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeInfoScreenComponent } from './anime-info-screen/anime-info-screen/anime-info-screen.component';
import { AppComponent } from './app.component';
import { TopAnimeComponent } from './top-anime-screen/top-anime/top-anime.component';

const routes: Routes = [
  {path: "", redirectTo: "top-anime", pathMatch: 'full'},
  {path: "top-anime", component: TopAnimeComponent},
  {path: "anime-info-screen", component: AnimeInfoScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
