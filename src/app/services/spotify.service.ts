import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
    providedIn: "root"
})
export class SpotifyService {
    constructor(private http: HttpClient) {}

    getQuery(query: string) {
        const url = `https://api.spotify.com/v1/${query}`;
        const headers = new HttpHeaders({
            Authorization:
                "Bearer BQAvW3eqx5KeHXQptu3Kw_9fi88u0FcAqzLT7Ft5zmEzaDv2IjRXulJoXEuH7QwPFjJh1bBXyq9AxFqWUN4"
        });
        return this.http.get(url, { headers });
    }

    //Uso pipe y map para extraer el dato del objeto directamente
    getNewRelease() {
        return this.getQuery("browse/new-releases?country=ar").pipe(
            map(data => data["albums"].items)
        );
    }

    getArtists(term: string) {
        return this.getQuery(`search?q=${term}&type=artist`).pipe(
            map(data => data["artists"].items)
        );
    }

    getSinger(term: string) {
        return this.getQuery(`artists/${term}`);
    }

    getTopTracks(id: string) {
        return this.getQuery(`artists/${id}/top-tracks?country=ar`).pipe(
            map(data => data["tracks"])
        );
    }
}
