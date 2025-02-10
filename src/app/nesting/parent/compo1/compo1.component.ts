import { Component } from '@angular/core';
import { CompoDansCompo1Component } from '../compo-dans-compo1/compo-dans-compo1.component';
import { CompoDansCompo2Component } from '../compo-dans-compo2/compo-dans-compo2.component';

@Component({
  selector: 'app-compo1',
  imports: [CompoDansCompo1Component, CompoDansCompo2Component],
  templateUrl: './compo1.component.html',
  styleUrl: './compo1.component.css'
})
export class Compo1Component {

}
