import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: '',
    // redirectTo: 'login',
    redirectTo: 'adminpage',

    pathMatch: 'full'
  },
  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule),canActivate:[AdminGuard]
  },
  {
    path: 'total-transactions',
    loadChildren: () => import('./total-transactions/total-transactions.module').then( m => m.TotalTransactionsPageModule)
    ,canActivate:[AdminGuard]
  },
  {
    path: 'team-transactions',
    loadChildren: () => import('./team-transactions/team-transactions.module').then( m => m.TeamTransactionsPageModule),
    canActivate:[AdminGuard]
  },
  {
    path: 'adminpage',
    loadChildren: () => import('./adminpage/adminpage.module').then( m => m.AdminpagePageModule),canActivate:[AdminGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
