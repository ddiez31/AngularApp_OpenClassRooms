import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MachineService } from '../../services/machine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-machine',
  templateUrl: './edit-machine.component.html',
  styleUrls: ['./edit-machine.component.scss']
})
export class EditMachineComponent implements OnInit {
  defaultOnOff = 'éteint';

  constructor(private machineService: MachineService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    this.machineService.addMachine(name, status);
    this.router.navigate(['/machines']);
  }

}
