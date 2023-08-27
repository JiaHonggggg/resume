import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() name: string | undefined;
  @Input() jobTitle: string | undefined;
  @Input() date: string | undefined;
  @Input() link: string | undefined;
  @Input() work: Array<string> | undefined;
  @Input() project: Array<any> | undefined ;
  @Input() number: number | undefined;
}
