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
        { name: 'Angular / AngularJS', icon: '' },
        { name: 'Vue', icon: '' },
        { name: 'Bootstrap', icon: '' },
        { name: 'Html', icon: '' },
        { name: 'CSS', icon: '' },
        { name: 'Javascript / jQuery', icon: '' }
      ]
    },
    {
      title: 'Back-end',
      content: [
        { name: 'Laravel', icon: '' },
        { name: 'PHP', icon: '' },
        { name: 'MS-SQL', icon: '' },
        { name: 'MySQL / MariaDB', icon: '' }
      ]
    },
    {
      title: 'Others',
      content: [
        { name: 'GitLab (CI/CD)', icon: '' },
        { name: 'Nginx', icon: '' },
        { name: 'Docker', icon: '' }
      ]
    }
  ]

  experience = [
    {
      name: '資旅軟體',
      jobTitle: '前端工程師',
      date: '2023/04 ~ NOW',
      link: 'https://www.webglsoft.com/',
      work: [
        '現有專案維護',
        '現有專案維護',
        '現有專案維護',
        '現有專案維護',
        '現有專案維護',
      ],
      project: [
        '屈臣氏',
        '百佳超市'
      ]
    },
    {
      name: '威誠資訊',
      jobTitle: '系統開發工程師',
      date: '2022/09 ~ 2023/04',
      link: 'https://www.e-ways.com.tw/',
      work: [
        '網頁全端開發',
        '跨部門需求溝通，積極與 PM / 設計師合作',
        '現有專案維護(AngularJS / jQuery / PHP)',
        'SEO 優化',
        '協助團隊導入「Git Flow」工作流程',
        '現有系統規劃並實作「Line Notify」功能',
        '現有系統檔案存取安全性優化',
        '中油內部系統串接可行性評估',
        'php 版本升級',
        '綠界金流串接(信用卡一次性支付、信用卡定期定額)'
      ],
      project: [
        '三菱化學承攬商安衛管理系統',
        '2023 小北百貨活動網站',
        '臨海長照體系官網'
      ]
    },
    {
      name: '財團法人電信技術中心',
      jobTitle: '實習生',
      date: '2021/09 ~ 2022/07',
      link: 'https://www.ttc.org.tw/',
      work: [
        'RD 5G O-RAN',
        '導入容器化架構並以 Docker 實作',
      ],
      project: [
        '流量分析監控系統',
      ]
    }
  ]
}
