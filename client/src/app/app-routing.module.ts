import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './main-content/welcome/welcome.component';
import { PrintersComponent } from './main-content/printers/printers.component';
import { ProjectsComponent } from './main-content/products/products.component';
import { ErrorComponent } from './main-content/error/error.component';
import { AboutComponent } from './main-content/about/about.component';
import { SuggestionsComponent } from './main-content/suggestions/suggestions.component';
import { SignInComponent } from './main-content/sign-in/sign-in.component';
import { UserInformationComponent } from './main-content/user-information/user-information.component';
import { PrinterDetailComponent } from './main-content/printers/printer-detail/printer-detail.component';
import { ProductDetailComponent } from './main-content/products/product-detail/product-detail.component';
import { canActivateFn } from './Guards/user.guard';
import { ForumsComponent } from './main-content/forums/forums.component';
import { formDeactivateGuard } from './Guards/form-deactivate.guard';
import { SharePrintsComponent } from './main-content/products/share-prints/share-prints.component';
import { PrintTokComponent } from './main-content/products/print-tok/print-tok.component';
import { GeneralTalkComponent } from './main-content/forums/general-talk/general-talk.component';
import { PrinterReviewsComponent } from './main-content/forums/printer-reviews/printer-reviews.component';
import { PrinterIssuesComponent } from './main-content/forums/printer-issues/printer-issues.component';
import { SignUpComponent } from './main-content/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'printers', component: PrintersComponent },
  { path: 'printers', children: [
    {path: ':printer_id', component: PrinterDetailComponent}
  ]},
  { path: 'products', component: ProjectsComponent },
  { path: 'products', children:[
    {path: 'share', component: SharePrintsComponent},
    {path: 'print-tok', component: PrintTokComponent},
    {path: 'details/:product_id', component: ProductDetailComponent}
  ]},
  { path: 'about', component: AboutComponent },
  { path: 'suggestions', component: SuggestionsComponent , canDeactivate: [formDeactivateGuard]},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user-information', component: UserInformationComponent, canActivate: [canActivateFn]},
  { path: 'forums', component: ForumsComponent},
  { path: 'forums', children:[
    {path: 'general', component: GeneralTalkComponent},
    {path: 'printer-reviews', component: PrinterReviewsComponent},
    {path: 'issues', component: PrinterIssuesComponent}
  ]},
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
