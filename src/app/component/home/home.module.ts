
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home.routing';
import { AppCommonModule } from '../../app.common.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppCommonModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
