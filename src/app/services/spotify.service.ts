import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class SpotifyService {
    constructor(private http: HttpClient) {}

    getHeaders() {
        return new HttpHeaders({
            Authorization:
                "Bearer BQDXKdVhE5330aU-q3NHR43mbdK1HROpcGPVmXfPRfK_H9FbpHWP5u4_H5LW87By7izGrUB2goZU0mQTHEg"
        });
    }

    getNewRelease() {
        return this.http.get("https://api.spotify.com/v1/browse/new-releases", {
            headers: this.getHeaders()
        });
    }
}
