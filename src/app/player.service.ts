import { Injectable } from '@angular/core';
import { PLAYERS } from './mock-players';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  getPlayers(): Player[] {
    return PLAYERS;
  }

  constructor() { }
}
