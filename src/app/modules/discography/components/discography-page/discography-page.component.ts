import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discography-page',
  templateUrl: './discography-page.component.html',
  styleUrls: ['./discography-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiscographyPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
