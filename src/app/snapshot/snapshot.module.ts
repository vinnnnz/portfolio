import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { SnapshotRoutingModule } from './snapshot-routing.module';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  imports: [
    CommonModule,
    SnapshotRoutingModule
  ],
  declarations: [SnapshotComponent, SkillComponent]
})
export class SnapshotModule { }
