import { Component,  Input,  OnInit, OnDestroy } from "@angular/core";
import { MachineService } from "../../services/machine.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-machine-view',
  templateUrl: './machine-view.component.html',
  styleUrls: ['./machine-view.component.scss']
})
export class MachineViewComponent implements OnInit, OnDestroy {

  machines: any[];
  machineSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 1000
    );
  });

  constructor(private machineService: MachineService) {}

  ngOnInit() {
    this.machineSubscription = this.machineService.machinesSubject.subscribe(
      (machines: any[]) => {
        this.machines = machines;
      }
    );
    this.machineService.emitMachineSubject();
  }

  onTurnOn() {
    this.machineService.switchOnAll();
  }

  onTurnOff() {
    if (confirm("Etes-vous sûr de vouloir éteindre tous vos appareils ?")) {
      this.machineService.switchOffAll();
    } else {
      return null;
    }
  }

  ngOnDestroy() {
    this.machineSubscription.unsubscribe();
  }

  onSave() {
    this.machineService.saveMachinesToServer();
  }

  onFetch() {
    this.machineService.getMachinesFromServer();
  }

}

