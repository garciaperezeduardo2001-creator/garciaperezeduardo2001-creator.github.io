/* FÍSICO CONDICIONAL */
// ---------- ACTIVACIÓN Y CALENTAMIENTO ----------
T({ id: 'f01', n: 'Calentamiento dinámico en carriles', cat: 'fis', tipo: 'Activación', ed: 'AICJS', dif: 1, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1', 'MD+1'], int: 1, rpe: '2-3', carga: 'Activación', fase: 'cal',
  jug: 'Todo el equipo en filas', np: 20, esp: [20, 30], ser: '1 x 10\'', rec: '—', dur: 10,
  obj: 'Subir la temperatura y movilizar las articulaciones antes del trabajo principal.',
  desc: 'Cuatro carriles de 20 m. Los jugadores realizan ida y vuelta con ejercicios de movilidad dinámica y técnica de carrera: skipping, talones, apertura y cierre de cadera, desplazamiento lateral, zancada con giro, y terminan con dos progresivos al 70-80 %.',
  reglas: ['Ida con ejercicio, vuelta trotando.', 'Orden: movilidad → técnica de carrera → progresivos.', 'Sin paradas largas.'],
  cons: ['Postura alta y brazos activos.', 'Apoyos rápidos sobre el antepié.'],
  var: ['+ Añadir cambios de dirección al final.', '− Solo movilidad y trote (MD+1).'],
  d: { z: [[40, 22, 20, 24]], c: [...conos(40, 22, 40, 46, 5), ...conos(60, 22, 60, 46, 5, '#facc15')], p: [A(41, 25), A(41, 31), A(41, 37), A(41, 43), A(38, 25), A(38, 31), A(38, 37), A(38, 43)], a: [['mov', 41, 25, 59, 25, 0], ['mov', 41, 31, 59, 31, 0], ['mov', 41, 37, 59, 37, 0], ['mov', 41, 43, 59, 43, 0]], t: [[50, 21, 'Skipping · talones · cadera · lateral', .8]] } });

T({ id: 'f02', n: 'Activación neuromuscular: escalera, vallas y sprint', cat: 'fis', tipo: 'Activación', ed: 'ICJS', dif: 1, md: ['MD-2', 'MD-1', 'MD-4'], int: 2, rpe: '4-5', carga: 'Activación', fase: 'cal',
  jug: 'Grupos de 4-5', np: 16, esp: [25, 20], ser: '2 x 4 pasadas', rec: '30" entre pasadas', dur: 10,
  obj: 'Activar el sistema nervioso con apoyos rápidos, saltos cortos y aceleración.',
  desc: 'Circuito en línea: escalera de coordinación (dos apoyos por hueco), cuatro minivallas a pies juntos y un sprint de 5 m al final. Se vuelve caminando por el lateral.',
  reglas: ['Calidad antes que velocidad en la escalera.', 'Sprint final al 100 %.', 'Recuperación completa entre pasadas.'],
  cons: ['Rebote rápido en las vallas, poco tiempo de contacto.', 'Brazos coordinados en la aceleración.'],
  var: ['+ Sprint tras estímulo visual.', '− Sin vallas, solo escalera.'],
  d: { z: [[38, 26, 26, 16]], esc: [[40, 33.6, 5]], h: [[48, 34, 1], [50, 34, 1], [52, 34, 1], [54, 34, 1]], c: [[57, 34], [62, 34, '#facc15']], p: [A(38.5, 34), A(36, 34)], a: [['mov', 56, 34, 61.5, 34, 0], ['mov', 62, 36, 39, 38, 2]], t: [[42.5, 31.5, 'Escalera', .8], [51, 31.5, 'Vallas', .8], [59.5, 31.5, 'Sprint 5 m', .8]] } });

T({ id: 'f03', n: 'Juego de reacción por parejas (pilla-escapa)', cat: 'fis', tipo: 'Activación', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD-2'], int: 2, rpe: '5', carga: 'Velocidad', fase: 'cal',
  jug: 'Parejas', np: 16, esp: [20, 20], ser: '8 x 5 m', rec: '30"', dur: 8,
  obj: 'Mejorar la velocidad de reacción y la aceleración en forma de juego.',
  desc: 'Dos jugadores frente a frente separados 2 m en la línea central. El entrenador dice "rojo" o "azul": el color nombrado escapa hacia su línea a 5 m y el otro persigue para tocarle antes de que llegue.',
  reglas: ['Salidas desde distintas posiciones (sentado, de espaldas, tumbado).', 'Recuperación completa entre salidas.', 'Contar quién gana más duelos.'],
  cons: ['Primer paso explosivo y corto.', 'Reaccionar a la voz, no al compañero.'],
  var: ['+ Estímulo visual (cono de color).', '− Distancia de 3 m.'],
  d: { z: [[45, 26, 15, 16]], l: [[45, 34, 60, 34]], c: [...conos(45, 29, 60, 29, 4, '#ef4444'), ...conos(45, 39, 60, 39, 4, '#3b82f6')], p: [A(48, 33), B(48, 35), A(53, 33), B(53, 35), A(58, 33), B(58, 35), E(52.5, 44)], a: [['mov', 48, 33, 48, 29.5, 0], ['mov', 48, 35, 48, 30.5, 0]] } });

T({ id: 'f04', n: 'Rondo + sprint de 10 m', cat: 'fis', tipo: 'Activación', ed: 'ICJS', dif: 1, md: ['MD-1', 'MD-2'], int: 2, rpe: '5', carga: 'Velocidad', fase: 'cal',
  jug: '5v2 por grupo', np: 14, esp: [10, 10], ser: '4 x 2\'', rec: '45"', dur: 12,
  obj: 'Integrar la activación con balón y estímulos cortos de velocidad.',
  desc: 'Rondo 5v2 en un cuadrado. A la señal del entrenador, el jugador que tiene el balón lo deja y sprinta 10 m hasta un cono y vuelve trotando. Mientras, sus compañeros siguen el rondo 4v2.',
  reglas: ['Dos toques.', 'Señal cada 20-30".', 'El jugador que pierde el balón pasa al centro.'],
  cons: ['Sprint máximo pero corto.', 'Volver rápido al rondo.'],
  var: ['+ Sprint con cambio de dirección.', '− Sin sprints.'],
  d: { z: [[46, 29, 10, 10]], c: [...esq(46, 29, 10, 10), [66, 34, '#facc15']], p: [A(46, 32), A(51, 29), A(56, 34), A(52, 39), A(46.5, 37), B(50, 33), B(53, 36)], b: [[56.6, 34]], a: [['mov', 56, 34, 65.5, 34, 0]], t: [[61, 32, '10 m', .8]] } });

// ---------- FUERZA Y POTENCIA ----------
T({ id: 'f05', n: 'Circuito de fuerza con autocargas (6 estaciones)', cat: 'fis', tipo: 'Fuerza', ed: 'ICJS', dif: 1, md: ['MD-4'], int: 3, rpe: '6-7', carga: 'Tensión', fase: 'pri',
  jug: 'Parejas por estación', np: 12, esp: [25, 20], ser: '2 vueltas x 6 estaciones (30" trabajo / 30" cambio)', rec: '2\' entre vueltas', dur: 15,
  obj: 'Desarrollar la fuerza general de piernas, core y tren superior sin material.',
  desc: 'Seis estaciones en el campo: 1) sentadilla, 2) zancadas alternas, 3) plancha frontal, 4) flexiones, 5) puente de glúteo a una pierna, 6) saltos al cajón o saltos verticales. 30" de trabajo y 30" para cambiar de estación.',
  reglas: ['Técnica correcta antes que velocidad.', 'Rotación en sentido horario.', 'En infantiles, sin saltos con caída alta.'],
  cons: ['Rodilla alineada con el pie en sentadillas y zancadas.', 'Abdomen activo en las planchas.'],
  var: ['+ 40" de trabajo o añadir chaleco lastrado (sénior).', '− 20" de trabajo.'],
  d: { z: [[40, 24, 25, 20]], c: [[42, 27], [52.5, 27], [63, 27], [42, 41], [52.5, 41], [63, 41]], p: [A(43.5, 28.5), A(54, 28.5), A(64.5, 28.5), A(43.5, 42.5), A(54, 42.5), A(64.5, 42.5)], t: [[42, 25, '1 Sentadilla', .7], [52.5, 25, '2 Zancadas', .7], [63, 25, '3 Plancha', .7], [42, 46, '4 Flexiones', .7], [52.5, 46, '5 Puente', .7], [63, 46, '6 Saltos', .7]], a: [['mov', 45, 27, 50, 27, 0], ['mov', 55, 27, 60.5, 27, 0], ['mov', 63, 30, 63, 38.5, 0], ['mov', 60.5, 41, 55, 41, 0], ['mov', 50, 41, 44.5, 41, 0]] } });

