import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() content!: string;
  @Input() author!: string;
  @Input() date!: Date;
  @Input() type!: string;

  @Input('singleArticle') article: any;
}



