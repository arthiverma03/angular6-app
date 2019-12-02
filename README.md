import { Component, OnInit } from '@angular/core';
import {ServiceapiService} from '../serviceapi.service'
import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './triggerhdfs.component.html',
  styleUrls: ['./triggerhdfs.component.css']
})
export class TriggerhdfsComponent implements OnInit{
   subjects: string[];
  smartphone: any = [];
  anys: any = [];
  
  powers = ['DL'];

  destination = ['D2'];

  model = new Hero(18, 'DL', this.powers[0], 'DL');
 
  submitted = false;
  products = [];

	constructor( private api: ServiceapiService) { 
    this.api.getOutputs().subscribe((data: {}) => (this.subjects = data['outputs']));

    console.log(this.subjects)
  }
	ngOnInit() {
  //  this.getSmartphones();
  this.getenvironmenturl();
	}

  onSubmit(event) { this.submitted = true;
    event.preventDefault()
    Math.random() 
    alert("Hello your Tracking ID:" + +Math.random())
    console.log("hello", Math.random())
  }
  getSmartphones() {
    this.api.getSmartphone()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.smartphone.push({
            // name: d.name,
            // price: d.price
          });
        }
        console.log(this.smartphone);
      });
  }

  getenvironmenturl() {
    this.api.getlocalmergeappupdurl()
      .subscribe(data => {
        // for (const d of (data as any)) {
        //   this.anys.push({
        //     // name: d.name,
        //     // price: d.price
        //   });
        // }
        console.log(this.api.getlocalmergeappupdurl);
      });
  }

}
