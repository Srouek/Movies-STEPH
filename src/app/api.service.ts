import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment} from '../environments/environment';
  
const API_KEY = environment.apiKey;
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  options : object = {
    "langage": "fr",
    "api_key": API_KEY
  }


  constructor(
    private http: HttpClient
  ) { }

  getOptions(){
    let httpParams = new HttpParams();
    for(let option in this.options){
      httpParams = httpParams.set(option, this.options[option])
    }
    return httpParams;
  }
  //Méthode de récupération des tendance de la semaine 
  getTrendingMovies(){
    return this.http.get<any>( API_URL+ '/trending/movie/week',{ params : this.getOptions() })
  }
  // méthode récupération des tops films
  getBestMovies() {
    return this.http.get<any>(API_URL + "/movie/top_rated", {
      params: this.getOptions()
    });
  }
 
  // méthode récupération des films à l'affiche
  getUpcomingMovies() {
    let options = this.getOptions().set("region", "fr");
    return this.http.get<any>(API_URL + "/movie/upcoming", { params: options });
  }
 
  // méthode récupération des résultats de recherche
  searchMovie(query: string) {
    let options = this.getOptions().set("query", query);
    return this.http.get<any>(API_URL + "/search/movie", { params: options });
  }
 
  // méthode récupération des détails d'un film
  getMovie(id: string) {
    return this.http.get<any>(API_URL + "/movie/" + id, {
      params: this.getOptions()
    });
  }

  
}
