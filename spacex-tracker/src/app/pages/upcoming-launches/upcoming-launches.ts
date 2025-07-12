import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { SpacexApi } from '../../services/spacex-api';

@Component({
  selector: 'app-upcoming-launches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-launches.html',
  styleUrls: ['./upcoming-launches.css'],
})
export class UpcomingLaunches implements OnInit {
  launches: any[] = [];
  loading = true;

  constructor(private spacexService: SpacexApi) {}

ngOnInit(): void {
  this.spacexService.getUpcomingLaunches().subscribe((data) => {
    this.launches = data.sort(
      (a, b) => new Date(a.date_utc).getTime() - new Date(b.date_utc).getTime()
    );
    this.loading = false;
  });
}


}
