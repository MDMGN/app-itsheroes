import { Hero } from "../types/hero";

enum  typeAction{
    HERO_SAVE='HERO_SAVE',
    HERO_ADD='HERO_ADD',
    HERO_REMOVE='HERO_REMOVE'
}

type ActionHero={
    payload : Hero |string,
    type: typeAction
}

const initialState=[] as Hero[]

export function HeroesReducers(state:Hero[]=initialState,action:ActionHero){
        switch(action.type){
            case  typeAction.HERO_ADD:
                    return [...state,action.payload]
            case typeAction.HERO_SAVE:
                    return Object.assign(state.slice(),action.payload)
            case typeAction.HERO_REMOVE:
                    return state.filter(id=> id!==action.payload)
        }
}