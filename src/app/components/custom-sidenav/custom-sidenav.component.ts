import { Component, Input, computed, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export type Menuitem = {
  title: string;
  icon: string;
  route: string;
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css',
})
export class CustomSidenavComponent {
  sidenavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val);
  }

  menuItems = signal<Menuitem[]>([
    { title: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { title: 'Videos', icon: 'video_library', route: '/videos' },
    { title: 'Playlists', icon: 'playlist_play', route: '/playlists' },
    { title: 'Subscriptions', icon: 'subscriptions', route: '/subscriptions' },
    { title: 'Settings', icon: 'settings', route: '/settings' },
  ]);

  profilePicSize = computed(() => (this.sidenavCollapsed() ? '32' : '100'));
}
