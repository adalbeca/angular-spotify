import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styles: []
})
export class SearchComponent implements OnInit {
    loading: boolean;
    constructor(private spotify: SpotifyService) {}

    singers: any[] = [];
    ngOnInit(): void {}

    searchSinger(term: string) {
        this.loading = true;
        this.spotify.getArtists(term).subscribe((data: any) => {
            this.singers = data;
            if (!data) this.loading = false;
            this.loading = false;
        });
    }
}
