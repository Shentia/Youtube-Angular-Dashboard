import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';
import { VideosComponent } from './pages/videos/videos.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'playlists',
    component: PlaylistsComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'subscriptions',
    component: SubscriptionsComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];
