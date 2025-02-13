import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  imports: [FormsModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  titleText = '';
  contentText= '';

  @Output() articleCreated = new EventEmitter<{ title: string, content: string, author: string, date: Date, type: string}>();
  @Output() brouillonCreated = new EventEmitter<{ title: string, content: string, author: string, date: Date, type: string}>();

  createArticle(title: string, content: string) {
    this.articleCreated.emit({title: title, content: content, author: 'Sophie', date: new Date, type: 'article'});

  }

  createBrouillon(title: string, content: string) {
    this.brouillonCreated.emit({title: title, content: content, author: 'Sophie', date: new Date, type: 'brouillon'});

  }
}