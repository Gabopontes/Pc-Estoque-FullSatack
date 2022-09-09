import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Computer } from 'src/app/Models/Computer';
import { ComputerserviceService } from 'src/app/Services/computerservice.service';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {

  computerDetails: Computer = {
    id: '',
    marca: '',
    modeloPlaca: '',
    memoriaRAM: 0,
    discoRigido: 0,
    processador: '',
    velocidadeProce: 0,
  }

  constructor(private route: ActivatedRoute, private computerService: ComputerserviceService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.computerService.getComputer(id)
            .subscribe({
              next: (response) => {
                this.computerDetails = response;
              }
            })
        }
      }
    })
  }

  updateComputer() {
    this.computerService.updateComputer(this.computerDetails.id, this.computerDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['computers']);
        }
      });

  }

  deleteComputer(id: string) {
    this.computerService.deleteComputer(id).subscribe({
      next: (response) => {
        this.router.navigate(['computers']);
      }
    });
  }

}
