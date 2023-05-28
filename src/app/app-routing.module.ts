import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeInfoScreenComponent } from './feature/anime-info/anime-info.component';
import { AppComponent } from './app.component';
import { SearchedAnimeScreenComponent } from './feature/searched-anime/searched-anime.component';
import { TopAnimeComponent } from './feature/top-anime/top-anime.component';
import { MainLayoutComponent } from './shared/common/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'top-anime',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'top-anime', component: TopAnimeComponent },
      { path: 'top-anime/:page', component: TopAnimeComponent },
      { path: 'anime-info', component: AnimeInfoScreenComponent },
      {
        path: 'searched-anime',
        component: SearchedAnimeScreenComponent,
        runGuardsAndResolvers: 'always',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
