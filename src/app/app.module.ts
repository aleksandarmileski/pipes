import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ExponentialStrengthPipe} from './pipes/exponential-strength.pipe';
import {BirthdayComponent} from './components/birthday/birthday.component';
import {PowerComponent} from './components/power/power.component';
import {FlyingHeroesComponent} from './components/flying-heroes/flying-heroes.component';
import {FlyingHeroesPipe, FlyingHeroesPipeImpure} from './pipes/flying-heroes.pipe';
import { FlyingHeroesImpureComponent } from './components/flying-heroes-impure/flying-heroes-impure.component';
import { HeroAsyncMessageComponent } from './components/hero-async-message/hero-async-message.component';
import { FetchJsonPipe } from './pipes/fetch-json.pipe';
import { HeroListComponent } from './components/hero-list/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    BirthdayComponent,
    PowerComponent,
    FlyingHeroesComponent,
    FlyingHeroesPipe,
    FlyingHeroesPipeImpure,
    FlyingHeroesImpureComponent,
    HeroAsyncMessageComponent,
    FetchJsonPipe,
    HeroListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
