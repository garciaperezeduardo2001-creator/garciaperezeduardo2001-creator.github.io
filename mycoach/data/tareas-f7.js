/* FÚTBOL 7 · tareas propias (campo de 60 x 40 m, porterías de fútbol 7). d.f7 = true
   Coordenadas: x = 0 (portería izquierda) → 60, y = 0 → 40. Centro (30, 20). Áreas: x 0-12 y 48-60, y 7-33. */
const F7V = [-3, -3, 66, 46], F7H = [27, -2, 36, 44];

// ---------- CALENTAMIENTO Y ACTIVACIÓN ----------
T({ id: 'f7_01', n: 'Rondo 3v1 de iniciación', cat: 'tt', tipo: 'Rondo', ed: 'PBA', dif: 1, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 1, rpe: '3-4', carga: 'Activación', fase: 'cal',
  jug: '3v1', np: 4, esp: [8, 8], ser: '4 x 2\'', rec: '30"', dur: 10,
  obj: 'Primer contacto con el balón: pase al pie, control y moverse para dar una línea de pase.',
  desc: 'Tres jugadores en un cuadrado de 8 x 8 m se pasan el balón con un defensor dentro. Cuando el defensor toca el balón, cambia el puesto con quien perdió el balón. Se montan varios cuadrados a la vez para que nadie espere.',
  reglas: ['Toques libres.', 'Los atacantes se mueven por los lados del cuadrado, nunca dentro.', 'Cada 5 pases seguidos, un punto.'],
  cons: ['Moverse para que el compañero vea el balón.', 'Pasar con el interior del pie.', 'Controlar hacia el lado contrario al defensor.'],
  var: ['+ Máximo dos toques.', '− Cuadrado de 10 x 10 m o 4v1.'],
  d: { f7: true, z: [[26, 16, 8, 8]], c: esq(26, 16, 8, 8), p: [A(26, 20), A(30, 16), A(34, 20), B(30, 20.5)], b: [[27, 20]], a: [['pase', 26, 20, 30, 16, 1], ['mov', 34, 20, 34, 23.5], ['pase', 30, 16, 34, 23.5, -1]] } });

T({ id: 'f7_02', n: 'Pilla-pilla con el balón en el pie', cat: 'jue', tipo: 'Juego de activación', ed: 'PBA', dif: 1, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 2, rpe: '4-5', carga: 'Activación', fase: 'cal',
  jug: 'Todo el grupo', np: 12, esp: [20, 20], ser: '4 x 2\'', rec: '45"', dur: 10,
  obj: 'Conducción con la cabeza levantada, cambios de ritmo y de dirección jugando.',
  desc: 'Todos conducen un balón dentro del cuadrado salvo dos «pilladores» con peto. Si un pillador toca a un jugador, este se queda quieto con el balón entre las piernas abiertas hasta que un compañero le pase por debajo.',
  reglas: ['Si el balón sale del cuadrado, también te quedas quieto.', 'Cambiar de pilladores en cada serie.', 'Se puede salvar a un compañero pasando el balón por debajo de sus piernas.'],
  cons: ['Mirar arriba mientras conduces.', 'Toques cortos para cambiar de dirección rápido.', 'Proteger el balón con el cuerpo.'],
  var: ['+ Solo se conduce con la pierna mala.', '− Los pilladores sin balón van andando.'],
  d: { f7: true, z: [[20, 10, 20, 20]], c: esq(20, 10, 20, 20), p: [C(26, 14), C(34, 25), A(23, 13), A(31, 13), A(37, 17), A(24, 22), A(29, 20), A(36, 27), A(22, 27)], b: [[24, 13.6], [32, 13.6], [37.8, 17.3], [25, 22.4], [29.8, 20.5], [36.8, 27.4], [22.8, 27.4]], a: [['cond', 29, 20, 33, 17, 1], ['mov', 26, 14, 30, 17, 0]] } });

T({ id: 'f7_03', n: 'Calentamiento preventivo jugado (tipo 11+ Kids)', cat: 'pre', tipo: 'Activación preventiva', ed: 'PBA', dif: 1, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 1, rpe: '2-3', carga: 'Activación', fase: 'cal',
  jug: 'Todo el grupo en filas', np: 12, esp: [20, 15], ser: '1 x 12\'', rec: '—', dur: 12,
  obj: 'Mejorar el equilibrio, la caída y el control del cuerpo para reducir lesiones, en forma de juego.',
  desc: 'Cuatro carriles. En cada ida se hace un ejercicio: carrera con cambios de dirección, saltos a la pata coja y aterrizaje «como un gato», equilibrio a una pierna pasándose el balón, caerse y levantarse rápido (rodar) y carrera hacia atrás. Vuelta trotando.',
  reglas: ['Aterrizar siempre con las rodillas flexionadas y mirando al frente.', 'Las rodillas no se meten hacia dentro.', 'Calidad antes que velocidad.'],
  cons: ['Aterriza en silencio.', 'Equilibrio: cuenta hasta 5 sin apoyar.', 'Al caer, rueda sobre el hombro.'],
  var: ['+ Equilibrio con los ojos cerrados (alevín).', '− Menos saltos en prebenjamín.'],
  d: { f7: true, c: [...conos(20, 13, 20, 28, 4), ...conos(40, 13, 40, 28, 4, '#facc15')], p: [A(21, 13), A(21, 18), A(21, 23), A(21, 28), A(18, 13), A(18, 18), A(18, 23), A(18, 28)], a: [['mov', 21, 13, 39, 13, 0], ['mov', 21, 18, 39, 18, 1.5], ['mov', 21, 23, 39, 23, 0], ['mov', 21, 28, 39, 28, 0]], t: [[30, 11.5, 'Cambios de dirección · saltos · equilibrio · caídas', .7]] } });

T({ id: 'f7_04', n: 'Circuito de coordinación: escalera, aros y conducción', cat: 'fis', tipo: 'Coordinación', ed: 'PBA', dif: 1, md: ['MD-4', 'MD-3', 'MD-2'], int: 2, rpe: '4-5', carga: 'Velocidad', fase: 'cal',
  jug: 'Grupos de 3-4', np: 12, esp: [25, 12], ser: '6 pasadas', rec: 'Volver andando', dur: 12,
  obj: 'Coordinación, frecuencia de apoyos y conducción, base de la velocidad en estas edades.',
  desc: 'Cada grupo en una fila: escalera de agilidad (un apoyo en cada hueco), vallas bajas o aros (saltos a pies juntos), slalom de conos conduciendo y tiro a una miniportería. Se vuelve andando por fuera.',
  reglas: ['Sale el siguiente cuando el anterior termina la escalera.', 'Cada dos pasadas cambia el apoyo de la escalera.', 'Si se toca un cono, se repite el slalom.'],
  cons: ['Apoyos con la punta del pie.', 'Brazos activos.', 'Balón cerca del pie en el slalom.'],
  var: ['+ Competición entre filas.', '− Sin balón en el slalom (prebenjamín).'],
  d: { f7: true, esc: [[17, 14, 5]], h: [[24.5, 14], [26.5, 14], [28.5, 14]], c: conos(31, 14, 39, 14, 5, '#facc15'), mg: [[44, 14, 'L']], p: [A(15, 14), A(13, 14), A(11, 14)], b: [[30.5, 15]], a: [['mov', 15, 14, 22.5, 14, 0], ['mov', 22.5, 14, 30, 14, 0], ['cond', 30.5, 15, 39.5, 15, 0], ['tiro', 39.5, 15, 43.6, 14.2, 0]] } });

T({ id: 'f7_05', n: 'Pases en cuadrado con desmarque', cat: 'tt', tipo: 'Circuito de pases', ed: 'BA', dif: 2, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 2, rpe: '4', carga: 'Activación', fase: 'cal',
  jug: 'Grupos de 5', np: 5, esp: [12, 12], ser: '4 x 2\'', rec: '30"', dur: 10,
  obj: 'Pase, control orientado y desmarque de apoyo sin oposición.',
  desc: 'Un jugador en cada cono del cuadrado (dos en el de salida). Pase al siguiente cono y seguir el balón. El que recibe se separa del cono antes de recibir (desmarque) y controla hacia el siguiente.',
  reglas: ['Sigue tu pase.', 'Control con el pie lejano.', 'Cada minuto cambiar de sentido.'],
  cons: ['Separarse del cono antes de recibir.', 'Pase al pie bueno del compañero.', 'Comunicarse: ¡mía!'],
  var: ['+ A un toque en el último cono.', '− Sin desmarque, solo pase y control.'],
  d: { f7: true, c: esq(24, 14, 12, 12), p: [A(24, 14), A(23, 13), A(36, 14), A(36, 26), A(24, 26)], b: [[24.8, 14.6]], a: [['mov', 36, 14, 34.5, 15.5, 0], ['pase', 24, 14, 34.5, 15.5, -1], ['mov', 24, 14, 34, 14, 0], ['pase', 34.5, 15.5, 36, 26, 1]] } });

