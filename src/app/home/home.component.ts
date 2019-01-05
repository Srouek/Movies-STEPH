import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    // http et une proprèté de la class Homecomponent qui représente une instance de HttpClient

    title: string = "Titre de ma page";
    movies: [];

  constructor(
    
    private http: HttpClient, // HomeComponent a une proprièté qui a pour nom http qui est une instance de HttCLient
    private apiService: ApiService
    ) { }

  ngOnInit() {
   
    // Appeler la fonction getTrendingMovies du service Api
    this.apiService.getTrendingMovies().subscribe(data =>{
      this.movies = data.results;
  
    
      console.log(this.movies);
    })
  }

}
