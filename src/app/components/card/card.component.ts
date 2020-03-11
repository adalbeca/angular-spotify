import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"]
})
export class CardComponent {
    @Input() artists: any[] = [];

    constructor(private router: Router) {}

    showSinger(singer: any) {
        let artistId;
        if (singer.type === "artist") {
            artistId = singer.id;
        } else {
            artistId = singer.artists[0].id;
        }
        this.router.navigate(["/singer", artistId]);
    }
}
