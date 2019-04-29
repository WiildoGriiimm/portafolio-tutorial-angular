import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPag } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagService {

  info: infoPag = {};
  cargada = false;

  equipo: any[] = [];
  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();
   }
   private cargarInfo() {

     // console.log('servico en pag listo');

     this.http.get('assets/data/data-pagina.json')
     .subscribe( (resp: infoPag) => {
      
      this.cargada = true;
      this.info = resp;

     });
   }

   private cargarEquipo(){

    this.http.get('https://angular-html-e8142.firebaseio.com/equipo.json')
    .subscribe( (resp: any) => {

        this.equipo = resp;
        console.log(resp);

      });

   }
}
