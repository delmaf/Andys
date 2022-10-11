import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppComponent } from '../app.component';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.css']
})
export class MenuContentComponent implements OnInit,OnChanges,OnDestroy {

  @Input() contentData?: AppComponent;
  @ViewChild('modal', { read: ViewContainerRef })

  entry!: ViewContainerRef;
  sub!: Subscription;
  public menuData:any;

  constructor(
    public router: Router,
    private modalService: ModalService
    ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.contentData != null && this.contentData !== undefined) this.menuData = this.contentData;
    // console.log(this.data)
  }

  ngOnInit(): void {

  }

  openModal(title, item) {

    this.sub = this.modalService
      .openModal(this.entry, item)
      .subscribe((v) => {
        // console.log(v)
      });
      this.navigate( title, item.name);
      console.log(this.sub)
  }

  navigate(title, name?) {
    if(name) {
      // console.log( 'title', title, 'name', name)
      this.router.navigate(['/'], { queryParams: { menu: title, item: name } })
      // this.router.navigate(['/menu'], { fragment: title + '=' + name });
      return;
    }
    this.router.navigate(['/'], { queryParams: { menu: title } })
    // this.router.navigate(['/menu'], { fragment: title })
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

}
