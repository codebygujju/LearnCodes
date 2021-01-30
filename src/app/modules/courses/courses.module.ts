import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ListcourseComponent } from './listcourse/listcourse.component';


@NgModule({
  declarations: [AddcourseComponent, ListcourseComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
