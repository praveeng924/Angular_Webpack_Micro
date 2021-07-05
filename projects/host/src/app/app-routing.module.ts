import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'',component:HomeComponent,pathMatch:'full'},{
  path: 'mfe1',
  loadChildren: () =>
    import('mfe1/MfefeatureModule').then((m) => {
      return m.MfefeatureModule;
    }).catch((err)=>{console.log(err.message);}),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
