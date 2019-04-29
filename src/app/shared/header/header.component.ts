import { Component, OnInit } from '@angular/core';
import { InfoPagService } from 'src/app/services/info-pag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _servicio: InfoPagService ) { }

  ngOnInit() {
  }

}
