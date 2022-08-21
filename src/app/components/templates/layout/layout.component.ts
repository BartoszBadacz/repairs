import {
  Component,
  OnInit,
} from '@angular/core';
import {ColorSchemeService} from "../../../services/color-scheme.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() {
  }


  ngOnInit(): void {
  }

  notFound: boolean = true;
}
