import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateMatumiziComponent } from './create-matumizi/create-matumizi.component';
import { MatumiziComponent } from './matumizi/matumizi.component';
//when declaring routes,there are two compulsory object fields:path  and component 
//The path is the url that points to a component
//To declare routes you create objects within the routes array
const routes: Routes = [
  {
    path: "matumizi",
    component: MatumiziComponent
  },
  {
    path: "matumizi/create",
    component: CreateMatumiziComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
