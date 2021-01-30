import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './container/default-layout/default-layout.component';
import { AdminModule } from './modules/admin/admin.module';
import { AuthDefaultLayoutComponent } from './container/auth-default-layout/auth-default-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    AuthDefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
