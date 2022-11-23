import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MiscService } from './misc.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDBService {

  addData: any
  timeStamp: any

  constructor(
    private firestore: AngularFirestore,
    private misc: MiscService
  ) { }
  getMonthlyData(month: number) {
    // console.log(new Date().getTime());
    console.log(this.misc.getTimestamp());

    return month
  }

  // addExpense() {
  //   this.timeStamp = this.misc.getTimestamp()
  //   return new Promise<any>((resolve, reject) => {
  //     this.firestore
  //       .collection("expenses").doc(this.timeStamp)
  //       .set({
  //         date: this.timeStamp,
  //         account: "Personal"
  //       })
  //       .then(res => { console.log(res) }, err => reject(err));
  //   });
  // }

  addExpense(data:any){
    this.timeStamp = this.misc.getTimestamp()
    data.timeStamp = this.timeStamp
    return this.firestore.doc(`expenses/${this.timeStamp}`).set(data)

  }

  // insertPolicyDetails(data: any) {
  //   const policyDetails: policyDetails = {
  //     moneyBack: data.moneyBack,
  //     timeStamp: data.timeStamp
  //   }
  //   return this.firestoreServices.doc(`policyMaster/${policyDetails.policyNumber}`).set(policyDetails);
  // }

  // retrievePolicyDetails() {
  //   //
  //   let dbData = [] //local array for storing object array

  //   // Retrieves all data from "POLICY MASTER" collection and sort them on "Proposer name"
  //   this.firestoreServices.collection('policyMaster', ref => ref.orderBy("proposerName")).get().toPromise().then((snapshot) => {
  //     snapshot.docs.forEach(doc => {
  //       dbData.push(doc.data());
  //     });
  //   })
  //   // console.log(dbData);
  //   return dbData;
  // }

}
