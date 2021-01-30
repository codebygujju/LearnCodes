import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentcreatorRoutingModule } from './contentcreator-routing.module';
import { CreatepostComponent } from './createpost/createpost.component';
import { ListcontentComponent } from './listcontent/listcontent.component';


@NgModule({
  declarations: [CreatepostComponent, ListcontentComponent],
  imports: [
    CommonModule,
    ContentcreatorRoutingModule
  ]
})
export class ContentcreatorModule { }
