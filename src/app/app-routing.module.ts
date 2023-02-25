import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeInfoScreenComponent } from './anime-info-screen/anime-info-screen/anime-info-screen.component';
import { AppComponent } from './app.component';
import { SearchedAnimeScreenComponent } from './components/searched-anime-screen/searched-anime-screen.component';
import { TopAnimeComponent } from './top-anime-screen/top-anime/top-anime.component';

const routes: Routes = [
  {path: "top-anime", component: TopAnimeComponent},
  {path: "anime-info-screen", component: AnimeInfoScreenComponent},
  {path: "searched-anime-screen", component: SearchedAnimeScreenComponent, runGuardsAndResolvers: 'always'},
  {path: "", redirectTo: "top-anime", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
