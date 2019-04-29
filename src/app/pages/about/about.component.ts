import { Component, OnInit } from '@angular/core';
import { InfoPagService } from 'src/app/services/info-pag.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public _infoService: InfoPagService) { }

  ngOnInit() {
  }

}
