import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() footerData?: AppComponent; 
  public fData:any;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.footerData != null && this.footerData !== undefined) this.fData = this.footerData;

    // console.log(this.footerData)
    // console.log(this.data)
  }

}
