import { TopMenu } from 'src/app/shared';
import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(private router:Router,private service: HomeService) { 
  }
  topMenus$!:Observable<TopMenu[]>;
  title = 'pinduoduo';
  username=''
  
  imageSliders:ImageSlider[]=[]
  channels:Channel[]=[]
  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home',topMenu.link])
  }
  ngOnInit() {
    this.topMenus$=this.service.getTabs()
  }

}
