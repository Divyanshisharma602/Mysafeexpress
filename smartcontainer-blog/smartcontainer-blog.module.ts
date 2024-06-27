import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartcontainerBlogRoutingModule } from './smartcontainer-blog-routing.module';
import { SmartcontainerBlogComponent } from './smartcontainer-blog.component';
import { FooterModule } from '../../footer/footer.module';
import { HeaderModule } from '../../header/header.module';

@NgModule({
  declarations: [
    SmartcontainerBlogComponent
  ],
  imports: [
    CommonModule,
    SmartcontainerBlogRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class SmartcontainerBlogModule { }
