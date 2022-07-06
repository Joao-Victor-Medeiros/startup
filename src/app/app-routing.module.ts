import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {about, home, logo, projects} from "./navbar/navbar.route";
import {ServicesComponent} from "./services/services.component";
import {DesignComponent} from "./services/design/design.component";
import {CodingComponent} from "./services/coding/coding.component";
import {DeployComponent} from "./services/deploy/deploy.component";


const routes: Routes = [ home, logo, projects, about,
  {path: 'services', component: ServicesComponent,
  children: [
    {path: 'design', component: DesignComponent},
    {path: 'coding', component: CodingComponent},
    {path: 'deploy', component: DeployComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
