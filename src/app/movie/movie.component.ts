import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from '../service/services/movies.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  // movies:Array<any>=[
  //   {name:"Endgame ",rating:9.5},
  //   {name:"Deadpool",rating:8},
  //   {name: "Jack Reacher",rating:8.5}
  // ]

  posts:Array<any>;
  constructor(private postS:MoviesService,private route:Router){
    this.posts=postS.postList;
  }
  //constructor(private route : ActivatedRoute){
 
  //}
  
  ngOnInit() {
    // this.route.queryParamMap.subscribe(value=>{ //paramMap is a by-default observable.
    //   // let id=value.get('id');
    //   // const title=value.get('title');
    //   // console.log(id);
    //   // console.log(title);
    //   // console.log(value);
    //   console.log(value);
    //   const page=value.get('page');
    //   console.log(page);
      
    // })
    const obsTest$=new Observable(observer =>{
      observer.next('Returns from Observable');
      observer.next('2nd return from observable');
})}
  onSubmit(){
    this.route.navigate(['/post'], {queryParams : {page :1, order:'newest'}})
  }

}
// export class ArrayComponent{
//   list:any;
//   constructor(private movies:MoviesService,private router:Router){
//     this.list=movies.array;
//   }
// }
movies:Array<any>;


