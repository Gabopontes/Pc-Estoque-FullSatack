import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComputerComponent } from './Components/Computers/add-computer/add-computer.component';
import { ComputersComponent } from './Components/Computers/computers/computers.component'
import { EditComputerComponent } from './Components/Computers/edit-computer/edit-computer.component';

const routes: Routes = [
  {
    path: '',
    component: ComputersComponent
  },
  {
    path: 'computers',
    component: ComputersComponent
  },
  {
    path: 'computers/add',
    component: AddComputerComponent
  },
  {
    path: 'computers/edit/:id',
    component: EditComputerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
