import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  roundToEdit = 1;

  addPlayer() {}
  startGame() {}
  continueGame() {}

  constructor() { }

  ngOnInit(): void {
  }

}
