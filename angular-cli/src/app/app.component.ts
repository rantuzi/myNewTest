import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 告诉angular在父级HTML中寻找app-root标签，创建组件，并插入进此标签
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cli';
}
