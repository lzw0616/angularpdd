import { HomeGrandComponent } from './components/home-grand/home-grand.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from './components';
import { HomeService } from './services';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';


@NgModule({
  declarations: [HomeContainerComponent,HomeDetailComponent,HomeGrandComponent, ParentComponent, ChildComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,

  ],
  providers:[HomeService]
})
export class HomeModule { }
