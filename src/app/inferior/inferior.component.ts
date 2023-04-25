import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperiorComponent } from '../superior/superior.component';

@Component({
  selector: 'app-inferior',
  templateUrl: './inferior.component.html',
  styleUrls: ['./inferior.component.scss']
})
export class InferiorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() Titulo="";

}
