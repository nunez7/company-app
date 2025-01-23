import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-summary-page',
  standalone: true,
  imports: [],
  templateUrl: './summary-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SummaryPageComponent { }
