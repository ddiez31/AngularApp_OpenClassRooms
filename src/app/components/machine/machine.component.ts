import { Component, Input, OnInit } from "@angular/core";
import { MachineService } from "../../services/machine.service";

@Component({
  selector: "app-machine",
  templateUrl: "./machine.component.html",
  styleUrls: ["./machine.component.scss"]
})
export class MachineComponent implements OnInit {
  @Input() machineName: string;
  @Input() machineStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(public machineService: MachineService) {}

  ngOnInit() {}

  getStatus() {
    return this.machineStatus;
  }

  getColor() {
    if (this.machineStatus === "allumé") {
      return "green";
    } else if (this.machineStatus === "éteint") {
      return "red";
    }
  }

  onSwitch() {
    if (this.machineStatus === 'allumé') {
      if (confirm("Etes-vous sûr de vouloir éteindre cet appareil ?")) {
        this.machineService.switchOffOne(this.index);
      } else {
        return null;
      }
    } else if (this.machineStatus === 'éteint') {
      this.machineService.switchOnOne(this.index);
    }
  }
}
