import { Component } from '@angular/core';
import { characters } from '../characters';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent {

  characters = characters;

}
