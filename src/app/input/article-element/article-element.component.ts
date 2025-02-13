import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-element',
  imports: [],
  templateUrl: './article-element.component.html',
  styleUrl: './article-element.component.css'
})
export class ArticleElementComponent {

  @Input() id!: number;
  @Input() title!: string;
  @Input() content!: string;
  @Input() author!: string;
  @Input() date!: Date;
  @Input() type!: string;

  @Input('singleArticle') article: any;
}