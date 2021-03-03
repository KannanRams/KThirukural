import { Component, OnInit } from '@angular/core';

import { chapter, DataService, kural, Kurals, section } from '../../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayMeaning: boolean = false;
  loading: boolean = false;
  cols: any[] = [];
  data: kural[] = [];

  // allData: any[]=[];

  chapters: chapter[] = [];
  sections: section[] = [];

  chaptersTemp: string[] = [];
  sectionsTemp: string[] = [];

  selectedKural?: kural;
  // selectedMeaning: any;

  // testData: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.cols = [
      { field: 'number', header: 'எண்', width: 30 },
      { field: 'section', header: 'பிரிவு', width: 70 },
      { field: 'kural', header: 'குறள்', width: 150 },
      { field: 'chapter', header: 'அதிகாரம்', width: 90 }
    ];

    this.loading = true;
    this.loadData();
  }

  // loadCustomers(event: LazyLoadEvent) {
  //   this.loading = true;

  //   setTimeout(() => {
  //     this.customerService.getCustomers({ lazyEvent: JSON.stringify(event) }).then(res => {
  //       this.customers = res.customers;
  //       this.totalRecords = res.totalRecords;
  //       this.loading = false;
  //     })
  //   }, 1000);
  // }

  loadData() {

    this.loading = true;

    this.dataService.loadData().subscribe(res => {
      // console.log(res.kurals);

      // this.allData = res;

      // console.log(this.allData);

      this.chaptersTemp = res.chapters;

      this.chaptersTemp.forEach(chap => {
        this.chapters.push({ label: chap, value: chap });
      });

      this.sectionsTemp = res.sections;

      this.sectionsTemp.forEach(chap => {
        this.sections.push({ label: chap, value: chap });
      });

      // console.log(this.chapters);

      this.data = res.kurals;
      // this.testData = this.data[0].kural.toString().replace(",","\n");

      //this.data[0].kural = this.testData;
      // console.log(this.data[0].kural);

      // console.log(this.testData);

      // console.log(JSON.parse(this.testData));



      // console.log(this.data[0].kural);

      this.loading = false;

      // console.log(res[0]);
    });


    // this.dataService.loadData().pipe(map((res) => {
    //   console.log(res);

    //   this.data = res;
    //   console.log(this.data[0]);
    //   console.log(res[0]);
    // })).subscribe();

      // res.map((res) => {
      //     this.data = res.kurals;
      //     console.log(this.data);

      // });


      // console.log(res);

      // this.data = res['kurals'];

      // console.log(this.data);

      //this.data = JSON.stringify(res);
      //let parsedData: Kurals = <Kurals>this.data;
      //console.log(parsedData);

      //  console.log(this.data.chapters);

  }

  onRowSelect(event: any) {
    // console.log(event);

    //this.selectedMeaning = this.allData.filter(a=> a.kurals.number === event.data.number);
    this.selectedKural = event.data;
    // console.log(this.selectedKural);

    // console.log(this.selectedMeaning);

    this.showMeaning();
     //this.messageService.add({ severity: 'info', summary: 'Kural Selected', detail: event.data.kural });
  }

  showMeaning() {
    this.displayMeaning = true;
  }
}
