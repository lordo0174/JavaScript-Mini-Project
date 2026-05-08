# Práctica de Desarrollo Web: Lógica y Juegos 🚀

Este repositorio contiene dos proyectos web interactivos enfocados en el dominio de **Vanilla JavaScript**, **manipulación del DOM** y **animaciones CSS**.

---

## 📁 Proyecto 1: Tablero de Ajedrez Automatizado
Un tablero de ajedrez dinámico de 8x8 generado íntegramente mediante lógica de programación, evitando la repetición manual de código HTML.

### 📋 Características
*   **Renderizado Dinámico:** Utiliza bucles `for` anidados para crear las 64 casillas.
*   **Estilo Basado en Lógica:** Implementa la condición matemática `(i + j) % 2 === 0` para alternar automáticamente los colores de las celdas.
*   **Configuración Inicial:** Puebla el tablero con piezas de ajedrez (emojis/Unicode) en sus posiciones oficiales.
*   **Diseño Responsivo:** Utiliza **CSS Grid** para lograr una alineación perfecta y un aspecto profesional.

### 🛠️ Habilidades Técnicas
*   Diseño de algoritmos (Bucles anidados y operador Módulo).
*   Manipulación del DOM (`document.createElement` y `appendChild`).
*   Layouts avanzados con **CSS Grid**.

---

## 📁 Proyecto 2: Mini-Juego de Desplazamiento Lateral
Un juego arcade estilo "Dino Run" donde el jugador debe esquivar obstáculos para sobrevivir.

### 📋 Características
*   **Física Fluida:** Emplea funciones de tiempo `cubic-bezier` en CSS para simular un salto natural basado en la gravedad.
*   **Sistema de Colisiones:** Implementa un motor de detección de alta precisión utilizando `getBoundingClientRect()` para detectar impactos incluso en el aire.
*   **Sistema de Puntuación:** Un contador en tiempo real que rastrea el tiempo de supervivencia.
*   **Manejo de Eventos:** Escucha entradas del teclado (barra `Espaciadora`) para activar las acciones.

### 🛠️ Habilidades Técnicas
*   Lógica de *game loop* y gestión de estados.
*   Animaciones mediante **CSS Keyframes**.
*   Detección de colisiones en tiempo real (Lógica de Hitbox 2D).
*   Programación asíncrona (`setTimeout` e `setInterval`).

---

## 🚀 Primeros Pasos

Puedes ejecutar estos proyectos localmente sin necesidad de instalaciones complejas ni servidores.

1.  **Clona el repositorio:**
    ```bash
    git clone (https://github.com/lordo0174/JavaScript-Mini-Project.git)
