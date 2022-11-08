import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit{
    @Input() appGridItemImage = '2rem'
    @Input() fitModel='cover'
    constructor(private elr: ElementRef, private rd2: Renderer2) {
        
    }
    ngOnInit():void {
        this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image')
        this.rd2.setStyle(this.elr.nativeElement, 'width', this.appGridItemImage)
        this.rd2.setStyle(this.elr.nativeElement, 'height', this.appGridItemImage)
        this.rd2.setStyle(this.elr.nativeElement, 'object-fit', this.fitModel)
    }
    @HostListener('click',['$event.target'])
    handleClick(ev:HTMLImageElement) {
        console.log(ev);
        
    }
}