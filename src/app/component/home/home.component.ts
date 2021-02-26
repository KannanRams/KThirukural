import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { DataService, Kurals } from '../../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  cols: any[]=[];
  data: Kurals[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.cols = [
      { field: 'number', header: 'No.' },
      { field: 'section', header: 'Section' },
      { field: 'kural', header: 'Kural' },
      { field: 'chapter', header: 'Chapter' }
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
    this.dataService.loadData().subscribe(res => {
      this.data = res;
      this.loading = false;
    });
      // console.log(res);

      // this.data = res['kurals'];

      // console.log(this.data);

      //this.data = JSON.stringify(res);
      //let parsedData: Kurals = <Kurals>this.data;
      //console.log(parsedData);

      //  console.log(this.data.chapters);

  }
}
