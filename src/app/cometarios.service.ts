import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { Cometario } from './cometario';

@Injectable({
  providedIn: 'root'
})
export class CometariosService {

   
   constructor(private http : HttpClient) {  }

   cadastrarCometario(cometario:any):Observable<any>{
   console.log("Comentário antes da quisição", cometario);
    return this.http.post("https://60c6128c19aa1e001769ebe4.mockapi.io/comentarios",cometario);

   }

    listarCometarios() : Observable<any>{

       return this.http.get("https://60c6128c19aa1e001769ebe4.mockapi.io/comentarios");


    }
}

