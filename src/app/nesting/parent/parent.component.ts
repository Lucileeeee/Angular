import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { Compo3Component } from './compo3/compo3.component';


@Component({
  selector: 'app-parent',
  imports: [Compo1Component, Compo2Component, Compo3Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

}

