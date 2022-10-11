import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  ElementRef,
} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  
})
export class ModalComponent implements OnInit, OnDestroy {
  constructor(private _eref: ElementRef,
    private _location: Location) {
    document.addEventListener('click', this.offClickHandler.bind(this));
  }
  @Input() body: any;
  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();

  ngOnInit(): void {
    console.log('Modal init',this.body);
  }

  offClickHandler(event:any) {
    if (event.target.contains(this._eref.nativeElement)) {
      this.closeMe();
    }
  }

  closeMe() {
    this.closeMeEvent.emit();
    this._location.back();
  }
  confirm() {
    this.confirmEvent.emit();
  }
  ngOnDestroy(): void {
    console.log('Modal destroyed');
  }

}
