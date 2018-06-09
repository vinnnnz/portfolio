import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv/cv.component';
import { CvRoutingModule } from './cv-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CvRoutingModule
  ],
  declarations: [CvComponent]
})
export class CvModule { }
