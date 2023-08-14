import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService {
    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };
        return this.http.post<{ name: string }>(
            'https://httprequests-a2807-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
            postData, 
            {
                observe: 'response'
            }
        ).subscribe( responseData => {
            console.log(responseData);
        }, error => {
            this.error.next(error.message);
        });
    }

    fetchPosts() {
        let serachParams = new HttpParams();
        serachParams = serachParams.append('print', 'pretty');
        serachParams = serachParams.append('zura', 'gelaa');
        return this.http.get<{ [key: string]: Post }>('https://httprequests-a2807-default-rtdb.europe-west1.firebasedatabase.app/posts.json', {
            headers: new HttpHeaders({ 'Custom-header': 'Hello' }),
            params: serachParams
        })
        .pipe(map(responseData => {
        const postsArray: Post[] = []; 
        for(const key in responseData){
        if (responseData.hasOwnProperty(key)){
            postsArray.push({ ...responseData[key], id: key });
        }
      }
      return postsArray;
    }),
        catchError(errorRes => {
            // Send to analytics server
            return throwError(errorRes);
        })
    );
    }


    deletePosts() {
        return this.http.delete('https://httprequests-a2807-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
            observe: 'events',
            responseType: 'json'
        }
        ).pipe(tap(event => {
            console.log(event);
            if (event.type === HttpEventType.Sent){
                console.log('Sent');
            }
            if (event.type === HttpEventType.Response){
                console.log(event.body);
            }
        })
        );
    }
}