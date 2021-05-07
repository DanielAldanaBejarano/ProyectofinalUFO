import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

/* Módulos importados */

import { BlogComponent } from './components/blog/blog.component'
import { CartComponent } from './components/cart/cart.component'
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { Page404Component } from './components/page404/page404.component'
import { ProfileComponent } from './components/profile/profile.component'
import { StoreComponent } from './components/store/store.component'
import { AboutComponent } from './components/about/about.component'
import { ContactComponent } from './components/contact/contact.component'
import { UfoComponent } from './components/ufo/ufo.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'blog', component: BlogComponent},
  { path: 'cart', component: CartComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'page404', component: Page404Component},
  { path: 'profile', component: ProfileComponent},
  { path: 'store', component: StoreComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'ufo', component: UfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
