import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  RepairsPageComponent
} from "./components/pages/repairs-page/repairs-page.component";
import {RouterModule, Routes} from "@angular/router";
import {
  StartPageComponent
} from "./components/pages/start-page/start-page.component";
import {
  NotFoundPageComponent
} from "./components/pages/not-found-page/not-found-page.component";

const routes: Routes = [
  {path: 'start', component: StartPageComponent},
  {path: 'repairs', component: RepairsPageComponent},
  {path: '', component: StartPageComponent},
  {path: `**`, component: NotFoundPageComponent},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
