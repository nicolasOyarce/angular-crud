import { Routes } from "@angular/router";

export default [
  { path: "", loadComponent: () => import("./tasks-list/tasks-list") },
] as Routes;
