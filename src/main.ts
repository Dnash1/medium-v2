import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {FIREBASE_PROVIDERS, 
  defaultFirebase, 
  AngularFire, 
  AuthMethods, 
  AuthProviders, 
  firebaseAuthConfig} from 'angularfire2';


bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyCwy1T4VOrkxmW4kvw5cf1rg6jZ_I8KpZk",
    authDomain: "medium-1bce6.firebaseapp.com",
    databaseURL: "https://medium-1bce6.firebaseio.com",
    storageBucket: "medium-1bce6.appspot.com",
  })
]);

