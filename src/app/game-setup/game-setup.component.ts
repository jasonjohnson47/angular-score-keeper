import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { PlayerService } from '../player.service';
import { Player } from '../player';
 
@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  constructor(
    private playerService: PlayerService,
    private fb: FormBuilder
  ) { }

  roundToEdit = 1;

  players: Player[] = [];
  playerNameControls: FormControl[] = [];
  playerNamesForm: FormGroup = this.fb.group({});

  getPlayers(): void {
    this.players = this.playerService.getPlayers();

    this.playerNameControls = this.players.map((player: Player) => this.fb.control(player.name));

    this.playerNamesForm = this.fb.group({
      playerNames: this.fb.array(
        this.playerNameControls
      )
    });
  }

  get playerNames() {
    return this.playerNamesForm.get('playerNames') as FormArray;
  }

  addPlayerNameField() {
    this.playerNames.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.playerNames.value);
    console.log(this.players);
    console.log(this.playerNameControls);
    //startGame()
    //continueGame()
  }
  startGame() {}
  continueGame() {}

  ngOnInit(): void {
    this.getPlayers();
  }

}