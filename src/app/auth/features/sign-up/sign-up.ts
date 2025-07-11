import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Form,
  FormControl,
  Validators,
} from '@angular/forms'; //construccion del formulario
import { hasEmailError, isRequired } from '../../utils/validators';
import { AuthService } from '../../data-access/auth';
import { toast } from 'ngx-sonner';
import { Router, RouterLink } from '@angular/router';
import { GoogleButton } from '../../ui/google-button/google-button';

interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, RouterLink, GoogleButton],
  templateUrl: './sign-up.html',
  styles: ``,
})
export default class SignUp {
  private _formBuilder = inject(FormBuilder); // Inject FormBuilder for creating reactive forms
  private _authService = inject(AuthService); // connection firebase
  private _router = inject(Router); // Inject Router for navigation

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);
  }

  hasEmailError() {
    return hasEmailError(this.form);
  }

  // Creacion de el formulario
  form = this._formBuilder.group<FormSignUp>({
    // Define the form structure
    email: this._formBuilder.control('', [
      // Initialize email control with validators
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control('', [Validators.required]), // Initialize password control with validators
  });

  // funcion que ejecuta la validacion
  async submit() {
    if (this.form.invalid) return; //return if form is invalid

    try {
      const { email, password } = this.form.value;

      if (!email || !password) return; // Ensure email and password are not null

      await this._authService.signUp({ email, password });

      toast.success('User created is succesfull');
      this._router.navigateByUrl('/tasks'); // Navigate to tasks page after successful sign-up
    } catch (error) {
      toast.success('Something went wrong');
    }
  }

  async submitWithGoogle() {
    try {
      await this._authService.signInWithGoogle();
      toast.success('User created with Google is succesfull');
    } catch (error) {
      toast.error('Something went wrong with Google Sign-In');
    }
  }
}