T({ id: 'f7_06', n: 'Semáforo: conducción con señales de colores', cat: 'jue', tipo: 'Juego cognitivo', ed: 'PB', dif: 1, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 2, rpe: '4', carga: 'Activación', fase: 'cal',
  jug: 'Todo el grupo', np: 12, esp: [20, 20], ser: '4 x 2\'', rec: '30"', dur: 10,
  obj: 'Conducir mirando arriba, reaccionar a estímulos visuales y frenar con control.',
  desc: 'Cada jugador conduce su balón libremente. El entrenador levanta un cono: verde, conducir rápido; amarillo, conducir despacio con la suela; rojo, parar el balón con la planta y sentarse encima. El último en hacerlo da una vuelta al cuadrado.',
  reglas: ['Si el balón sale del cuadrado, una vuelta.', 'Azul: cambiar de balón con un compañero.', 'Se juega sin chocar.'],
  cons: ['Cabeza levantada para ver el color.', 'Toques suaves para poder frenar.', 'Usar las dos piernas.'],
  var: ['+ Añadir colores (blanco: regate a un cono).', '− Solo verde y rojo para los más pequeños.'],
  d: { f7: true, z: [[20, 10, 20, 20]], c: esq(20, 10, 20, 20), p: [E(30, 8), A(24, 14), A(33, 15), A(27, 24), A(36, 25), A(23, 26)], b: [[24.8, 14.5], [33.8, 15.5], [27.8, 24.5], [36.8, 25.5], [23.8, 26.5]], a: [['cond', 24, 14, 28, 18, 1.2], ['cond', 33, 15, 31, 20, -1]], t: [[30, 6.5, '🟢 rápido · 🟡 despacio · 🔴 parar', .7]] } });

// ---------- SALIDA DE BALÓN ----------
T({ id: 'f7_07', n: 'Salida de balón 1-3-3: portero + 3 contra 2', cat: 'tt', tipo: 'Juego de posición', ed: 'A', dif: 2, md: ['MD-4', 'MD-3'], int: 2, rpe: '5-6', carga: 'Duración', fase: 'pri',
  jug: '1+3v2', np: 6, esp: [30, 40], ser: '6 x 2\'', rec: '1\'', dur: 18,
  obj: 'Iniciar el juego desde el portero con los tres defensas abiertos y superar a dos delanteros rivales.',
  desc: 'En medio campo de fútbol 7. El portero inicia con el pie; los tres defensas (dos abiertos a las bandas y uno central) buscan llevar el balón hasta conducir por una de las tres puertas de conos situadas en el medio campo. Dos delanteros presionan; si roban, tiran a portería.',
  reglas: ['El portero siempre inicia en corto.', 'Punto si un defensa conduce por una puerta.', 'Los delanteros, si roban, tienen 6 segundos para tirar.'],
  cons: ['Defensas abiertos y altos, casi pisando la línea de banda.', 'Si te presionan, el portero es una ayuda: pase atrás.', 'Atrae al delantero y pasa al compañero libre.'],
  var: ['+ 3 contra 3: un centrocampista rival más.', '− 3 contra 1.'],
  d: { f7: true, v: [-3, -2, 34, 44], c: [...conos(29, 6, 29, 10, 2), ...conos(29, 17, 29, 23, 2, '#facc15'), ...conos(29, 30, 29, 34, 2)], p: [P(1.5, 20), A(10, 5), A(9, 20), A(10, 35), B(15, 13), B(15, 27)], b: [[3, 20.5]], a: [['pase', 1.5, 20, 9, 20, 0], ['mov', 15, 13, 11.5, 18, 0], ['pase', 9, 20, 10, 35, -2], ['cond', 10, 35, 28.5, 32, 0.8]] } });

T({ id: 'f7_08', n: 'Salida de balón con el portero: 1+2 contra 1 en carriles', cat: 'tt', tipo: 'Juego de posición', ed: 'BA', dif: 1, md: ['MD-4', 'MD-3', 'MD-2'], int: 2, rpe: '4-5', carga: 'Activación', fase: 'pri',
  jug: '1+2v1', np: 4, esp: [20, 30], ser: '8 repeticiones por grupo', rec: '30"', dur: 12,
  obj: 'Perder el miedo a jugar desde el portero: pase, control orientado y conducción hacia delante.',
  desc: 'El portero recibe un balón del entrenador y lo juega a uno de los dos defensas, que están abiertos. Un delantero sale a presionar desde el borde del área. Los defensas deben superar la línea de conos conduciendo o con un pase al compañero.',
  reglas: ['El delantero sale cuando el portero toca el balón.', 'El portero puede volver a recibir.', 'Se cambian los roles cada 4 repeticiones.'],
  cons: ['Abrirse antes de que el portero tenga el balón.', 'Controla hacia delante, no hacia la portería.', 'Si el delantero va a por ti, pasa al otro lado.'],
  var: ['+ Dos delanteros (alevín).', '− El delantero solo puede andar.'],
  d: { f7: true, v: [-3, 2, 26, 36], c: conos(18, 6, 18, 34, 6, '#facc15'), p: [P(1.5, 20), A(8, 8), A(8, 32), B(12, 20), E(4, 30)], b: [[5, 29]], a: [['pase', 4, 30, 1.5, 21, 0], ['pase', 1.5, 20, 8, 8, -1.2], ['mov', 12, 20, 9.5, 12, 0], ['pase', 8, 8, 8, 32, -4], ['cond', 8, 32, 17.5, 30, 0]] } });

T({ id: 'f7_09', n: 'Salida de balón 1-2-3-1 contra presión de 4', cat: 'tt', tipo: 'Juego de posición', ed: 'A', dif: 3, md: ['MD-4', 'MD-3'], int: 3, rpe: '6-7', carga: 'Duración', fase: 'pri',
  jug: '1+6v4', np: 11, esp: [40, 40], ser: '5 x 3\'', rec: '1\'30"', dur: 20,
  obj: 'Superar una presión alta con portero, dos centrales, dos carrileros y un pivote.',
  desc: 'En dos tercios del campo. El equipo que sale (portero, 2 centrales, 2 carrileros y pivote) debe llegar con el balón controlado a la zona final, donde espera un delantero propio. Cuatro rivales presionan; si roban, atacan la portería.',
  reglas: ['Gol de los que salen: balón controlado en la zona final.', 'Si el rival roba, tiene 8 segundos para finalizar.', 'Saque siempre desde el portero.'],
  cons: ['Centrales abiertos al borde del área, carrileros altos.', 'El pivote se ofrece entre los delanteros rivales.', 'Busca al jugador libre: siempre hay uno.'],
  var: ['+ Presión de 5.', '− Presión de 3.'],
  d: { f7: true, v: [-3, -2, 46, 44], z: [[34, 0, 8, 40, 'rgba(250,204,21,.18)', 'Zona final']], p: [P(1.5, 20), A(8, 12), A(8, 28), A(18, 4), A(18, 36), A(15, 20), A(37, 20), B(12, 17), B(12, 24), B(21, 12), B(21, 28)], b: [[3, 20.5]], a: [['pase', 1.5, 20, 8, 28, -1], ['mov', 15, 20, 16, 26, 0], ['pase', 8, 28, 16, 26, -1], ['pase', 16, 26, 18, 36, 1], ['cond', 18, 36, 34.5, 34, 0]] } });

// ---------- POSESIÓN ----------
T({ id: 'f7_10', n: 'Posesión 4v4 + 2 comodines', cat: 'tt', tipo: 'Posesión', ed: 'BA', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '6-7', carga: 'Tensión', fase: 'pri',
  jug: '4v4+2', np: 10, esp: [25, 20], ser: '4 x 3\'', rec: '1\'', dur: 16,
  obj: 'Mantener el balón ocupando bien el espacio: amplitud, apoyos y cambio de juego.',
  desc: 'Dos equipos de cuatro y dos comodines que juegan siempre con el que tiene el balón. Se cuenta un punto cada 6 pases seguidos. Si se roba, el otro equipo empieza a contar.',
  reglas: ['Comodines a dos toques.', 'No se puede devolver el pase a quien te lo dio.', '6 pases = 1 punto.'],
  cons: ['Abrirse: que el campo sea grande cuando tenemos el balón.', 'Siempre dos compañeros cerca para ayudar.', 'Si se roba, presionar rápido.'],
  var: ['+ Un comodín.', '− Tres comodines.'],
  d: { f7: true, z: [[17.5, 10, 25, 20]], c: esq(17.5, 10, 25, 20), p: [A(20, 12), A(40, 13), A(22, 27), A(36, 25), B(26, 16), B(33, 17), B(28, 23), B(35, 21), N(30, 10), N(30, 30)], b: [[20.8, 12.6]], a: [['pase', 20, 12, 30, 10, 0.8], ['mov', 36, 25, 39, 20, 0], ['pase', 30, 10, 39, 20, -1], ['pase', 39, 20, 30, 30, -1]] } });

