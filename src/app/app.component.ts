import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';

  skills = [
    {
      title: 'Front-end',
      content: [
        {
          name: 'Angular / AngularJS',
          icon: ''
        },
        {
          name: 'Vue',
          icon: ''
        },
        {
          name: 'Bootstrap',
          icon: ''
        },
        {
          name: 'Html',
          icon: ''
        },
        {
          name: 'CSS',
          icon: ''
        },
        {
          name: 'Javascript / jQuery',
          icon: ''
        }
      ]
      
    },
    {
      title: 'Back-end',
      content: [
        {
          name: 'Laravel',
          icon: ''
        },
        {
          name: 'PHP',
          icon: ''
        },
        {
          name: 'MS-SQL',
          icon: ''
        },
        {
          name: 'MySQL / MariaDB',
          icon: ''
        }
      ]
    },
    {
      title: 'Others',
      content: [
        {
          name: 'GitLab (CI/CD)',
          icon: ''
        },
        {
          name: 'Nginx',
          icon: ''
        },
        {
          name: 'Docker',
          icon: ''
        }
      ]
    }
  ]
}
