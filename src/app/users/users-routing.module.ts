import { NgModule } from "@angular/core/src/metadata";
import { RouterModule } from "@angular/router/src";
import { UsersComponent } from "./users.component";

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: UsersComponent }
  ])],
  exports: [RouterModule]
})
export class UsersRoutingModule { }