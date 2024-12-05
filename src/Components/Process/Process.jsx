import React from 'react';
import '../Process/Process.css'; // Si tienes un archivo de CSS, se importará aquí.

const ProcesoDeTrabajo = () => {
  return (
    <section className="proceso-trabajo">
      <h2>Mi Proceso de Trabajo</h2>
      <p>A continuación te explico cómo trabajo en cada proyecto para asegurarme de ofrecer resultados de alta calidad.</p>
      <ol className="proceso-lista">
        <li>
          <h3>1. Consultoría Inicial</h3>
          <p>Comenzamos con una reunión para entender tus necesidades, expectativas y objetivos del proyecto.</p>
        </li>
        <li>
          <h3>2. Diseño y Planificación</h3>
          <p>En esta etapa, creamos los planos de diseño y desarrollo del proyecto, estableciendo un cronograma y presupuesto.</p>
        </li>
        <li>
          <h3>3. Desarrollo</h3>
          <p>Comenzamos con la implementación técnica del proyecto. El código y el diseño se desarrollan de acuerdo con los requisitos establecidos.</p>
        </li>
        <li>
          <h3>4. Revisión y Lanzamiento</h3>
          <p>Una vez completado el desarrollo, revisamos el trabajo, hacemos ajustes y lanzamos el producto final.</p>
        </li>
        <li>
          <h3>5. Mantenimiento Post-Lanzamiento</h3>
          <p>Después del lanzamiento, ofrecemos soporte y mantenimiento continuo para asegurar que todo funcione perfectamente.</p>
        </li>
      </ol>
    </section>
  );
};

export default ProcesoDeTrabajo;
