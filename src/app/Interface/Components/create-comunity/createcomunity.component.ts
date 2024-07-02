import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComunityV1Service } from '../../../Servicios/comunity-v1.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-comunity',
  templateUrl: './createcomunity.component.html',
  styleUrls: ['./createcomunity.component.css']
})
export class CreateComunityComponent implements OnInit {
  communityForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private communityService: ComunityV1Service,
    private snackBar: MatSnackBar
  ) {
    this.communityForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }

  ngOnInit(): void {}

  getErrorMessage(controlName: string): string {
    const control = this.communityForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (control?.hasError('maxlength')) {
      return `Máximo ${control.getError('maxlength').requiredLength} caracteres`;
    }
    return '';
  }

  onSubmit(): void {
    if (this.communityForm.valid) {
      this.communityService.createCommunity(this.communityForm.value).subscribe(
        response => {
          this.snackBar.open('Comunidad creada exitosamente', 'Cerrar', { duration: 3000 });
          this.communityForm.reset();
        },
        error => {
          this.snackBar.open('Error al crear la comunidad', 'Cerrar', { duration: 3000 });
        }
      );
    }
  }
}
