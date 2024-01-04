import { Hero } from "../types/hero";

export enum  typeAction{
    HERO_INITIAL= 'HERO_INITIAL',
    HERO_SAVE='HERO_SAVE',
    HERO_ADD='HERO_ADD',
    HERO_REMOVE='HERO_REMOVE'
}

export type ActionHero={
    payload : Hero |string|Hero[],
    type: typeAction
}


export function HeroesReducers(state: Hero[], action: ActionHero): Hero[] {
        switch (action.type) {
          case typeAction.HERO_INITIAL:
            if(action.payload instanceof Array)
                 return [...action.payload];
          case typeAction.HERO_ADD:
                if(typeof action.payload !== 'string' && !(action.payload instanceof Array)) 
                  return [...state, action.payload];
          case typeAction.HERO_SAVE:
            return state.map(hero =>
              hero.id === (action.payload as Hero).id ? (action.payload as Hero) : hero
            );
          case typeAction.HERO_REMOVE:
            return state.filter(hero => hero.id !== action.payload);
          default:
            return state;
        }
      }
      