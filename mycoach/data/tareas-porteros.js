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

// ---------- AMPLIACIÓN 2 ----------
T({ id: 'gk24', n: 'Juego aéreo con bloqueo de rivales', cat: 'por', tipo: 'Portero · Técnica', ed: 'CJS', dif: 3, md: ['MD-3', 'MD-2'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: 'Portero + 2 bloqueadores + centrador', np: 4, esp: [20, 30], ser: '3 x 6 centros', rec: '1\'', dur: 14,
  obj: 'Salir a centros con tráfico y contacto en el área pequeña.',
  desc: 'Dos jugadores se colocan delante del portero y le dificultan la salida con contacto legal mientras llega el centro. El portero decide si sale a blocar o a despejar.',
  reglas: ['Contacto sin agarrar ni empujar con las manos.', 'Centros a distintas alturas.', 'El portero avisa siempre: "¡mía!".'],
  cons: ['Rodilla arriba para protegerse.', 'Atacar el balón por encima de los rivales.'],
  var: ['+ Tres bloqueadores.', '− Bloqueadores pasivos.'],
  d: { v: [76, 0, 32, 56], g: [], p: [P(103, 34), A(100, 31), A(100, 37), N(94, 6)], b: [[94.9, 6.6]], a: [['pase', 94, 6, 100, 33, 3, 1], ['mov', 103, 34, 100.5, 33.5, 0, 1]] } });

T({ id: 'gk25', n: 'Saque rápido tras blocaje', cat: 'por', tipo: 'Portero · Juego de pies', ed: 'ICJS', dif: 2, md: ['MD-2', 'MD-1'], int: 2, rpe: '5', carga: 'Activación', fase: 'pri',
  jug: 'Portero + tirador + 2 receptores', np: 4, esp: [50, 68], ser: '3 x 6 acciones', rec: '1\'', dur: 12,
  obj: 'Lanzar el contraataque nada más blocar: lectura y precisión del saque.',
  desc: 'El portero bloca un tiro y saca inmediatamente con la mano (raso) o con el pie hacia uno de los dos receptores que salen en carrera hacia las bandas. El receptor elegido es el que queda libre.',
  reglas: ['Saque en menos de 3" tras blocar.', 'Receptor a la carrera.', 'Alternar saque con la mano y con el pie.'],
  cons: ['Mirar antes de blocar dónde están los receptores.', 'Saque tenso y al espacio del receptor.'],
  var: ['+ Defensor que tapa a uno de los receptores.', '− Receptores parados.'],
  d: { v: [50, 0, 57, 68], g: [], p: [P(102, 34), E(90, 34), A(84, 14), A(84, 54)], b: [[91, 34.5]], a: [['tiro', 90, 34, 101, 34.5, 0, 1], ['mov', 84, 54, 70, 58, 0, 2], ['pase', 102, 34, 70, 57, 0, 2], ['mov', 84, 14, 72, 10, 0, 2]] } });

T({ id: 'gk26', n: 'Tiros tras pantalla de jugadores', cat: 'por', tipo: 'Portero · Técnica', ed: 'CJS', dif: 3, md: ['MD-2', 'MD-3'], int: 3, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: 'Portero + 2 pantallas + tirador', np: 4, esp: [20, 25], ser: '3 x 6 tiros', rec: '45"', dur: 12,
  obj: 'Reaccionar a tiros que aparecen tarde por detrás de jugadores.',
  desc: 'Dos jugadores (o maniquíes) se colocan entre el tirador y el portero, tapando parcialmente el balón. El tirador dispara por un lado o por el hueco entre ambos.',
  reglas: ['Pantallas quietas al principio y luego en movimiento.', 'Tiros rasos y a media altura.', 'El portero se mueve para ver el balón.'],
  cons: ['Buscar ver el balón, no adivinar.', 'Peso delante y manos preparadas.'],
  var: ['+ Pantallas que se apartan en el último momento.', '− Una sola pantalla.'],
  d: { v: [82, 20, 26, 28], p: [P(104, 34), B(97, 32.5), B(97, 35.5), A(89, 34)], b: [[90, 34.3]], a: [['tiro', 89, 34, 104.5, 31, 0]] } });

T({ id: 'gk27', n: 'Despeje con el pie fuera del área', cat: 'por', tipo: 'Portero · Juego de pies', ed: 'CJS', dif: 2, md: ['MD-3', 'MD-2'], int: 3, rpe: '6', carga: 'Duración', fase: 'pri',
  jug: 'Portero + pasador + delantero', np: 3, esp: [40, 40], ser: '3 x 5 acciones', rec: '1\'', dur: 12,
  obj: 'Salir del área y despejar con el pie con decisión ante un delantero.',
  desc: 'Balones rasos y largos a la espalda de la defensa. El portero sale fuera del área y despeja con el pie hacia la banda antes de que llegue el delantero.',
  reglas: ['Despeje siempre hacia la banda.', 'El delantero sale a la vez que el pase.', 'Si no llega, el portero vuelve a su posición.'],
  cons: ['Decidir rápido y salir con convicción.', 'Golpeo con el empeine, cuerpo encima del balón.'],
  var: ['+ Delantero con ventaja de 2 m.', '− Sin delantero.'],
  d: { v: [60, 10, 48, 50], g: [], p: [P(100, 34), A(66, 34), B(78, 40)], b: [[66.9, 34.5]], a: [['pase', 66, 34, 87, 36, 0, 1], ['mov', 100, 34, 88, 36, 0, 1], ['mov', 78, 40, 86, 38, 0, 1], ['pase', 88, 36, 84, 14, 0, 2]] } });

T({ id: 'gk28', n: 'Caídas desde rodillas (iniciación)', cat: 'por', tipo: 'Portero · Técnica', ed: 'AI', dif: 1, md: ['MD-3', 'MD-2', 'MD-4'], int: 2, rpe: '4', carga: 'Activación', fase: 'pri',
  jug: 'Porteros por parejas', np: 2, esp: [10, 10], ser: '3 x 6 caídas por lado', rec: '30"', dur: 10,
  obj: 'Aprender la caída lateral sin miedo y sin golpes.',
  desc: 'De rodillas, el compañero lanza el balón con la mano a un lado. El portero cae de lado blocando con las dos manos y el balón contra el suelo. Progresión: de cuclillas y luego de pie.',
  reglas: ['Caer sobre el costado, nunca sobre el codo.', 'Mano de abajo detrás del balón, mano de arriba encima.', 'Ambos lados por igual.'],
  cons: ['Ir hacia delante a por el balón.', 'Mirar el balón hasta tenerlo blocado.'],
  var: ['+ Desde de pie.', '− Balón rodando más lento.'],
  d: { z: [[47.5, 29, 10, 10]], p: [P(50, 34), P(55.5, 34)], b: [[54.5, 33.6]], a: [['pase', 55.5, 33.5, 50, 31.5, 0], ['mov', 50, 34, 50, 32, 0]] } });

// ---------- AMPLIACIÓN 3 ----------
T({ id: 'gk29', n: 'Paradas a media altura con desplazamiento', cat: 'por', tipo: 'Portero · Técnica', ed: 'ICJS', dif: 2, md: ['MD-3', 'MD-2'], int: 3, rpe: '6', carga: 'Duración', fase: 'pri',
  jug: 'Portero + entrenador', np: 2, esp: [16.5, 20], ser: '3 x 6 tiros', rec: '45"', dur: 12,
  obj: 'Desplazarse lateralmente y blocar balones a la altura de la cadera.',
  desc: 'El portero toca un cono a un lado, vuelve a la posición básica y bloca un balón a media altura en el lado contrario.',
  reglas: ['Desplazamiento lateral sin cruzar los pies.', 'Alternar lados.', 'Tiros a media potencia al principio.'],
  cons: ['Llegar equilibrado antes del tiro.', 'Manos por delante del cuerpo.'],
  var: ['+ Dos conos y tiros más fuertes.', '− Tiro sin desplazamiento.'],
  d: { v: [82, 20, 26, 28], c: [[102.5, 30], [102.5, 38]], p: [P(102.5, 34), E(93, 34)], b: [[94, 34]], a: [['mov', 102.5, 34, 102.5, 31, 0, 1], ['mov', 102.5, 31, 102.5, 34, 0, 2], ['tiro', 93, 34, 104, 37, 0, 3]] } });

T({ id: 'gk30', n: 'Salida al balón dividido (choque)', cat: 'por', tipo: 'Portero · Táctica', ed: 'CJS', dif: 3, md: ['MD-3', 'MD-2'], int: 4, rpe: '8', carga: 'Velocidad', fase: 'pri',
  jug: 'Portero + atacante + lanzador', np: 3, esp: [30, 30], ser: '3 x 4 acciones', rec: '1\'', dur: 12,
  obj: 'Ganar balones divididos al borde del área con decisión y sin riesgo.',
  desc: 'El entrenador envía un balón raso a la frontal; portero y atacante salen a la vez. El portero debe llegar antes y blocar o despejar con el pie.',
  reglas: ['Salida a la vez.', 'Prohibido tirarse con los pies por delante.', 'Protecciones para el contacto.'],
  cons: ['Decidir pronto y salir con convicción.', 'Cuerpo de lado si hay contacto.'],
  var: ['+ Atacante con ventaja.', '− Atacante pasivo.'],
  d: { v: [74, 14, 34, 40], p: [P(102, 34), A(80, 30), E(84, 44)], b: [[84, 43]], a: [['pase', 84, 44, 92, 36, 0, 1], ['mov', 102, 34, 93, 36, 0, 1], ['mov', 80, 30, 90, 34, 0, 1]] } });

T({ id: 'gk31', n: 'Juego de pies: control y pase largo bajo presión', cat: 'por', tipo: 'Portero · Juego de pies', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-3'], int: 2, rpe: '5', carga: 'Activación', fase: 'pri',
  jug: 'Portero + presionador + 2 receptores', np: 4, esp: [60, 50], ser: '3 x 6 acciones', rec: '1\'', dur: 12,
  obj: 'Mejorar el envío largo al lado contrario cuando hay presión cercana.',
  desc: 'Un defensor pasa atrás al portero y un delantero sale a presionar. El portero controla orientado lejos de la presión y envía en largo al receptor del lado contrario.',
  reglas: ['Máximo dos toques.', 'El envío debe caer en la zona del receptor.', 'Alternar ambos pies.'],
  cons: ['Primer control hacia el lado libre.', 'Golpeo con el empeine interior.'],
  var: ['+ Un toque.', '− Sin presionador.'],
  d: { v: [50, 6, 58, 56], g: [], z: [[56, 8, 12, 12, '#60a5fa'], [56, 48, 12, 12, '#60a5fa']], p: [P(102, 34), B(94, 24), A(88, 30), N(62, 14), N(62, 54)], b: [[94.9, 24.5]], a: [['pase', 94, 24, 101, 33, 0, 1], ['mov', 88, 30, 97, 31, 0, 2], ['pase', 102, 35, 62, 54, -4, 3]] } });

T({ id: 'gk32', n: 'Tiros desde fuera del área con rechace', cat: 'por', tipo: 'Portero · Técnica', ed: 'ICJS', dif: 2, md: ['MD-3', 'MD-4'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: 'Portero + 2 tiradores + rematador', np: 4, esp: [25, 30], ser: '3 x 5 acciones', rec: '1\'', dur: 12,
  obj: 'Blocar los tiros lejanos o desviarlos fuera del alcance del rematador.',
  desc: 'Tiro potente desde 20 m. Si el portero no bloca, un rematador intenta aprovechar el rechace. El portero debe dirigir los desvíos hacia las bandas.',
  reglas: ['Rematador sale con el tiro.', 'Rechace hacia el centro = error.', 'Alternar tiradores.'],
  cons: ['Blocar si es posible; si no, desviar fuera.', 'Levantarse rápido.'],
  var: ['+ Dos rematadores.', '− Sin rematador.'],
  d: { v: [78, 14, 30, 40], p: [P(103.5, 34), A(84, 30), A(92, 42)], b: [[84.9, 30.5]], a: [['tiro', 84, 30, 103.5, 33, 0, 1], ['mov', 92, 42, 98, 38, 0, 1], ['pase', 103.5, 33.5, 100, 26, 0, 2]] } });

T({ id: 'gk33', n: 'Velocidad de reacción con dos balones', cat: 'por', tipo: 'Portero · Técnica', ed: 'CJS', dif: 3, md: ['MD-2', 'MD-1'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: 'Portero + 2 entrenadores', np: 3, esp: [16.5, 20], ser: '4 x 5 acciones', rec: '45"', dur: 12,
  obj: 'Reaccionar al balón que realmente se lanza entre dos opciones.',
  desc: 'Dos lanzadores con balón a 8 m. Solo uno lanza, sin aviso. El portero debe reaccionar al correcto y blocar o desviar.',
  reglas: ['Los dos hacen el gesto de lanzar.', 'Lanzamientos a distintas alturas.', 'Recolocarse tras cada acción.'],
  cons: ['Mirar las manos y el balón, no el cuerpo.', 'Peso delante y pasos cortos.'],
  var: ['+ Tres lanzadores.', '− Lanzador anunciado.'],
  d: { v: [84, 22, 24, 24], p: [P(103, 34), E(95, 30), E(95, 38)], b: [[96, 30.3], [96, 38.3]], a: [['pase', 95, 38, 103.8, 36.5, 0, 1], ['mov', 103, 34, 103, 36, 0, 1]] } });

T({ id: 'gk34', n: 'Defensa del primer palo en centros rasos', cat: 'por', tipo: 'Portero · Táctica', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-3'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: 'Portero + extremo + 2 rematadores', np: 4, esp: [30, 40], ser: '3 x 6 centros', rec: '1\'', dur: 14,
  obj: 'Cortar centros rasos al primer palo y colocarse para el pase atrás.',
  desc: 'El extremo llega a línea de fondo y centra raso. El portero decide si corta el centro en el primer palo o se coloca para el remate del segundo rematador.',
  reglas: ['Centros rasos y tensos.', 'Alternar bandas.', 'Rematadores atacan primer palo y punto de penalti.'],
  cons: ['Posición cerca del primer palo cuando el balón está en línea de fondo.', 'Manos bajas.'],
  var: ['+ Un rematador más.', '− Sin rematadores.'],
  d: { v: [78, 4, 30, 52], g: [], p: [P(103, 32), A(96, 10), A(92, 28), A(90, 36)], b: [[96.9, 10.6]], a: [['cond', 96, 10, 103, 20, 0, 1], ['mov', 92, 28, 100, 30, 0, 2], ['pase', 103, 20, 101, 30, 0, 2], ['mov', 103, 32, 102, 29.5, 0, 2]] } });

T({ id: 'gk35', n: 'Circuito de agilidad específica de portero', cat: 'por', tipo: 'Portero · Físico', ed: 'ICJS', dif: 2, md: ['MD-4', 'MD-3'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: 'Portero + entrenador', np: 2, esp: [20, 20], ser: '4 vueltas', rec: '1\'30"', dur: 14,
  obj: 'Encadenar desplazamientos, caídas y levantadas a máxima velocidad.',
  desc: 'Escalera lateral, salto de una valla, caída lateral blocando un balón raso, levantarse y salir a blocar un balón alto.',
  reglas: ['Máxima intensidad.', 'Alternar el lado de caída.', 'Recuperación completa.'],
  cons: ['Recuperar la posición básica entre acciones.', 'Calidad del blocaje con fatiga.'],
  var: ['+ 5 vueltas.', '− Sin escalera.'],
  d: { v: [80, 18, 28, 32], esc: [[97, 22, 4, 1]], h: [[99.5, 28, 0]], p: [P(97.5, 21), E(91, 36)], b: [[92, 35.5]], a: [['mov', 97.5, 22, 97.5, 26, 0, 1], ['mov', 98, 27, 101, 30, 0, 2], ['pase', 91, 36, 101, 32, 0, 3], ['mov', 101, 31, 102, 37, 0, 4]] } });

T({ id: 'gk36', n: 'Mano a mano en carrera lateral', cat: 'por', tipo: 'Portero · Técnica', ed: 'CJS', dif: 3, md: ['MD-2', 'MD-3'], int: 3, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: 'Portero + 3 atacantes', np: 4, esp: [30, 30], ser: '3 x 5 duelos', rec: '1\'', dur: 12,
  obj: 'Achicar cuando el atacante encara en diagonal y no de frente.',
  desc: 'El atacante recibe en la banda del área y conduce en diagonal hacia el centro. El portero ajusta su posición y achica en el momento en que el atacante toca el balón largo.',
  reglas: ['Atacante con 6" para finalizar.', 'Entradas por ambos lados.', 'El portero no puede salir antes del primer toque.'],
  cons: ['Achicar cerrando el palo corto.', 'Salir con el cuerpo grande.'],
  var: ['+ Atacante con apoyo.', '− Conducción frontal.'],
  d: { v: [76, 14, 32, 40], p: [P(102, 34), A(88, 18)], b: [[88.9, 18.6]], a: [['cond', 88, 18, 95, 30, 0, 1], ['mov', 102, 34, 98, 31, 0, 1], ['tiro', 95, 30, 104.5, 37, 0, 2]] } });

T({ id: 'gk37', n: 'Saques de puerta: corto, medio y largo', cat: 'por', tipo: 'Portero · Juego de pies', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD-2'], int: 1, rpe: '3', carga: 'Activación', fase: 'pri',
  jug: 'Portero + 3 receptores', np: 4, esp: [70, 68], ser: '3 x 9 saques', rec: '1\'', dur: 12,
  obj: 'Dominar los tres tipos de saque de puerta según la presión rival.',
  desc: 'Tres zonas de recepción: central abierto (corto), lateral a media distancia (medio) y delantero en el centro del campo (largo). El entrenador grita la zona en el momento del saque.',
  reglas: ['Puntos según precisión.', 'Saque en menos de 5".', 'Alternar pie si es posible.'],
  cons: ['Corto: raso y tenso.', 'Largo: golpeo por debajo del balón y trayectoria tensa.'],
  var: ['+ Zonas más pequeñas.', '− Sin aviso de zona.'],
  d: { v: [30, -2, 80, 72], z: [[88, 42, 10, 10, '#60a5fa', 'Corto'], [70, 52, 12, 12, '#f59e0b', 'Medio'], [44, 28, 14, 12, '#a855f7', 'Largo']], g: [], p: [P(99, 39), A(93, 47), A(76, 58), A(51, 34)], b: [[100, 39.5]], a: [['pase', 99, 39, 93, 47, 0, 1], ['pase', 99, 39, 76, 58, 0, 2], ['pase', 99, 39, 51, 34, 5, 3]] } });

T({ id: 'gk38', n: 'Partido de porteros (fútbol-portería)', cat: 'por', tipo: 'Portero · Calentamiento', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD-2', 'MD+1'], int: 2, rpe: '4', carga: 'Activación', fase: 'cal',
  jug: '2 porteros', np: 2, esp: [20, 10], ser: '3 x 3\'', rec: '45"', dur: 10,
  obj: 'Activación lúdica: lanzar, blocar y reaccionar en competición.',
  desc: 'Dos porterías enfrentadas a 15-20 m. Cada portero intenta marcar al otro lanzando con la mano o golpeando con el pie desde su línea. Bloca y lanza rápido.',
  reglas: ['Lanzamiento desde la línea de tu portería.', 'Alternar mano y pie.', 'Partidos a 5 goles.'],
  cons: ['Posición básica antes de cada lanzamiento rival.', 'Contraatacar rápido tras blocar.'],
  var: ['+ Volea obligatoria.', '− Solo con la mano.'],
  d: { z: [[43.5, 29, 18, 10]], g: [[43.5, 34, 'R'], [61.5, 34, 'L']], p: [P(45, 34), P(60, 34)], b: [[46, 34.5]], a: [['tiro', 45, 34, 61, 32, 0, 1], ['mov', 60, 34, 60, 32.3, 0, 1]] } });
