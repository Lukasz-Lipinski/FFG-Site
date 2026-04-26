import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { IIconLink } from '../../models/nav.models';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer implements OnInit {
  private readonly matIconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);

  private readonly logoPath = 'assets/images/logo.png';

  readonly iconLinks: IIconLink[] = [
    {
      to: 'https://www.instagram.com',
      label: 'Instagram',
      icon: 'instagram',
    },
    {
      to: 'https://www.facebook.com',
      label: 'Facebook',
      icon: 'facebook',
    },
    {
      to: 'https://www.spotify.com',
      label: 'Spotify',
      icon: 'spotify',
    },
    {
      to: 'https://www.youtube.com',
      label: 'YouTube',
      icon: 'youtube',
    },
  ];

  get logo(): string {
    return this.logoPath;
  }

  ngOnInit(): void {
    const brandIcons = ['instagram', 'facebook', 'spotify', 'youtube'];

    brandIcons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`assets/brands/${icon}.svg`),
      );
    });
  }
}
