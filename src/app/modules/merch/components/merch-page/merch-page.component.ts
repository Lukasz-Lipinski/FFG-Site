import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merch-page',
  templateUrl: './merch-page.component.html',
  styleUrls: ['./merch-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MerchPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
