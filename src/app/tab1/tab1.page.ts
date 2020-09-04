import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  HEROES: Hero[] = [
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

  pageTitle: string;
  title: string;
  subtitle: string;
  heroes: any;
  selectedHero: Hero;

  constructor(
      private heroService: HeroService
    ) {
    this.pageTitle = 'Tour of Heroes Home';
    this.title = 'Το πάνθεον';
    this.subtitle = 'Ψητοπωλειο "Ο Ηρωικος Γυρος"';
  }

  ngOnInit() {
    this.heroService
    .getAll()
      .subscribe(data => {
        console.log(data);
        this.heroes = data;
      });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
