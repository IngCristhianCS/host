# Host Application - Pruebas

Este proyecto es la aplicación host dentro de una arquitectura de **microfrontends**, diseñada para integrar y coordinar múltiples aplicaciones remotas utilizando **Webpack Module Federation**. Proporciona una base sólida para la gestión y carga dinámica de microfrontends.

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Características](#características)
- [Servidor de Desarrollo](#servidor-de-desarrollo)
- [Construcción](#construcción)
- [Configuración de Webpack](#configuración-de-webpack)
- [Microfrontends Integrados](#microfrontends-integrados)
- [Tecnologías Usadas](#tecnologías-usadas)

---

## Descripción General

La aplicación host **Pruebas** permite la integración dinámica de aplicaciones remotas (microfrontends) y gestiona la interacción entre ellas. Se ha desarrollado utilizando **Angular CLI 19.0.7** y **Webpack Module Federation** para una arquitectura modular y escalable.

---

## Características

- **Integración Dinámica**: Carga y administra microfrontends en tiempo de ejecución.
- **Arquitectura Modular**: Aislamiento entre microfrontends para facilitar el mantenimiento y la escalabilidad.
- **Gestión Centralizada**: Coordina las dependencias compartidas entre el host y los remotos.
- **Soporte para Angular Material**: Estilo y diseño responsivo para una interfaz moderna.
- **Alertas Intuitivas**: Implementación de SweetAlert2 para notificaciones de usuario.

---

## Servidor de Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
ng serve

Abre tu navegador en [http://localhost:4200/](http://localhost:4200/). La aplicación se recargará automáticamente cuando realices cambios en los archivos fuente.

## Construcción

Para construir el proyecto, ejecuta:

```bash
ng build

## Configuración de Webpack

El archivo `webpack.config.js` del host define los remotos integrados:

```javascript
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    'empleado-mf': 'http://localhost:4201/remoteEntry.js', // Referencia al Micro Frontend
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

## Microfrontends Integrados

- **empleado-mf**:
  - **URL**: [http://localhost:4201/remoteEntry.js](http://localhost:4201/remoteEntry.js)
  - **Funcionalidad**: Gestión de empleados, incluyendo creación, edición y eliminación.

## Tecnologías Usadas

- **Angular CLI 19.0.7**: Framework para construir el microfrontend.
- **Webpack Module Federation**: Para la arquitectura de microfrontends y carga dinámica.
- **RxJS**: Programación reactiva para operaciones asíncronas.
- **TypeScript**: Lenguaje de tipado estricto para mejorar el mantenimiento del código.
