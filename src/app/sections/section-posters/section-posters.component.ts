import { Component, OnInit } from '@angular/core';
import { TopsStoryService } from 'src/app/service/tops-story.service';

@Component({
  selector: 'app-section-posters',
  templateUrl: './section-posters.component.html',
  styleUrls: ['./section-posters.component.scss']
})
export class SectionPostersComponent implements OnInit {

  public list: any[] = []
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

}
