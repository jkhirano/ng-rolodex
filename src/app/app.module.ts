import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app/app.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { CreateComponent } from "./pages/create/create.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NotFoundComponent } from "./pages/notFound/notFound.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    CreateComponent,
    ProfileComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
