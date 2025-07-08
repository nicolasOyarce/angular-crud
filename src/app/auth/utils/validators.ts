import { FormGroup } from "@angular/forms";

// Este archivo sirve para validar ciertas funciones de la web, estas pueden ser reutilizables en varias paginas

// revisa si el campo tiene el errror required (dato faltante)
export const isRequired = (field: "email" | "password", form: FormGroup) => {
  const control = form.get(field);
  return control && control.touched && control.hasError("required");
};

// revisa el formato del email a ver si es valido o no
export const hasEmailError = (form: FormGroup) => {
  const control = form.get("email");
  return control && control.touched && control.hasError("email");
};
