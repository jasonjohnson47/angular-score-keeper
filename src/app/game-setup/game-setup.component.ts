import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css'],
})
export class GameSetupComponent implements OnInit {
  constructor(
    private playerService: PlayerService,
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  roundToEdit = 1;

  players: Player[] = [];
  playerNameControls: FormControl[] = [];
  playerNamesForm: FormGroup = this.fb.group({});
  focusArray: boolean[] = [];

  setFocusArray() {
    const tempFocusArray: boolean[] = Array(this.playerNames.length).fill(
      false
    );
    const firstEmptyValueIndex: number = this.playerNames.value.findIndex(
      (value: string) => value == ''
    );
    this.focusArray = tempFocusArray;
    this.changeDetectorRef.detectChanges();
    tempFocusArray[firstEmptyValueIndex] = true;
    this.focusArray = tempFocusArray;
  }

  getPlayers(): void {
    this.players = this.playerService.getPlayers();

    this.playerNameControls = this.players.map((player: Player) =>
      this.fb.control(player.name)
    );

    console.log(this.playerNameControls);

    this.playerNamesForm = this.fb.group({
      playerNames: this.fb.array(this.playerNameControls),
    });
  }

  get playerNames() {
    return this.playerNamesForm.get('playerNames') as FormArray;
  }

  addPlayersToStorage() {
    const newPlayers = this.playerNames.value.map(
      (playerName: string, i: number) => {
        return { id: i, name: playerName };
      }
    );
    this.playerService.setPlayers(newPlayers);
  }

  addPlayerNameField() {
    this.playerNames.push(this.fb.control(''));
    this.setFocusArray();
  }

  deletePlayer(i: number) {
    console.log('delete player with id: ' + i);
    this.playerService.deletePlayer(i);
    this.getPlayers();
  }

  onBlurred(blurredInput: HTMLInputElement) {
    this.addPlayersToStorage();
  }

  onSubmit() {
    //startGame()
    //continueGame()
  }
  startGame() {}
  continueGame() {}
}
