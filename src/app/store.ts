import { Stock } from './domain/game/models/stock';
export interface AppState {
  cash: number;
  balance: number;
  debt: number;
  health: number;
  reputation: number;
  stocks: Stock[];
}

export const INITIAL_STATE: AppState = {
  cash: 2000,
  balance: 0,
  debt: 5500,
  health: 100,
  reputation: 100,
  stocks: []
};

export function rootReducer(state: AppState, action): AppState {
    return state;
}
