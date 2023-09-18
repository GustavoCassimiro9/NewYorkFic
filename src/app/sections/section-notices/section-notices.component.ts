import { Component, OnInit } from '@angular/core';
import { ApiStoryService } from 'src/app/service/api-story.service';

@Component({
  selector: 'app-section-notices',
  templateUrl: './section-notices.component.html',
  styleUrls: ['./section-notices.component.scss']
})
export class SectionNoticesComponent implements OnInit {

  public list: any[] = [];

  constructor(
    public apiStoryService: ApiStoryService
    ) { }

  ngOnInit(): void {
    this.apiStoryService.getArchivesResults().subscribe({
      next: (response: any) => {
        this.list = response;
        
      }
    })
  }

}