T({ id: 'f06', n: 'Pliometría: vallas + aceleración', cat: 'fis', tipo: 'Fuerza', ed: 'JS', dif: 2, md: ['MD-4'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: 'Grupos de 4', np: 12, esp: [25, 15], ser: '3 series x 4 repeticiones', rec: '1\' entre reps, 3\' entre series', dur: 15,
  obj: 'Mejorar la potencia y la capacidad reactiva del tren inferior.',
  desc: 'Cinco vallas de 30-40 cm separadas 1 m: saltos a pies juntos con rebote rápido y, al pasar la última, aceleración de 10 m.',
  reglas: ['Máxima calidad: si baja la altura o el rebote, parar.', 'Volumen total moderado (60-80 contactos).', 'No hacer pliometría intensa en MD-2 o MD-1.'],
  cons: ['Contacto corto, "el suelo quema".', 'Aterrizaje con rodillas alineadas.'],
  var: ['+ Saltos unipodales o vallas más altas.', '− Vallas bajas (15-20 cm).'],
  d: { z: [[42, 28, 25, 12]], h: [[45, 34, 1], [46.5, 34, 1], [48, 34, 1], [49.5, 34, 1], [51, 34, 1]], c: [[53, 34], [63, 34, '#facc15']], p: [A(43, 34), A(40.5, 34)], a: [['mov', 53.5, 34, 62.5, 34, 0]], t: [[48, 31.5, '5 vallas · pies juntos', .75], [58, 31.5, 'Sprint 10 m', .75]] } });

T({ id: 'f07', n: 'Sprints resistidos (trineo o goma)', cat: 'fis', tipo: 'Fuerza', ed: 'JS', dif: 2, md: ['MD-4'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: 'Parejas', np: 12, esp: [30, 20], ser: '2 series x 4 x 15 m', rec: '1\'30" entre reps, 3\' entre series', dur: 16,
  obj: 'Mejorar la fuerza aplicada en la aceleración.',
  desc: 'Un jugador sprinta 15 m arrastrando un trineo (10-20 % del peso corporal) o frenado con una goma por su compañero. Tras cada pasada resistida se hace un sprint libre de 10 m (método de contraste).',
  reglas: ['Carga que no rompa la técnica de carrera.', 'Recuperación completa.', 'Contraste: resistido → libre.'],
  cons: ['Tronco inclinado hacia delante desde los tobillos.', 'Empuje completo de cadera.'],
  var: ['+ Más carga (hasta un 30 %).', '− Goma ligera.'],
  d: { z: [[40, 24, 30, 20]], c: [...conos(42, 28, 42, 40, 3), ...conos(57, 28, 57, 40, 3, '#facc15'), ...conos(67, 28, 67, 40, 3, '#22c55e')], p: [A(43, 28), B(41, 28), A(43, 34), B(41, 34), A(43, 40), B(41, 40)], a: [['mov', 43, 28, 56.5, 28, 0], ['mov', 43, 34, 56.5, 34, 0], ['mov', 57.5, 40, 66.5, 40, 0]], t: [[50, 26, '15 m resistido', .8], [62, 26, '10 m libre', .8]] } });

T({ id: 'f08', n: 'Cambios de dirección de 180° (fuerza excéntrica)', cat: 'fis', tipo: 'Fuerza', ed: 'CJS', dif: 2, md: ['MD-4'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: 'Grupos de 3-4', np: 12, esp: [20, 15], ser: '3 series x 5 reps (5+5 m)', rec: '45" entre reps, 2\' entre series', dur: 14,
  obj: 'Mejorar la capacidad de frenar y cambiar de dirección (y prevenir lesiones).',
  desc: 'Sprint de 5 m, frenada y cambio de dirección de 180° tocando la línea, y vuelta en sprint. Alternar el pie de apoyo en el giro.',
  reglas: ['Pie de giro alternando derecho e izquierdo.', 'Frenada controlada en 2-3 apoyos.', 'Ejecutar con máxima intensidad.'],
  cons: ['Bajar el centro de gravedad antes del giro.', 'Rodilla alineada, sin colapso hacia dentro.'],
  var: ['+ 10+10 m o dos cambios de dirección.', '− Giros de 90°.'],
  d: { z: [[44, 27, 16, 14]], c: [...conos(46, 29, 46, 39, 3), ...conos(51, 29, 51, 39, 3, '#facc15')], p: [A(45, 29), A(45, 34), A(45, 39)], a: [['mov', 46, 29, 50.5, 29, 0], ['mov', 50.5, 29.6, 46.5, 29.6, 0], ['mov', 46, 34, 50.5, 34, 0]], t: [[48.5, 27.5, '5 m', .8]] } });

T({ id: 'f09', n: 'Saltos y aterrizajes (pliometría básica)', cat: 'fis', tipo: 'Fuerza', ed: 'AICJ', dif: 1, md: ['MD-4', 'MD-3'], int: 2, rpe: '5', carga: 'Tensión', fase: 'pri',
  jug: 'Todo el grupo en filas', np: 16, esp: [20, 20], ser: '2 series x 5 ejercicios x 6 reps', rec: '30" entre ejercicios', dur: 12,
  obj: 'Aprender a saltar y aterrizar con buena técnica.',
  desc: 'Secuencia de saltos de baja intensidad: salto y aterrizaje estable, salto lateral, salto adelante con "congelación", saltos en zigzag y salto unipodal con aterrizaje sostenido 2".',
  reglas: ['Aterrizaje silencioso y estable.', 'Mantener 2" la posición en cada caída.', 'Progresar solo si la técnica es buena.'],
  cons: ['Rodillas hacia fuera, nunca hacia dentro.', 'Caer sobre el antepié flexionando cadera y rodilla.'],
  var: ['+ Encadenar dos saltos sin pausa.', '− Solo saltos bipodales.'],
  d: { z: [[44, 26, 18, 16]], c: [...conos(46, 29, 58, 29, 5), ...conos(46, 39, 58, 39, 5, '#facc15')], p: [A(45, 31), A(45, 34), A(45, 37)], a: [['mov', 47, 31, 49, 31, 0], ['mov', 49, 31, 51, 31, 0], ['mov', 47, 34, 49, 36, 0], ['mov', 49, 36, 51, 34, 0], ['mov', 51, 34, 53, 36, 0]] } });

// ---------- VELOCIDAD Y AGILIDAD ----------
T({ id: 'f10', n: 'Sprints lanzados 10 + 20 m', cat: 'fis', tipo: 'Velocidad', ed: 'CJS', dif: 2, md: ['MD-2'], int: 4, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 3-4', np: 12, esp: [40, 20], ser: '2 series x 3 reps', rec: '2\' entre reps, 3\' entre series', dur: 14,
  obj: 'Alcanzar la velocidad máxima con poco volumen (y proteger los isquios).',
  desc: 'Aceleración progresiva en 10-15 m y 20 m a máxima velocidad. Se recupera caminando. Bajo volumen total y descansos completos: es un estímulo de calidad.',
  reglas: ['Recuperación completa (relación 1:20 o más).', 'Parar si baja la velocidad.', 'No más de 6-8 repeticiones.'],
  cons: ['Correr "alto", con apoyos debajo de la cadera.', 'Relajar cara y hombros.'],
  var: ['+ 15 + 30 m.', '− Lanzado 10 + 10 m.'],
  d: { z: [[35, 26, 40, 16]], c: [...conos(37, 29, 37, 39, 3), ...conos(50, 29, 50, 39, 3, '#facc15'), ...conos(70, 29, 70, 39, 3, '#22c55e')], p: [A(36, 29), A(36, 34), A(36, 39)], a: [['mov', 37, 34, 69, 34, 0]], t: [[43.5, 27.5, 'Progresivo 10-15 m', .8], [60, 27.5, '20 m a tope', .8]] } });

T({ id: 'f11', n: 'Aceleraciones 5 - 10 - 15 m con salidas variadas', cat: 'fis', tipo: 'Velocidad', ed: 'ICJS', dif: 1, md: ['MD-2', 'MD-4'], int: 4, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 4', np: 16, esp: [20, 20], ser: '3 series x 3 distancias', rec: '45" entre reps, 2\' entre series', dur: 14,
  obj: 'Mejorar la aceleración desde situaciones típicas del partido.',
  desc: 'Aceleraciones de 5, 10 y 15 m partiendo desde posiciones distintas: de pie, de espaldas, tras un salto, desde sentado o tras un desplazamiento lateral.',
  reglas: ['Distancias cortas a máxima intensidad.', 'Cambiar de posición de salida en cada serie.', 'Volver caminando.'],
  cons: ['Primeros pasos cortos y potentes.', 'Inclinación del tronco en la salida.'],
  var: ['+ Salida reaccionando a un estímulo.', '− Solo salida de pie.'],
  d: { z: [[44, 26, 20, 16]], c: [...conos(46, 30, 46, 38, 3), ...conos(51, 30, 51, 38, 3, '#facc15'), ...conos(56, 30, 56, 38, 3, '#22c55e'), ...conos(61, 30, 61, 38, 3, '#ef4444')], p: [A(45, 30), A(45, 34), A(45, 38)], a: [['mov', 46, 30, 50.5, 30, 0], ['mov', 46, 34, 55.5, 34, 0], ['mov', 46, 38, 60.5, 38, 0]], t: [[48.5, 28.5, '5', .8], [53.5, 28.5, '10', .8], [58.5, 28.5, '15', .8]] } });

T({ id: 'f12', n: 'Velocidad de reacción con estímulo visual', cat: 'fis', tipo: 'Velocidad', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD-2'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 3', np: 12, esp: [15, 15], ser: '2 series x 6 reps', rec: '30" entre reps', dur: 10,
  obj: 'Decidir y acelerar rápido ante un estímulo visual.',
  desc: 'El jugador está en el centro de un cuadrado con conos de colores en las esquinas. El entrenador levanta un cono o una mano con un color y el jugador sprinta hacia ese cono y vuelve al centro.',
  reglas: ['Reaccionar solo al color.', 'Distancias de 5-7 m.', 'Mantener la calidad de los apoyos.'],
  cons: ['Posición de partida activa, sobre el antepié.', 'Cambio de dirección corto al llegar.'],
  var: ['+ Dos colores seguidos.', '− Estímulo auditivo.'],
  d: { z: [[46, 28, 12, 12]], c: [[46, 28, '#ef4444'], [58, 28, '#3b82f6'], [46, 40, '#22c55e'], [58, 40, '#facc15']], p: [A(52, 34), E(52, 44)], a: [['mov', 52, 34, 57.5, 28.5, 0]] } });

T({ id: 'f13', n: 'Agilidad: slalom con picas y salida', cat: 'fis', tipo: 'Velocidad', ed: 'AICJS', dif: 1, md: ['MD-2', 'MD-4'], int: 3, rpe: '6-7', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 4', np: 12, esp: [25, 10], ser: '2 series x 4 pasadas', rec: '45" entre pasadas', dur: 12,
  obj: 'Mejorar los cambios de dirección cortos y la coordinación.',
  desc: 'Seis picas en zigzag separadas 2 m. Los jugadores las rodean en slalom y terminan con una aceleración de 8 m. Puede hacerse con balón para integrar la técnica.',
  reglas: ['Rodear cada pica sin tocarla.', 'Sprint final al 100 %.', 'Competir por parejas en dos circuitos paralelos.'],
  cons: ['Apoyos cortos y rápidos en los cambios.', 'Mirada al frente.'],
  var: ['+ Con conducción de balón.', '− Picas en línea recta.'],
  d: { z: [[42, 29, 24, 10]], pk: [[45, 32], [47, 36], [49, 32], [51, 36], [53, 32], [55, 36]], c: [[57, 34], [65, 34, '#facc15']], p: [A(43, 34)], a: [['mov', 43, 34, 45, 34, 1], ['mov', 45.5, 34, 49, 34, -1.5], ['mov', 49.5, 34, 53, 34, 1.5], ['mov', 53.5, 34, 56.5, 34, -1], ['mov', 57, 34, 64.5, 34, 0]] } });

T({ id: 'f14', n: 'Relevos de velocidad con balón', cat: 'fis', tipo: 'Velocidad', ed: 'AI', dif: 1, md: ['MD-2', 'MD-1'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: 'Equipos de 4-5', np: 16, esp: [20, 20], ser: '6 relevos', rec: '1\' entre relevos', dur: 12,
  obj: 'Velocidad y conducción en forma de competición.',
  desc: 'Varios equipos en fila. El primero conduce el balón en slalom hasta un cono a 15 m, vuelve en sprint y entrega el balón al siguiente. Gana el equipo que termina antes.',
  reglas: ['El relevo solo sale cuando recibe el balón.', 'Si un cono se cae, hay que volver a colocarlo.', 'Cambiar el tipo de conducción en cada relevo.'],
  cons: ['Balón cerca del pie.', 'Animar al compañero.'],
  var: ['+ Con pase final a una miniportería.', '− Sin balón.'],
  d: { z: [[42, 25, 20, 18]], c: [...conos(46, 28, 58, 28, 4), ...conos(46, 34, 58, 34, 4, '#facc15'), ...conos(46, 40, 58, 40, 4, '#22c55e')], p: [A(43, 28), A(41, 28), B(43, 34), B(41, 34), N(43, 40), N(41, 40)], b: [[44, 28.6], [44, 34.6], [44, 40.6]], a: [['cond', 44, 28, 58, 29, 0], ['cond', 44, 34, 55, 35, 0]] } });

T({ id: 'f15', n: 'Duelo de velocidad 1v1 a portería', cat: 'fis', tipo: 'Velocidad', ed: 'ICJS', dif: 2, md: ['MD-2'], int: 4, rpe: '8', carga: 'Velocidad', fase: 'pri',
  jug: 'Parejas + P', np: 9, esp: [30, 30], ser: '2 series x 4 duelos', rec: '1\'30" entre duelos', dur: 14,
  obj: 'Velocidad máxima en situación competitiva con finalización.',
  desc: 'Dos jugadores salen a la vez desde 25 m a por un balón que el entrenador lanza hacia la portería. Quien llega primero ataca y el otro defiende hasta finalizar.',
  reglas: ['Máximo 8" de duelo.', 'Recuperación completa.', 'Salidas desde posiciones variadas.'],
  cons: ['Ganar la posición con el cuerpo.', 'Proteger el balón tras ganarlo.'],
  var: ['+ 2v2.', '− Uno sale con ventaja de 2 m.'],
  d: { z: [[75, 19, 30, 30]], p: [P(103.5, 34), A(78, 30), B(78, 38), E(80, 34)], b: [[92, 34]], a: [['pase', 80, 34, 91.5, 34, 0], ['mov', 78, 30, 91, 33, 0], ['mov', 78, 38, 91, 35, 0]] } });

// ---------- RSA ----------
T({ id: 'f16', n: 'RSA: 6 x 30 m con 20" de recuperación', cat: 'fis', tipo: 'RSA', ed: 'JS', dif: 3, md: ['MD-4', 'MD-3'], int: 4, rpe: '9', carga: 'Tensión', fase: 'pri',
  jug: 'Grupos de 4', np: 16, esp: [40, 20], ser: '2 series x 6 x 30 m', rec: '20" entre sprints, 4\' entre series', dur: 14,
  obj: 'Mejorar la capacidad de repetir sprints con poca recuperación.',
  desc: 'Seis sprints de 30 m con 20" de recuperación activa (trote de vuelta). Es un trabajo muy exigente, propio de los días de mayor carga.',
  reglas: ['Sprints al máximo, aunque la velocidad caiga.', 'Recuperación activa al trote.', 'Se puede medir el tiempo para calcular la caída del rendimiento.'],
  cons: ['Mantener la técnica de carrera con fatiga.', 'Respiración activa en la recuperación.'],
  var: ['+ 8 sprints o 15" de recuperación.', '− 4 sprints con 30" de recuperación.'],
  d: { z: [[36, 26, 36, 16]], c: [...conos(38, 29, 38, 39, 3), ...conos(68, 29, 68, 39, 3, '#facc15')], p: [A(37, 29), A(37, 34), A(37, 39)], a: [['mov', 38, 32, 67.5, 32, 0], ['mov', 67.5, 36, 39, 36, 0]], t: [[53, 27.5, '30 m sprint · 20" vuelta trotando', .8]] } });

T({ id: 'f17', n: 'RSA con cambio de dirección (2 x 15 m)', cat: 'fis', tipo: 'RSA', ed: 'CJS', dif: 2, md: ['MD-4'], int: 4, rpe: '8-9', carga: 'Tensión', fase: 'pri',
  jug: 'Grupos de 4', np: 16, esp: [20, 20], ser: '2 series x 6 sprints (15+15 m)', rec: '20" entre sprints, 4\' entre series', dur: 14,
  obj: 'Repetir sprints con frenada y cambio de dirección, como en el partido.',
  desc: 'Sprint de ida y vuelta (15 m + 15 m) con cambio de dirección de 180°. Se recupera 20" caminando antes del siguiente sprint.',
  reglas: ['Alternar el pie de giro.', 'Recuperación pasiva.', 'Máxima intensidad en cada repetición.'],
  cons: ['Frenada en apoyos cortos.', 'Salida explosiva tras el giro.'],
  var: ['+ Con balón en la vuelta.', '− 10 + 10 m.'],
  d: { z: [[42, 27, 20, 14]], c: [...conos(44, 30, 44, 38, 3), ...conos(59, 30, 59, 38, 3, '#facc15')], p: [A(43, 30), A(43, 34), A(43, 38)], a: [['mov', 44, 33, 58.5, 33, 0], ['mov', 58.5, 35, 44.5, 35, 0]], t: [[51.5, 28.5, '15 m ida + 15 m vuelta', .8]] } });

// ---------- RESISTENCIA ----------
T({ id: 'f18', n: 'Intermitente 15"-15"', cat: 'fis', tipo: 'Resistencia', ed: 'CJS', dif: 2, md: ['MD-3'], int: 4, rpe: '8', carga: 'Duración', fase: 'pri',
  jug: 'Grupos por nivel', np: 20, esp: [60, 40], ser: '2 series x 8\' (15" carrera / 15" pausa)', rec: '3\' entre series', dur: 20,
  obj: 'Mejorar la potencia aeróbica con carreras intermitentes.',
  desc: 'Carreras de 15" al 100-110 % de la velocidad aeróbica máxima (VAM) seguidas de 15" de pausa. La distancia de cada carrera se ajusta por grupos según su nivel (p. ej. 65-75 m).',
  reglas: ['Distancias individualizadas por grupos.', 'Se llega a la línea marcada cuando suena el pitido.', 'Pausa pasiva o caminando.'],
  cons: ['Ritmo constante, no salir a tope.', 'Grupos homogéneos.'],
  var: ['+ 10"-20" o 3 series.', '− 2 x 6\'.'],
  d: { v: [10, 10, 90, 48], z: [[20, 18, 70, 32]], c: [...conos(22, 22, 22, 46, 4), ...conos(86, 22, 86, 46, 4, '#facc15'), ...conos(83, 22, 83, 46, 4, '#22c55e')], p: [A(21, 22), A(21, 30), A(21, 38), A(21, 46)], a: [['mov', 22, 26, 85.5, 26, 0], ['mov', 22, 42, 82.5, 42, 0]], t: [[54, 20.5, '15" carrera (65-75 m según grupo) · 15" pausa', .8]] } });

T({ id: 'f19', n: 'Intervalos largos 4 x 4\' (método noruego)', cat: 'fis', tipo: 'Resistencia', ed: 'JS', dif: 3, md: ['MD-3'], int: 4, rpe: '8', carga: 'Duración', fase: 'pri',
  jug: 'Todo el grupo', np: 20, esp: [105, 68], ser: '4 x 4\' al 90-95 % FCmáx', rec: '3\' al trote suave', dur: 28,
  obj: 'Elevar el consumo máximo de oxígeno (VO2máx).',
  desc: 'Cuatro bloques de 4\' corriendo alrededor del campo o en circuito a una intensidad del 90-95 % de la frecuencia cardiaca máxima, con 3\' de trote suave entre bloques. Puede hacerse con balón en circuito de conducción.',
  reglas: ['Controlar la intensidad con pulsómetro o RPE 8.', 'Recuperación activa al 60-70 % FCmáx.', 'Programar en pretemporada o como compensación para quienes no juegan.'],
  cons: ['Ritmo constante durante los 4\'.', 'Mantener una postura de carrera eficiente.'],
  var: ['+ 5 x 4\'.', '− 3 x 4\' o 4 x 3\'.'],
  d: { v: [-5, -5, 115, 78], c: [[3, 3], [102, 3], [3, 65], [102, 65], [52.5, 3, '#facc15'], [52.5, 65, '#facc15']], p: [A(20, 3), A(30, 3), A(102, 30), A(60, 65)], a: [['mov', 30, 3, 96, 3, 0], ['mov', 102, 8, 102, 58, 0], ['mov', 96, 65, 10, 65, 0], ['mov', 3, 60, 3, 9, 0]], t: [[52.5, 34, '4\' al 90-95 % FCmáx · 3\' trote', 1.1]] } });

T({ id: 'f20', n: 'Fartlek con balón', cat: 'fis', tipo: 'Resistencia', ed: 'AICJS', dif: 1, md: ['MD-3', 'MD+2'], int: 2, rpe: '5-6', carga: 'Duración', fase: 'pri',
  jug: 'Parejas', np: 16, esp: [105, 68], ser: '2 x 8\'', rec: '2\'', dur: 18,
  obj: 'Trabajo aeróbico variado y agradable integrando el balón.',
  desc: 'Las parejas recorren el campo pasándose el balón mientras alternan ritmos según la zona: trote en las bandas, ritmo medio en las diagonales y un cambio de ritmo de 20 m en cada línea de fondo.',
  reglas: ['Pase y movimiento continuo.', 'Cambios de ritmo marcados por conos.', 'Sin paradas.'],
  cons: ['Pases a la carrera del compañero.', 'Respirar con ritmo.'],
  var: ['+ Más tiempo a ritmo medio.', '− Solo trote con pases.'],
  d: { v: [-5, -5, 115, 78], c: [[5, 5], [100, 5], [5, 63], [100, 63]], p: [A(30, 6), A(34, 12), B(80, 58), B(76, 63)], b: [[31, 6.8]], a: [['pase', 30, 6, 40, 12, 0], ['mov', 34, 12, 46, 8, 0], ['mov', 95, 8, 10, 60, -10], ['mov', 80, 58, 60, 62, 0]], t: [[52.5, 34, 'Banda = trote · diagonal = ritmo medio · fondo = cambio de ritmo', .9]] } });

T({ id: 'f21', n: 'Circuito aeróbico integrado (pase + carrera)', cat: 'fis', tipo: 'Resistencia', ed: 'ICJS', dif: 2, md: ['MD-3'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: 'Grupos de 8', np: 16, esp: [40, 40], ser: '3 x 5\'', rec: '1\'30"', dur: 20,
  obj: 'Trabajar la resistencia con acciones técnicas de pase y control.',
  desc: 'Circuito en forma de rombo: pase y seguir al cono siguiente con carrera de 20-25 m. Cada jugador pasa y sprinta a ocupar la posición a la que pasó. Ritmo alto y continuo.',
  reglas: ['Pase y seguir.', 'Máximo dos toques.', 'Dos balones a la vez para aumentar el ritmo.'],
  cons: ['Calidad técnica con fatiga.', 'Orientar el control al siguiente pase.'],
  var: ['+ Tres balones.', '− Un balón y carrera al trote.'],
  d: { z: [[32.5, 14, 40, 40]], c: [[52.5, 16], [70, 34], [52.5, 52], [35, 34]], p: [A(52.5, 18), A(68, 34), A(52.5, 50), A(37, 34), A(54.5, 18), A(37, 36)], b: [[53.4, 18.6], [37.8, 34.6]], a: [['pase', 52.5, 18, 68, 34, 0], ['mov', 52.5, 18, 66, 32, -3], ['pase', 37, 34, 52.5, 50, 0]] } });

T({ id: 'f22', n: 'Carreras de área a área (box to box)', cat: 'fis', tipo: 'Resistencia', ed: 'JS', dif: 2, md: ['MD-3'], int: 4, rpe: '8', carga: 'Duración', fase: 'pri',
  jug: 'Todo el grupo', np: 20, esp: [72, 68], ser: '2 series x 6 carreras', rec: '30-40" entre carreras, 3\' entre series', dur: 16,
  obj: 'Trabajar la potencia aeróbica y la tolerancia a la fatiga.',
  desc: 'Carreras desde el borde de un área hasta el borde de la otra (unos 72 m) en 12-14". Se vuelve caminando o trotando hasta la salida.',
  reglas: ['Tiempo objetivo por carrera según el nivel.', 'Recuperación controlada con el reloj.', 'Muy exigente: no programar cerca del partido.'],
  cons: ['Ritmo constante.', 'Recuperar respirando profundo.'],
  var: ['+ 8 carreras por serie.', '− Carreras de 50 m.'],
  d: { v: [-5, -5, 115, 78], c: [...conos(16.5, 14, 16.5, 54, 5), ...conos(88.5, 14, 88.5, 54, 5, '#facc15')], p: [A(15, 20), A(15, 28), A(15, 36), A(15, 44)], a: [['mov', 17, 24, 88, 24, 0], ['mov', 17, 40, 88, 40, 0]], t: [[52.5, 32, '≈72 m en 12-14"', 1.1]] } });

// ---------- INTEGRADO ----------
T({ id: 'f23', n: 'Circuito técnico-físico', cat: 'fis', tipo: 'Integrado', ed: 'ICJS', dif: 2, md: ['MD-4'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: 'Grupos de 4 + P', np: 9, esp: [40, 30], ser: '3 x 4\'', rec: '1\'30"', dur: 18,
  obj: 'Combinar saltos, conducción, pase y tiro a alta intensidad.',
  desc: 'Recorrido: tres vallas, conducción en slalom, pared con un apoyo y tiro a portería. Tras el tiro, el jugador vuelve al inicio en carrera.',
  reglas: ['Una salida cada 15".', 'Tiro en máximo dos toques tras la pared.', 'El apoyo rota cada serie.'],
  cons: ['Máxima intensidad en cada estación.', 'Calidad técnica con fatiga.'],
  var: ['+ Defensor pasivo antes del tiro.', '− Sin vallas.'],
  d: { z: [[68, 19, 37, 30]], h: [[71, 26, 1], [72.5, 26, 1], [74, 26, 1]], pk: [[77, 28], [79, 25], [81, 28], [83, 25]], p: [P(103.5, 34), A(69, 26), N(88, 22)], b: [[75, 26.6]], a: [['mov', 69.5, 26, 75, 26, 0], ['cond', 76, 26.5, 84, 27, 0], ['pase', 85, 27, 88, 22, 0], ['pase', 88, 22, 90, 31, 0], ['tiro', 90, 31, 104, 34, 0]] } });

T({ id: 'f24', n: 'Duelos 1v1 continuos', cat: 'fis', tipo: 'Integrado', ed: 'ICJS', dif: 2, md: ['MD-4'], int: 4, rpe: '8-9', carga: 'Tensión', fase: 'pri',
  jug: 'Parejas', np: 12, esp: [15, 10], ser: '6 x 30"', rec: '1\'', dur: 10,
  obj: 'Duelos repetidos con aceleraciones, frenadas y contacto.',
  desc: 'En un espacio pequeño con dos miniporterías, dos jugadores disputan un 1v1 continuo durante 30". Cuando el balón sale, el entrenador mete otro de inmediato.',
  reglas: ['Gol en la miniportería del rival.', 'Reposición inmediata de balón.', 'Contacto permitido dentro del reglamento.'],
  cons: ['Proteger el balón con el cuerpo.', 'Defender bajo y agresivo.'],
  var: ['+ 40" de trabajo.', '− 20" de trabajo.'],
  d: { z: [[45, 29, 15, 10]], mg: [[45, 34, 'L'], [60, 34, 'R']], p: [A(51, 33), B(54, 35), E(52.5, 41.5)], b: [[51.8, 33.5]], a: [['cond', 51, 33, 56, 31, 0]] } });

T({ id: 'f25', n: 'Test 30-15 IFT (evaluación)', cat: 'fis', tipo: 'Evaluación', ed: 'CJS', dif: 2, md: ['MD-3'], int: 4, rpe: '10', carga: 'Duración', fase: 'pri',
  jug: 'Todo el grupo', np: 20, esp: [40, 30], ser: '1 test hasta el agotamiento', rec: '—', dur: 25,
  obj: 'Medir la velocidad final del test (VIFT) para individualizar las carreras intermitentes.',
  desc: 'Carreras de ida y vuelta de 40 m durante 30" con 15" de pausa, aumentando la velocidad 0,5 km/h en cada etapa según la grabación del test. El jugador termina cuando no llega a la zona marcada en tres ocasiones.',
  reglas: ['Usar el audio oficial del test.', 'Zonas de tolerancia de 3 m en cada extremo y en el centro.', 'Repetir cada 6-8 semanas.'],
  cons: ['Usar la VIFT para calcular las distancias del intermitente 15"-15".', 'Calentamiento completo antes del test.'],
  var: ['Alternativa: Yo-Yo IR1.', 'Infantiles: test de Course-Navette.'],
  d: { z: [[32.5, 19, 40, 30]], c: [...conos(32.5, 21, 32.5, 47, 5), ...conos(52.5, 21, 52.5, 47, 5, '#facc15'), ...conos(72.5, 21, 72.5, 47, 5)], z2: [], p: [A(34, 25), A(34, 31), A(34, 37), A(34, 43)], a: [['mov', 34, 28, 71.5, 28, 0], ['mov', 71.5, 40, 34.5, 40, 0]], t: [[52.5, 18, '40 m ida y vuelta · 30" + 15" pausa', .85]] } });

T({ id: 'f26', n: 'Compensatorio MD+1 para suplentes', cat: 'fis', tipo: 'Compensatorio', ed: 'CJS', dif: 2, md: ['MD+1', 'MD+2'], int: 4, rpe: '8', carga: 'Mixta', fase: 'pri',
  jug: '4v4+2P + sprints', np: 10, esp: [30, 25], ser: '4 x 2\' juego + 6 sprints de 30 m', rec: '1\'30"', dur: 22,
  obj: 'Compensar la carga de partido que no han recibido los jugadores con pocos minutos.',
  desc: 'Mientras los titulares recuperan, los suplentes hacen un juego reducido 4v4 a alta intensidad y, al terminar, una serie de sprints de 30 m para acercarse a las exigencias del partido (alta velocidad y sprint).',
  reglas: ['Solo jugadores con menos de 45-60 minutos.', 'Juego con reposición rápida.', 'Sprints con recuperación completa.'],
  cons: ['Intensidad de partido.', 'Controlar el RPE y ajustar el volumen.'],
  var: ['+ Añadir intermitente 15"-15" (4\').', '− Solo juego reducido.'],
  d: { z: [[30, 21.5, 30, 25], [66, 24, 32, 20, '#facc15', 'Sprints 30 m']], g: [[30, 34, 'R'], [60, 34, 'L']], p: [P(31.5, 34), P(58.5, 34), A(38, 28), A(40, 40), A(50, 31), A(54, 38), B(42, 33), B(47, 40), B(51, 26), B(56, 34), A(68, 28), A(68, 34)], a: [['mov', 68.5, 28, 96, 28, 0], ['mov', 68.5, 34, 96, 34, 0]], b: [[50.8, 31.5]] } });

// ---------- AMPLIACIÓN ----------
T({ id: 'f27', n: 'Velocidad con balón: conducción en sprint', cat: 'fis', tipo: 'Velocidad', ed: 'AICJS', dif: 1, md: ['MD-2'], int: 3, rpe: '6-7', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 4', np: 12, esp: [30, 20], ser: '2 series x 4 x 20 m', rec: '1\' entre reps', dur: 12,
  obj: 'Velocidad de conducción con pocos toques y balón controlado.',
  desc: 'Conducción a máxima velocidad durante 20 m, con toques largos hacia el espacio, y parada del balón dentro de una zona de 3 x 3 m al final. Competición por parejas en carriles paralelos.',
  reglas: ['Máximo 5-6 toques en los 20 m.', 'El balón debe quedarse dentro de la zona final.', 'Recuperación completa.'],
  cons: ['Empujar el balón con el empeine exterior.', 'Mirada al frente entre toques.'],
  var: ['+ Finalizar con tiro a miniportería.', '− 15 m.'],
  d: { z: [[38, 26, 30, 16], [62, 28, 3, 3, '#facc15'], [62, 37, 3, 3, '#facc15']], c: [[40, 29.5], [40, 38.5]], p: [A(39, 29.5), B(39, 38.5)], b: [[40.8, 30], [40.8, 39]], a: [['cond', 41, 29.5, 62, 29.5, 0], ['cond', 41, 38.5, 62, 38.5, 0]], t: [[51, 27.5, '20 m conduciendo', .8]] } });

T({ id: 'f28', n: 'Circuito de coordinación con aros', cat: 'fis', tipo: 'Activación', ed: 'AI', dif: 1, md: ['MD-1', 'MD-2', 'MD-3', 'MD-4'], int: 2, rpe: '4', carga: 'Activación', fase: 'cal',
  jug: 'Grupos de 4-5', np: 15, esp: [25, 15], ser: '2 x 5 pasadas', rec: '20"', dur: 10,
  obj: 'Desarrollar la coordinación y el ritmo en edades de formación.',
  desc: 'Aros en el suelo con distintos patrones: pies juntos, a una pierna, dentro-fuera y en zigzag. Al terminar, aceleración de 5 m y pase a un compañero.',
  reglas: ['Cambiar el patrón en cada pasada.', 'Sin pisar los aros.', 'Esperar a que el compañero salga del último aro.'],
  cons: ['Apoyos sobre el antepié.', 'Brazos coordinados.'],
  var: ['+ Con balón en las manos.', '− Patrón sencillo.'],
  d: { z: [[40, 27, 25, 14]], c: [[42, 31, '#3b82f6'], [44, 33, '#ef4444'], [46, 31, '#3b82f6'], [48, 33, '#ef4444'], [50, 31, '#3b82f6'], [52, 33, '#ef4444'], [60, 32, '#facc15']], p: [A(40.5, 32), A(40.5, 36), A(40.5, 39)], a: [['mov', 53, 32, 59.5, 32, 0]], t: [[47, 29, 'Aros', .8], [56.5, 29, '5 m', .8]] } });

T({ id: 'f29', n: 'Saltos horizontales + sprint', cat: 'fis', tipo: 'Fuerza', ed: 'CJS', dif: 2, md: ['MD-4'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: 'Grupos de 4', np: 12, esp: [30, 15], ser: '3 series x 4 reps', rec: '1\' entre reps, 2\'30" entre series', dur: 15,
  obj: 'Potencia horizontal para mejorar la aceleración.',
  desc: 'Tres saltos horizontales seguidos (pies juntos o alternos tipo triple salto) y aceleración de 10 m al aterrizar.',
  reglas: ['Máxima distancia en cada salto.', 'Aterrizaje estable antes del sprint.', 'Pocas repeticiones de calidad.'],
  cons: ['Brazos activos en el impulso.', 'Caída con rodillas alineadas.'],
  var: ['+ Saltos unipodales.', '− Un solo salto.'],
  d: { z: [[38, 28, 30, 12]], c: [[40, 34], [44, 34], [48, 34], [52, 34], [62, 34, '#facc15']], p: [A(39, 34)], a: [['mov', 40, 34, 44, 34, -1.5], ['mov', 44, 34, 48, 34, -1.5], ['mov', 48, 34, 52, 34, -1.5], ['mov', 52.5, 34, 61.5, 34, 0]], t: [[46, 31, '3 saltos', .8], [57, 31, 'Sprint 10 m', .8]] } });

T({ id: 'f30', n: 'Sprints en curva', cat: 'fis', tipo: 'Velocidad', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-4'], int: 4, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 3', np: 12, esp: [30, 25], ser: '2 series x 3 por lado', rec: '1\'30" entre reps', dur: 14,
  obj: 'Entrenar el sprint curvo, muy habitual en desmarques y coberturas.',
  desc: 'Sprint de 25-30 m siguiendo un arco marcado con conos (como un desmarque de fuera a dentro). Se corre hacia ambos lados.',
  reglas: ['Mismo número de sprints a cada lado.', 'Recuperación completa.', 'Máxima intensidad.'],
  cons: ['Inclinar el cuerpo hacia el interior de la curva.', 'Brazo exterior más amplio.'],
  var: ['+ Terminar recibiendo un pase al espacio.', '− Curva más abierta.'],
  d: { z: [[38, 22, 30, 24]], c: [[40, 42], [46, 34], [53, 28], [60, 26], [66, 26, '#facc15']], p: [A(39, 44)], a: [['mov', 40, 42, 65.5, 26, 6]] } });

T({ id: 'f31', n: 'Cambios de ritmo en carrera', cat: 'fis', tipo: 'Resistencia', ed: 'ICJS', dif: 1, md: ['MD-3'], int: 3, rpe: '6-7', carga: 'Duración', fase: 'pri',
  jug: 'Todo el grupo', np: 20, esp: [60, 20], ser: '2 x 6 carreras', rec: '30" entre carreras', dur: 14,
  obj: 'Trabajar aceleraciones y desaceleraciones dentro de una carrera larga.',
  desc: 'Carreras de 60 m por tramos de 15 m: trote → sprint → trote → sprint. Los conos marcan los cambios de ritmo.',
  reglas: ['Cambio de ritmo marcado en cada cono.', 'Vuelta caminando.', 'Grupos por nivel.'],
  cons: ['Acelerar en pocos pasos.', 'Frenar sin perder la postura.'],
  var: ['+ Tramos de 10 m.', '− Solo dos cambios.'],
  d: { z: [[22.5, 26, 60, 16]], c: [...conos(24, 29, 24, 39, 3), ...conos(39, 29, 39, 39, 3, '#facc15'), ...conos(54, 29, 54, 39, 3), ...conos(69, 29, 69, 39, 3, '#facc15'), ...conos(81, 29, 81, 39, 3)], p: [A(23, 34)], a: [['mov', 24, 34, 80, 34, 0]], t: [[31.5, 27.5, 'Trote', .8], [46.5, 27.5, 'Sprint', .8], [61.5, 27.5, 'Trote', .8], [75, 27.5, 'Sprint', .8]] } });

T({ id: 'f32', n: 'Intermitente 30"-30" con balón', cat: 'fis', tipo: 'Resistencia', ed: 'CJS', dif: 2, md: ['MD-3'], int: 4, rpe: '8', carga: 'Duración', fase: 'pri',
  jug: 'Todo el grupo con balón', np: 16, esp: [50, 30], ser: '2 series x 6\' (30" conducción rápida / 30" trote)', rec: '3\'', dur: 18,
  obj: 'Potencia aeróbica integrando la conducción del balón.',
  desc: 'Recorrido rectangular de conducción. 30" a ritmo alto conduciendo (con un regate en cada esquina) y 30" de recuperación conduciendo al trote.',
  reglas: ['Cambio de ritmo con el silbato.', 'El balón siempre controlado.', 'Sentido contrario en la segunda serie.'],
  cons: ['Mantener el ritmo alto los 30".', 'Respirar en la recuperación.'],
  var: ['+ 3 series.', '− 20"-40".'],
  d: { z: [[27.5, 19, 50, 30]], c: esq(27.5, 19, 50, 30), p: [A(40, 19), A(77.5, 30), A(55, 49), A(27.5, 38)], b: [[41, 19.6], [77.5, 31], [54, 49.6], [27.5, 37]], a: [['cond', 41, 19, 72, 19, 0], ['cond', 77.5, 31, 77.5, 44, 0], ['cond', 54, 49, 33, 49, 0]] } });

T({ id: 'f33', n: 'Juego de las colas', cat: 'fis', tipo: 'Activación', ed: 'AI', dif: 1, md: ['MD-1', 'MD-2', 'MD-4'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'cal',
  jug: 'Todo el grupo', np: 16, esp: [20, 20], ser: '4 x 1\'', rec: '45"', dur: 8,
  obj: 'Aceleraciones, frenadas y cambios de dirección de forma lúdica.',
  desc: 'Cada jugador lleva un peto colgando de la cintura como una cola. Hay que robar colas sin perder la propia. Quien pierde la cola sigue jugando para recuperar una.',
  reglas: ['No se puede sujetar la cola con la mano.', 'Gana quien tenga más colas al final.', 'Espacio cerrado con conos.'],
  cons: ['Cambios de dirección con apoyos cortos.', 'Mirar alrededor.'],
  var: ['+ Con balón conduciendo.', '− Espacio más grande.'],
  d: { z: [[42.5, 24, 20, 20]], c: esq(42.5, 24, 20, 20), p: [A(46, 28), B(50, 30), A(56, 27), B(59, 33), A(48, 38), B(54, 40), A(52, 34), B(45, 34)], a: [['mov', 50, 30, 53, 33.5, 0], ['mov', 52, 34, 55, 37, 0], ['mov', 46, 28, 49.5, 29.5, 0]] } });

T({ id: 'f34', n: 'Circuito de fuerza con gomas elásticas', cat: 'fis', tipo: 'Fuerza', ed: 'CJS', dif: 1, md: ['MD-4', 'MD-3'], int: 3, rpe: '6', carga: 'Tensión', fase: 'pri',
  jug: 'Parejas por estación', np: 12, esp: [25, 20], ser: '2 vueltas x 6 estaciones (40" / 20")', rec: '2\'', dur: 16,
  obj: 'Fuerza específica en el campo con material sencillo.',
  desc: 'Estaciones con gomas: 1) sentadilla con goma, 2) remo de pie, 3) peso muerto rumano, 4) paso lateral con minibanda, 5) Pallof press y 6) aceleraciones de 5 m frenado por el compañero con goma.',
  reglas: ['40" de trabajo y 20" para cambiar.', 'Goma adecuada a cada jugador.', 'Técnica correcta.'],
  cons: ['Control en la fase de vuelta.', 'Espalda neutra.'],
  var: ['+ Gomas más duras.', '− 30" de trabajo.'],
  d: { z: [[40, 24, 25, 20]], c: [[42, 27], [52.5, 27], [63, 27], [42, 41], [52.5, 41], [63, 41]], p: [A(43.5, 28.5), B(43.5, 26), A(54, 28.5), A(64.5, 28.5), A(43.5, 42.5), A(54, 42.5), A(64.5, 42.5), B(61.5, 42.5)], t: [[42, 25, '1 Sentadilla', .7], [52.5, 25, '2 Remo', .7], [63, 25, '3 P. muerto', .7], [42, 46, '4 Lateral', .7], [52.5, 46, '5 Pallof', .7], [63, 46, '6 Sprint goma', .7]] } });

T({ id: 'f35', n: 'Desaceleraciones progresivas', cat: 'fis', tipo: 'Fuerza', ed: 'CJS', dif: 2, md: ['MD-4'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: 'Grupos de 4', np: 16, esp: [25, 20], ser: '3 series x 4 reps', rec: '45" entre reps, 2\' entre series', dur: 14,
  obj: 'Aprender a frenar rápido y de forma segura (gran demanda excéntrica).',
  desc: 'Carrera de 10-15 m acelerando y frenada en una zona de 3 m marcada con conos, terminando en posición atlética estable. Se progresa aumentando la velocidad de entrada.',
  reglas: ['Frenar dentro de la zona.', 'Mantener la posición 2" tras frenar.', 'Progresar de 70 % a 100 %.'],
  cons: ['Pasos cortos y bajar la cadera.', 'Tronco ligeramente adelantado.'],
  var: ['+ Frenada y salida lateral.', '− Velocidad moderada.'],
  d: { z: [[40, 26, 25, 16], [55, 26, 3, 16, '#ef4444', 'Frenada']], c: [...conos(42, 29, 42, 39, 3)], p: [A(41, 29), A(41, 34), A(41, 39)], a: [['mov', 42, 31.5, 55, 31.5, 0], ['mov', 42, 36.5, 55, 36.5, 0]] } });

T({ id: 'f36', n: 'Ida y vuelta progresiva 5-10-15 m', cat: 'fis', tipo: 'RSA', ed: 'CJS', dif: 2, md: ['MD-4'], int: 4, rpe: '8-9', carga: 'Tensión', fase: 'pri',
  jug: 'Grupos de 4', np: 16, esp: [20, 20], ser: '4-6 repeticiones', rec: '30" entre reps', dur: 12,
  obj: 'Repetir sprints con cambios de dirección y fuerza excéntrica.',
  desc: 'Desde la línea de salida: sprint a 5 m y vuelta, a 10 m y vuelta y a 15 m y vuelta, sin pausa (60 m en total con 5 cambios de dirección).',
  reglas: ['Tocar cada línea con la mano o el pie.', 'Alternar el pie de giro.', 'Medir el tiempo de cada repetición.'],
  cons: ['Bajar el centro de gravedad en cada giro.', 'Salida explosiva tras girar.'],
  var: ['+ 6 repeticiones con 25" de recuperación.', '− 4 repeticiones con 45".'],
  d: { z: [[43, 27, 20, 14]], c: [...conos(45, 29, 45, 39, 3), ...conos(50, 29, 50, 39, 3, '#facc15'), ...conos(55, 29, 55, 39, 3, '#22c55e'), ...conos(60, 29, 60, 39, 3, '#ef4444')], p: [A(44, 34)], a: [['mov', 45, 32, 49.5, 32, 0], ['mov', 45, 34, 54.5, 34, 0], ['mov', 45, 36, 59.5, 36, 0]], t: [[47.5, 28, '5', .8], [52.5, 28, '10', .8], [57.5, 28, '15', .8]] } });

T({ id: 'f37', n: '1v1 con carrera de recuperación defensiva', cat: 'fis', tipo: 'Integrado', ed: 'ICJS', dif: 2, md: ['MD-4', 'MD-2'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: 'Parejas + P', np: 9, esp: [35, 30], ser: '2 series x 4 duelos', rec: '1\'30"', dur: 14,
  obj: 'Sprint de recuperación defensiva, muy frecuente en el partido.',
  desc: 'El atacante sale conduciendo desde el medio campo hacia portería; el defensor sale 2 m por detrás (tras un giro de 180°) y debe alcanzarle e impedir el tiro.',
  reglas: ['El defensor sale de espaldas y gira a la señal.', 'Máximo 8" por duelo.', 'Alternar roles.'],
  cons: ['El defensor corre hacia la línea de tiro, no hacia el balón.', 'El atacante protege con el cuerpo.'],
  var: ['+ Defensor a 3 m.', '− Defensor a 1 m.'],
  d: { z: [[70, 19, 35, 30]], p: [P(103.5, 34), A(74, 32), B(72, 35)], b: [[75, 32.5]], a: [['cond', 75, 32, 92, 33, 0], ['mov', 72, 35, 90, 35.5, 0]] } });

T({ id: 'f38', n: 'Carreras de alta velocidad en diagonal', cat: 'fis', tipo: 'Resistencia', ed: 'JS', dif: 2, md: ['MD-3'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: 'Todo el grupo', np: 20, esp: [105, 68], ser: '2 series x 4 carreras de 60-70 m al 85 %', rec: '40" caminando, 3\' entre series', dur: 16,
  obj: 'Acumular metros a alta velocidad (> 19,8 km/h) como en el partido.',
  desc: 'Carreras en diagonal de esquina a esquina del área (unos 60-70 m) al 85 % de la velocidad máxima, con vuelta caminando por la línea de fondo.',
  reglas: ['Intensidad alta pero no máxima (85 %).', 'Recuperación caminando.', 'Ideal también para compensar a suplentes.'],
  cons: ['Carrera fluida y relajada.', 'Mantener la técnica hasta el final.'],
  var: ['+ 2 x 5 carreras.', '− Al 75-80 %.'],
  d: { v: [-4, -4, 113, 76], c: [[16.5, 54, '#facc15'], [88.5, 14, '#facc15'], [16.5, 14], [88.5, 54]], p: [A(15, 56), A(15, 58)], a: [['mov', 17, 53, 88, 15, 0], ['mov', 88.5, 18, 88.5, 50, 0], ['mov', 87, 54, 21, 14, 0]], t: [[52.5, 30, '60-70 m al 85 %', 1.1]] } });

// ---------- AMPLIACIÓN 2 ----------
T({ id: 'f39', n: 'RSA con balón: 6 x 25 m conduciendo', cat: 'fis', tipo: 'RSA', ed: 'CJS', dif: 2, md: ['MD-4'], int: 4, rpe: '8-9', carga: 'Tensión', fase: 'pri',
  jug: 'Grupos de 4', np: 16, esp: [35, 20], ser: '2 series x 6 sprints', rec: '20" entre sprints, 3\' entre series', dur: 14,
  obj: 'Repetir sprints conduciendo el balón, como en las transiciones del partido.',
  desc: 'Sprint de 25 m conduciendo el balón con toques largos, frenada en la zona final y vuelta al trote con el balón en las manos. 20" entre repeticiones.',
  reglas: ['Toques largos, máximo 5-6 en 25 m.', 'Frenada dentro de la zona marcada.', 'Recuperación activa.'],
  cons: ['Empujar el balón al espacio y acelerar detrás.', 'Mantener la calidad del primer toque con fatiga.'],
  var: ['+ Finalizar con pase a miniportería.', '− 4 sprints.'],
  d: { z: [[37, 26, 31, 16], [62, 26, 4, 16, '#ef4444', 'Frena']], c: conos(39, 29, 39, 39, 3), p: [A(38, 29), A(38, 34), A(38, 39)], b: [[39.8, 29.4], [39.8, 34.4], [39.8, 39.4]], a: [['cond', 39.8, 29.4, 62, 29.4, 0], ['cond', 39.8, 34.4, 62, 34.4, 0]] } });

T({ id: 'f40', n: 'Saltos laterales de patinador + cambio de dirección', cat: 'fis', tipo: 'Fuerza', ed: 'CJS', dif: 2, md: ['MD-4'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: 'Grupos de 4', np: 16, esp: [20, 15], ser: '3 series x 6 saltos por lado + sprint', rec: '1\'30"', dur: 12,
  obj: 'Potencia lateral y estabilidad de rodilla para los desplazamientos laterales.',
  desc: 'Saltos laterales de una pierna a la otra (patinador) entre dos conos a 1,5 m, con aterrizaje estable. Tras 6 saltos por lado, sprint de 8 m en diagonal.',
  reglas: ['Aterrizaje controlado de 1" en cada salto.', 'Rodilla alineada con el pie.', 'Sprint al 100 %.'],
  cons: ['Impulso desde la cadera.', 'Tronco ligeramente adelantado.'],
  var: ['+ Saltos sin pausa (reactivos).', '− Distancia de 1 m.'],
  d: { z: [[44, 27, 18, 14]], c: [[47, 31], [49, 31], [47, 37], [49, 37], [58, 28, '#facc15'], [58, 40, '#facc15']], p: [A(46, 31), A(46, 37)], a: [['mov', 47, 31, 49, 31, -1.2], ['mov', 49, 31, 47, 31, -1.2], ['mov', 49, 31, 57.5, 28.5, 0], ['mov', 49, 37, 57.5, 39.5, 0]] } });

T({ id: 'f41', n: 'Salida de espaldas a la señal', cat: 'fis', tipo: 'Velocidad', ed: 'AICJS', dif: 1, md: ['MD-2', 'MD-1'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: 'Parejas', np: 16, esp: [20, 15], ser: '2 series x 5 salidas', rec: '40"', dur: 10,
  obj: 'Giro y aceleración tras un estímulo, como al reaccionar a un balón a la espalda.',
  desc: 'El jugador de espaldas a la dirección de carrera. A la señal (palmada o color), gira y sprinta 10 m. Por parejas, compitiendo.',
  reglas: ['Giro por el lado que indique el color.', 'Sprint de 10 m.', 'Recuperación caminando.'],
  cons: ['Giro corto con los pies, no con el cuerpo.', 'Primeros pasos potentes.'],
  var: ['+ Con balón que lanza el entrenador.', '− Salida de frente.'],
  d: { z: [[44, 27, 18, 14]], c: [[47, 30], [47, 38], [57, 30, '#facc15'], [57, 38, '#facc15']], p: [A(47.5, 31), B(47.5, 37), E(45, 34)], a: [['mov', 47.5, 31, 56.5, 30.5, 0], ['mov', 47.5, 37, 56.5, 37.5, 0]], t: [[47.5, 28.5, '↺', 1.3]] } });

T({ id: 'f42', n: 'Test 505 de agilidad (evaluación)', cat: 'fis', tipo: 'Evaluación', ed: 'CJS', dif: 1, md: ['MD-3', 'MD-4'], int: 4, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: 'Todo el grupo', np: 20, esp: [20, 10], ser: '2 intentos por pierna', rec: '2\'', dur: 15,
  obj: 'Medir la capacidad de cambio de dirección de 180° con cada pierna.',
  desc: 'Carrera lanzada de 10 m hasta una línea, desde allí se cronometran 5 m hasta la línea de giro y 5 m de vuelta (los "5-0-5"). Se registra el mejor tiempo con cada pierna de giro.',
  reglas: ['Fotocélulas o cronómetro manual en la línea de 5 m.', 'Pisar la línea de giro.', 'Comparar pierna derecha e izquierda (asimetría).'],
  cons: ['Calentamiento completo antes.', 'Repetir cada 6-8 semanas.'],
  var: ['Alternativa: test de Illinois.', 'Categorías base: 505 con un solo intento por pierna.'],
  d: { z: [[40, 29, 22, 10]], c: [[42, 31], [42, 37], [52, 31, '#22c55e'], [52, 37, '#22c55e'], [57, 31, '#ef4444'], [57, 37, '#ef4444']], p: [A(41, 34)], a: [['mov', 42, 33, 56.5, 33, 0], ['mov', 56.5, 35, 52.5, 35, 0]], t: [[47, 30, '10 m', .8], [54.5, 30, '5 m', .8]] } });

T({ id: 'f43', n: 'Test de salto vertical CMJ (evaluación)', cat: 'fis', tipo: 'Evaluación', ed: 'CJS', dif: 1, md: ['MD-3', 'MD-4', 'MD-2'], int: 2, rpe: '4', carga: 'Activación', fase: 'pri',
  jug: 'Todo el grupo', np: 20, esp: [15, 10], ser: '3 intentos', rec: '30"', dur: 12,
  obj: 'Medir la potencia de piernas y controlar la fatiga neuromuscular.',
  desc: 'Salto con contramovimiento con las manos en la cintura, medido con una app de móvil o una plataforma de contacto. Se registra el mejor de tres. Repetirlo cada semana en el mismo día MD permite detectar fatiga (caída > 5-8 %).',
  reglas: ['Manos en la cintura todo el salto.', 'Mismo calentamiento y mismo día de la semana.', 'Guardar los registros por jugador.'],
  cons: ['Bajada rápida y salto máximo.', 'Aterrizar con las piernas extendidas al tocar el suelo.'],
  var: ['+ Salto a una pierna (asimetrías).', '− Solo como control de fatiga en pretemporada.'],
  d: { z: [[45, 29, 15, 10]], p: [A(48, 34), A(52.5, 34), A(57, 34), E(52.5, 38)], t: [[52.5, 31, 'CMJ · mejor de 3', .8]] } });

T({ id: 'f44', n: 'Persecución por parejas con sprint final', cat: 'fis', tipo: 'Velocidad', ed: 'AICJS', dif: 1, md: ['MD-2', 'MD-4'], int: 4, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: 'Parejas', np: 16, esp: [25, 15], ser: '2 series x 5 persecuciones', rec: '40"', dur: 12,
  obj: 'Sprints máximos motivados por la competición.',
  desc: 'Un jugador sale con 2 m de ventaja y el otro le persigue durante 15 m. Si lo toca antes de la línea, gana el perseguidor. Se alternan los papeles.',
  reglas: ['Salidas desde distintas posiciones.', 'Distancia fija de 15 m.', 'Cambiar de pareja cada serie.'],
  cons: ['Correr hasta pasar la línea, sin frenar antes.', 'Brazos activos.'],
  var: ['+ Ventaja de 1 m.', '− Ventaja de 3 m.'],
  d: { z: [[40, 27, 25, 14]], c: [[43, 30], [43, 38], [60, 30, '#facc15'], [60, 38, '#facc15']], p: [A(45, 32), B(43, 32), A(45, 36), B(43, 36)], a: [['mov', 45, 32, 59.5, 32, 0, 1], ['mov', 43, 32, 57, 32.6, 0, 1], ['mov', 45, 36, 59.5, 36, 0, 2], ['mov', 43, 36, 57, 36.6, 0, 2]] } });

T({ id: 'f45', n: 'Intermitente 10"-20" con balón', cat: 'fis', tipo: 'Resistencia', ed: 'CJS', dif: 2, md: ['MD-3'], int: 4, rpe: '8', carga: 'Duración', fase: 'pri',
  jug: 'Parejas', np: 16, esp: [50, 30], ser: '2 series x 6\' (10" rápido / 20" suave)', rec: '3\'', dur: 18,
  obj: 'Potencia aeróbica con acciones de alta intensidad muy cortas y balón.',
  desc: 'Las parejas se pasan el balón a la carrera por el campo. A la señal, 10" de pared y sprint con conducción al cono más cercano; luego 20" de pases suaves al trote.',
  reglas: ['Cambio de ritmo con el silbato.', 'El balón no se para nunca.', 'Mismo número de acciones rápidas para ambos.'],
  cons: ['Intensidad máxima en los 10".', 'Recuperar respirando sin parar.'],
  var: ['+ 3 series.', '− 10"-30".'],
  d: { z: [[27.5, 19, 50, 30]], c: [[30, 22], [52.5, 22], [75, 22], [30, 46], [52.5, 46], [75, 46]], p: [A(40, 30), A(46, 36), B(60, 28), B(66, 38)], b: [[40.9, 30.5]], a: [['pase', 40, 30, 46, 36, 0], ['cond', 46, 36, 52.5, 44, 0], ['pase', 60, 28, 66, 38, 0]] } });

T({ id: 'f46', n: 'Circuito RSA con cambios de dirección y finalización', cat: 'fis', tipo: 'RSA', ed: 'JS', dif: 3, md: ['MD-4'], int: 4, rpe: '9', carga: 'Tensión', fase: 'pri',
  jug: 'Grupos de 3 + P', np: 7, esp: [35, 30], ser: '2 series x 5 repeticiones', rec: '25" entre reps, 4\' entre series', dur: 16,
  obj: 'Repetir esfuerzos máximos con cambio de dirección y acabar con tiro.',
  desc: 'Sprint de 10 m, giro de 180°, sprint de 5 m, recibir un pase del entrenador y finalizar a portería. Recuperación de 25" caminando hasta la salida.',
  reglas: ['Cada repetición al máximo.', 'Tiro en máximo dos toques.', 'Anotar goles y tiempos.'],
  cons: ['Frenada en 2-3 apoyos.', 'Calidad técnica con fatiga.'],
  var: ['+ 6 repeticiones.', '− Sin giro.'],
  d: { z: [[70, 19, 35, 30]], c: [[74, 26], [84, 26, '#facc15']], p: [P(103.5, 34), A(73, 26), E(86, 42)], b: [[87, 41.5]], a: [['mov', 74, 25.5, 83.5, 25.5, 0, 1], ['mov', 83.5, 27, 79, 31, 0, 2], ['pase', 86, 42, 80, 32, 0, 3], ['tiro', 80, 32, 104, 33, 0, 4]] } });

// ---------- AMPLIACIÓN 3 ----------
T({ id: 'f47', n: 'Fuerza con bandas: sentadilla y zancada lateral', cat: 'fis', tipo: 'Fuerza', ed: 'ICJS', dif: 1, md: ['MD-4', 'MD-3'], int: 3, rpe: '6', carga: 'Tensión', fase: 'pri',
  jug: 'Todo el grupo', np: 20, esp: [20, 15], ser: '3 x 12 de cada ejercicio', rec: '45"', dur: 12,
  obj: 'Fuerza de piernas y cadera en el campo, sin material pesado.',
  desc: 'Con minibanda sobre las rodillas: sentadilla con pausa, zancada lateral alternando lados y sentadilla a una pierna asistida con el compañero.',
  reglas: ['Bajada lenta de 2-3".', 'Rodillas empujando la banda hacia fuera.', 'Técnica antes que número.'],
  cons: ['Peso en los talones.', 'Tronco erguido.'],
  var: ['+ Banda más dura o chaleco.', '− Sin banda.'],
  d: { z: [[42.5, 26.5, 20, 15]], p: [A(45, 30), B(48, 30), A(52, 30), B(55, 30), A(59, 30), A(45, 38), A(52, 38), A(59, 38)], a: [['mov', 45, 38, 48, 38, 0], ['mov', 52, 38, 55, 38, 0]], t: [[52.5, 34.5, 'Sentadilla · zancada lateral · unilateral', .75]] } });

T({ id: 'f48', n: 'Sprints con frenada y salida lateral', cat: 'fis', tipo: 'Velocidad', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-4'], int: 4, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 4', np: 16, esp: [25, 20], ser: '2 series x 5 reps', rec: '45" entre reps, 2\' entre series', dur: 12,
  obj: 'Acelerar, frenar y volver a acelerar hacia un lado, como al cambiar de marca.',
  desc: 'Sprint de 10 m, frenada en 3 apoyos y salida lateral de 5 m hacia el cono que señale el entrenador (izquierda o derecha).',
  reglas: ['Señal en el momento de la frenada.', 'Máxima intensidad.', 'Recuperación completa.'],
  cons: ['Bajar la cadera para frenar.', 'Primer paso lateral cruzado o de apertura.'],
  var: ['+ Señal visual (color).', '− Lado conocido.'],
  d: { z: [[42, 25, 22, 18]], c: [[44, 34], [54, 34, '#facc15'], [57, 28, '#ef4444'], [57, 40, '#3b82f6']], p: [A(43, 34), E(60, 34)], a: [['mov', 44, 34, 53.5, 34, 0, 1], ['mov', 54, 34, 56.5, 28.5, 0, 2]] } });

T({ id: 'f49', n: 'Arrastres por parejas con toalla o goma', cat: 'fis', tipo: 'Fuerza', ed: 'CJS', dif: 2, md: ['MD-4'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: 'Parejas', np: 16, esp: [25, 15], ser: '3 series x 4 x 10 m', rec: '1\' entre reps, 2\'30" entre series', dur: 14,
  obj: 'Fuerza en la aceleración con resistencia del compañero.',
  desc: 'Un jugador acelera 10 m mientras el compañero le frena sujetando una toalla o goma por la cintura. Al terminar, sprint libre de 5 m.',
  reglas: ['Resistencia constante, no tirones.', 'Cambio de roles.', 'Técnica de carrera correcta.'],
  cons: ['Inclinación desde los tobillos.', 'Empuje completo de cada paso.'],
  var: ['+ Más resistencia.', '− Solo 3 repeticiones.'],
  d: { z: [[40, 27, 25, 14]], c: [[42, 31], [42, 37], [52, 31, '#facc15'], [52, 37, '#facc15'], [57, 31, '#22c55e'], [57, 37, '#22c55e']], p: [A(43, 31), B(41, 31), A(43, 37), B(41, 37)], a: [['mov', 43, 31, 51.5, 31, 0, 1], ['mov', 41, 31, 49.5, 31, 0, 1], ['mov', 52, 31, 56.5, 31, 0, 2]] } });

T({ id: 'f50', n: 'Circuito de agilidad en estrella', cat: 'fis', tipo: 'Velocidad', ed: 'AICJS', dif: 1, md: ['MD-2', 'MD-1'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 3', np: 12, esp: [12, 12], ser: '2 series x 4 pasadas', rec: '40"', dur: 10,
  obj: 'Desplazamientos multidireccionales cortos: frontal, lateral y de espaldas.',
  desc: 'Cono central y cuatro conos a 5 m. Del centro al cono 1 de frente, vuelta de espaldas, al 2 en lateral, vuelta en lateral, al 3 en diagonal… en el orden que diga el entrenador.',
  reglas: ['Tocar cada cono con la mano.', 'Cambiar el orden en cada pasada.', 'Máxima velocidad con control.'],
  cons: ['Centro de gravedad bajo en los cambios.', 'Pasos cortos.'],
  var: ['+ Con balón en las manos.', '− Orden fijo.'],
  d: { z: [[46.5, 28, 12, 12]], c: [[52.5, 34, '#facc15'], [52.5, 29], [57.5, 34], [52.5, 39], [47.5, 34]], p: [A(51.5, 34)], a: [['mov', 52.5, 33.5, 52.5, 29.6, 0, 1], ['mov', 52.5, 30, 52.5, 33.5, 0, 2], ['mov', 53, 34, 57, 34, 0, 3], ['mov', 57, 34.5, 53, 34.5, 0, 4]] } });

T({ id: 'f51', n: 'Juego reducido 2v2 a máxima intensidad', cat: 'fis', tipo: 'Integrado', ed: 'CJS', dif: 2, md: ['MD-4'], int: 4, rpe: '9', carga: 'Tensión', fase: 'pri',
  jug: '2v2 + 2 apoyos + 2P', np: 8, esp: [20, 15], ser: '6 x 1\'', rec: '1\'30"', dur: 15,
  obj: 'Trabajo de máxima intensidad específica (aceleraciones, duelos, tiros).',
  desc: 'Partido 2v2 con porteros y dos apoyos laterales que juegan a un toque con el poseedor. Series de 1\' con reposición inmediata del balón.',
  reglas: ['Apoyos a un toque y sin marcar.', 'Reposición inmediata.', 'Cambio de parejas cada 2 series.'],
  cons: ['Intensidad máxima durante todo el minuto.', 'Usar los apoyos para desmarcarse.'],
  var: ['+ Sin apoyos.', '− Series de 45".'],
  d: { z: [[42.5, 26.5, 20, 15]], g: [[42.5, 34, 'R'], [62.5, 34, 'L']], p: [P(44, 34), P(61, 34), A(50, 31), A(55, 37), B(52, 34), B(56, 31), N(52.5, 25.5), N(52.5, 42.5)], b: [[50.8, 31.5]], a: [['pase', 50, 31, 52.5, 25.5, 0, 1], ['mov', 55, 37, 57, 33, 0, 1], ['pase', 52.5, 25.5, 57, 33, 0, 2], ['tiro', 57, 33, 62, 34, 0, 3]] } });

T({ id: 'f52', n: 'Escalera de velocidad + finalización', cat: 'fis', tipo: 'Velocidad', ed: 'AICJS', dif: 1, md: ['MD-2', 'MD-1'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 4 + P', np: 9, esp: [30, 25], ser: '2 series x 4 pasadas', rec: '40"', dur: 12,
  obj: 'Coordinación de apoyos rápidos seguida de una acción técnica.',
  desc: 'Escalera con distintos patrones (dentro-dentro, lateral, salto), recepción de un pase del entrenador y tiro a portería.',
  reglas: ['Patrón distinto en cada pasada.', 'Tiro en dos toques.', 'Recuperación caminando.'],
  cons: ['Calidad de apoyos antes que velocidad.', 'Cabeza arriba al salir de la escalera.'],
  var: ['+ Defensor pasivo antes del tiro.', '− Sin tiro.'],
  d: { z: [[75, 21.5, 30, 25]], esc: [[78, 33.6, 5]], p: [P(103.5, 34), A(77, 34), E(90, 44)], b: [[89, 43.5]], a: [['mov', 77.5, 34, 83.5, 34, 0, 1], ['pase', 90, 44, 87, 35, 0, 2], ['mov', 83.5, 34, 86.5, 34.5, 0, 2], ['tiro', 87, 35, 104, 33, 0, 3]] } });

T({ id: 'f53', n: 'Resistencia: carrera continua variable 20\'', cat: 'fis', tipo: 'Resistencia', ed: 'ICJS', dif: 1, md: ['MD+2', 'MD-3'], int: 2, rpe: '5', carga: 'Duración', fase: 'pri',
  jug: 'Todo el grupo', np: 20, esp: [105, 68], ser: '1 x 20\'', rec: '—', dur: 20,
  obj: 'Base aeróbica en pretemporada o compensación para quienes no juegan.',
  desc: 'Carrera continua alrededor del campo: 3\' a ritmo cómodo y 1\' a ritmo más rápido, cinco veces. Ideal para pretemporada o para jugadores con pocos minutos.',
  reglas: ['Se debe poder hablar en el tramo cómodo.', 'Ritmo rápido sin llegar a sprint.', 'Grupos por nivel.'],
  cons: ['Respiración regular.', 'Postura relajada.'],
  var: ['+ 25\'.', '− 15\'.'],
  d: { v: [-5, -5, 115, 78], c: [[3, 3], [102, 3], [3, 65], [102, 65]], p: [A(30, 3), A(34, 3), A(102, 40), A(60, 65)], a: [['mov', 36, 3, 96, 3, 0], ['mov', 102, 8, 102, 58, 0], ['mov', 96, 65, 10, 65, 0]], t: [[52.5, 34, '3\' cómodo + 1\' rápido · x5', 1.1]] } });

T({ id: 'f54', n: 'Pliometría unipodal: saltos en zigzag', cat: 'fis', tipo: 'Fuerza', ed: 'JS', dif: 3, md: ['MD-4'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: 'Grupos de 4', np: 12, esp: [20, 12], ser: '3 series x 2 pasadas por pierna', rec: '1\'30"', dur: 12,
  obj: 'Potencia unipodal y estabilidad de tobillo y rodilla.',
  desc: 'Saltos a una pierna en zigzag entre seis conos separados 1 m, con contacto corto, y aceleración de 5 m al terminar.',
  reglas: ['Solo con buena técnica bipodal previa.', 'Volumen bajo.', 'Ambas piernas por igual.'],
  cons: ['Aterrizaje con rodilla alineada.', 'Contacto corto y elástico.'],
  var: ['+ Saltos más largos.', '− Saltos bipodales en zigzag.'],
  d: { z: [[42, 28, 22, 12]], c: [[45, 32], [47, 36], [49, 32], [51, 36], [53, 32], [55, 36], [61, 34, '#facc15']], p: [A(43, 34)], a: [['mov', 43.5, 34, 45, 32.5, 0, 1], ['mov', 45, 32.5, 47, 35.5, 0, 2], ['mov', 47, 35.5, 49, 32.5, 0, 3], ['mov', 49, 32.5, 51, 35.5, 0, 4], ['mov', 55.5, 35.5, 60.5, 34, 0, 5]] } });

T({ id: 'f55', n: 'Test Yo-Yo IR1 (evaluación)', cat: 'fis', tipo: 'Evaluación', ed: 'CJS', dif: 2, md: ['MD-3'], int: 4, rpe: '10', carga: 'Duración', fase: 'pri',
  jug: 'Todo el grupo', np: 20, esp: [25, 30], ser: '1 test hasta el agotamiento', rec: '—', dur: 25,
  obj: 'Evaluar la capacidad de repetir esfuerzos intensos con recuperaciones cortas.',
  desc: 'Carreras de ida y vuelta de 2 x 20 m al ritmo de la grabación, con 10" de recuperación activa en una zona de 5 m. La velocidad aumenta por niveles hasta que el jugador falla dos veces.',
  reglas: ['Usar el audio oficial del test.', 'Primer aviso al no llegar; segundo fallo, fin.', 'Registrar la distancia total.'],
  cons: ['Calentamiento completo.', 'Repetir cada 6-8 semanas en el mismo día MD.'],
  var: ['Alternativa: 30-15 IFT.', 'Categorías base: Course-Navette.'],
  d: { z: [[40, 19, 25, 30], [35, 19, 5, 30, '#22c55e', 'Recup.']], c: [...conos(40, 22, 40, 46, 5), ...conos(60, 22, 60, 46, 5, '#facc15')], p: [A(41, 25), A(41, 31), A(41, 37), A(41, 43)], a: [['mov', 41, 28, 59.5, 28, 0, 1], ['mov', 59.5, 40, 41.5, 40, 0, 2]], t: [[50, 18, '2 x 20 m · 10" recuperación', .85]] } });

T({ id: 'f56', n: 'Compensatorio de alta velocidad (no convocados)', cat: 'fis', tipo: 'Compensatorio', ed: 'CJS', dif: 2, md: ['MD+1', 'MD-1'], int: 4, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: 'Jugadores sin minutos', np: 6, esp: [60, 20], ser: '6 carreras de 40 m al 90 % + 4 sprints de 20 m', rec: '1\' y 2\'', dur: 15,
  obj: 'Dar a los no convocados el estímulo de velocidad que no tuvieron en el partido.',
  desc: 'Carreras progresivas de 40 m alcanzando el 90 % en los últimos 15 m, seguidas de sprints máximos de 20 m. Se hace el día del partido después o en MD+1.',
  reglas: ['Solo jugadores con menos de 30\' jugados.', 'Recuperación completa entre sprints.', 'Calentamiento previo completo.'],
  cons: ['Correr relajado a alta velocidad.', 'Controlar molestias en isquios.'],
  var: ['+ Con balón en la última parte.', '− Solo carreras al 85 %.'],
  d: { z: [[22.5, 26, 60, 16]], c: [...conos(24, 29, 24, 39, 3), ...conos(49, 29, 49, 39, 3, '#facc15'), ...conos(64, 29, 64, 39, 3, '#22c55e')], p: [A(23, 31), A(23, 37)], a: [['mov', 24, 31, 63.5, 31, 0, 1], ['mov', 24, 37, 44, 37, 0, 2]], t: [[44, 27.5, '40 m progresivo · 20 m sprint', .85]] } });

// ---------- AMPLIACIÓN (f57 – f66) ----------
T({ id: 'f57', n: 'Contrastes: sentadilla con goma + sprint de 10 m', cat: 'fis', tipo: 'Fuerza', ed: 'JS', dif: 2, md: ['MD-4'], int: 3, rpe: '6-7', carga: 'Tensión', fase: 'pri',
  jug: 'Parejas', np: 2, esp: [20, 5], ser: '4 x (4 sentadillas + sprint)', rec: '1\'30"', dur: 12,
  obj: 'Potenciar la aceleración con el método de contraste: fuerza con resistencia seguida de un esfuerzo explosivo libre.',
  desc: 'Cuatro sentadillas rápidas con goma elástica o chaleco ligero y, inmediatamente, sprint de 10 m. El compañero descansa y luego cambian. Recuperación completa entre series.',
  reglas: ['Sentadilla rápida en la subida.', 'Sprint en menos de 5 segundos tras la última repetición.', 'Recuperación completa.'],
  cons: ['Empuja el suelo con fuerza.', 'Primeros apoyos cortos y potentes.', 'Calidad máxima: si baja la velocidad, se para.'],
  var: ['+ Sprint de 15 m con salida en reacción.', '− Sentadilla sin carga.'],
  d: { esc: [], c: [[42, 34], [52, 34, '#facc15']], p: [A(40, 34), A(40, 37)], a: [['mov', 42, 34, 52, 34, 0, 1]], t: [[41, 31, '4 sentadillas', .8], [52, 31, 'Sprint 10 m', .8]] } });

T({ id: 'f58', n: 'Juego reducido 3v3 sin porteros (potencia aeróbica)', cat: 'fis', tipo: 'Juego reducido', ed: 'ICJS', dif: 2, md: ['MD-4', 'MD-3'], int: 4, rpe: '8-9', carga: 'Duración', fase: 'pri',
  jug: '3v3', np: 6, esp: [25, 20], ser: '4 x 2\' (2 series)', rec: '1\'30" entre repeticiones, 3\' entre series', dur: 22,
  obj: 'Trabajo de alta intensidad con balón: frecuencia cardiaca alta, aceleraciones y duelos.',
  desc: 'Tres contra tres a dos miniporterías por equipo, con balones en los laterales para que no se pare el juego. El entrenador anima constantemente.',
  reglas: ['Sin saques de banda: balón nuevo inmediato.', 'Gol solo desde la mitad rival.', 'Cuenta de goles por serie.'],
  cons: ['Presión inmediata tras pérdida.', 'Intensidad máxima durante los 2 minutos.', 'Recuperar caminando y bebiendo.'],
  var: ['+ 25 x 25 m.', '− 4v4.'],
  d: { z: [[40, 24, 25, 20]], mg: [[40, 28, 'R'], [40, 40, 'R'], [65, 28, 'L'], [65, 40, 'L']], p: [A(46, 30), A(50, 38), A(54, 33), B(56, 29), B(59, 36), B(52, 41)], b: [[54.8, 33.5]], a: [['pase', 54, 33, 50, 38, 0, 1], ['cond', 50, 38, 60, 40, 0, 2], ['tiro', 60, 40, 64.5, 40, 0, 3]] } });

T({ id: 'f59', n: 'Posesión 5v5 intermitente (30" juego / 30" pausa)', cat: 'fis', tipo: 'Intermitente', ed: 'CJS', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '5v5', np: 10, esp: [30, 30], ser: '2 x 8 x (30"-30")', rec: '3\' entre series', dur: 20,
  obj: 'Potencia aeróbica en forma de posesión: esfuerzos cortos de alta intensidad con pausas activas.',
  desc: 'Posesión 5v5 durante 30 segundos a máxima intensidad; en la pausa de 30 segundos, los jugadores se pasan el balón en el sitio. Punto cada 6 pases seguidos.',
  reglas: ['30 segundos de juego, 30 de pausa activa.', '6 pases: 1 punto.', 'Balón nuevo inmediato si sale.'],
  cons: ['Máxima intensidad en los 30".', 'Movilidad constante sin balón.', 'En la pausa, respirar y soltar piernas.'],
  var: ['+ 40"-20".', '− 20"-40".'],
  d: { z: [[37.5, 19, 30, 30]], p: [A(42, 24), A(62, 24), A(42, 44), A(62, 44), A(52, 34), B(48, 30), B(57, 30), B(48, 39), B(57, 39), B(52, 25)], b: [[42.8, 24.6]], a: [['pase', 42, 24, 52, 34, 0, 1], ['pase', 52, 34, 62, 44, 0, 2], ['mov', 62, 24, 64, 30, 0, 2]] } });

T({ id: 'f60', n: 'Isometría + reactividad: sentadilla isométrica y 3 saltos', cat: 'fis', tipo: 'Fuerza', ed: 'CJS', dif: 2, md: ['MD-4'], int: 3, rpe: '6', carga: 'Tensión', fase: 'pri',
  jug: 'Individual en grupo', np: 12, esp: [15, 15], ser: '4 x (20" isométrico + 3 saltos)', rec: '1\'30"', dur: 12,
  obj: 'Fuerza isométrica de cuádriceps y glúteo seguida de saltos reactivos para transferir al juego.',
  desc: 'Sentadilla isométrica a 90° durante 20 segundos (en pared o libre) y, sin pausa, tres saltos verticales máximos con aterrizaje controlado. Termina con 5 m de aceleración.',
  reglas: ['Rodillas alineadas con los pies.', 'Saltos máximos y aterrizaje estable.', 'Si se pierde la técnica, se para.'],
  cons: ['Empuja el suelo como si quisieras romperlo.', 'Aterriza suave, con rodillas hacia fuera.', 'Brazos activos en el salto.'],
  var: ['+ Isométrico a una pierna 10" por lado.', '− 15" isométrico + 2 saltos.'],
  d: { p: [A(45, 30), A(50, 30), A(55, 30), A(45, 38), A(50, 38), A(55, 38)], c: conos(45, 44, 55, 44, 3, '#facc15'), a: [['mov', 45, 38, 45, 43, 0, 1], ['mov', 50, 38, 50, 43, 0, 1], ['mov', 55, 38, 55, 43, 0, 1]], t: [[50, 26, '20" isométrico → 3 saltos → 5 m', .8]] } });

T({ id: 'f61', n: 'Duelos de fuerza: cargas, empujes y protección de balón', cat: 'fis', tipo: 'Fuerza', ed: 'CJS', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: 'Parejas', np: 2, esp: [5, 5], ser: '6 x 15" por ejercicio', rec: '45"', dur: 14,
  obj: 'Fuerza específica de duelo: estabilidad de tronco, cargas hombro con hombro y protección del balón.',
  desc: 'Parejas en cuadrados de 5 x 5 m. 1) Empuje hombro con hombro para sacar al compañero. 2) Protección de balón 1v1 durante 15 segundos. 3) Lucha por el balón en el centro tras una señal.',
  reglas: ['Cargas legales: hombro con hombro.', 'Sin agarrones.', 'Cambio de pareja cada ejercicio.'],
  cons: ['Base ancha y centro de gravedad bajo.', 'Brazos para sentir al rival, no para empujar.', 'Tronco firme.'],
  var: ['+ Protección contra dos defensores.', '− Duelos de 10".'],
  d: { z: [[45, 28, 5, 5], [52, 28, 5, 5], [59, 28, 5, 5]], p: [A(47, 30.5), B(48.4, 30.5), A(54, 30.5), B(55.4, 30.5), A(61, 30.5), B(62.4, 30.5)], b: [[54.4, 31.6]] } });

T({ id: 'f62', n: 'Carrera con balón de 30 m y centro (velocidad específica)', cat: 'fis', tipo: 'Velocidad', ed: 'ICJS', dif: 2, md: ['MD-3', 'MD-2'], int: 4, rpe: '7-8', carga: 'Velocidad', fase: 'pri',
  jug: 'Dos filas + rematadores + P', np: 10, esp: [40, 40], ser: '2 x 5 repeticiones por jugador', rec: '1\' entre repeticiones', dur: 15,
  obj: 'Velocidad máxima con balón por banda y centro al área, como en el partido.',
  desc: 'Pase al espacio del entrenador; el extremo esprinta 30 m, conduce y centra al área, donde dos compañeros que han esprintado desde el medio rematan.',
  reglas: ['Sprint máximo en cada repetición.', 'Centro antes de la línea de fondo.', 'Recuperación completa: se rota.'],
  cons: ['Conducción larga con el exterior.', 'Levanta la cabeza antes de centrar.', 'Rematadores: llegar a la vez que el balón.'],
  var: ['+ Defensor que persigue.', '− Sin balón: sprint y centro desde parado.'],
  d: { v: [60, -2, 48, 50], p: [P(103, 34), A(68, 6), A(70, 26), A(70, 36), E(64, 14)], b: [[65, 13]], a: [['pase', 64, 14, 80, 5, 0, 1], ['mov', 68, 6, 80, 5, 0, 1], ['cond', 80, 5, 96, 6, 0, 2], ['mov', 70, 26, 96, 30, 0, 2], ['mov', 70, 36, 92, 38, 0, 2], ['pase', 96, 6, 96, 30, -1, 3], ['tiro', 96, 30, 104.5, 36, 0, 4]] } });

T({ id: 'f63', n: 'Repliegue de 40 m + duelo defensivo', cat: 'fis', tipo: 'RSA', ed: 'CJS', dif: 3, md: ['MD-4', 'MD-3'], int: 4, rpe: '8', carga: 'Velocidad', fase: 'pri',
  jug: 'Parejas + P', np: 6, esp: [45, 30], ser: '2 x 5 repeticiones', rec: '30" entre repeticiones, 3\' entre series', dur: 16,
  obj: 'Repetir esfuerzos de repliegue a máxima velocidad y llegar a tiempo a defender un 1v1.',
  desc: 'El defensor empieza en el área rival (simulando que ha perdido el balón) y esprinta 40 m de vuelta. A la vez, un atacante sale conduciendo desde el medio campo. Cuando se encuentran, 1v1 hasta tiro o robo.',
  reglas: ['El atacante sale cuando el defensor pasa un cono.', '1v1 hasta tiro o robo.', 'Se cambian los roles en cada serie.'],
  cons: ['Correr hacia tu portería, no hacia el balón.', 'Al llegar, frena y perfílate.', 'No te lances.'],
  var: ['+ Repliegue de 50 m.', '− 30 m.'],
  d: { v: [-3, 10, 60, 48], p: [P(2, 34), B(48, 34), A(28, 40)], c: [[38, 34], [28, 44]], b: [[28.8, 40.5]], a: [['mov', 48, 34, 14, 34, 0, 1], ['cond', 28, 40, 18, 38, 0, 1], ['tiro', 16, 37, 0.5, 35, 0, 2]] } });

T({ id: 'f64', n: 'Rondos itinerantes de baja intensidad (aeróbico extensivo)', cat: 'fis', tipo: 'Aeróbico', ed: 'AICJS', dif: 1, md: ['MD+2', 'MD-3'], int: 2, rpe: '4-5', carga: 'Duración', fase: 'pri',
  jug: 'Grupos de 6', np: 12, esp: [40, 40], ser: '3 x 8\'', rec: '2\'', dur: 28,
  obj: 'Volumen aeróbico con balón a intensidad moderada para recuperar o construir base.',
  desc: 'Rondos 5v1 que se desplazan: cada minuto, el grupo lleva el rondo trotando hasta el siguiente cono (4 conos en un cuadrado grande). Pases sin parar durante los desplazamientos.',
  reglas: ['El rondo nunca se para.', 'Cambio de defensor cada minuto.', 'Ritmo de trote constante.'],
  cons: ['Respiración cómoda: se puede hablar.', 'Pases suaves y precisos.', 'Todos se mueven.'],
  var: ['+ 4 x 8\'.', '− 2 x 8\'.'],
  d: { c: esq(32.5, 14, 40, 40), p: [...ring(36, 18, 4, 5, 'A'), B(36, 18), ...ring(69, 50, 4, 5, 'A'), B(69, 50)], a: [['mov', 36, 18, 66, 18, 0, 1], ['mov', 69, 50, 39, 50, 0, 1]] } });

T({ id: 'f65', n: 'Frenadas y cambios de dirección con balón (45° y 90°)', cat: 'fis', tipo: 'Agilidad', ed: 'AICJS', dif: 2, md: ['MD-3', 'MD-2'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: 'Filas de 3', np: 9, esp: [20, 20], ser: '6-8 repeticiones por jugador', rec: '45"', dur: 14,
  obj: 'Técnica de frenada y cambio de dirección conduciendo, para salir del rival y proteger la rodilla.',
  desc: 'Recorrido en zigzag de conos: conducción rápida 5 m, frenada con la planta y cambio de 45°; en el último cono, cambio de 90° y pase a una miniportería.',
  reglas: ['Frenar con pasos cortos antes del cono.', 'Alternar el pie con el que se cambia.', 'Calidad antes que velocidad.'],
  cons: ['Baja la cadera antes de cambiar.', 'La rodilla no se va hacia dentro.', 'El balón siempre cerca.'],
  var: ['+ Con defensor que persigue.', '− Sin balón.'],
  d: { c: [[42, 34], [47, 30], [52, 34], [57, 30], [62, 34, '#facc15']], mg: [[62, 42, 'U']], p: [A(38, 34), A(36, 34), A(34, 34)], b: [[38.8, 34.6]], a: [['cond', 38, 34, 46.5, 30.5, 0, 1], ['cond', 46.5, 30.5, 51.5, 33.5, 0, 2], ['cond', 51.5, 33.5, 56.5, 30.5, 0, 3], ['cond', 56.5, 30.5, 61.5, 33.5, 0, 4], ['pase', 62, 34.5, 62, 41.5, 0, 5]] } });

T({ id: 'f66', n: 'Test de sprint de 30 m con parciales (evaluación)', cat: 'fis', tipo: 'Evaluación', ed: 'AICJS', dif: 1, md: ['MD-4', 'MD-3'], int: 4, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: 'Individual', np: 1, esp: [40, 5], ser: '2-3 intentos', rec: '3\'', dur: 15,
  obj: 'Medir aceleración (0-10 m) y velocidad (10-30 m) para controlar la evolución del jugador.',
  desc: 'Salida desde parado a 0,5 m de la línea. Se cronometran el paso por 10 m y la llegada a 30 m (fotocélulas, app de vídeo o dos cronometradores). Se registra el mejor intento.',
  reglas: ['Calentamiento completo antes.', 'Salida sin balanceo hacia atrás.', 'Recuperación completa entre intentos.'],
  cons: ['Primeros pasos potentes.', 'No frenar antes de la línea de 30 m.', 'Anota el mejor tiempo.'],
  var: ['+ Repetir cada 6-8 semanas.', '− Solo 10 m en edades pequeñas.'],
  d: { c: [[30, 32], [30, 36], [40, 32, '#facc15'], [40, 36, '#facc15'], [60, 32], [60, 36]], p: [A(29, 34)], a: [['mov', 30, 34, 61, 34, 0, 1]], t: [[30, 30, '0', .9], [40, 30, '10 m', .9], [60, 30, '30 m', .9]] } });
