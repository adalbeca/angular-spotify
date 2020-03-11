import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styles: []
})
export class HomeComponent implements OnInit {
    singers: any[] = [];
    loading: boolean;
    error: boolean = false;
    msgError: string = "";
    constructor(private spotify: SpotifyService) {
        this.loading = true;
        this.spotify.getNewRelease().subscribe(
            (data: any) => {
                this.singers = data;
                this.loading = false;
            },
            err => {
                this.loading = false;
                this.error = true;
                this.msgError = err.error.error.message;
            }
        );
    }

    ngOnInit(): void {}
}
