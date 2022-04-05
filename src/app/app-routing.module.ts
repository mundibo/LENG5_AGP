import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reestablecer',
    loadChildren: () => import('./reestablecer/reestablecer.module').then( m => m.ReestablecerPageModule)
  },
  {
    path: 'registrarusuario',
    loadChildren: () => import('./registrarusuario/registrarusuario.module').then( m => m.RegistrarusuarioPageModule)
  },
  {
    path: 'registrarcolaborador',
    loadChildren: () => import('./registrarcolaborador/registrarcolaborador.module').then( m => m.RegistrarcolaboradorPageModule)
  },
  {
    path: 'registrarreunion',
    loadChildren: () => import('./registrarreunion/registrarreunion.module').then( m => m.RegistrarreunionPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'reconocimiento',
    loadChildren: () => import('./reconocimiento/reconocimiento.module').then( m => m.ReconocimientoPageModule)
  },
  {
    path: 'colaboradores',
    loadChildren: () => import('./colaboradores/colaboradores.module').then( m => m.ColaboradoresPageModule)
  },
  {
    path: 'valores',
    loadChildren: () => import('./valores/valores.module').then( m => m.ValoresPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
