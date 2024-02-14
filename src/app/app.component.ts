import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm,FormControl, NgModel, FormGroup } from '@angular/forms';
import { LoginComponent } from './template_driven/login.component';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    const obsTest$=new Observable(observer =>{
      observer.next('returned from observable');
      observer.next('2nd return from observable');
      observer.next('3rd return from observable');

      setTimeout( ()=>{
        observer.next('This is from timeout function');

      },2000);

        observer.next('4th return from observable');
      
    }).subscribe(value=>{
      console.log(value);
    });
    const obsTest = function(){
      // console.log("Printed from Function");
      return 'Return from 1st function';
      return 'Return from 2nd function';
    }
    obsTest();
   
  }
  
  // OnSubmit(f:NgForm){
  //   console.log(f);
  // }

  // getValue(str:NgModel){
  //   console.log(str);
    
  // }

//Reactive Angular forms:

 
  

 
  // title = 'fifthapp';
 
  // varCtoP: string = "";
  // varOutputChildtoParent: string = "";
  // @ViewChild(LoginComponent) childobj:any;
 
  // ngAfterViewInit(){
  //   console.log(this.childobj);
  //   this.varCtoP = this.childobj.varcp;
  // }
 
  // recieveMessage($event:any){
  //   this.varCtoP = $event;
  // }
 
}
 