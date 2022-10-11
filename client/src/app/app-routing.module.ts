import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'menu', component: AppComponent, pathMatch: 'full' },
  {path: 'menu:title', component: AppComponent },
  {path: 'index', component: AppComponent, pathMatch: 'full' },
  // {path: 'menu/:title', component: AppComponent, pathMatch: 'full' },
  {path: '**', redirectTo: 'index', pathMatch: 'full'},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
    // {path: 'index', component: IndexPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
