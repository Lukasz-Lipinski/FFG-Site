import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ILink } from '../../models/nav.models';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent {
  private readonly links: ILink[] = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/discography', label: 'Discography' },
    { to: '/merch', label: 'Merch' },
    { to: '/shows', label: 'Shows' },
    { to: '/contact', label: 'Contact' },
  ];

  get navLinks(): ILink[] {
    return this.links;
  }
}
