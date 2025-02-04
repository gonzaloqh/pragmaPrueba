# Prueba Técnica PRAGMA

Este proyecto es una aplicación móvil desarrollada con **Ionic** y **Capacitor 7**. El proyecto corresponde a una prueba técnica de Pragma.

## Requisitos Previos

- **Java 21**: Necesario para la compilación y ejecución de proyectos Android.
- **Node.js y npm**: Para gestionar las dependencias del proyecto y ejecutar scripts.
- **Ionic CLI**: Para crear y gestionar proyectos Ionic.
- **Capacitor CLI**: Para integrar Capacitor en el proyecto.

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/tu-proyecto.git
   cd tu-proyecto
   ```
2. **Iniciar el proyecto de forma local**:
   ```bash
   ionic serve
   ```
3. **Abrir proyecto en Android Studio**:
   ```bash
   ionic build
   npx cap sync android
   npx cap open android
   ```

### APK disponible en la carpeta "releases"

### Notas: Por políticas de Google, el splash screen debe ser un icono central y un color de fondo, para android -12 se puede implementar el splashscreen solicitado.