T({ id: 'f7_11', n: 'Posesión 3v3 + 3 comodines', cat: 'tt', tipo: 'Posesión', ed: 'PBA', dif: 1, md: ['MD-4', 'MD-3', 'MD-2'], int: 2, rpe: '5-6', carga: 'Tensión', fase: 'pri',
  jug: '3v3+3', np: 9, esp: [18, 18], ser: '4 x 3\'', rec: '1\'', dur: 15,
  obj: 'Tener el balón con superioridad para que todos tengan éxito y muchas acciones.',
  desc: 'Tres contra tres con tres comodines (uno dentro y dos fuera, en los lados). El equipo con balón juega 6 contra 3. Se gana un punto al dar 5 pases seguidos.',
  reglas: ['Toques libres.', 'Comodines exteriores, máximo 2 toques.', 'Cambio de comodines cada serie.'],
  cons: ['Busca al compañero que está solo.', 'Pide el balón con la mano y la voz.', 'Después de pasar, muévete.'],
  var: ['+ Los comodines de fuera no pueden pasarse entre ellos.', '− Cuatro comodines.'],
  d: { f7: true, z: [[21, 11, 18, 18]], c: esq(21, 11, 18, 18), p: [A(24, 14), A(35, 15), A(27, 26), B(28, 18), B(33, 21), B(30, 25), N(30, 19.5), N(20, 20), N(40, 20)], b: [[24.8, 14.6]], a: [['pase', 24, 14, 20, 20, -1], ['pase', 20, 20, 30, 19.5, 0], ['mov', 35, 15, 37, 23, 0], ['pase', 30, 19.5, 37, 23, 1]] } });

T({ id: 'f7_12', n: 'Rondo 4v2 con salida a pasillo', cat: 'tt', tipo: 'Rondo', ed: 'A', dif: 2, md: ['MD-4', 'MD-3', 'MD-2'], int: 3, rpe: '6', carga: 'Tensión', fase: 'pri',
  jug: '4v2+2', np: 8, esp: [24, 12], ser: '6 x 2\'', rec: '45"', dur: 14,
  obj: 'Conservar, atraer y encontrar el pase hacia el otro cuadrado (progresar).',
  desc: 'Dos cuadrados de 12 x 12 m juntos. En uno, cuatro atacantes contra dos defensores; en el otro esperan dos compañeros. Tras 4 pases, se puede pasar al otro cuadrado: dos atacantes se van allí y se juega igual. Dos defensores nuevos entran.',
  reglas: ['4 pases antes de cambiar de cuadrado.', 'Pase de cambio raso.', 'Si roban los defensores, cambian con quien perdió.'],
  cons: ['Atraer a los defensores a un lado y cambiar.', 'Los del otro cuadrado se mueven para recibir.', 'Velocidad en el cambio.'],
  var: ['+ Pase de cambio a un toque.', '− 5v2.'],
  d: { f7: true, z: [[18, 14, 12, 12], [30, 14, 12, 12, 'rgba(250,204,21,.15)']], c: [...esq(18, 14, 12, 12), [42, 14], [42, 26]], p: [A(18, 20), A(24, 14), A(24, 26), A(29, 20), B(22.5, 18.5), B(25.5, 22), A(36, 16), A(38, 24)], b: [[18.8, 20.6]], a: [['pase', 18, 20, 24, 14, 1], ['pase', 24, 14, 29, 20, 1], ['mov', 38, 24, 36, 21, 0], ['pase', 29, 20, 36, 21, 0]] } });

T({ id: 'f7_13', n: 'Juego de posición 5v5 + portero en medio campo', cat: 'tt', tipo: 'Juego de posición', ed: 'A', dif: 3, md: ['MD-4', 'MD-3'], int: 3, rpe: '6-7', carga: 'Duración', fase: 'pri',
  jug: '5v5+P', np: 11, esp: [30, 40], ser: '4 x 4\'', rec: '1\'30"', dur: 22,
  obj: 'Progresar desde la defensa hasta el área con la estructura 1-2-3-1 o 1-3-2-1.',
  desc: 'Medio campo de fútbol 7 con portería grande y portero. El equipo atacante sale desde una línea de conos en el medio campo con 5 jugadores colocados según el sistema; el defensor (5) defiende la portería y, si roba, conduce hasta la línea del medio campo.',
  reglas: ['Gol normal: 1 punto. Gol tras más de 5 pases: 2.', 'El defensor gana 1 punto al cruzar la línea del medio campo conduciendo.', 'Cada ataque empieza desde el entrenador.'],
  cons: ['Amplitud: los extremos pegados a la banda.', 'Profundidad: el delantero fija a los centrales.', 'Busca al jugador entre líneas.'],
  var: ['+ Toques limitados a 3.', '− 5v4.'],
  d: { f7: true, v: F7H, c: conos(30, 0, 30, 40, 5, '#facc15'), p: [P(58.5, 20), A(33, 8), A(33, 32), A(40, 20), A(44, 5), A(52, 20), B(50, 14), B(50, 26), B(44, 20), B(46, 32), B(46, 8), E(29, 20)], b: [[31, 20.5]], a: [['pase', 29, 20, 33, 8, 1], ['pase', 33, 8, 40, 20, 1], ['mov', 44, 5, 52, 9, 0], ['pase', 40, 20, 52, 9, -1], ['tiro', 52, 9, 59.5, 18.5, 0]] } });

