import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-musican-card',
  templateUrl: './musican-card.component.html',
  styleUrls: ['./musican-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicanCardComponent {
  readonly name = input.required<string>();
  readonly description = input.required<string>();
  readonly imageUrl = input.required<string>();
}
