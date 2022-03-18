import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';
 
@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  roundToEdit = 1;
  players: Player[] = [];

  getPlayers(): void {
    this.players = this.playerService.getPlayers();
  }

  addPlayer() {}
  startGame() {}
  continueGame() {}

  ngOnInit(): void {
    this.getPlayers();
  }

}