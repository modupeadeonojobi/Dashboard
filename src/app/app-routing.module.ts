import { UserDetailsComponent } from './user-details/user-details.component';
import { FemaleComponent } from './female/female.component';
import { MaleComponent } from './male/male.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'male', component: MaleComponent },
      { path: 'female', component: FemaleComponent },
      { path: 'more', component: UserDetailsComponent }

    ]
  },
  // {
  //   path: 'home', component: HomeComponent,
  //   children: [
  //     {
  //       path: 'male',
  //       component: MaleComponent, // another child route component that the router renders
  //     },
  //     {
  //       path: 'female', 
  //       component: FemaleComponent
  //     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
