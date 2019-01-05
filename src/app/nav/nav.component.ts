import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  movies: []


  constructor(
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
