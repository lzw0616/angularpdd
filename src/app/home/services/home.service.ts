import { environment } from './../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Channel, ImageSlider, TopMenu } from "src/app/shared";

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class HomeService {
  constructor(private http:HttpClient) {

  }
    topMenus:TopMenu[]=[]
    getBanners() {
      return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`)
    }
    getChannels() {
      return this.http.get<Channel[]>(`${environment.baseUrl}/channels`)
    }
    getTabs() {
      return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`)
    }
}