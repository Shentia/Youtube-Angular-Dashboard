import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
export type MenuItem = {
  title: string;
  icon: string;
  route: string;
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css',
})
export class CustomSidenavComponent {
  menuItems = signal<MenuItem[]>([
    { title: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { title: 'Videos', icon: 'video_library', route: '/videos' },
    { title: 'Playlists', icon: 'playlist_play', route: '/playlists' },
    { title: 'Subscriptions', icon: 'subscriptions', route: '/subscriptions' },
    { title: 'Settings', icon: 'settings', route: '/settings' },
  ]);
}
