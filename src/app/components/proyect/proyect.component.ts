import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.scss'],
  animations: [
    trigger('contactButtonAnimation', [
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-25%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(10px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ])))
    ])
  ]
})

export class ProyectComponent implements OnInit {
  state: string;

  constructor() {
  }

  ngOnInit() {
    this.state = 'small';
  }

  animateMe() {
    this.state = (this.state === 'small') ? 'large' : 'small';
  }

}
