import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'read/:index',
    loadChildren: () => import('./read/read.module').then( m => m.ReadPageModule)
  },
  {
    path: 'create1',
    loadChildren: () => import('./create1/create1.module').then( m => m.Create1PageModule)
  },
  {
    path: 'create2',
    loadChildren: () => import('./create2/create2.module').then( m => m.Create2PageModule)
  },
  {
    path: 'create3',
    loadChildren: () => import('./create3/create3.module').then( m => m.Create3PageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
