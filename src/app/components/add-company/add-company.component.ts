import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyOptions } from '../../interfaces/company-options';
import { DatabaseService } from '../../services/database.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss'],
})
export class AddCompanyComponent implements OnInit {
  title = 'Add New Contact';

  companyDetails: CompanyOptions = {
    company: '',
    contactNumber: 0,
    parentKey: '',
  };

  constructor(
    private dabaseService: DatabaseService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  validateUser(): boolean {
    if (this.companyDetails.contactNumber == 0) {
      alert('Invalid contact number! Please enter a valid number.');
      return false;
    }

    if (this.companyDetails.company?.trim() == '') {
      alert('Invalid company name! Please enter a valid name.');
      return false;
    }

    return true;
  }

  generateParentKey(): string {
    let dateString = new Date().getTime().toString();
    return dateString;
  }

  async addUser() {
    if (!this.validateUser()) {
      return;
    }

    let dateKey = this.generateParentKey();
    this.companyDetails.parentKey = dateKey;

    this.dialogService.openDialog();

    await this.dabaseService.setCompanyList(dateKey, this.companyDetails);

    alert('Successfully Added company!');

    this.companyDetails = {
      company: '',
      contactNumber: 0,
      parentKey: '',
    };

    this.dialogService.closeDialog();
    this.navigateHome();
  }

  navigateHome() {
    this.router.navigate(['view']);
  }
}
