import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ScorePageComponent } from './score-page/score-page.component';


const routes: Routes = [
  {
    path:"login",
    component: LoginPageComponent
  },
  {
    path:"game",
    component: GamePageComponent
  },  
  {
    path:"score",
    component: ScorePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
