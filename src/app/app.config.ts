import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "angular-crud-26854",
        appId: "1:174574146091:web:7ca753a0d8ba51fb8d506e",
        storageBucket: "angular-crud-26854.firebasestorage.app",
        apiKey: "AIzaSyCG7tLTxuNi4bXIvxkDerG9N2ZlLQWrkh8",
        authDomain: "angular-crud-26854.firebaseapp.com",
        messagingSenderId: "174574146091",
        measurementId: "G-XSX5EPHSZW",
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
