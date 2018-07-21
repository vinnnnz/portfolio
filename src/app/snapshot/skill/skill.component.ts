import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'skill-tile',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  active = false;

  private _skillName;

  private _skillClass;

  @Input()
  set skillName(value: String) {
    this._skillName = value;
  };

  @Input()
  set skillClass(value: String) {
    this._skillClass = value;
  }

  constructor() { }

  ngOnInit() {
  }

  onSkillMouseOver() {
    this.active = true;
  }

  onSkillMouseExit() {
    console.log("L");
    this.active = false;
  }

}
