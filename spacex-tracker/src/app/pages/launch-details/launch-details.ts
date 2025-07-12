import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SpacexApi } from '../../services/spacex-api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-launch-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './launch-details.html',
  styleUrl: './launch-details.css',
})
export class LaunchDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  // private location = inject(Location);


  launch: any = null;
  rocket: any = null;
  loading = true;


  constructor(private spacexService: SpacexApi, private location: Location) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.spacexService.getLaunchById(id).subscribe((launchData) => {
      this.launch = launchData;

      this.spacexService.getRocketById(launchData.rocket).subscribe((rocketData) => {
        this.rocket = rocketData;
        this.loading = false;
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
