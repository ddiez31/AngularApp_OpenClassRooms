import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class MachineService {
  machinesSubject = new Subject<any[]>();

  private machines = [{
      id: 1,
      name: "Machine à laver",
      status: "éteint"
    },
    {
      id: 2,
      name: "Frigo",
      status: "allumé"
    },
    {
      id: 3,
      name: "Ordinateur",
      status: "éteint"
    }
  ];
  
  constructor(private httpClient: HttpClient) {}

  emitMachineSubject() {
    this.machinesSubject.next(this.machines.slice());
  }

  switchOnAll() {
    for (let machine of this.machines) {
      machine.status = "allumé";
    }
    this.emitMachineSubject();
  }

  switchOffAll() {
    for (let machine of this.machines) {
      machine.status = "éteint";
      this.emitMachineSubject();
    }
  }

  switchOnOne(i: number) {
    this.machines[i].status = 'allumé';
    this.emitMachineSubject();
  }

  switchOffOne(i: number) {
    this.machines[i].status = 'éteint';
    this.emitMachineSubject();
  }

  getMachineById(id: number) {
    const machine = this.machines.find(
      (s) => {
        return s.id === id;
      }
    );
    return machine;
  }

  addMachine(name: string, status: string) {
    const machineObject = {
      id: 0,
      name: '',
      status: ''
    };
    machineObject.name = name;
    machineObject.status = status;
    machineObject.id = this.machines[(this.machines.length - 1)].id + 1;
    this.machines.push(machineObject);
    this.emitMachineSubject();
  }

  saveMachinesToServer() {
    this.httpClient
      .put('https://angularapp-openclassrooms.firebaseio.com/machines.json', this.machines)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getMachinesFromServer() {
    this.httpClient
      .get<any[]>('https://angularapp-openclassrooms.firebaseio.com/machines.json')
      .subscribe(
        (response) => {
          this.machines = response;
          this.emitMachineSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
