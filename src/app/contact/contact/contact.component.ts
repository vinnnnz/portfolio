import { Component, OnInit } from '@angular/core';
import { trigger, stagger, animate, style, group, query as q, transition, keyframes } from '@angular/animations';

const query = (s, a, o = {optional: true}) => q(s, a, o);

export const contactTransition = trigger('contactTransition', [
  transition(':enter', [
    query('.contact', style({opacity: 0})),
    query('.contact', stagger(300, [
      style({transform: 'translateY(100px)'}),
      animate('0.5s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1}))
    ]))
  ]),
  transition(':leave', [
    query('.contact', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('0.5s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ]))
  ])
])


@Component({
  selector: 'app-snapshot',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [ contactTransition ],
  host: {
    '[@contactTransition]': ''
  }
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
