import {Route} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {ProjectsComponent} from "../projects/projects.component";
import {AboutComponent} from "../about/about.component";
import {ContractUsComponent} from "../contract-us/contract-us.component";

export const home: Route = {
  path: 'home', component: HomeComponent,
}

export const logo: Route = {
  path: '', pathMatch: 'full', redirectTo: 'home',
}

export const projects: Route = {
  path:'projects', component: ProjectsComponent,
}

export const about: Route = {
  path:'about', component: AboutComponent,
}

export const contractus: Route = {
  path:'contractus', component: ContractUsComponent,
}





