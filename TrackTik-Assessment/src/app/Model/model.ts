export interface ClientSites{
  id :number| String;
  clientid:string;
  title:string;
  createdAt:Date;
  updatedAt:Date;
  contacts:Contacts;
  address:Address;
  images:Images;
  tags:Tags
}



export interface Contacts{
 main:{
 id:number| String;
 firstName:string;
 lastName:string;
 email:string|number;
 phoneNumber:number;
 jobTitle:string;
 address: Address
 }
}


 export interface Address{
  zipCode:number| String;
  city:string;
  street:number|string;
  country:string;
  state:string;
 }

 export interface Images{
  images:string[];
 }

 export interface Tags{
  tags:string[];
 }

  


