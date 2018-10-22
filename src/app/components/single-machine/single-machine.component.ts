import { Component, OnInit } from '@angular/core';
import { MachineService } from '../../services/machine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-machine',
  templateUrl: './single-machine.component.html',
  styleUrls: ['./single-machine.component.scss']
})
export class SingleMachineComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Statut';

  constructor(private machineService: MachineService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.machineService.getMachineById(+id).name;
    this.status = this.machineService.getMachineById(+id).status;
}
}
