import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputersComponent } from './Components/Computers/computers/computers.component';
import { AddComputerComponent } from './Components/Computers/add-computer/add-computer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComputerComponent } from './Components/Computers/edit-computer/edit-computer.component';
import { SearchfilterPipe } from './searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComputersComponent,
    AddComputerComponent,
    EditComputerComponent,
    SearchfilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
