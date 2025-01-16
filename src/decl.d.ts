declare module 'empleado-mf/core/domain/empleado.repository' {
    export abstract class EmpleadoRepository {
      abstract getEmpleados(): any;
      abstract agregarEmpleado(empleado: any): void;
      abstract actualizarEmpleado(id: number, empleado: any): void;
      abstract eliminarEmpleado(id: number): void;
    }
  }
  
  declare module 'empleado-mf/core/infrastructure/empleado.api.service' {
    import { EmpleadoRepository } from 'empleado-mf/core/domain/empleado.repository';
  
    export class EmpleadoApiService implements EmpleadoRepository {
      getEmpleados(): any;
      agregarEmpleado(empleado: any): void;
      actualizarEmpleado(id: number, empleado: any): void;
      eliminarEmpleado(id: number): void;
    }
  }
  