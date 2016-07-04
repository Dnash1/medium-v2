import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { RouteParams } from '@angular/router-deprecated';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'my-threads',
	template: `<h3>Threads</h3>
  	<ul *ngFor="let thread of threads | async">
  	<li (click)="gotoReplies(thread)"> {{ thread.subj }} </li>
  	<li> {{ thread.body }} </li>
	</ul>`
})

export class ThreadsComponent {
	boards: FirebaseListObservable<any[]>;
  	threads: FirebaseListObservable<any[]>;
  	constructor(af: AngularFire, private router: Router, private routeParams: RouteParams) {
    	let board_id = +this.routeParams.get('board_id');
    	this.threads = af.database.list('threads', {
    		query: {
    			orderByChild: 'board_id',
    			equalTo: board_id
    		}
    	});
  	}
  gotoReplies(thread) {
 	 let link = ['Posts', { thread_id: thread.id }];
  	 this.router.navigate(link);
  }
}