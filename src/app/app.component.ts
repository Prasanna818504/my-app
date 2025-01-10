import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sidenavItems = [
    { name: 'Home', subItems: ['Dashboard', 'Stats', 'Reports'] },
    { name: 'About', subItems: ['Our Team', 'Our Story', 'Careers'] },
    { name: 'Services', subItems: ['Consulting', 'Development', 'Design'] },
    { name: 'Contact', subItems: ['Email', 'Phone', 'Chat'] },
  ];

  activeItem: string = '';
  activeDropdown: string = '';
  activeSubItem: string = '';

  toggleDropdown(item: string): void {
    this.activeDropdown = this.activeDropdown === item ? '' : item;
  }

  setActiveSubItem(item: string, subItem: string): void {
    this.activeItem = item;
    this.activeSubItem = subItem;
  }
}
