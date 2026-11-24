import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
      <h1>Welcome to {{ title () }}!</h1>
      <app-user-item></app-user-item>
  `,
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);
