import { Injectable } from '@angular/core';
import {Appointment} from '../shared/Appointment';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import { appInitialize } from '@ionic/angular/app-initialize';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private db: AngularFireDatabase) {
    return this.bookingListRef.push({
      name:apt.name;
      email:apt.email;
      mobile:app.mobile;
    })
  }

  //obtener un elemento
  getBooking(){
    this.BookingListRef=this.db.list('/appointment/'+id);
    retunr this.bookingRef;
  }

  //obtener varios elementos
  getBookingList(){
    this.bookingListRef=this.db.list('/appointment');
    return this.bookingListRef;
  }
  
  //update
  update(id,apt: Appointment){
    return this.boookingRef.update({
      name:apt.name;
      email:apt.email;
      mobile:app.mobile;
    })
  }

  //delete
  delete(id:string){
    this.bookingRef=this.db.object('/appointment/'+id);
    this.bookingRef.remove();
  }
}
