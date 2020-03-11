import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
    selector: "app-singer",
    templateUrl: "./singer.component.html",
    styles: []
})
export class SingerComponent implements OnInit {
    singer: any = {};
    loading: boolean;
    topTracks: any[] = [];
    constructor(
        private router: ActivatedRoute,
        private spotify: SpotifyService
    ) {
        this.loading = true;
        this.router.params.subscribe(params => {
            this.getArtist(params["id"]);
            this.getTopTracks(params["id"]);
        });
    }

    ngOnInit(): void {}

    getArtist(id: string) {
        this.loading = true;
        this.spotify.getSinger(id).subscribe(singer => {
            this.singer = singer;
            this.loading = false;
        });
    }

    getTopTracks(id: string) {
        this.spotify.getTopTracks(id).subscribe(tracks => {
            console.info(tracks);
            this.topTracks = tracks;
        });
    }
}
