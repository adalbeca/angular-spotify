import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styles: []
})
export class HomeComponent implements OnInit {
    newSongs: any[] = [];
    constructor(private spotify: SpotifyService) {
        this.spotify.getNewRelease().subscribe((data: any) => {
            console.log(data.albums);
            this.newSongs = data.albums.items;
        });
    }

    ngOnInit(): void {}
}
