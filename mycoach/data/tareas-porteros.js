/* PORTEROS */
T({ id: 'gk01', n: 'Calentamiento de portero: manos y blocajes', cat: 'por', tipo: 'Portero · Calentamiento', ed: 'AICJS', dif: 1, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 2, rpe: '3-4', carga: 'Activación', fase: 'cal',
  jug: '2-3 porteros + entrenador', np: 3, esp: [16.5, 20], ser: '10-12\'', rec: '—', dur: 12,
  obj: 'Preparar manos, piernas y reflejos del portero antes del entrenamiento.',
  desc: 'Movilidad específica, pases con la mano, blocajes de balones a media altura y rasos, y caídas laterales suaves desde rodillas. Termina con 4-6 tiros suaves desde el área.',
  reglas: ['Progresar en intensidad.', 'Ambas manos y ambos lados.', 'Hablar en cada acción.'],
  cons: ['Manos en forma de "W" en los balones altos.', 'Posición básica: piernas flexionadas y peso delante.'],
  var: ['+ Balones más rápidos.', '− Solo blocajes frontales.'],
  d: { v: [80, 20, 30, 28], z: [[88.5, 24, 16.5, 20]], p: [P(103, 34), P(100, 30), E(92, 34)], b: [[95, 34]], a: [['pase', 92, 34, 102, 34, 0]] } });

T({ id: 'gk02', n: 'Blocaje y caída lateral', cat: 'por', tipo: 'Portero · Técnica', ed: 'ICJS', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '6-7', carga: 'Tensión', fase: 'pri',
  jug: '2-3 porteros + entrenador', np: 3, esp: [16.5, 20], ser: '3 x 6 caídas por lado', rec: '1\' entre series', dur: 15,
  obj: 'Mejorar la técnica de caída lateral y el blocaje de balones rasos y a media altura.',
  desc: 'El entrenador lanza o golpea a un lado del portero desde 8-10 m. El portero se desplaza, cae lateralmente blocando el balón y se levanta rápido para la siguiente acción.',
  reglas: ['Alternar lados.', 'Balón raso → medio → alto.', 'Recuperar la posición básica tras cada parada.'],
  cons: ['Atacar el balón hacia delante, no hacia atrás.', 'Caer sobre el costado, nunca sobre el codo.'],
  var: ['+ Dos tiros seguidos.', '− Desde rodillas.'],
  d: { v: [82, 20, 26, 28], p: [P(104, 34), E(94, 34)], b: [[95, 34]], a: [['tiro', 94, 34, 104, 30.8, 0], ['mov', 104, 34, 104, 31.5, 0]] } });

