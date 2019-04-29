import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPag } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagService {

  info: infoPag = {};
  cargada = false;

  constructor( private http: HttpClient ) {

    // console.log('servico en pag listo');

    this.http.get('assets/data/data-pagina.json')
       .subscribe( (resp: infoPag) => {
        
        this.cargada = true;
        this.info = resp;

        console.log( resp );
       });


   }
}
