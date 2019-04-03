import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { Hero } from './hero';
import { HEROES } from './mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  /** 
   *  异步函数签名。 它用 RxJS 的 of() 函数返回一个 Observable 形式的模拟英雄数据。
   * 
  */
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
