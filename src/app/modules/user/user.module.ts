import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';


@NgModule({
  declarations: [AdduserComponent, UserlistComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
