import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home', pathMatch: 'full'
      },{
        path: 'home',
        loadChildren: '../snapshot/snapshot.module#SnapshotModule'
      },{
        path: 'cv',
        loadChildren: '../cv/cv.module#CvModule'
      },{
        path: 'blog',
        loadChildren: '../blog/blog.module#BlogModule'
      },{
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
