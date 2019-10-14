import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-img-modal',
  templateUrl: './img-modal.component.html',
  styleUrls: ['./img-modal.component.css']
})
export class ImgModalComponent implements OnInit {

  @Input() title: string;
  @Input() imgUrl: string;
  @Output() close = new EventEmitter<void>();

  onClose(){
    this.close.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
