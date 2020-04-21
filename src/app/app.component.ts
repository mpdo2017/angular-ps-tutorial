import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
      <div>A collection of my favorite recipes!</div>
  </div>
  `    
})
export class AppComponent {
  pageTitle: string = 'My Recipes';
}
