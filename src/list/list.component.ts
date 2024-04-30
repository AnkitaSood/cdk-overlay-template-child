import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  template:`
  <ul class="example-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
    <li>Item 6</li>
  </ul>`,
  styles: `
  .example-list {
  width: 100px;
  border: solid 1px #ccc;
  border-radius: 5px;
  background: #fff;
  text-align: center;
  padding: 10px;
  margin: 0;
}

.example-list > li {
  list-style-type: none;
  border-bottom: solid 1px #8b8b8b;
  padding: 8px 0;
}

.example-list > li:last-child {
  border-bottom: none;
}`,

})
export class ListComponent {

}
