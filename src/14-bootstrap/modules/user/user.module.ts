import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeGuard } from 'src/14-bootstrap/welcome.guard';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AllbooksComponent } from './components/allbooks/allbooks.component';
import { SubsbookComponent } from './components/subsbook/subsbook.component';
import { FormsModule } from '@angular/forms';
import { ViewsubsbooksComponent } from './components/viewsubsbooks/viewsubsbooks.component';
import { ReadbookComponent } from './components/readbook/readbook.component';
import { SearchbooksComponent } from './components/searchbooks/searchbooks.component';
import { CreatebookComponent } from './components/createbook/createbook.component';
import { UpdatebookComponent } from './components/updatebook/updatebook.component';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes:Routes = [
  {path: "login", component: LoginComponent },
  {path: "welcome", component: WelcomeComponent, canActivate: [WelcomeGuard] },
  //{path: "welcome", component: WelcomeComponent},
  {path: "allbooks", component: AllbooksComponent},
  {path: "subscribe", component: SubsbookComponent},
  {path: "viewallsubsbooks", component: ViewsubsbooksComponent},
  {path: "readbook", component: ReadbookComponent},
  {path: "searchbooks", component: SearchbooksComponent},
  {path: "createbook", component: CreatebookComponent},
  {path: "updatebook", component: UpdatebookComponent},
  {path: "signup", component: SignUpComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
    AllbooksComponent,
    SubsbookComponent,
    ViewsubsbooksComponent,
    ReadbookComponent,
    SearchbooksComponent,
    CreatebookComponent,
    UpdatebookComponent,
    AlertModalComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class UserModule { }
