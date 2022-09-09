import { Pipe, PipeTransform } from '@angular/core';
import { Computer } from './Models/Computer';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Computers: Computer[], searchValue: string): Computer[] {
    if (!Computers || !searchValue) {
      return Computers;
    }
    return Computers.filter(computer =>
      computer.id.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      computer.marca.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      computer.modeloPlaca.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      computer.memoriaRAM.toString().includes(searchValue.toLocaleLowerCase()) ||
      computer.discoRigido.toString().includes(searchValue.toLocaleLowerCase()) ||
      computer.processador.toString().includes(searchValue.toLocaleLowerCase()) ||
      computer.velocidadeProce.toString().includes(searchValue.toLocaleLowerCase())
    );
  }

}
