import { Component } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
