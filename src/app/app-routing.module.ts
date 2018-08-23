import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path: 'home', component: HomeComponent},
{path: 'a_propos', component: AProposComponent},
{path: 'cv', component: CvComponent},
{path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
