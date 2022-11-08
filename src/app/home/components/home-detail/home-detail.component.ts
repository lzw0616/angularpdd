import { HomeService } from './../../services/home.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel, ImageSlider } from 'src/app/shared';
import { filter, map, Observable, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private service: HomeService,private cd:ChangeDetectorRef) { }
  // selectedTabLink!: string | null;
  selectedTabLink$!: Observable<string | null>;
  imageSliders$!: Observable<ImageSlider[]>;
  channels$!:Observable<Channel[]>;
  sub!:Subscription
  ngOnInit() {
    this.selectedTabLink$=this.route.paramMap
    .pipe(
      filter(params=>params.has('tabLink')),
      map(params=>params.get('tabLink'))
    )
    // .subscribe(tabLink=>{
    //   console.log('路径参数',tabLink)
    //   this.selectedTabLink = tabLink
    //   // this.cd.markForCheck()
    // }) 
    this.sub=this.route.queryParamMap.subscribe(paras=>{
      console.log('查询参数',paras)
    })
    this.imageSliders$=this.service.getBanners()
    // .subscribe(banners=>{
    //   this.imageSliders=banners
    //   this.cd.markForCheck()
    // })
    this.channels$=this.service.getChannels()
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe()
  }
}
