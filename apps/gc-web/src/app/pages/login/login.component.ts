import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '../../shared/footer/footer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const routes: Routes = [{path: '', component: LoginComponent}];

@NgModule({
  imports: [
    FooterModule,
    RouterModule.forChild(routes),
    CommonModule],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule {
}
