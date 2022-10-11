import {
    AfterViewInit,
    Component,
    ContentChildren,
    Directive,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    QueryList,
    TemplateRef,
    ViewChild,
    ViewChildren,
  } from '@angular/core';
  import { CarouselItemDirective } from './carousel-item.directive';
  import {
    animate,
    AnimationBuilder,
    AnimationFactory,
    AnimationPlayer,
    style,
  } from '@angular/animations';
  
  @Directive({
    selector: '.carousel-item',
  })
  export class CarouselItemElement {}
  
  @Component({
    selector: 'carousel',
    exportAs: 'carousel',
    template: `
      <section class="carousel-wrapper" >
        <ul class="carousel-inner" #carousel>
          <li *ngFor="let item of items;" class="carousel-item">
            <ng-container [ngTemplateOutlet]="item.tpl"></ng-container>
          </li>
        </ul>
      </section>

      <div *ngIf="showControls" class="slider_wrap">
      <div class="slider_btn">

      <div (click)="prev()" class="slider_arrow_prev"></div>
      <div (click)="next()" class="slider_arrow_next"></div>
      </div>
      </div>
    `,
    styles: [
      `
      ul {
        list-style: none;
        padding: 0;
        width: 6000px;
      }
  
      .carousel-wrapper {
        overflow: hidden;
      }
  
      .carousel-inner {
        display: flex;
      }

      .slider_wrap{
        width:100%;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-size:40px;z-index:10
      }
    
      .slider_btn{
        display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between
      }
    
      .slider_arrow_prev{
        margin: 0px 50px;width:60px;height:70px;background-position:center;background-repeat:no-repeat;cursor:pointer;background-image:url(../assets/svg/ui_prev_slide.svg.svg)
      }

      .slider_arrow_next{
        margin: 0px 50px;width:60px;height:70px;background-position:center;background-repeat:no-repeat;cursor:pointer;background-image:url(../assets/svg/ui_next_slide.svg.svg)
      }
    
  
    `,
    ],
  })
  export class CarouselComponent implements AfterViewInit,OnDestroy {
    @ContentChildren(CarouselItemDirective)
    items: QueryList<CarouselItemDirective>;
    @ViewChildren(CarouselItemElement, { read: ElementRef })
    private itemsElements: QueryList<ElementRef>;
    @ViewChild('carousel') private carousel: ElementRef;
    @Input() timing = '250ms ease-in';
    @Input() showControls = true;
    private player: AnimationPlayer;
    private itemWidth: number;
    private currentSlide = 1;
    id:any;
    carouselWrapperStyle = {};
  
    next() {

      this.currentSlide = (this.currentSlide + 1) % this.items.length;
      const offset = this.currentSlide * this.itemWidth;
      const myAnimation: AnimationFactory = this.buildAnimation(offset);
      this.player = myAnimation.create(this.carousel.nativeElement);
      this.player.play();
    }

  
    private buildAnimation(offset) {
      return this.builder.build([
        animate(this.timing, style({ transform: `translateX(-${offset}px)` })),
      ]);
    }
  
    prev() {
      // if (this.currentSlide === 0) return;
  
      this.currentSlide =
        (this.currentSlide - 1 + this.items.length) % this.items.length;
      const offset = this.currentSlide * this.itemWidth;
  
      const myAnimation: AnimationFactory = this.buildAnimation(offset);
      this.player = myAnimation.create(this.carousel.nativeElement);
      this.player.play();
    }
  
    constructor(private builder: AnimationBuilder) {}
  
    ngAfterViewInit() {
        this.id = setInterval(() => {
          this.next(); 
        }, 2000);

        this.itemWidth =
          this.itemsElements.first.nativeElement.getBoundingClientRect().width;
        this.carouselWrapperStyle = {
          width: `${this.itemWidth}px`,
        };
    }

    ngOnDestroy(): void {
      if (this.id) {
        clearInterval(this.id);
      }
    }
  }
  