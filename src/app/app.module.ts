import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { ContainerAndTemplateComponent } from './pages/container-and-template/container-and-template.component';
import{HttpClientModule} from '@angular/common/http'
const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'user-list',component:UserListComponent},
  {path:'user-create',component:UserCreateComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContainerAndTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
