import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Computer } from 'src/app/Models/Computer';
import { ComputerserviceService } from 'src/app/Services/computerservice.service';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {

  addComputerRequest: Computer = {
    id: '',
    marca: '',
    modeloPlaca: '',
    memoriaRAM: 0,
    discoRigido: 0,
    processador: '',
    velocidadeProce: 0,
  };
  constructor(private computerService: ComputerserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  addComputer() {
    this.computerService.addComputer(this.addComputerRequest).subscribe({
      next: (computer) => {
        this.router.navigate(['computers'])
      }
    });
  }
}
