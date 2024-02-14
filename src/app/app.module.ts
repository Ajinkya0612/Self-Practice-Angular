import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import { PracticeComponent } from './practice/practice.component';
import { ReactiveComponent } from './reactive/reactive.component';
//import { RouterComponent } from './router/router.component';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MovieComponent } from './movie/movie.component';
 
@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    //PracticeComponent,
    ReactiveComponent,
    //RouterComponent,
    TestComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot([{path:"post1",component:TestComponent},{path:"post2",component:TestComponent}])
    RouterModule.forRoot([{path:"post",component:TestComponent},
  ])
  ],
  providers: [MovieComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
 