import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'my-boards',
  template: `
  	<ul *ngFor="let board of boards | async">
  	<li (click)="gotoCatalog(board)" class="text">
    {{board.name}}
  	</li>
	</ul>
	`
})

export class BoardsComponent {
  	boards: FirebaseListObservable<any[]>;
  	threads: FirebaseListObservable<any[]>;
 

  	constructor(af: AngularFire, private router: Router) {
    	this.boards = af.database.list('boards');
  	}
  	gotoCatalog(board) {
 	 let link = ['Threads', { board_id: board.board_id }];
  	 this.router.navigate(link);
  }
  	
}