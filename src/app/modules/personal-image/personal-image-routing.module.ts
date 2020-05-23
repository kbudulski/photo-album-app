import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalImageComponent } from './page/personal-image.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalImageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalImageRoutingModule {}
