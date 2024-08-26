import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-callback-component',
  standalone: true,
  imports: [],
  templateUrl: './callback-component.component.html',
  styleUrl: './callback-component.component.scss'
})
export class CallbackComponentComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        localStorage.setItem('authToken', token);
        this.router.navigate(['/home']);
      }
    });
  }
}
