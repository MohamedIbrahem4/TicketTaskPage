export class Customer {
  id:number;
  name:string ;
  ticketnumber:string;
  ticketprice:number;
  cinema:string;
  NumberOfpersons:number;
  timesForbuy:number;
  ticket:string;
  image:string;
  constructor( id:number, name:string , tnum:string,tprice:number,cinema:string,numperson:number,buy:number,tick:string,image:string)
  {
    this.id=id;
    this.name =name;
    this.NumberOfpersons=numperson;
    this.ticketnumber=tnum;
    this.ticketprice=tprice;
    this.cinema=cinema;
    this.ticket=tick;
    this.timesForbuy=buy;
    this.image=image;
  }
}
