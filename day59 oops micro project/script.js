// class Library {
//   constructor() {
//     this.books = [];
//   }
//   addBook(book) {
//     this.books.push(...book);
//   }

//   listAllBooks() {
//     this.books.forEach(function (book, index) {
//       console.log(`${index + 1}) ${book.title} by ${book.author}`);
//     });
//   }
// }
// Library.prototype.creator = 'All Library created by Manith Kumar';

// class book {
//   constructor(title, author, year, price) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.price = price;
//     this.status = false;
//   }
 
//   changeReadStatus() {
//     this.status = !this.status;
//   }

//   info() {
//     console.log(
//       `Title: ${this.title}, Author: ${this.author}, Year: ${
//         this.year
//       }, Price: $${this.price} read: ${this.status ? "Yes" : "No"}`
//     );
//   }
// }

// let b1 = new book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 10.99);
// let b2 = new book("1984", "George Orwell", 1949, 8.99);
// let b3 = new book("To Kill a Mockingbird", "Harper Lee", 1960, 7.99);

// let chennai = new Library();
// chennai.addBook([b1,b2]);
// chennai.listAllBooks();

// let bangalore = new Library();
// bangalore.addBook([b3]);
// bangalore.listAllBooks();


class MobileShop{
    constructor(){
        this.phones = [];
    }

    addPhone(phone){
        this.phones.push(...phone);
    }

    listAllPhones(){
        this.phones.forEach(function(phone, index){
            console.log(`${index + 1}) ${phone.brand} ${phone.model} - $${phone.price} (${phone.year})`);
        });
    }
}

MobileShop.prototype.creator = 'All MobileShop created by Manith Kumar';

class Phone {
    constructor(brand, model, INR, year){
        this.brand = brand;
        this.model = model;
        this.price = INR;
        this.year = year;
    }

    info(){
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Price: $${this.price}, Year: ${this.year}`);
    }
}

let p1 = new Phone("Apple", "iPhone 14", 120000, 2022);
let p2 = new Phone("Samsung", "Galaxy S22", 80000, 2022);
let p3 = new Phone("OnePlus", "9 Pro", 65000, 2021);
let p4 = new Phone("Google", "Pixel 6", 60000, 2021);


let shop1 = new MobileShop();
shop1.addPhone([p1, p2]);
// shop1.listAllPhones();

let shop2 = new MobileShop();
shop2.addPhone([p3, p4]);
// shop2.listAllPhones();