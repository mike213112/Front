import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from "./components/user/read/read.component";
import {CreateComponent} from "./components/user/create/create.component";
import {UpdateComponent} from "./components/user/update/update.component";
import {DeleteComponent} from "./components/user/delete/delete.component";

const routes: Routes = [
  {
    path: 'home',
    component: ReadComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
