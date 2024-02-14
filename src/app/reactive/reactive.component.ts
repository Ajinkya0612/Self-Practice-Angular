import { Component } from '@angular/core';
import { NgForm,FormControl, NgModel, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  // form:any;
  // constructor(){
  //   this.form=new FormGroup({
  //     fullName:new FormControl('',[Validators.required,Validators.minLength(5)]),
  //     email:new FormControl('',[Validators.required,Validators.minLength(5)]),
  //     feedback : new FormControl('',[Validators.required,Validators.minLength(5)])
  //   });
  // }
  // get fullName(){
  //   return this.form.get("fullName");
  // }
  // get email(){
  //   return this.form.get("email");
  // }
  // get feedback(){
  //   return this.form.get("feedback");
  // }
  arr=['Bob','Alex','Charles','Lewis'];
}
