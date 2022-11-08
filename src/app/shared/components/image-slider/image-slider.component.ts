import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
export interface ImageSlider {
  id:number,
  imgUrl:string,
  link:string,
  caption:string
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements  OnInit {
  @Input() sliders:ImageSlider[] = [];
  @Input() sliderlHeight = '160px'
  @Input() intervalBySeconds = 2
  selectedIndex=0
  //感叹号是非null和非undefined的类型断言
  intervalId!: number;
  @ViewChild('imageSlider', { static: true })
  imageSlider!: ElementRef;
  @ViewChildren('img')
  imgs!: QueryList<ElementRef>;

  constructor(private rd2:Renderer2) { }

  ngOnInit() {
    // this.imageSlider.nativeElement.innerHTML
  }
  ngAfterViewInit() {
    let i=0;
    this.intervalId=window.setInterval(()=>{
      this.rd2.setProperty(
        this.imageSlider.nativeElement,
        'scrollLeft',
        ((this.getIndex(++this.selectedIndex) % this.sliders.length)* this.imageSlider.nativeElement.scrollWidth)
        / this.sliders.length
      )
    }, this.intervalBySeconds*1000)
  }
  ngOnDestory():void {
    clearInterval(this.intervalId)
  }
  getIndex(idx: number): number {
    return idx>=0?
    idx %this.sliders.length:
    this.sliders.length-(Math.abs(idx)%this.sliders.length)
  }
  handleScroll(ev:Event){
    const radio=((<HTMLDivElement>ev.target).scrollLeft * 
    this.sliders.length)/(<HTMLDivElement>ev.target).scrollWidth
    this.selectedIndex=Math.round(radio)
  }
}
