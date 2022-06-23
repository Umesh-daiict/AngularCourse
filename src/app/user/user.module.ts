import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { userRoute } from './user.routes';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoute)],
  declarations: [ProfileComponent],
  providers: [],
})
export class UserModule {}
