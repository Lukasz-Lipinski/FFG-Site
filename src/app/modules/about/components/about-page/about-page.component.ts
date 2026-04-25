import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MusicanCardComponent } from '../musican-card/musican-card.component';
import { CommonModule } from '@angular/common';

interface IMusician {
  name: string;
  description: string;
  imgUrl: string;
}

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MusicanCardComponent, CommonModule],
})
export class AboutPageComponent implements OnInit {
  readonly musician: IMusician[] = [
    {
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgUrl: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imgUrl: 'https://via.placeholder.com/150',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