T({ id: 'gk03', n: 'Desplazamientos laterales con vallas + parada', cat: 'por', tipo: 'Portero · Físico', ed: 'CJS', dif: 2, md: ['MD-4'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: '2 porteros + entrenador', np: 3, esp: [16.5, 20], ser: '4 series x 4 reps', rec: '1\'30" entre series', dur: 15,
  obj: 'Potencia y velocidad de desplazamiento lateral seguidos de parada.',
  desc: 'El portero salta lateralmente dos minivallas, vuelve a la posición básica y para un tiro del entrenador al lado contrario.',
  reglas: ['Máxima intensidad.', 'Pocas repeticiones con buena calidad.', 'Recuperación completa entre series.'],
  cons: ['Rebote rápido en el suelo.', 'Llegar equilibrado a la parada.'],
  var: ['+ Tres vallas.', '− Sin vallas.'],
  d: { v: [82, 20, 26, 28], h: [[102, 31, 0], [102, 37, 0]], p: [P(102, 34), E(93, 34)], b: [[94, 34]], a: [['mov', 102, 34, 102, 29.5, 0], ['tiro', 93, 34, 104, 38, 0]] } });

T({ id: 'gk04', n: 'Juego aéreo: salidas a centros', cat: 'por', tipo: 'Portero · Técnica', ed: 'ICJS', dif: 2, md: ['MD-3', 'MD-2'], int: 3, rpe: '6', carga: 'Duración', fase: 'pri',
  jug: 'Portero + 2 centradores + 2 rematadores', np: 5, esp: [30, 40], ser: '3 x 8 centros', rec: '1\'', dur: 15,
  obj: 'Dominar el área en centros: decidir si salir y blocar o despejar.',
  desc: 'Centros desde ambas bandas. El portero decide si sale a blocar en el punto más alto o se queda en la portería. Dos rematadores atacan el balón para crear oposición.',
  reglas: ['Centros de ambas bandas alternados.', 'Oposición pasiva y después activa.', 'El portero avisa "¡mía!" en cada salida.'],
  cons: ['Atacar el balón con la rodilla del lado contrario arriba.', 'Blocar en el punto más alto.'],
  var: ['+ Rematadores activos.', '− Sin rematadores.'],
  d: { v: [74, -2, 34, 72], g: [], p: [P(103, 34), A(98, 6), A(98, 62), B(94, 30), B(93, 38)], b: [[98.8, 6.6]], a: [['pase', 98, 6, 99, 32, 3], ['mov', 103, 34, 99.5, 32.5, 0]] } });

T({ id: 'gk05', n: '1v1: salida a los pies', cat: 'por', tipo: 'Portero · Técnica', ed: 'ICJS', dif: 2, md: ['MD-2', 'MD-3'], int: 3, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: 'Portero + 3-4 atacantes', np: 5, esp: [30, 30], ser: '3 x 5 duelos', rec: '1\'', dur: 15,
  obj: 'Achicar el espacio y salir a los pies del atacante en el mano a mano.',
  desc: 'Un atacante conduce desde 25 m hacia la portería. El portero sale, reduce el ángulo y decide cuándo lanzarse a los pies o esperar la finta.',
  reglas: ['El atacante tiene 6" para finalizar.', 'El portero puede salir del área.', 'Duelos desde distintos ángulos.'],
  cons: ['Salir cuando el balón se separa del pie del atacante.', 'Cuerpo grande y manos abajo.'],
  var: ['+ Atacante con apoyo (2v1 + P).', '− Atacante a ritmo medio.'],
  d: { v: [74, 16, 34, 36], p: [P(101, 34), A(80, 34)], b: [[81, 34.5]], a: [['cond', 80, 34, 92, 34, 0], ['mov', 101, 34, 95, 34, 0]] } });

T({ id: 'gk06', n: 'Juego con los pies bajo presión', cat: 'por', tipo: 'Portero · Juego de pies', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-1'], int: 2, rpe: '5', carga: 'Activación', fase: 'pri',
  jug: 'Portero + 2 centrales + 2 presionadores', np: 5, esp: [35, 40], ser: '3 x 4\'', rec: '1\'', dur: 15,
  obj: 'Participar en la salida de balón con control orientado y pase seguro.',
  desc: 'Los centrales pasan atrás al portero mientras dos rivales presionan. El portero debe controlar orientado y jugar al central libre o a un lateral, o pasar en largo si la presión es alta.',
  reglas: ['Portero a dos toques.', 'Pase al central o lateral libre = punto.', 'Si los presionadores roban, finalizan.'],
  cons: ['Mirar antes de recibir.', 'Control hacia el lado contrario de la presión.'],
  var: ['+ Tres presionadores.', '− Presión pasiva.'],
  d: { v: [68, 8, 40, 52], g: [], p: [P(102, 34), B(94, 24), B(94, 44), A(90, 30), A(90, 40), N(84, 12), N(84, 56)], b: [[100.8, 34.4]], a: [['pase', 102, 34, 94, 44, 0], ['mov', 90, 40, 93, 42, 0], ['pase', 94, 44, 84, 56, 0]] } });

T({ id: 'gk07', n: 'Saques en largo y en corto a zonas', cat: 'por', tipo: 'Portero · Juego de pies', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD-2'], int: 1, rpe: '3', carga: 'Activación', fase: 'pri',
  jug: 'Portero + 2-3 receptores', np: 4, esp: [70, 68], ser: '3 x 8 saques', rec: '1\'', dur: 12,
  obj: 'Mejorar la precisión de los saques con la mano y con el pie.',
  desc: 'El portero saca a zonas marcadas: en corto al central o lateral (con la mano) y en largo a la banda o al delantero (con el pie). Los receptores controlan y devuelven.',
  reglas: ['Puntos según la zona alcanzada.', 'Alternar mano y pie.', 'Saque rápido tras blocaje.'],
  cons: ['Saque tenso y a ras con la mano.', 'En largo, golpear por debajo del balón.'],
  var: ['+ Zonas más pequeñas.', '− Zonas grandes.'],
  d: { v: [30, -2, 80, 72], z: [[90, 4, 10, 12, '#facc15'], [90, 52, 10, 12, '#facc15'], [52, 10, 14, 14, '#60a5fa'], [52, 44, 14, 14, '#60a5fa']], p: [P(102, 34), A(95, 10), A(59, 17), A(59, 51)], b: [[101, 34.6]], a: [['pase', 102, 34, 95, 10, 0], ['pase', 102, 34, 59, 51, 6]] } });

T({ id: 'gk08', n: 'Reflejos: tiros cercanos con desvío', cat: 'por', tipo: 'Portero · Técnica', ed: 'CJS', dif: 3, md: ['MD-2', 'MD-3'], int: 3, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: 'Portero + entrenador', np: 2, esp: [16.5, 20], ser: '4 x 6 tiros', rec: '45"', dur: 12,
  obj: 'Mejorar la velocidad de reacción ante tiros a corta distancia y desvíos.',
  desc: 'El entrenador golpea desde 6-8 m. Entre el tiro y el portero hay un jugador o una pica que puede desviar el balón, obligando al portero a reaccionar tarde.',
  reglas: ['Tiros a ambos lados.', 'Desvíos aleatorios.', 'El portero mantiene la posición básica.'],
  cons: ['Peso sobre la parte delantera de los pies.', 'Manos activas por delante del cuerpo.'],
  var: ['+ Distancia de 5 m.', '− Sin desvío.'],
  d: { v: [86, 22, 22, 24], pk: [[99, 32], [99, 36]], p: [P(104, 34), E(95, 34)], b: [[96, 34.3]], a: [['tiro', 95, 34, 99, 32, 0], ['tiro', 99, 32, 104, 30.5, 0]] } });

T({ id: 'gk09', n: 'Paradas consecutivas (doble acción)', cat: 'por', tipo: 'Portero · Físico', ed: 'CJS', dif: 3, md: ['MD-4'], int: 4, rpe: '8-9', carga: 'Tensión', fase: 'pri',
  jug: 'Portero + 2 tiradores', np: 3, esp: [20, 25], ser: '4 x 4 dobles acciones', rec: '1\'30"', dur: 15,
  obj: 'Levantarse rápido tras una parada para hacer una segunda intervención.',
  desc: 'El primer tirador golpea a un palo; el portero para y debe levantarse rápidamente para atajar un segundo tiro desde otro ángulo.',
  reglas: ['El segundo tiro sale cuando el portero está en el suelo.', 'Alternar los lados.', 'Volumen bajo y calidad alta.'],
  cons: ['Levantarse apoyando la mano y la rodilla del lado contrario.', 'Recolocarse respecto al nuevo balón.'],
  var: ['+ Tres acciones.', '− Más tiempo entre tiros.'],
  d: { v: [80, 18, 28, 32], p: [P(103, 34), A(92, 28), A(93, 41)], b: [[92.8, 28.6], [93.8, 41.5]], a: [['tiro', 92, 28, 104, 31, 0], ['tiro', 93, 41, 104, 37, 0]] } });

T({ id: 'gk10', n: 'Colocación respecto al balón (ángulo)', cat: 'por', tipo: 'Portero · Táctica', ed: 'AIC', dif: 1, md: ['MD-2', 'MD-1'], int: 2, rpe: '4', carga: 'Activación', fase: 'pri',
  jug: 'Portero + 5 jugadores', np: 6, esp: [30, 40], ser: '3 x 3\'', rec: '1\'', dur: 12,
  obj: 'Colocarse en la bisectriz del ángulo de tiro.',
  desc: 'Cinco jugadores en semicírculo fuera del área se pasan el balón. El portero se recoloca en cada pase y, cuando el entrenador lo indica, el poseedor tira.',
  reglas: ['El portero se coloca en cada pase.', 'Tiros suaves al principio.', 'Usar una cuerda del poste al balón para que lo vean los más jóvenes.'],
  cons: ['Pequeños pasos laterales, sin cruzar los pies.', 'Estar quieto en el momento del tiro.'],
  var: ['+ Pases más rápidos.', '− Sin tiro, solo colocación.'],
  d: { v: [70, 4, 38, 60], g: [], p: [P(102, 34), A(97, 15), A(86, 22), A(83, 34), A(86, 46), A(97, 53)], l: [[105, 30.3, 86.6, 22.5], [105, 37.7, 86.6, 22.5]], b: [[86.9, 23]], a: [['mov', 102, 34, 102, 32.2, 0]] } });

T({ id: 'gk11', n: 'Despeje de puños y desvío a córner', cat: 'por', tipo: 'Portero · Técnica', ed: 'CJS', dif: 2, md: ['MD-3', 'MD-2'], int: 3, rpe: '6', carga: 'Duración', fase: 'pri',
  jug: 'Portero + 2 centradores + 1 rematador', np: 4, esp: [20, 30], ser: '3 x 6 acciones', rec: '1\'', dur: 12,
  obj: 'Saber despejar de puños cuando no es posible blocar y desviar tiros difíciles.',
  desc: 'Centros con oposición en el área pequeña: el portero despeja de puños hacia las bandas. Alternado con tiros a la escuadra que debe desviar por encima del larguero o junto al poste.',
  reglas: ['Despejes lejos y hacia fuera.', 'Uno o dos puños según la situación.', 'Desvío con la mano más cercana al balón.'],
  cons: ['Golpear el centro del balón.', 'Brazo extendido en el último momento.'],
  var: ['+ Dos rematadores.', '− Sin oposición.'],
  d: { v: [78, 4, 30, 50], g: [], p: [P(102, 34), A(96, 8), B(100, 32)], b: [[96.8, 8.6]], a: [['pase', 96, 8, 101, 32, 2], ['tiro', 101, 32, 92, 22, 0]] } });

T({ id: 'gk12', n: 'Potencia de portero: saltos + estirada', cat: 'por', tipo: 'Portero · Físico', ed: 'JS', dif: 3, md: ['MD-4'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: 'Portero + entrenador', np: 2, esp: [16.5, 20], ser: '3 x 5 reps por lado', rec: '1\'30"', dur: 14,
  obj: 'Mejorar la potencia de la estirada.',
  desc: 'Salto vertical o salto al cajón seguido de una estirada lateral para atrapar un balón lanzado a la escuadra.',
  reglas: ['Máxima intensidad.', 'Recuperación completa.', 'Superficie blanda para las caídas.'],
  cons: ['Impulso con la pierna del lado del balón.', 'Brazos por delante del cuerpo.'],
  var: ['+ Salto con contramovimiento + estirada.', '− Solo estirada.'],
  d: { v: [82, 20, 26, 28], h: [[100, 34, 1]], p: [P(101.5, 34), E(93, 34)], b: [[94, 34]], a: [['mov', 101.5, 34, 103.5, 30, 0], ['pase', 93, 34, 104, 30.5, 1]] } });

T({ id: 'gk13', n: 'Portero líbero: balones a la espalda de la defensa', cat: 'por', tipo: 'Portero · Táctica', ed: 'CJS', dif: 3, md: ['MD-3', 'MD-2'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: 'Portero + pasador + delantero + defensa', np: 4, esp: [40, 68], ser: '3 x 5 acciones', rec: '1\'', dur: 14,
  obj: 'Leer los balones largos y salir fuera del área para anticiparse al delantero.',
  desc: 'Un pasador lanza un balón a la espalda de la línea defensiva. El portero debe decidir si sale fuera del área a despejar o controlar, o si se queda en la portería.',
  reglas: ['Los pases a la espalda tienen distintas alturas y velocidades.', 'El portero avisa a la defensa.', 'Fuera del área, juega con los pies.'],
  cons: ['Posición adelantada cuando la defensa está alta.', 'Decidir rápido y salir con convicción.'],
  var: ['+ Delantero con ventaja.', '− Sin delantero.'],
  d: { v: [60, 8, 48, 52], g: [], p: [P(98, 34), A(66, 30), A(80, 38), B(81, 34)], b: [[66.8, 30.5]], a: [['pase', 66, 30, 90, 38, 3], ['mov', 98, 34, 91, 37.5, 0], ['mov', 80, 38, 88, 39, 0]] } });

T({ id: 'gk14', n: 'Penaltis: lectura y reacción', cat: 'por', tipo: 'Portero · Técnica', ed: 'ICJS', dif: 2, md: ['MD-1'], int: 2, rpe: '4', carga: 'Activación', fase: 'pri',
  jug: 'Portero + lanzadores', np: 6, esp: [16.5, 20], ser: '2 x 6 penaltis', rec: '1\'', dur: 12,
  obj: 'Preparar la estrategia del portero en los penaltis.',
  desc: 'Los lanzadores tiran penaltis mientras el portero aplica su estrategia: esperar, leer la carrera y la cadera del lanzador, o elegir un lado según los datos del rival.',
  reglas: ['El portero debe tener al menos un pie en la línea al golpeo.', 'Lanzamientos reales a máxima concentración.', 'Llevar estadísticas.'],
  cons: ['Paso de impulso en el momento del golpeo.', 'Leer la pierna de apoyo del lanzador.'],
  var: ['+ Penaltis con presión (eliminatoria).', '− Tiros a media potencia.'],
  d: { v: [84, 22, 24, 24], p: [P(104.5, 34), A(91, 34), A(89, 37)], b: [[94, 34]], a: [['tiro', 94, 34, 104.5, 31, 0]] } });

T({ id: 'gk15', n: 'Defensa de centros 2v1 + portero', cat: 'por', tipo: 'Portero · Táctica', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-3'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: 'Portero + defensa + 2 atacantes + centrador', np: 5, esp: [30, 68], ser: '3 x 6 acciones', rec: '1\'', dur: 14,
  obj: 'Coordinar al portero con la defensa en los centros en situación real.',
  desc: 'Un centrador pone el balón desde la banda; dos atacantes atacan el área contra un defensor. El portero dirige al defensor y decide cuándo salir.',
  reglas: ['Centros de ambas bandas.', 'El portero dirige con la voz.', 'Gol de cabeza vale doble.'],
  cons: ['Comunicación clara: "¡mía!" o "¡fuera!".', 'Posición en el centro de la portería cuando el centro es desde lejos.'],
  var: ['+ 3v2.', '− Sin oposición.'],
  d: { v: [74, -2, 34, 60], g: [], p: [P(102, 34), A(98, 6), A(92, 28), A(90, 36), B(95, 32)], b: [[98.8, 6.6]], a: [['pase', 98, 6, 98, 30, 3], ['mov', 92, 28, 97, 30, 0], ['mov', 90, 36, 97, 36, 0]] } });

// ---------- AMPLIACIÓN ----------
T({ id: 'gk16', n: 'Blocaje alto con salto', cat: 'por', tipo: 'Portero · Técnica', ed: 'ICJS', dif: 2, md: ['MD-3', 'MD-2'], int: 3, rpe: '6', carga: 'Duración', fase: 'pri',
  jug: 'Portero + entrenador', np: 2, esp: [16.5, 20], ser: '3 x 8 balones', rec: '1\'', dur: 12,
  obj: 'Atrapar balones altos frontales en el punto más alto del salto.',
  desc: 'El entrenador lanza o golpea balones altos frontales desde 10-12 m. El portero da dos pasos, salta con la rodilla arriba y bloca con las manos en W por encima de la cabeza.',
  reglas: ['Impulso con una pierna, la otra rodilla arriba.', 'Llevar el balón al pecho tras blocar.', 'Alternar la pierna de impulso.'],
  cons: ['Atacar el balón, no esperar a que baje.', 'Manos detrás del balón.'],
  var: ['+ Con oposición de un jugador.', '− Sin salto.'],
  d: { v: [82, 20, 26, 28], p: [P(102, 34), E(92, 34)], b: [[93, 34]], a: [['pase', 92, 34, 101, 33.5, 2], ['mov', 103, 34, 101.5, 34, 0]] } });

T({ id: 'gk17', n: 'Reacción tras giro', cat: 'por', tipo: 'Portero · Técnica', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-1'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: 'Portero + entrenador', np: 2, esp: [16.5, 20], ser: '3 x 6 tiros', rec: '45"', dur: 10,
  obj: 'Reaccionar y colocarse rápido ante un tiro inesperado.',
  desc: 'El portero está de espaldas al entrenador. A la señal, gira, se coloca y para el tiro, que sale justo después del giro.',
  reglas: ['El tiro sale entre 0,5" y 1" después de la señal.', 'Alternar el sentido del giro.', 'Tiros a media potencia.'],
  cons: ['Giro corto y llegar a la posición básica.', 'Localizar el balón cuanto antes.'],
  var: ['+ Dos entrenadores y el portero no sabe quién tira.', '− Sin giro, solo reacción.'],
  d: { v: [82, 20, 26, 28], p: [P(102, 34), E(93, 31), E(93, 38)], b: [[94, 31.4]], a: [['tiro', 93, 31, 104, 36, 0]], t: [[102, 30.5, '↻', 1.4]] } });

T({ id: 'gk18', n: 'Rondo con portero 5v2', cat: 'por', tipo: 'Portero · Juego de pies', ed: 'ICJS', dif: 2, md: ['MD-2', 'MD-1', 'MD-3'], int: 2, rpe: '4-5', carga: 'Activación', fase: 'pri',
  jug: 'Portero + 4 jugadores v 2', np: 7, esp: [15, 15], ser: '4 x 2\'', rec: '45"', dur: 10,
  obj: 'Mejorar el juego con los pies del portero bajo presión.',
  desc: 'El portero participa en un rondo 5v2 como un jugador más. Debe usar ambas piernas, controlar orientado y encontrar el pase que supera a los defensores.',
  reglas: ['Portero a dos toques.', 'Pase entre los dos defensores = punto doble.', 'Si roban por error del portero, él pasa a defender.'],
  cons: ['Perfil abierto antes de recibir.', 'Pie más alejado del defensor.'],
  var: ['+ Un toque.', '− Toques libres.'],
  d: { z: [[45, 26.5, 15, 15]], c: esq(45, 26.5, 15, 15), p: [P(52.5, 41.5), A(45, 33), A(52.5, 26.5), A(60, 33), A(58, 41.5), B(51, 34), B(55, 36)], b: [[52.5, 40.7]], a: [['pase', 52.5, 41.5, 45, 33, 0]] } });

T({ id: 'gk19', n: 'Desvío a córner en tiro raso', cat: 'por', tipo: 'Portero · Técnica', ed: 'ICJS', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: 'Portero + entrenador', np: 2, esp: [16.5, 20], ser: '3 x 6 por lado', rec: '1\'', dur: 12,
  obj: 'Desviar fuera del alcance de los rematadores los tiros rasos junto al poste.',
  desc: 'Tiros rasos y fuertes junto al poste desde 11-14 m. El portero no intenta blocar: desvía con la palma de la mano hacia fuera, hacia el córner.',
  reglas: ['Desvío siempre hacia fuera, nunca al centro.', 'Alternar lados.', 'Volumen moderado.'],
  cons: ['Mano más cercana al suelo, palma firme.', 'Caída lateral completa.'],
  var: ['+ Rematador que busca el rechace.', '− Tiros a media potencia.'],
  d: { v: [82, 18, 26, 32], p: [P(104, 34), E(92, 34), A(95, 40)], b: [[93, 34.3]], a: [['tiro', 92, 34, 104.2, 37.4, 0], ['pase', 104.5, 37.6, 102, 44, 0]] } });

T({ id: 'gk20', n: '1v1 desde la banda (ángulo cerrado)', cat: 'por', tipo: 'Portero · Táctica', ed: 'CJS', dif: 2, md: ['MD-3', 'MD-2'], int: 3, rpe: '6-7', carga: 'Velocidad', fase: 'pri',
  jug: 'Portero + 3-4 atacantes', np: 5, esp: [20, 30], ser: '3 x 5 duelos', rec: '1\'', dur: 14,
  obj: 'Defender el primer palo y el pase atrás en duelos desde un ángulo cerrado.',
  desc: 'El atacante entra conduciendo desde la banda hacia el área por un ángulo cerrado. Puede tirar al primer palo o pasar atrás a un compañero que llega al punto de penalti.',
  reglas: ['Atacante con 6" para decidir.', 'Pase atrás solo raso.', 'Alternar ambas bandas.'],
  cons: ['Cerrar el primer palo sin quedar vendido al pase atrás.', 'Manos bajas y cuerpo grande.'],
  var: ['+ Dos rematadores en el pase atrás.', '− Solo tiro.'],
  d: { v: [80, 10, 28, 40], p: [P(103, 32), A(90, 14), A(88, 34)], b: [[90.8, 14.6]], a: [['cond', 90, 14, 100, 24, 0], ['pase', 100, 24, 93, 34, 0], ['mov', 88, 34, 93, 34, 0], ['mov', 103, 33, 102.5, 30, 0]] } });

T({ id: 'gk21', n: 'Coordinación ojo-mano con pelota de tenis', cat: 'por', tipo: 'Portero · Calentamiento', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD-2', 'MD-3', 'MD-4'], int: 1, rpe: '3', carga: 'Activación', fase: 'cal',
  jug: 'Porteros por parejas', np: 2, esp: [10, 10], ser: '4 x 1\'', rec: '20"', dur: 6,
  obj: 'Activar los reflejos y la coordinación ojo-mano.',
  desc: 'Por parejas, lanzamientos con pelota de tenis: con una mano, con la mano contraria, con dos pelotas a la vez, con bote previo y desde posición de sentado.',
  reglas: ['Distancia de 3-5 m.', 'Cambiar de mano cada serie.', 'Aumentar la velocidad poco a poco.'],
  cons: ['Manos relajadas por delante del cuerpo.', 'Seguir la pelota con la mirada.'],
  var: ['+ Dos pelotas a la vez.', '− Con bote.'],
  d: { z: [[47.5, 29, 10, 10]], p: [P(49.5, 34), P(55.5, 34)], b: [[51, 33.5], [54, 35]], a: [['pase', 49.5, 33.5, 55.5, 33.5, -1.5], ['pase', 55.5, 34.5, 49.5, 34.5, -1.5]] } });

T({ id: 'gk22', n: 'Achique en contraataque 2v1 sin defensas', cat: 'por', tipo: 'Portero · Táctica', ed: 'CJS', dif: 3, md: ['MD-2', 'MD-3'], int: 3, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: 'Portero + 2 atacantes', np: 3, esp: [40, 40], ser: '3 x 4 contraataques', rec: '1\'', dur: 14,
  obj: 'Decidir cuándo salir y cuándo esperar en un 2 contra el portero.',
  desc: 'Dos atacantes llegan desde 35 m pasándose el balón. El portero ajusta su posición en cada pase, intenta anticipar el último pase y, si no puede, cierra al rematador.',
  reglas: ['Máximo 3 pases.', 'Fuera de juego desactivado.', 'Cambiar de pareja de atacantes en cada serie.'],
  cons: ['No salir mientras el pase siga siendo posible.', 'Tener paciencia y obligar al atacante a decidir.'],
  var: ['+ Atacantes más rápidos (sin límite de pases).', '− Un defensor que regresa.'],
  d: { z: [[65, 14, 40, 40]], p: [P(101, 34), A(70, 26), A(70, 42)], b: [[70.8, 26.6]], a: [['cond', 70, 26, 82, 28, 0], ['mov', 70, 42, 86, 40, 0], ['pase', 82, 28, 87, 39, 0], ['mov', 101, 34, 98, 36, 0]] } });

T({ id: 'gk23', n: 'Circuito físico-técnico de portero', cat: 'por', tipo: 'Portero · Físico', ed: 'CJS', dif: 2, md: ['MD-4'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: 'Portero + entrenador', np: 2, esp: [20, 25], ser: '4 vueltas', rec: '1\'30"', dur: 14,
  obj: 'Encadenar acciones explosivas del portero con alta intensidad.',
  desc: 'Saltos sobre dos vallas, caída lateral para blocar un balón raso, levantarse y salir a por un balón alto, y finalizar con una salida a los pies del entrenador.',
  reglas: ['Máxima intensidad en cada acción.', 'Recuperación completa entre vueltas.', 'Alternar el lado de la caída.'],
  cons: ['Recuperar la posición básica entre acciones.', 'Calidad técnica con fatiga.'],
  var: ['+ 5 vueltas.', '− Sin vallas.'],
  d: { v: [80, 18, 28, 32], h: [[99, 25, 0], [99, 28, 0]], p: [P(101, 22), E(93, 34), E(90, 42)], b: [[96, 32], [94, 40]], a: [['mov', 101, 23, 101, 29, 0], ['mov', 101, 30, 103, 35, 0], ['mov', 103, 36, 95, 41, 0]] } });
