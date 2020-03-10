import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

//components
import { SearchComponent } from "./views/search/search.component";
import { SingerComponent } from "./views/singer/singer.component";
import { HomeComponent } from "./views/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        SingerComponent,
        HomeComponent,
        NavbarComponent
    ],
    imports: [HttpClientModule, BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
