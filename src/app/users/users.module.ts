import { NgModule } from "@angular/core/src/metadata";
import { UsersComponent } from "./users.component";
import { UsersRoutingModule } from "./users-routing.module";
import { CommonModule } from "@angular/common/src/common";

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule { }