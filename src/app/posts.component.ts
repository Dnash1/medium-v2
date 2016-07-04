import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { RouteParams } from '@angular/router-deprecated';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'my-posts',
	template: `<h3>Replies</h3>
	<ul *ngFor="let post of posts | async">
		<li>{{ post.subj }}</li>
    	<li>{{ post.body }}</li>
	</ul>`
})

export class PostsComponent {
	posts: FirebaseListObservable<any[]>;
	constructor(af: AngularFire, private router: Router, private routeParams: RouteParams) {
		let thread_id = +this.routeParams.get('thread_id');
    	this.posts = af.database.list('posts', {
    		query: {
    			orderByChild: 'thread_id',
    			equalTo: thread_id
    		}
    	});
	}

}