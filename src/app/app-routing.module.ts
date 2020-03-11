import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//components
import { HomeComponent } from "./views/home/home.component";
import { SearchComponent } from "./views/search/search.component";
import { SingerComponent } from "./views/singer/singer.component";
import { ArtistComponent } from "./components/artist/artist.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "search", component: SearchComponent },
    { path: "singer/:id", component: SingerComponent },
    { path: "artist/:id", component: ArtistComponent },
    { path: "", pathMatch: "full", component: HomeComponent },
    { path: "**", pathMatch: "full", component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
