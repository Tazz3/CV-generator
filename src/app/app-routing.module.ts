import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ExpperienceComponent } from './expperience/expperience.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {
    path: 'resume',
    component: ResumeComponent,
    children: [
      { path: 'personal-info', component: PersonalInfoComponent },
      { path: 'experience', component: ExpperienceComponent },
      { path: 'education', component: EducationComponent },
    ],
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
