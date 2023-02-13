import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ExpperienceComponent } from './expperience/expperience.component';
import { EducationComponent } from './education/education.component';
import { ResumeComponent } from './resume/resume.component';
import { RouterLink } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalInfoComponent,
    ExpperienceComponent,
    EducationComponent,
    ResumeComponent,
    CvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
