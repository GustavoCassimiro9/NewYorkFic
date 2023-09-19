import { Component, OnInit } from '@angular/core';
import { ApiStoryService } from 'src/app/service/api-story.service';
import { PaginationServiceService } from 'src/app/service/pagination-service.service';

@Component({
  selector: 'app-section-notices',
  templateUrl: './section-notices.component.html',
  styleUrls: ['./section-notices.component.scss']
})
export class SectionNoticesComponent implements OnInit {

  public list: any[] = [];
  public filter: any;
  public result: string = "";
  //public resultadoDaPesquisa: any = 

  constructor(
    public apiStoryService: ApiStoryService,
    public paginationService: PaginationServiceService

  ) { }

  ngOnInit(): void {
    this.apiStoryService.getArchivesResults().subscribe({
      next: (response: any) => {
        this.list = response.results;
        
      }
    })
  }


  public exibir() {

    if (!this.result) {

      this.filter = this.list.filter((obj) => {

        if (obj.title.includes(this.result)) {
          return obj.title.includes(this.result)
        }
        console.log(obj)
      });

    }else{
      this.filter = this.list;
    }

  }

}
