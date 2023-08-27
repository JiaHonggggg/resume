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
        { name: 'Angular / AngularJS' },
        { name: 'Vue' },
        { name: 'Bootstrap' },
        { name: 'Html' },
        { name: 'CSS' },
        { name: 'Javascript / jQuery' }
      ]
    },
    {
      title: 'Back-end',
      content: [
        { name: 'Laravel' },
        { name: 'PHP' },
        { name: 'MS-SQL' },
        { name: 'MySQL / MariaDB' }
      ]
    },
    {
      title: 'Others',
      content: [
        { name: 'GitLab (CI/CD)' },
        { name: 'Nginx' },
        { name: 'Docker' }
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
        '串接 SAP Spartacus、SAP hybris',
        'SEO 優化（Click Stream、GTM、GA4）',
        '現有專案維護',
        'i18n'
      ],
      project: [
        { name: '屈臣氏', url: 'https://www.watsons.com.tw/' },
        { name: '百佳超市', url: 'https://www.pns.hk/zh-hk/aboutParknshop' }
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
        { name: '三菱化學承攬商安衛管理系統', url: '' },
        { name: '2023 小北百貨活動網站', url: 'http://se2023.close.fomoshop.com/' },
        { name: '臨海長照體系官網', url: 'https://www.linhai.com.tw/' },
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
        { name: '流量分析監控系統', url: '' },
      ]
    }
  ]
}
