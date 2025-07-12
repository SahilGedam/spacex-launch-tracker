import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SpacexApi } from '../../services/spacex-api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-past-launches',
  imports: [CommonModule,RouterModule],
  templateUrl: './past-launches.html',
  styleUrl: './past-launches.css'
})
export class PastLaunches implements OnInit {
  launches: any[] = [];
  loading = true;

  constructor(private spacexService: SpacexApi) { }

ngOnInit(): void {
  this.spacexService.getPastLaunches().subscribe((data) => {
    this.launches = data
      .sort((a, b) => new Date(b.date_utc).getTime() - new Date(a.date_utc).getTime()); // most recent first
    this.loading = false;
  });
}

}
