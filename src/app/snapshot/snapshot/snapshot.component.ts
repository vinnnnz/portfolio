import { Component, OnInit } from '@angular/core';
import { trigger, stagger, animate, style, group, query as q, transition, keyframes } from '@angular/animations';

const query = (s, a, o = {optional: true}) => q(s, a, o);

export const snapshotTransition = trigger('snapshotTransition', [
  transition(':enter', [
    query('.snapshot', style({opacity: 0})),
    query('.snapshot', stagger(300, [
      style({transform: 'translateY(100px)'}),
      animate('0.5s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1}))
    ]))
  ]),
  transition(':leave', [
    query('.snapshot', stagger(300, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('0.5s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ]))
  ])
])

@Component({
  selector: 'app-snapshot',
  animations: [ snapshotTransition ],
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.scss'],
  host: {
    '[@snapshotTransition]': ''
  }
})
export class SnapshotComponent implements OnInit {

  skills = [{'name': 'java', 'class': 'devicon-java-plain'},
            {'name': 'python', 'class': 'devicon-python-plain'},
            {'name': 'angular', 'class': 'devicon-angularjs-plain'},
            {'name': 'reactjs', 'class': 'devicon-react-plain'},
            {'name': 'javascript', 'class': 'devicon-javascript-plain'},
            {'name': 'mysql', 'class': 'devicon-mysql-plain'},
            {'name': 'postgres', 'class': 'devicon-postgresql-plain'},
            {'name': 'nodejs', 'class': 'devicon-nodejs-plain'},
            {'name': 'mongodb', 'class': 'devicon-mongodb-plain'},
            {'name': 'jasmine', 'class': 'devicon-jasmine-plain'},
            {'name': 'git', 'class': 'devicon-git-plain'},
            {'name': 'css3', 'class': 'devicon-css3-plain'},
            {'name': 'backbonejs', 'class': 'devicon-backbonejs-plain'},
            {'name': 'tomcat', 'class': 'devicon-tomcat-line'}]

  constructor() { }

  ngOnInit() {
  }

}
