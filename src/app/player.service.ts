import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  initialPlayers: Player[] = [
    {
      id: 0,
      name: '',
    },
  ];

  getPlayers(): Player[] {
    return JSON.parse(
      localStorage.getItem('score-keeper-players') ||
        JSON.stringify(this.initialPlayers)
    );
  }

  setPlayers(players: Player[]) {
    localStorage.setItem(
      'score-keeper-players',
      JSON.stringify(players, null, 2)
    );
  }

  deletePlayer(id: number) {
    const updatedPlayers = this.getPlayers().filter((player) => {
      return player.id !== id;
    });
    localStorage.setItem(
      'score-keeper-players',
      JSON.stringify(updatedPlayers, null, 2)
    );
  }
}
