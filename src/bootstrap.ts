import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { EmpleadoRepository } from 'empleado-mf/core/domain/empleado.repository'; // Importa desde el microfrontend
import { EmpleadoApiService } from 'empleado-mf/core/infrastructure/empleado.api.service'; // Importa la implementación desde el microfrontend

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(APP_ROUTES)),
    provideHttpClient(),
    { provide: EmpleadoRepository, useClass: EmpleadoApiService }, // Registro del proveedor
  ],
});
