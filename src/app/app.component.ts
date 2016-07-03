import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  boards: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.boards = af.database.list('boards');
  }
}
