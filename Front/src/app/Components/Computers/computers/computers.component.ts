import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/Models/Computer';
import { ComputerserviceService } from 'src/app/Services/computerservice.service';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  computers: Computer[] = [];
  searchValue!: string;
  constructor(private computersServices: ComputerserviceService) { }

  ngOnInit(): void {

    this.computersServices.getAllComputers().subscribe({
      next: (computers) => { this.computers = computers },
      error: (response) => { console.log(response) }
    })

  }

}
