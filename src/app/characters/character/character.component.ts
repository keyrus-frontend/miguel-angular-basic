import { Component } from '@angular/core';
import { characters } from '../characters'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.less']
})
export class CharacterComponent {

  character: Character = {
    name: 'Homer Simpson',
    image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939'
  }
  private characters = characters;

  changeCharacter(): void {
    const randomCharacter: Character = this.characters[Math.floor(Math.random() * this.characters.length)];
    this.character = randomCharacter;
  }
}
