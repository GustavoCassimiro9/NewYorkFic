import { Component, OnInit } from '@angular/core';
import { TopsStoryService } from 'src/app/service/tops-story.service';

@Component({
  selector: 'app-section-posters',
  templateUrl: './section-posters.component.html',
  styleUrls: ['./section-posters.component.scss']
})
export class SectionPostersComponent implements OnInit {

  public list: any[] = []
  public filtrando: any;
  public result: string = "";
  public resultadoDaPesquisa: string = ""
  constructor(
    public topNotices: TopsStoryService,
  ) {

  }

  ngOnInit() {

    
    this.topNotices.getTopResults().subscribe({
      next: (response: any) => {
        this.list = response.results;
        console.log(this.list[1])
      }
    })
  }

  public exibir(){
    this.filtrando = this.list.filter( (obj) => {
      
        return obj.abstract.includes(this.result); 
      
      });
      if(this.result){
        this.resultadoDaPesquisa = `${this.filtrando[0].abstract}`
        console.log(this.resultadoDaPesquisa)
      }else{
        this.resultadoDaPesquisa = ""
      }
      
  }

  
}
