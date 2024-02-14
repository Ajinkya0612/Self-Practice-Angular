import { Component } from '@angular/core';
 
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  employees:Array<any>=[
      {name:"A",salary:50000.554},
      {name:"B",salary:55000.555},
      {name:"C",salary:80000.555}
    ]
}
 