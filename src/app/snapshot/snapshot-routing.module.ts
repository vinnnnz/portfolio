import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnapshotComponent } from './snapshot/snapshot.component';

const routes: Routes = [
  {
    path: '',
    component: SnapshotComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnapshotRoutingModule { }
