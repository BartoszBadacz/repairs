import {Component, Input, OnInit} from '@angular/core';
import {Icon} from "../../../models/icon.type";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() iconName: Icon = '';
}
