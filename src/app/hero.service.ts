import { Injectable, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { Hero } from './hero';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  private HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  public getAll(): Observable<Hero[]> {
    return of(this.HEROES);
  }


  public addItem( hero: Hero): Observable<Hero> {

    this.HEROES.push(hero);
    return of(hero);
  }


  public updateItem( hero: Hero ): Observable<Hero> {

    let res: Hero | null;

    const ix = this.HEROES.indexOf(hero);
    if (ix) {
      this.HEROES.splice(ix, 1, hero);
      res = hero;
    } else {
      res = null;
    }

    return of(res);
  }


  public deleteItem( hero: Hero ) {
    let res: Hero | null;

    const ix = this.HEROES.indexOf(hero);
    if (ix) {
      this.HEROES.splice(ix, 1);
      res = hero;
    } else {
      res = null;
    }

    return of(res);
  }

}
