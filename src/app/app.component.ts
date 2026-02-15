import { Component } from '@angular/core';
import { IPlayer } from './shared/models/plaer';
import { playerArr } from './shared/const/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe-four';
  title1= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem dolor cum dolorem possimus? Ea voluptatem quis minus vel placeat.';
  newPlayerArr : IPlayer[] = playerArr
  searchedValue: string = ''
  searchedOPtion: string= 'By Name'
  optionArr: string[]= ['By Name', 'By Team','By Role']

}