// ---------- JUEGO POR BANDAS ----------
T({ id: 'f7_14', n: 'Ataque por banda: extremo y carrilero 2v1 + centro', cat: 'tt', tipo: 'Finalización', ed: 'BA', dif: 2, md: ['MD-4', 'MD-3', 'MD-2'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: '2v1+2v1+P', np: 7, esp: [30, 40], ser: '10-12 ataques por lado', rec: '30" entre ataques', dur: 16,
  obj: 'Superioridad 2v1 por la banda (pared o desdoble) y centro al área con llegada.',
  desc: 'Extremo y carrilero contra un defensor en la banda. Cuando superan al defensor, centran al área, donde un delantero y un jugador que llega desde atrás rematan contra un defensa y el portero.',
  reglas: ['El centro, desde fuera del área.', 'Se alternan banda derecha e izquierda.', 'Si el defensor roba, conduce hasta el medio campo.'],
  cons: ['Si el defensor va a por el extremo, pasa al carrilero que dobla.', 'Centro raso o al punto de penalti.', 'Los rematadores llegan: uno al primer palo y otro al segundo.'],
  var: ['+ 2v2 en banda.', '− Sin defensor en el área.'],
  d: { f7: true, v: F7H, p: [P(58.5, 20), A(36, 4), A(32, 9), B(42, 6), A(40, 20), A(34, 24), B(50, 20)], b: [[36.8, 4.6]], a: [['pase', 36, 4, 32, 9, 0], ['mov', 36, 4, 48, 3, 0], ['pase', 32, 9, 48, 3, 1.5], ['mov', 40, 20, 52, 17, 0], ['pase', 48, 3, 52, 17, -2], ['tiro', 52, 17, 59.5, 21, 0]] } });

T({ id: 'f7_15', n: 'Partido 6v6 con bandas libres', cat: 'tt', tipo: 'Juego reducido', ed: 'A', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '5v5+2+2P', np: 14, esp: [50, 36], ser: '3 x 6\'', rec: '2\'', dur: 22,
  obj: 'Usar las bandas para atacar: abrir el campo, centrar y llegar al área.',
  desc: 'Partido con dos pasillos laterales de 5 m donde solo puede estar un comodín de banda (uno por lado) que juega con el equipo que ataca. Los goles tras centro desde el pasillo valen doble.',
  reglas: ['En los pasillos no se puede defender.', 'Comodines de banda a 3 toques.', 'Gol tras centro desde la banda: 2 puntos.'],
  cons: ['Abre el juego hacia la banda.', 'Cuando el balón está en la banda, llega al área.', 'Cambia de banda si un lado está cerrado.'],
  var: ['+ Que pueda entrar un defensor al pasillo.', '− Toques libres.'],
  d: { f7: true, v: F7V, z: [[5, 0, 50, 5, 'rgba(250,204,21,.18)'], [5, 35, 50, 5, 'rgba(250,204,21,.18)']], l: [[5, 5, 55, 5], [5, 35, 55, 35]], p: [P(1.5, 20), P(58.5, 20), A(12, 14), A(12, 26), A(22, 20), A(30, 12), A(38, 26), B(46, 15), B(46, 26), B(36, 18), B(28, 27), B(20, 14), N(30, 2.5), N(26, 37.5)], b: [[30.8, 12.6]], a: [['pase', 30, 12, 30, 2.5, 0], ['cond', 30, 2.5, 44, 2.5, 0], ['mov', 38, 26, 51, 21, 0], ['pase', 44, 2.5, 51, 21, -2], ['tiro', 51, 21, 59.5, 19, 0]] } });

T({ id: 'f7_16', n: 'Cambio de orientación: 4v4 a dos miniporterías por lado', cat: 'tt', tipo: 'Juego reducido', ed: 'A', dif: 3, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '4v4', np: 8, esp: [30, 25], ser: '4 x 3\'', rec: '1\'30"', dur: 18,
  obj: 'Ver el lado libre y cambiar el juego rápido para atacar donde no hay defensores.',
  desc: 'Cada equipo ataca dos miniporterías situadas en las esquinas del campo rival. Si un lado está cerrado, hay que cambiar de orientación al otro. Gol tras cambio de orientación: doble.',
  reglas: ['Gol solo dentro de la zona de 5 m delante de la miniportería.', 'Gol tras cambio de juego: 2 puntos.', 'Saques de banda con el pie.'],
  cons: ['Atraer a un lado y cambiar.', 'Cuando tu equipo cambia, ataca rápido el espacio.', 'Defender juntos cerca del balón.'],
  var: ['+ Toques limitados a 3.', '− 4v4 + 1 comodín.'],
  d: { f7: true, v: [13, 5, 34, 30], z: [[15, 7.5, 30, 25]], mg: [[15, 10, 'R'], [15, 30, 'R'], [45, 10, 'L'], [45, 30, 'L']], p: [A(20, 18), A(26, 11), A(26, 26), A(33, 20), B(38, 12), B(37, 18), B(40, 22), B(30, 15)], b: [[26.8, 11.6]], a: [['pase', 26, 11, 20, 18, -1], ['pase', 20, 18, 26, 26, -1], ['mov', 33, 20, 38, 27, 0], ['pase', 26, 26, 38, 27, 0], ['tiro', 38, 27, 44.5, 29.5, 0]] } });

// ---------- FINALIZACIÓN ----------
T({ id: 'f7_17', n: 'Conducción y 1v1 al portero', cat: 'tt', tipo: 'Finalización', ed: 'PBA', dif: 1, md: ['MD-3', 'MD-2', 'MD-1'], int: 2, rpe: '5', carga: 'Velocidad', fase: 'pri',
  jug: 'Dos filas + P', np: 9, esp: [25, 30], ser: '8-10 tiros por jugador', rec: 'Lo que tarda la fila', dur: 14,
  obj: 'Conducir rápido hacia la portería y definir ante el portero (regate o tiro cruzado).',
  desc: 'Dos filas en el medio campo. Sale un jugador conduciendo, rodea un cono y encara al portero. Se alternan las filas. Quien marca, recoge el balón y vuelve a su fila.',
  reglas: ['Hay que tirar antes del punto de penalti o regatear al portero.', 'El portero sale a por el balón.', 'Si es gol, 1 punto para su fila.'],
  cons: ['Último toque largo para acelerar.', 'Mira al portero antes de decidir.', 'Tira cruzado y raso.'],
  var: ['+ Un defensor persigue desde atrás.', '− Tiro desde un cono fijo.'],
  d: { f7: true, v: F7H, c: [[40, 12], [40, 28], [33, 10], [33, 30]], p: [P(58.5, 20), A(33, 12), A(31, 12), A(29, 12), A(33, 28), A(31, 28)], b: [[33.8, 12.7], [33.8, 28.7]], a: [['cond', 33, 12, 40, 12.5, 0], ['cond', 40, 12.5, 50, 18, -1], ['tiro', 50, 18, 59.6, 22, 0]] } });

T({ id: 'f7_18', n: 'Oleadas 2v1 + portero', cat: 'tt', tipo: 'Finalización', ed: 'BA', dif: 1, md: ['MD-3', 'MD-2', 'MD-1'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: '2v1+P', np: 9, esp: [30, 30], ser: '10-12 ataques', rec: 'Lo que tarda la ola', dur: 15,
  obj: 'Decidir en superioridad: conducir para fijar al defensor y pasar o tirar.',
  desc: 'Dos atacantes salen desde el medio campo contra un defensor que sale de la línea de fondo. Tienen 8 segundos para finalizar. El defensor que roba conduce hasta el medio campo.',
  reglas: ['8 segundos para tirar.', 'Gol tras pase: 2 puntos.', 'Los defensores rotan cada 3 ataques.'],
  cons: ['Conduce hacia el defensor para que venga a por ti.', 'El compañero se abre, no se esconde detrás.', 'Pasa en el momento justo, ni antes ni después.'],
  var: ['+ 2v2.', '− El defensor solo puede tapar, no robar.'],
  d: { f7: true, v: F7H, p: [P(58.5, 20), A(32, 15), A(32, 25), B(52, 20), A(29, 15), A(29, 25)], b: [[32.8, 15.6]], a: [['cond', 32, 15, 42, 17, 0], ['mov', 52, 20, 46, 18, 0], ['mov', 32, 25, 47, 28, 0], ['pase', 42, 17, 47, 28, 1], ['tiro', 47, 28, 59.5, 21, 0]] } });

T({ id: 'f7_19', n: 'Oleadas 3v2 + portero', cat: 'tt', tipo: 'Finalización', ed: 'A', dif: 2, md: ['MD-4', 'MD-3', 'MD-2'], int: 3, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: '3v2+P', np: 11, esp: [35, 40], ser: '10 ataques', rec: '45"', dur: 16,
  obj: 'Atacar en superioridad con amplitud y profundidad, y defender en inferioridad temporizando.',
  desc: 'Tres atacantes salen desde el medio campo contra dos defensores. Tras finalizar, los dos defensores atacan la otra portería (miniporterías) contra uno de los atacantes que vuelve.',
  reglas: ['10 segundos para finalizar.', 'Vuelta 2v1 inmediata tras el tiro.', 'Fuera de juego desde la línea de 3/4 del campo.'],
  cons: ['El del centro fija y los de fuera abren.', 'Si el defensor sale, el pase a su espalda.', 'Defensores: retrasar y cerrar el centro.'],
  var: ['+ 3v3.', '− Sin vuelta.'],
  d: { f7: true, v: F7H, mg: [[30, 8, 'R'], [30, 32, 'R']], p: [P(58.5, 20), A(33, 20), A(34, 6), A(34, 34), B(48, 15), B(48, 25)], b: [[33.8, 20.6]], a: [['cond', 33, 20, 41, 20, 0], ['mov', 34, 6, 48, 8, 0], ['pase', 41, 20, 48, 8, 1], ['tiro', 48, 8, 59.5, 18, 0]] } });

T({ id: 'f7_20', n: 'Centro y remate en el área de fútbol 7', cat: 'tt', tipo: 'Finalización', ed: 'A', dif: 2, md: ['MD-3', 'MD-2', 'MD-1'], int: 2, rpe: '5', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 3 + P', np: 9, esp: [25, 40], ser: '12-15 centros', rec: 'Rotación', dur: 14,
  obj: 'Centrar desde la banda y atacar los espacios del área (primer palo, segundo palo y punto de penalti).',
  desc: 'Un jugador conduce por la banda y centra; dos rematadores entran al área cruzándose. Se alternan las bandas. Los rematadores pasan a ser centradores en la siguiente.',
  reglas: ['El centro se hace desde fuera del área.', 'Cada rematador ataca un espacio distinto.', 'Gol de cabeza o volea: 2 puntos.'],
  cons: ['Centro con la cabeza levantada.', 'Entrar al área en el último momento.', 'Remate al suelo.'],
  var: ['+ Un defensor en el área.', '− Centro con la mano del entrenador.'],
  d: { f7: true, v: F7H, p: [P(58.5, 20), A(38, 4), A(40, 16), A(40, 24)], b: [[38.8, 4.6]], a: [['cond', 38, 4, 50, 4, 0], ['mov', 40, 16, 53, 23, 1.5], ['mov', 40, 24, 53, 15, -1.5], ['pase', 50, 4, 53, 23, -1], ['tiro', 53, 23, 59.5, 19, 0]] } });

T({ id: 'f7_21', n: 'Juego de tiro 3v3 + porteros en área', cat: 'tt', tipo: 'Juego reducido', ed: 'BA', dif: 2, md: ['MD-4', 'MD-3', 'MD-2'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '3v3+2P', np: 8, esp: [24, 20], ser: '5 x 2\'', rec: '1\'', dur: 15,
  obj: 'Muchos tiros: decidir rápido, tirar con poco espacio y atacar el rechace.',
  desc: 'Campo de 24 x 20 m con dos porterías de fútbol 7 y porteros. Se puede tirar desde cualquier sitio. Balones preparados en las porterías para que el juego no pare.',
  reglas: ['Gol de primeras: 2 puntos.', 'El portero reinicia rápido con la mano.', 'Sin saques de banda: balón nuevo del entrenador.'],
  cons: ['Si ves portería, tira.', 'Sigue el tiro por si hay rechace.', 'Defensa: tapa el tiro, no te gires.'],
  var: ['+ 3 toques máximo.', '− Comodín que juega con el que ataca.'],
  d: { f7: true, v: [16, 6, 28, 28], z: [[18, 10, 24, 20]], g: [[18, 20, 'R'], [42, 20, 'L']], p: [P(18.8, 20), P(41.2, 20), A(24, 15), A(26, 25), A(32, 19), B(30, 14), B(34, 24), B(36, 17)], b: [[24.8, 15.6]], a: [['pase', 24, 15, 32, 19, 1], ['tiro', 32, 19, 41.6, 21, 0]] } });

// ---------- TRANSICIONES ----------
T({ id: 'f7_22', n: 'Transición: 3v2 y vuelta 2v1', cat: 'tt', tipo: 'Transición', ed: 'A', dif: 2, md: ['MD-4', 'MD-3'], int: 4, rpe: '7-8', carga: 'Velocidad', fase: 'pri',
  jug: '3v2', np: 10, esp: [50, 36], ser: '8 ataques por equipo', rec: '45"', dur: 16,
  obj: 'Reaccionar tras finalizar: los que defendían salen al contraataque y los que atacaban, a defender.',
  desc: 'Tres atacantes contra dos defensores en una portería. Cuando termina la jugada (gol, parada o robo), los dos defensores contraatacan hacia la otra portería contra el jugador que tiró, que debe volver a defender.',
  reglas: ['La vuelta empieza al acabar la jugada, sin esperar.', 'Contraataque: 8 segundos.', 'Puntos para atacar y para defender.'],
  cons: ['Cambia el chip: si pierdes, corre hacia atrás.', 'El contraataque, por el centro y rápido.', 'El que defiende solo retrasa hasta que llegan ayudas.'],
  var: ['+ Vuelta 3v2.', '− Vuelta 2v0 hasta miniportería.'],
  d: { f7: true, v: F7V, p: [P(1.5, 20), P(58.5, 20), A(38, 20), A(40, 9), A(40, 31), B(50, 15), B(50, 25)], b: [[38.8, 20.6]], a: [['pase', 38, 20, 40, 31, 1], ['tiro', 40, 31, 59.5, 21, 0, 1], ['cond', 50, 25, 30, 25, 0, 2], ['mov', 50, 15, 28, 13, 0, 2], ['mov', 40, 31, 30, 28, 0, 2]] } });

T({ id: 'f7_23', n: 'Recupera y finaliza en 5 segundos (4v4)', cat: 'tt', tipo: 'Transición', ed: 'A', dif: 3, md: ['MD-4', 'MD-3'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: '4v4+2P', np: 10, esp: [36, 30], ser: '4 x 3\'', rec: '1\'30"', dur: 18,
  obj: 'Presionar justo después de perder el balón y atacar rápido si se recupera.',
  desc: 'Partido 4v4 con porteros. Si un equipo recupera el balón y marca en menos de 5 segundos, el gol vale triple. Si tras perderlo lo recupera en menos de 5 segundos, gana 1 punto.',
  reglas: ['Gol en 5 segundos tras robo: 3 puntos.', 'Recuperar en 5 segundos tras pérdida: 1 punto.', 'El entrenador cuenta en voz alta.'],
  cons: ['El más cercano va a por el balón y los demás cierran pases.', 'Si robas, mira portería: ¡rápido!', 'No te lamentes: corre.'],
  var: ['+ 3 segundos.', '− 5v4.'],
  d: { f7: true, v: [10, 2, 40, 36], z: [[12, 5, 36, 30]], g: [[12, 20, 'R'], [48, 20, 'L']], p: [P(12.8, 20), P(47.2, 20), A(26, 14), A(31, 22), A(24, 26), A(38, 16), B(33, 13), B(30, 18), B(39, 26), B(20, 20)], b: [[30.8, 18.6]], a: [['mov', 31, 22, 30.5, 19.5, 0], ['mov', 26, 14, 29, 16, 0], ['cond', 30, 18, 38, 22, 0], ['tiro', 38, 22, 47.6, 19, 0]] } });

// ---------- PRESIÓN Y DEFENSA ----------
T({ id: 'f7_24', n: 'Presión al inicio rival: 3 contra salida de 1+3', cat: 'tt', tipo: 'Defensa', ed: 'A', dif: 3, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '3v1+3', np: 7, esp: [30, 40], ser: '8 x 1\'', rec: '45"', dur: 15,
  obj: 'Presionar juntos la salida del rival: orientar hacia la banda y robar.',
  desc: 'El portero rival saca y sus tres defensas intentan llegar a la línea del medio campo. Tres delanteros presionan: el central tapa el pase al centro y los otros saltan cuando el balón va a la banda.',
  reglas: ['Punto para los delanteros si roban en campo rival.', 'Gol tras robo: 2 puntos.', 'Punto para los defensas si cruzan el medio campo conduciendo.'],
  cons: ['Salta cuando el balón viaja, no cuando ya ha llegado.', 'Lleva al defensa hacia la banda.', 'El compañero cierra el pase interior.'],
  var: ['+ La salida tiene un pivote más (4).', '− Presionan 4.'],
  d: { f7: true, v: [-3, -2, 34, 44], c: conos(30, 0, 30, 40, 5, '#facc15'), p: [P(1.5, 20), B(10, 6), B(9, 20), B(10, 34), A(18, 20), A(20, 10), A(20, 30)], b: [[3, 20.5]], a: [['pase', 1.5, 20, 10, 6, -1], ['mov', 20, 10, 12, 8, 0], ['mov', 18, 20, 13, 14, 0], ['mov', 20, 30, 17, 22, 0]] } });

T({ id: 'f7_25', n: 'Defensa 1-3-3: basculación de la línea de 3', cat: 'tt', tipo: 'Defensa', ed: 'A', dif: 2, md: ['MD-4', 'MD-3', 'MD-2'], int: 2, rpe: '5', carga: 'Duración', fase: 'pri',
  jug: '3+P v 4', np: 8, esp: [30, 40], ser: '6 x 2\'', rec: '45"', dur: 15,
  obj: 'Moverse juntos en defensa según dónde está el balón: presión al poseedor y cobertura.',
  desc: 'Cuatro atacantes se pasan el balón alrededor del área (dos en bandas, dos por dentro) y buscan el pase al espacio para tirar. Tres defensas y el portero bascular: uno presiona, los otros cubren y cierran.',
  reglas: ['Los atacantes solo pueden tirar tras pase al espacio.', 'Si los defensas roban, pase al entrenador: 1 punto.', 'Atacantes a 2 toques.'],
  cons: ['Si el balón está en la banda, todos nos movemos hacia ese lado.', 'Uno presiona y los demás cubren.', 'Portero: habla y ordena.'],
  var: ['+ 5 atacantes.', '− Atacantes solo pueden pasar (sin pase al espacio).'],
  d: { f7: true, v: F7H, p: [P(58.5, 20), B(50, 10), B(49, 20), B(50, 30), A(40, 4), A(38, 15), A(38, 25), A(40, 36), E(31, 20)], b: [[40.8, 4.6]], a: [['mov', 50, 10, 45, 7, 0], ['mov', 49, 20, 49, 14, 0], ['mov', 50, 30, 50, 22, 0], ['pase', 40, 4, 38, 15, 1]] } });

T({ id: 'f7_26', n: 'Duelos 1v1 defensivos por carriles', cat: 'tt', tipo: 'Defensa', ed: 'PBA', dif: 1, md: ['MD-4', 'MD-3'], int: 3, rpe: '6-7', carga: 'Tensión', fase: 'pri',
  jug: '1v1', np: 8, esp: [6, 15], ser: '8-10 duelos por jugador', rec: '30"', dur: 14,
  obj: 'Defender el 1v1: perfil, no lanzarse y llevar al atacante hacia fuera.',
  desc: 'Carriles de 6 x 15 m. El atacante intenta cruzar la línea del defensor conduciendo; el defensor intenta robar o sacar el balón del carril. Cambian de rol en cada duelo.',
  reglas: ['El defensor sale cuando el atacante toca el balón.', 'Punto al atacante si cruza la línea conduciendo.', 'Punto al defensor si roba o saca el balón.'],
  cons: ['Defensor: de lado, rodillas flexionadas, no te lances.', 'Atacante: amago y cambio de ritmo.', 'Mira el balón, no los pies.'],
  var: ['+ Carril de 5 m.', '− Atacante sin balón (pilla-pilla).'],
  d: { f7: true, z: [[18, 12, 6, 15], [26, 12, 6, 15], [34, 12, 6, 15]], p: [A(21, 26), B(21, 14), A(29, 26), B(29, 14), A(37, 26), B(37, 14)], b: [[21.6, 25], [29.6, 25], [37.6, 25]], a: [['cond', 21, 26, 22, 18, 1], ['mov', 21, 14, 21.6, 17.5, 0], ['cond', 29, 26, 27.5, 16, -1]] } });

T({ id: 'f7_27', n: '2v2 con defensa de ayuda (cobertura)', cat: 'tt', tipo: 'Defensa', ed: 'BA', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '2v2', np: 8, esp: [20, 15], ser: '6 x 1\'', rec: '1\'', dur: 14,
  obj: 'Aprender a ayudar: uno presiona y el compañero cubre su espalda.',
  desc: 'Dos contra dos en un campo de 20 x 15 m con dos miniporterías por equipo. Los defensores deben colocarse en presión y cobertura. Los demás esperan fuera y entran al minuto.',
  reglas: ['Gol en cualquiera de las dos miniporterías.', 'Punto extra si los defensores roban y marcan.', 'Saque desde la línea de fondo.'],
  cons: ['Uno va al balón y el otro detrás, en diagonal.', 'Si te superan, el compañero sale y tú cubres.', 'Hablad: ¡voy! ¡cubro!'],
  var: ['+ Una sola miniportería por equipo y más grande.', '− 2v1 con comodín.'],
  d: { f7: true, z: [[20, 12.5, 20, 15]], mg: [[20, 16, 'R'], [20, 24, 'R'], [40, 16, 'L'], [40, 24, 'L']], p: [A(26, 18), A(25, 24), B(31, 18), B(34, 21.5)], b: [[26.8, 18.5]], a: [['mov', 31, 18, 28.5, 18.3, 0], ['mov', 34, 21.5, 31, 21.5, 0], ['pase', 26, 18, 25, 24, -1]] } });

// ---------- BALÓN PARADO ----------
T({ id: 'f7_28', n: 'Córner en fútbol 7: jugada corta y al área', cat: 'tt', tipo: 'ABP', ed: 'BA', dif: 1, md: ['MD-2', 'MD-1'], int: 1, rpe: '3', carga: 'Activación', fase: 'pri',
  jug: '4v3+P', np: 8, esp: [15, 40], ser: '10-12 córners', rec: '—', dur: 12,
  obj: 'Dos jugadas de córner sencillas: en corto para centrar mejor y directo al punto de penalti.',
  desc: 'Jugada 1: saque corto al compañero que se acerca, devolución y centro. Jugada 2: centro directo al punto de penalti con dos jugadores que entran cruzándose. Se practican sin oposición y luego con tres defensores.',
  reglas: ['El entrenador dice el número de la jugada.', 'Primero sin oposición, después con defensa.', 'Todos los jugadores lanzan alguna vez.'],
  cons: ['Sacador: levanta la mano con el número.', 'Entra al área en movimiento.', 'Uno se queda fuera del área por si hay rechace.'],
  var: ['+ Una tercera jugada propia.', '− Solo la jugada corta.'],
  d: { f7: true, v: [38, -2, 25, 30], p: [P(58.5, 20), A(59.5, 0.5), A(54, 3), A(46, 12), A(44, 20), A(42, 26), B(55, 14), B(53, 20), B(50, 17)], b: [[59.5, 1.2]], a: [['mov', 54, 3, 55.5, 4, 0], ['pase', 59.5, 0.5, 55.5, 4, 0], ['pase', 55.5, 4, 59.3, 1.5, 0], ['mov', 46, 12, 54, 21, 1], ['pase', 59.3, 1.5, 54, 21, -2], ['tiro', 54, 21, 59.5, 19, 0]] } });

T({ id: 'f7_29', n: 'Falta frontal y saque de banda en fútbol 7', cat: 'tt', tipo: 'ABP', ed: 'A', dif: 2, md: ['MD-2', 'MD-1'], int: 1, rpe: '3', carga: 'Activación', fase: 'pri',
  jug: 'Grupos de 4 + P', np: 9, esp: [30, 40], ser: '6 faltas + 6 saques de banda', rec: '—', dur: 12,
  obj: 'Lanzar faltas con barrera y sacar de banda rápido para atacar.',
  desc: 'Primera parte: faltas desde el borde del área con barrera de dos maniquíes o compañeros, directo o con un pase corto antes. Segunda parte: saque de banda rápido hacia el jugador que se desmarca y ataque 2v1 con finalización.',
  reglas: ['En las faltas, lanzan todos por turnos.', 'Saque de banda: menos de 5 segundos.', 'Gol de falta: 2 puntos.'],
  cons: ['Falta: elige un palo antes de golpear.', 'Saque de banda: los pies en el suelo y detrás de la línea.', 'Desmárcate antes de que el balón salga.'],
  var: ['+ Defensa en el saque de banda.', '− Faltas sin barrera.'],
  d: { f7: true, v: F7H, p: [P(58.5, 20), A(42, 20), A(44, 23), B(48, 18.6), B(48, 20.4), A(38, 40), A(40, 33)], b: [[42.8, 20.6], [38, 39.4]], a: [['pase', 42, 20, 44, 23, 0], ['tiro', 44, 23, 59.5, 17.5, -1.5], ['mov', 40, 33, 44, 36, 0], ['pase', 38, 40, 44, 36, 0]] } });

// ---------- PARTIDOS Y JUEGOS REDUCIDOS ----------
T({ id: 'f7_30', n: 'Partido 7v7 condicionado (3 pases antes de tirar)', cat: 'tt', tipo: 'Competición', ed: 'PBA', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '6v6+2P', np: 14, esp: [60, 40], ser: '2 x 10\'', rec: '2\'', dur: 25,
  obj: 'Aplicar el sistema en partido real con una condición que obliga a construir.',
  desc: 'Partido en el campo de fútbol 7 completo con el sistema habitual del equipo (1-3-3 o 1-2-3-1). Hay que dar al menos 3 pases antes de tirar. El entrenador congela el juego para corregir posiciones.',
  reglas: ['3 pases antes de tirar.', 'Gol tras robo en campo rival: sin condición.', 'Paradas cortas del entrenador para corregir.'],
  cons: ['Cada uno en su sitio: amplitud y profundidad.', 'Si perdemos, todos defienden.', 'Habla con tus compañeros.'],
  var: ['+ 5 pases.', '− Sin condición (partido libre).'],
  d: { f7: true, v: F7V, p: [P(1.5, 20), A(10, 8), A(9, 20), A(10, 32), A(20, 6), A(22, 20), A(20, 34), P(58.5, 20), B(50, 8), B(51, 20), B(50, 32), B(40, 6), B(38, 20), B(40, 34)], b: [[9.8, 20.6]], a: [['pase', 9, 20, 10, 32, -1], ['pase', 10, 32, 22, 20, 1], ['mov', 20, 6, 32, 9, 0], ['pase', 22, 20, 32, 9, -1]] } });

T({ id: 'f7_31', n: 'Partido 4v4 a cuatro porterías', cat: 'jue', tipo: 'Competición', ed: 'PBA', dif: 1, md: ['MD-4', 'MD-3', 'MD-2'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '4v4', np: 8, esp: [30, 20], ser: '4 x 3\'', rec: '1\'30"', dur: 16,
  obj: 'Mucho balón por jugador: decidir, regatear, cambiar el juego y marcar.',
  desc: 'Cada equipo defiende dos miniporterías y ataca otras dos. Si un lado está tapado, se cambia al otro. Torneo: el que gana sube de campo.',
  reglas: ['Sin porteros.', 'Gol solo desde el campo rival.', 'Saque de banda con el pie.'],
  cons: ['Mira las dos porterías.', 'Si hay hueco, conduce y regatea.', 'Todos atacamos y todos defendemos.'],
  var: ['+ Toques limitados.', '− 4v4 + comodín.'],
  d: { f7: true, v: [13, 6, 34, 28], z: [[15, 10, 30, 20]], mg: [[15, 14, 'R'], [15, 26, 'R'], [45, 14, 'L'], [45, 26, 'L']], p: [A(22, 15), A(24, 24), A(30, 19), A(35, 13), B(38, 17), B(36, 25), B(28, 13), B(20, 20)], b: [[30.8, 19.6]], a: [['pase', 30, 19, 35, 13, 1], ['cond', 35, 13, 42, 14, 0], ['tiro', 42, 14, 44.5, 14, 0]] } });

T({ id: 'f7_32', n: 'Partido 5v5 con portero en medio campo', cat: 'tt', tipo: 'Juego reducido', ed: 'BA', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '4v4+2P', np: 10, esp: [30, 40], ser: '4 x 4\'', rec: '1\'30"', dur: 20,
  obj: 'Jugar con espacio reducido: salir desde el portero, progresar y finalizar.',
  desc: 'Medio campo de fútbol 7 cruzado (a lo ancho) con dos porterías de fútbol 7. Partido 4v4 + porteros. Gol tras salida desde el portero sin perder el balón: doble.',
  reglas: ['El portero saca con la mano o con el pie a un compañero.', 'Gol tras salida desde el portero: 2 puntos.', 'Fuera de banda: saque con el pie.'],
  cons: ['Ábrete cuando tu portero tenga el balón.', 'Si tienes espacio, avanza conduciendo.', 'Defensa: cerca y juntos.'],
  var: ['+ Toques limitados a 3.', '− Comodín ofensivo.'],
  d: { f7: true, v: [27, -1, 36, 42], z: [[30, 2, 30, 36]], g: [[45, 2, 'D'], [45, 38, 'U']], p: [P(45, 3), P(45, 37), A(38, 8), A(52, 9), A(45, 16), A(48, 24), B(40, 28), B(51, 30), B(44, 22), B(38, 20)], b: [[45.5, 4]], a: [['pase', 45, 3, 52, 9, -1], ['pase', 52, 9, 48, 24, -1], ['tiro', 48, 24, 45.5, 37.5, 0]] } });

// ---------- TÉCNICA ----------
T({ id: 'f7_33', n: 'Conducción y regate: el túnel', cat: 'tt', tipo: 'Técnica', ed: 'PB', dif: 1, md: ['MD-4', 'MD-3', 'MD-2'], int: 2, rpe: '4-5', carga: 'Activación', fase: 'pri',
  jug: 'Parejas', np: 10, esp: [20, 20], ser: '5 x 2\'', rec: '45"', dur: 14,
  obj: 'Conducción con las dos piernas, regates sencillos (amago, cambio de dirección) y control del cuerpo.',
  desc: 'Por el cuadrado hay varias «puertas» de conos. Cada jugador conduce y pasa por todas las puertas que pueda en un minuto. Delante de cada puerta hay un compañero sin balón que hace de defensa pasivo: hay que regatearle.',
  reglas: ['No se puede pasar dos veces seguidas por la misma puerta.', 'Contar las puertas en voz alta.', 'Cambio de rol cada serie.'],
  cons: ['Balón pegado al pie.', 'Amago con el cuerpo antes de la puerta.', 'Usa el exterior para salir rápido.'],
  var: ['+ Defensa activo.', '− Sin defensas.'],
  d: { f7: true, z: [[20, 10, 20, 20]], c: [[24, 14], [24, 17], [33, 13], [36, 13], [28, 24], [31, 24], [36, 21], [36, 24]], p: [A(21, 16), B(25.5, 15.5), A(30, 20), B(29.5, 22.5), A(37, 17)], b: [[21.8, 16.6], [30.8, 20.6], [37.6, 17.6]], a: [['cond', 21, 16, 27, 15.5, 1.2], ['cond', 30, 20, 29.5, 26, -1.5]] } });

T({ id: 'f7_34', n: 'Control orientado y pase en triángulo', cat: 'tt', tipo: 'Técnica', ed: 'BA', dif: 2, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 2, rpe: '4', carga: 'Activación', fase: 'cal',
  jug: 'Grupos de 4', np: 4, esp: [10, 10], ser: '4 x 2\'', rec: '30"', dur: 10,
  obj: 'Controlar hacia el siguiente pase (control orientado) con las dos piernas.',
  desc: 'Triángulo de conos de 10 m. El jugador recibe en un cono, controla hacia el siguiente con un solo toque y pasa. Sigue su pase. Cada minuto, cambio de sentido.',
  reglas: ['Dos toques: control y pase.', 'Control con el pie lejano al pase que llega.', 'Cambio de sentido cada minuto.'],
  cons: ['Abre el cuerpo antes de recibir.', 'El control va hacia donde quieres pasar.', 'Pase tenso y raso.'],
  var: ['+ A un toque.', '− Toques libres.'],
  d: { f7: true, c: [[25, 25], [35, 25], [30, 16]], p: [A(25, 25), A(24, 26), A(35, 25), A(30, 16)], b: [[25.8, 24.4]], a: [['pase', 25, 25, 35, 25, 0], ['mov', 25, 25, 34, 25.5, 0], ['cond', 35, 25, 33.5, 22, 0], ['pase', 33.5, 22, 30, 16, 0]] } });

T({ id: 'f7_35', n: 'Rueda de paredes y tiro', cat: 'tt', tipo: 'Finalización', ed: 'BA', dif: 2, md: ['MD-3', 'MD-2', 'MD-1'], int: 2, rpe: '5', carga: 'Velocidad', fase: 'pri',
  jug: 'Fila + 2 apoyos + P', np: 9, esp: [30, 20], ser: '10-12 tiros por jugador', rec: 'Rotación', dur: 14,
  obj: 'Pared (dar y ir), control de cara a portería y tiro.',
  desc: 'El jugador conduce, hace pared con el primer apoyo, recibe, hace otra pared con el segundo apoyo y tira. Los apoyos rotan cada 4 tiros.',
  reglas: ['Pared a un toque del apoyo.', 'Tiro antes del área pequeña.', 'Rotación: tirador → apoyo → fila.'],
  cons: ['Pasa y corre al espacio.', 'Apoyo: devuelve al pie y por delante.', 'Mira al portero antes de tirar.'],
  var: ['+ Un defensor pasivo.', '− Una sola pared.'],
  d: { f7: true, v: F7H, p: [P(58.5, 20), A(32, 20), A(30, 20), A(38, 13), A(46, 27)], b: [[32.8, 20.6]], a: [['pase', 32, 20, 38, 13, 0], ['mov', 32, 20, 41, 18, 0], ['pase', 38, 13, 41, 18, 0], ['pase', 41, 18, 46, 27, 0], ['mov', 41, 18, 49, 22, 0], ['pase', 46, 27, 49, 22, 0], ['tiro', 49, 22, 59.5, 18.5, 0]] } });

// ---------- JUEGOS ----------
T({ id: 'f7_36', n: 'Los bolos: tiro a conos por equipos', cat: 'jue', tipo: 'Juego lúdico', ed: 'PB', dif: 1, md: ['MD-3', 'MD-2', 'MD-1'], int: 2, rpe: '4', carga: 'Activación', fase: 'pri',
  jug: 'Dos equipos', np: 10, esp: [20, 16], ser: '4 x 2\'', rec: '45"', dur: 12,
  obj: 'Precisión en el golpeo con el interior y el empeine jugando a derribar conos.',
  desc: 'Dos equipos, uno a cada lado de una zona central con conos de pie. Cada jugador tiene un balón y tira desde su línea para derribar conos. Gana el equipo que derriba más conos en 2 minutos.',
  reglas: ['Se tira desde detrás de la línea.', 'Los balones que quedan en el centro se recogen al final.', 'Golpeo con las dos piernas.'],
  cons: ['Apoya el pie al lado del balón.', 'Mira el cono, golpea el centro del balón.', 'Interior para la precisión.'],
  var: ['+ Línea de tiro más lejos.', '− Conos más grandes (picas o bolos).'],
  d: { f7: true, z: [[27, 14, 6, 12, 'rgba(250,204,21,.18)']], c: [[29, 16], [31, 18], [29, 20], [31, 22], [29, 24]], l: [[21, 12, 21, 28], [39, 12, 39, 28]], p: [A(19, 15), A(19, 20), A(19, 25), B(41, 15), B(41, 20), B(41, 25)], b: [[20.2, 15.3], [20.2, 20.3], [39.8, 25.3]], a: [['tiro', 20, 20, 29, 20, 0], ['tiro', 40, 25, 31, 22, 0]] } });

T({ id: 'f7_37', n: 'Mini-torneo 3v3', cat: 'jue', tipo: 'Competición', ed: 'PBA', dif: 1, md: ['MD-4', 'MD-3', 'MD-2'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '3v3', np: 12, esp: [20, 15], ser: '4 partidos de 3\'', rec: '1\'', dur: 18,
  obj: 'Competir jugando: muchas acciones de 1v1, pase y tiro con poco espacio.',
  desc: 'Dos campos de 20 x 15 m con miniporterías. Equipos de 3. El que gana sube al campo 1 y el que pierde baja al 2. Se lleva la clasificación.',
  reglas: ['Sin porteros.', 'Empate: penaltis de uno.', 'Saque de banda con el pie.'],
  cons: ['Juega con la cabeza: pasa o regatea.', 'Ayuda a tus compañeros en defensa.', 'Celebra con tu equipo.'],
  var: ['+ Gol solo de primeras vale doble.', '− Campo más grande.'],
  d: { f7: true, z: [[8, 12, 20, 15], [32, 12, 20, 15]], mg: [[8, 19.5, 'R'], [28, 19.5, 'L'], [32, 19.5, 'R'], [52, 19.5, 'L']], p: [A(13, 16), A(15, 23), A(18, 19), B(21, 16), B(23, 23), B(20, 20.5), A(37, 16), A(39, 23), A(42, 19), B(45, 16), B(47, 23), B(44, 20.5)], b: [[18.8, 19.6], [42.8, 19.6]], a: [['cond', 18, 19, 24, 18, 1], ['tiro', 24, 18, 27.6, 19.5, 0]] } });

// ---------- PORTEROS ----------
T({ id: 'f7_38', n: 'Portero de fútbol 7: blocajes y caídas', cat: 'por', tipo: 'Blocaje', ed: 'PBA', dif: 1, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 2, rpe: '4-5', carga: 'Tensión', fase: 'pri',
  jug: '1-2 porteros + entrenador', np: 2, esp: [6, 10], ser: '3 x 8 balones', rec: '1\'', dur: 12,
  obj: 'Técnica básica de blocaje (balón raso, a media altura y alto) y caída lateral sin miedo.',
  desc: 'El entrenador lanza con la mano o golpea suave: primero a las manos, después a los lados para caer. Se empieza de rodillas (caídas) y se termina de pie. En prebenjamín, sobre colchoneta o hierba blanda.',
  reglas: ['Primero de rodillas, después de pie.', 'Siempre volver a la posición de espera.', 'Cuenta de blocajes sin soltar.'],
  cons: ['Manos en forma de «W» para balones altos.', 'Cae de lado, nunca de frente.', 'Abraza el balón contra el pecho.'],
  var: ['+ Lanzamientos más rápidos.', '− Balones blandos o de goma espuma.'],
  d: { f7: true, v: [44, 10, 20, 20], p: [P(58, 20), E(50, 20)], b: [[51, 20.5]], a: [['pase', 51, 20, 58.5, 17, 0], ['mov', 58, 20, 58.4, 17.5, 0]] } });

T({ id: 'f7_39', n: 'Portero de fútbol 7: juego con el pie y saque', cat: 'por', tipo: 'Juego con el pie', ed: 'BA', dif: 2, md: ['MD-4', 'MD-3', 'MD-2'], int: 2, rpe: '4', carga: 'Activación', fase: 'pri',
  jug: 'Portero + 3 jugadores', np: 4, esp: [25, 40], ser: '3 x 10 acciones', rec: '1\'', dur: 12,
  obj: 'Que el portero sea el primer atacante: control, pase con el pie y saque con la mano a un compañero libre.',
  desc: 'El entrenador pasa al portero o le lanza un centro. Tras controlar o blocar, el portero busca a uno de los tres compañeros que se abren (dos defensas y un centrocampista), con el pie raso o con saque de mano rodado.',
  reglas: ['Saque en menos de 6 segundos.', 'Al compañero más libre.', 'Punto si el compañero controla bien.'],
  cons: ['Mira antes de que te llegue el balón.', 'Control hacia fuera, lejos de la portería.', 'Saque rodado para que sea fácil de controlar.'],
  var: ['+ Un delantero que presiona.', '− Siempre al mismo compañero.'],
  d: { f7: true, v: [-3, -2, 30, 44], p: [P(2, 20), A(10, 6), A(10, 34), A(18, 20), E(12, 20)], b: [[11, 20.5]], a: [['pase', 12, 20, 2.5, 20, 0], ['pase', 2, 20, 10, 34, 1.5]] } });

T({ id: 'f7_40', n: 'Portero de fútbol 7: salidas y 1v1', cat: 'por', tipo: '1v1', ed: 'A', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '6', carga: 'Tensión', fase: 'pri',
  jug: 'Portero + fila de atacantes', np: 6, esp: [20, 30], ser: '3 x 6 acciones', rec: '1\'', dur: 12,
  obj: 'Salir a tapar el 1v1: reducir el ángulo, quedarse de pie el máximo tiempo y estirarse a por el balón.',
  desc: 'Un atacante conduce desde 20 m hacia la portería. El portero sale a reducir el ángulo y gana si bloca o despeja. Se alternan conducciones por el centro y por los lados.',
  reglas: ['El atacante no puede tirar desde fuera del área.', 'El portero sale cuando el atacante toca el balón.', 'Cuenta de paradas.'],
  cons: ['Sal rápido mientras el balón está lejos del pie del atacante.', 'Frena antes del tiro, de pie y con las manos bajas.', 'Tírate a los pies con el cuerpo de lado.'],
  var: ['+ Atacante desde más cerca.', '− Atacante a ritmo lento.'],
  d: { f7: true, v: F7H, p: [P(58.5, 20), A(40, 20), A(38, 20), A(36, 20)], b: [[40.8, 20.6]], a: [['cond', 40, 20, 51, 21, 0], ['mov', 58.5, 20, 53.5, 20.7, 0], ['tiro', 51, 21, 59.5, 18, 0]] } });

// ---------- VUELTA A LA CALMA ----------
T({ id: 'f7_41', n: 'Vuelta a la calma: estiramientos jugados en círculo', cat: 'pre', tipo: 'Vuelta a la calma', ed: 'PBA', dif: 1, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 1, rpe: '1-2', carga: 'Recuperación', fase: 'vc',
  jug: 'Todo el grupo', np: 12, esp: [12, 12], ser: '1 x 8\'', rec: '—', dur: 8,
  obj: 'Volver a la calma, estirar de forma suave y repasar lo aprendido.',
  desc: 'En círculo, cada jugador dirige un estiramiento suave (gemelo, cuádriceps, aductor, glúteo) mientras el grupo cuenta hasta diez. Entre estiramientos, el entrenador pregunta qué han aprendido hoy.',
  reglas: ['Estirar sin dolor.', 'Cada uno dirige un ejercicio.', 'Una pregunta y una respuesta por ejercicio.'],
  cons: ['Respira despacio.', 'Escucha a tu compañero.', '¿Qué has hecho bien hoy?'],
  var: ['+ Con pase de balón en círculo para elegir quién dirige.', '− Solo charla final.'],
  d: { f7: true, p: [...ring(30, 20, 6, 10, 'A'), E(30, 20)] } });

T({ id: 'f7_42', n: 'Rondo regenerativo y charla final', cat: 'jue', tipo: 'Juego de activación', ed: 'PBA', dif: 1, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 1, rpe: '2-3', carga: 'Recuperación', fase: 'vc',
  jug: '6v1', np: 7, esp: [12, 12], ser: '2 x 3\'', rec: '30"', dur: 8,
  obj: 'Bajar pulsaciones con balón y terminar el entrenamiento con buen ambiente.',
  desc: 'Rondo amplio y suave con un defensor que cambia cada pocos pases. Al terminar, el grupo se sienta en el círculo y cada jugador dice una cosa buena de un compañero.',
  reglas: ['Toques libres, sin presionar fuerte.', 'Cambiar de defensor cada 10 pases.', 'Charla de 2 minutos.'],
  cons: ['Pases suaves y precisos.', 'Reconoce lo que han hecho bien tus compañeros.', 'Recoged el material entre todos.'],
  var: ['+ A dos toques.', '− Pases con la mano (prebenjamín).'],
  d: { f7: true, z: [[24, 14, 12, 12]], p: [...ring(30, 20, 6, 6, 'A'), B(30, 20)], b: [[30, 14.6]], a: [['pase', 30, 14, 35.2, 23, -2]] } });
