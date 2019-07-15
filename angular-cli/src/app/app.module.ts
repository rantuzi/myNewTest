import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  // 声明
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule // 本模块组件模板中需要由其他导出类的模块
  ],
  providers: [], // 服务的创建者
  bootstrap: [AppComponent], // 应用的主视图，根组件
  exports: [AppComponent]  // 声明declaration的子集
})
export class AppModule { }
