import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './container/default-layout/default-layout.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultLayoutComponent,
    children:[
      {
          path:'',
          loadChildren:() => import('../app/modules/admin/admin.module').then(m=>m.AdminModule)
      }
    ]
  },
  {
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
