import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Computer } from '../Models/Computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerserviceService {


  baseApiUrl: string = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  getAllComputers(): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.baseApiUrl + "/api/computers");
  }
  addComputer(addComputerRequest: Computer): Observable<Computer> {
    addComputerRequest.id = "00000000-0000-0000-0000-000000000000";
    return this.http.post<Computer>(this.baseApiUrl + "/api/computers", addComputerRequest);
  }
  getComputer(id: string): Observable<Computer> {
    return this.http.get<Computer>(this.baseApiUrl + "/api/computers/" + id);
  }
  updateComputer(id: string, updateComputerRequet: Computer): Observable<Computer> {
    return this.http.put<Computer>(this.baseApiUrl + "/api/computers/" + id, updateComputerRequet);
  }
  deleteComputer(id: string): Observable<Computer> {
    return this.http.delete<Computer>(this.baseApiUrl + "/api/computers/" + id);
  }

}





