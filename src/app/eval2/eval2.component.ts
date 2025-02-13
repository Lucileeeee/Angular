import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import {FormComponent } from './form/form.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';



interface User {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  type: string;
}

@Component({
  selector: 'app-eval2',
  imports: [FormsModule, NgFor , UserComponent, FormComponent ],
  templateUrl: './eval2.component.html',
  styleUrl: './eval2.component.css'

})
export class Eval2Component {
  users: User[] = [
    {
      id: 1,
      title: 'Mon premier article',
      content: 'Ceci est le contenu de mon premier article.',
      author: 'Auteur 1',
      date: new Date('2023-01-01'),
      type: 'user'
    }
  ];
  onUserAdded(userData: { title: string; content: string; author: string; date: Date; type: string }) {
   const newUser: User = {
    id: this.users.length + 1,
    title: this.users.title,
    content: this.users.content,
    author: this.users.author,
    date: this.users.date,
    type: this.users.type
   }
   this.users.push(newUser);
  }
}

