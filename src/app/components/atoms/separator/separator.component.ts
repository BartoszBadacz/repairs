import {Component, Input, OnInit} from '@angular/core';

export type SeparatorParams = {
  orientation?: 'horizontal' | 'vertical';
  color?: string;
}

@Component({
  selector: 'app-separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.scss']
})
export class SeparatorComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() params: SeparatorParams = {};


}
