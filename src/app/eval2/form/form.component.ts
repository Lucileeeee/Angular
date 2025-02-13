import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  titleText = '';
  contentText= '';
  @Output() userCreated = new EventEmitter<{ title: string, content: string, author: string, date: Date, type: string}>();
  
  createUser(title: string, content: string) {
    this.userCreated.emit({title: title, content: content, author: 'Sophie', date: new Date, type: 'user'});
  }
}
