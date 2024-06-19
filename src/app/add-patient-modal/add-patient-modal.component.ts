import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Patient} from "../models/patient.model";
import {DepartmentService} from "../services/department.service";
import {Department} from "../models/department.model";

@Component({
  selector: 'app-add-patient-modal',
  templateUrl: './add-patient-modal.component.html',
  styleUrls: ['./add-patient-modal.component.scss'],
})
export class AddPatientModalComponent implements OnInit{
  departments: Department[] = [];
  @Input() patient: Patient = new Patient({
    name: '',
    department: {
      id: -1,
      name: '',
      code: ''
    }, birthDate: new Date(), lastName: ''
  });
  @Input() isEditMode: boolean = false;

  constructor(private departmentService: DepartmentService,
              private modalController: ModalController) {
  }

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe(response => {
      this.departments = response;
    }, error => {
      console.error('Error fetching departments', error);
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  confirm() {
    this.modalController.dismiss(this.patient);
  }
}
