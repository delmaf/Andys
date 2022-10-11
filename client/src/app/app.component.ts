import { Component,  OnDestroy,  OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppService } from './app.component.service';
import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  // @ViewChild('modal', { read: ViewContainerRef })
  // entry!: ViewContainerRef;
  // sub!: Subscription;

  constructor(
    public appService: AppService,
    private route: ActivatedRoute,
    public router: Router,
    private modalService: ModalService,
    
  ){
    // this.getContent();
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.selectedTitle = params.menu;
      this.selectedProduct = params.item;
      if( this.selectedTitle && this.selectedProduct){
        // this.sub = this.modalService
        // .openModal(this.entry, this.selectedProduct)
        // .subscribe((v) => {
        //   console.log(v)
        // });
        // // this.router.navigate(['/'], { queryParams: { menu: this.selectedTitle, item: this.selectedProduct } });
        // this.navigate( this.selectedTitle, this.selectedProduct);
        return;
      } else if (this.selectedTitle) {
        this.appService.getMenu(this.selectedTitle).then(data => {
          this.content = data;
        }) 
      } 
      else {
        this.appService.getMenu().then(data => {
          this.content = data;
        })
      }
    });
   }


  activatedRoute: any;
  activeParam$: Observable<string>;
  public partnersLogo: Array<any> = new Array<any>();
  public contacts: Array<any> = new Array<any>();
  public navItems: Array<any> = new Array<any>();
  public content: Array<any> = new Array<any>();
  public footerItems: Array<any> = new Array<any>();

  public cornerElem:Array<any>= ['Feedback', 'Contacte', 'Livrare'];

  public selectedContact:any;
  selectedTitle: string;
  selectedProduct: string;

  slider = [
    { img: 'https://andys.md/public/sliders/thumbs/version_2560x916x1/4ed9717f2c50c550e7343c46eb66c6cd.jpg' },
    { img: 'https://andys.md/public/sliders/thumbs/version_2560x916x1/b548bb1cf65174c186f2344e55c9125a.jpg' },
    { img: 'https://andys.md/public/sliders/thumbs/version_2560x916x1/d5fd217c8d50bbfc8412929f45fc8d5a.jpg' },
  ]

  ngOnInit(): void {

    this.getHeaderItems();
    this.getFooterItems();

  }

  getHeaderItems() {

    this.appService.getPartners().then(data => {
      this.partnersLogo = data;
    })

    this.appService.getLocations().then(data => {
      this.contacts = data;
      this.selectedContact = this.contacts[0];
    })

    this.appService.getNavItems().then(data => {
      this.navItems = data;
    })
  }

  // getContent() {
  //   this.route.queryParams.subscribe(params => {
  //     console.log(params)
  //     this.selectedTitle = params.menu;
  //     this.selectedProduct = params.item;
      
  //     if( this.selectedTitle && this.selectedProduct){
  //       this.sub = this.modalService
  //       .openModal(this.entry, this.selectedProduct)
  //       .subscribe((v) => {
  //         console.log(v)
  //       });
  //       // this.router.navigate(['/'], { queryParams: { menu: this.selectedTitle, item: this.selectedProduct } });
  //       // this.selectedProduct = undefined;
  //       this.navigate( this.selectedTitle, this.selectedProduct);
  //       return;
  //     } else if (this.selectedTitle) {
  //       console.log('if statement')
  //       this.appService.getMenu(this.selectedTitle).then(data => {
  //         this.content = data;
  //         // this.selectedTitle = undefined;
  //       }) 
  //     } 
  //     else {
  //       this.appService.getMenu().then(data => {
  //         this.content = data;
  //       })
  //     }
  //   });
  // }

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

  getFooterItems() {
    this.appService.getFooterItems().then(data => {
      this.footerItems = data;
    })
  }

  setContact(idx) {
    this.selectedContact = this.contacts[idx]
    console.log(idx)
  }

  ngOnDestroy(): void {
    // if (this.sub) this.sub.unsubscribe();
  }

}
