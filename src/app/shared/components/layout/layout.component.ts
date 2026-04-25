import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [TopNavComponent, RouterModule, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
