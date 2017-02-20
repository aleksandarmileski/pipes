import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-flying-heroes-impure',
  templateUrl: './flying-heroes-impure.component.html',
  styleUrls: ['./flying-heroes-impure.component.css']
})
export class FlyingHeroesImpureComponent implements OnInit {
  heroes: any[] = [];
  canFly = true;
  newCanFly = false;
  mutate = true;

  private HEROES: any = [
    {name: 'pecko', canFly: !this.canFly},
    {name: 'nacko', canFly: !this.canFly},
    {name: 'tosho', canFly: this.canFly},
    {name: 'mile', canFly: this.canFly},
    {name: 'cacko', canFly: !this.canFly},
  ];

  constructor() {
    this.heroes = this.HEROES;
  }

  ngOnInit() {
  }

  addHero(name: string, canFly: boolean) {
    name = name.trim();
    if (!name) {
      return;
    }
    let hero = {name, canFly: canFly};
    console.log(hero);
    if (this.mutate) {
      this.heroes.push(hero)
    } else {
      this.heroes = this.heroes.concat(hero)
    }
  }

  reset() {
    this.heroes = [];
  }
}
