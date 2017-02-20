import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'flyingHeroes',
  // pure: false
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(allHeroes: any[]): any {
    return allHeroes.filter(hero => hero.canFly);
  }

}
@Pipe({
  name: 'flyingHeroesImpure',
  pure: false
})
export class FlyingHeroesPipeImpure extends FlyingHeroesPipe {
}
