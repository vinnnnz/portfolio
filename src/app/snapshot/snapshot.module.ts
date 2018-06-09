import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { SnapshotRoutingModule } from './snapshot-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SnapshotRoutingModule
  ],
  declarations: [SnapshotComponent]
})
export class SnapshotModule { }
