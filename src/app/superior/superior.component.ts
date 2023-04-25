import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-superior',
  templateUrl: './superior.component.html',
  styleUrls: ['./superior.component.scss']
})

export class SuperiorComponent implements OnInit {

  @Output() public tituloValor="Our Latest Projects";

  constructor() { }

  ngOnInit(): void {
  }

}
