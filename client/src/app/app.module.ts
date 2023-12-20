import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrintersComponent } from './main-content/printers/printers.component';
import { WelcomeComponent } from './main-content/welcome/welcome.component';
import { AboutComponent } from './main-content/about/about.component';
import { ProjectsComponent } from './main-content/products/products.component';
import { ErrorComponent } from './main-content/error/error.component';
import { SuggestionsComponent } from './main-content/suggestions/suggestions.component';
import { SliderComponent } from './main-content/slider/slider.component';
import { SignInComponent } from './main-content/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInformationComponent } from './main-content/user-information/user-information.component';
import { PrinterDetailComponent } from './main-content/printers/printer-detail/printer-detail.component';
import { ProductDetailComponent } from './main-content/products/product-detail/product-detail.component';
import { ForumsComponent } from './main-content/forums/forums.component';
import { PrintTokComponent } from './main-content/products/print-tok/print-tok.component';
import { SharePrintsComponent } from './main-content/products/share-prints/share-prints.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './main-content/sign-up/sign-up.component';
import { GeneralTalkComponent } from './main-content/forums/general-talk/general-talk.component';
import { PrinterReviewsComponent } from './main-content/forums/printer-reviews/printer-reviews.component';
import { PrinterIssuesComponent } from './main-content/forums/printer-issues/printer-issues.component';
import { ForumTemplateComponent } from './main-content/forums/forum-template/forum-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrintersComponent,
    WelcomeComponent,
    AboutComponent,
    ProjectsComponent,
    ErrorComponent,
    SuggestionsComponent,
    SliderComponent,
    SignInComponent,
    UserInformationComponent,
    PrinterDetailComponent,
    ProductDetailComponent,
    ForumsComponent,
    PrintTokComponent,
    SharePrintsComponent,
    SignUpComponent,
    GeneralTalkComponent,
    PrinterReviewsComponent,
    PrinterIssuesComponent,
    ForumTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule//important to allow formGroup directive to be used
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
