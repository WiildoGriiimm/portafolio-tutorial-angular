import { Component, OnInit } from '@angular/core';
import { InfoPagService } from 'src/app/services/info-pag.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();

  constructor( public _servicio: InfoPagService) { }

  ngOnInit() {
  }

}
