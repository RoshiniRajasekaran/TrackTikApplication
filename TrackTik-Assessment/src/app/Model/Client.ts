export interface ClientSites{
  sites:Sites;
  contacts:Contacts;
  address:Address;
  images:Images;
  tags:Tags
}

export interface Sites{
  id :number| String;
  clientid:string;
  title:string;
  createdAt:Date;
  updatedAt:Date;}

export interface Contacts{
 main:{
 id:number| String;
 firstName:string;
 lastName:string;
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

  


