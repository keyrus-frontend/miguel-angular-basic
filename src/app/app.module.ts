import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharactersModule } from './characters/characters.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CharactersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
