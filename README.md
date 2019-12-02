
    
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../aa';
import {ServiceapiService} from '../api.service'

@Component({
  selector: 'app-book-form',
  templateUrl: './hdpmrg.component.html',
  styleUrls: ['./hdpmrg.component.css']
})
export class BookFormComponent implements OnInit {
  public readonly maxBookCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public bookForm: FormGroup;
  subjects: string[];
  smartphone: any = [];
  anys: any = [];
  
key: any;
apikey: any;
  @Input()
  book: Book;
  @Output()
  newBook: EventEmitter<Book> = new EventEmitter<Book>();

  constructor( private api: ServiceapiService) { 
    this.api.getOutputs().subscribe((data: {}) => (this.subjects = data['outputs']));

    console.log(this.subjects)
  }

  ngOnInit() {
    this.initFormGroup();
    this.api.getSmartphone().subscribe( data => {
      this.key = Object.keys(data);
      
      console.log(this.key);
     

    })
    this.api.getlocalenvurl().subscribe(data => {
  this.apikey = Object.keys(data)
  console.log(this.apikey);
    })
  }


  public onSubmit({ value }: { value: Book }): void {
    value.id = this.book && this.book.id ? this.book.id : null;
    // console.log(value);
    this.api.getlocalmergeappupdurl(value);
    this.getenvironmenturl();
    // this.newBook.emit(value);
    this.bookForm.reset();
   
  }


  private initFormGroup(): void {
    const name = this.book && this.book.name ? this.book.name : '';
    const auther = this.book && this.book.auther ? this.book.auther : '';
    const count = this.book && this.book.auther ? this.book.count : 0;
    const desc =
      this.book && this.book.description ? this.book.description : '';


    this.bookForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      auther: new FormControl(auther, [Validators.required]),
      count: new FormControl(count, [Validators.required]),
      description: new FormControl(desc, [Validators.required])
    });
  }

  getenvironmenturl() {
    this.api.getSmartphone()
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
 









