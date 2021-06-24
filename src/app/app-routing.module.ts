import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { ViewCompanyComponent } from './components/view-company/view-company.component';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: 'view', component: ViewCompanyComponent },
  { path: 'add', component: AddCompanyComponent },
  { path: 'edit', component: EditCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
