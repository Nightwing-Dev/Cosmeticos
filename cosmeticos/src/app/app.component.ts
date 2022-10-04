import { Component } from '@angular/core';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cosmeticos';
  fahear = faHeart;
  faShoppingIcon = faShoppingCart;
  faUserIcon = faUser;
  faBarsIcon = faBars;
}
