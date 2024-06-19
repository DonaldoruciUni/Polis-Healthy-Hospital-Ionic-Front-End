import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-add-department-modal',
  templateUrl: './add-department-modal.component.html',
  styleUrls: ['./add-department-modal.component.scss'],
})
export class AddDepartmentModalComponent {
  @Input() department: Department = { name: '', code: '' };

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }

  confirm() {
    this.modalController.dismiss(this.department);
  }
}
