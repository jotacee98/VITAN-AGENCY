import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailService } from './servicios/email-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vitan-agency-page';

  formValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    howDidYouHear: '',
    requestInfo: '',
    requestDetails: ''
  };

  constructor(private emailService: EmailService) {}

  
}


