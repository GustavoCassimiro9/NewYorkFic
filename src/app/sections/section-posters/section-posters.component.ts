import { Component, OnInit } from '@angular/core';
import { ApiStoryService } from 'src/app/service/api-story.service';

@Component({
  selector: 'app-section-posters',
  templateUrl: './section-posters.component.html',
  styleUrls: ['./section-posters.component.scss']
})
export class SectionPostersComponent implements OnInit {

  public list: any[] = []
  public filter: any;
  public resultRandom: any[] = []
  public result: string = "";
  public resultadoDaPesquisa: any = {title: "", abstract: ""};

  constructor(
    public apiStoryService: ApiStoryService,
  ) {

  }
  public randomNumber( max:number ){
    return Math.floor(Math.random() * max)
  }

  ngOnInit() {


    this.apiStoryService.getTopResults().subscribe({
      next: (response: any) => {
        this.list = response.results;
        this.resultRandom = [this.randomNumber(this.list.length),this.randomNumber(this.list.length),this.randomNumber(this.list.length)] 
        console.log(this.list)
      }
    })



  }

  

  public exibir() {
    this.filter = this.list.filter((obj) => {

      if (obj.title.includes(this.result)) {
        return obj.title.includes(this.result)
      }
      if (obj.abstract.includes(this.result)) {
        return obj.abstract.includes(this.result);
      };

    });

    if (this.result) {

      this.resultadoDaPesquisa.title = this.filter[0].title;
      this.resultadoDaPesquisa.abstract = this.filter[0].abstract;
      
    } else {
      this.resultadoDaPesquisa.title = "";
      this.resultadoDaPesquisa.abstract = "";
    }

  }


  public random(){


  }

}
