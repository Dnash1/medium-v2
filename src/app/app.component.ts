import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { BoardsComponent } from './boards.component';
import { ThreadsComponent } from './threads.component';
import { PostsComponent } from './posts.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ ROUTER_PROVIDERS ]
})

@RouteConfig([
  {
  path: '/boards',
  name: 'Boards',
  component: BoardsComponent,
  useAsDefault: true
  },
  {
  path: '/:board_id/catalog',
  name: 'Threads',
  component: ThreadsComponent
  },
  {
  path: '/:thread_id/replies',
  name: 'Posts',
  component: PostsComponent
  }
  ])

export class AppComponent {
  title = 'Medium';
}
