/* JUEGOS Y DINÁMICAS */
T({ id: 'j01', n: 'Cazadores con balón', cat: 'jue', tipo: 'Juego de activación', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD-2', 'MD-4', 'MD-3'], int: 2, rpe: '4-5', carga: 'Activación', fase: 'cal',
  jug: 'Todo el grupo', np: 16, esp: [25, 25], ser: '4 x 1\'30"', rec: '30"', dur: 8,
  obj: 'Activar al grupo con conducción, cambios de dirección y atención.',
  desc: 'Todos conducen su balón dentro del cuadrado. Tres "cazadores" sin balón intentan tocar a los demás. El jugador tocado deja su balón fuera y pasa a ser cazador.',
  reglas: ['Si el balón sale del cuadrado, cuenta como tocado.', 'Cambio de cazadores en cada serie.', 'Gana quien acaba la serie con balón.'],
  cons: ['Balón pegado al pie y cabeza levantada.', 'Cambios de ritmo para escapar.'],
  var: ['+ Cazadores también con balón: tocan pasándoselo al rival.', '− Más espacio o menos cazadores.'],
  d: { z: [[40, 21.5, 25, 25]], c: esq(40, 21.5, 25, 25), p: [B(52, 30), B(47, 40), B(60, 38), A(44, 26), A(56, 25), A(61, 30), A(44, 35), A(52, 42), A(57, 44)], b: [[44.9, 26.5], [56.9, 25.5], [61.9, 30.5], [44.9, 35.5], [52.9, 42.5], [57.9, 44.5]], a: [['mov', 52, 30, 55, 26.5, 0], ['cond', 56, 25, 62, 23.5, -1], ['mov', 47, 40, 44.5, 36.5, 0], ['cond', 44, 35, 41.5, 31, 0]] } });

T({ id: 'j02', n: 'Balón prisionero con los pies', cat: 'jue', tipo: 'Juego lúdico', ed: 'AI', dif: 1, md: ['MD-1', 'MD+1', 'MD-2'], int: 2, rpe: '4-5', carga: 'Activación', fase: 'cal',
  jug: '2 equipos de 6-8', np: 14, esp: [30, 20], ser: '2 x 5\'', rec: '1\'', dur: 12,
  obj: 'Precisión en el pase raso de forma divertida.',
  desc: 'Dos equipos en dos campos con una "cárcel" detrás de cada fondo. Se golpea el balón con el pie, siempre raso, para tocar a un rival por debajo de la rodilla. El tocado va a la cárcel y puede salvarse si toca a un rival desde allí.',
  reglas: ['Solo golpeo con el pie y raso.', 'Tocar por debajo de la rodilla.', 'Si el rival controla el balón con el pie, no está tocado.'],
  cons: ['Pase tenso con el interior.', 'Moverse para ofrecer línea de pase al compañero.'],
  var: ['+ Dos balones.', '− Tocar en cualquier parte de la pierna.'],
  d: { z: [[37.5, 24, 15, 20], [52.5, 24, 15, 20], [33.5, 24, 4, 20, '#94a3b8', 'Cárcel'], [67.5, 24, 4, 20, '#94a3b8', 'Cárcel']], p: [A(42, 28), A(45, 34), A(41, 40), A(48, 30), B(57, 29), B(60, 35), B(56, 40), B(63, 31), A(69.5, 34), B(35.5, 30)], b: [[48.9, 30.5]], a: [['tiro', 48, 30, 59.5, 35, 0]] } });

T({ id: 'j03', n: 'Rondo de los colores', cat: 'jue', tipo: 'Juego cognitivo', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD-2', 'MD-3', 'MD-4'], int: 2, rpe: '4', carga: 'Activación', fase: 'cal',
  jug: '9-12 jugadores', np: 12, esp: [20, 20], ser: '4 x 2\'', rec: '30"', dur: 10,
  obj: 'Toma de decisiones y percepción: pasar al color que indica el entrenador.',
  desc: 'Tres equipos de petos distintos se pasan dos balones dentro del cuadrado. El entrenador grita un color y el poseedor solo puede pasar a ese color hasta la siguiente orden.',
  reglas: ['Dos toques.', 'Pase a un color equivocado = punto en contra para tu equipo.', 'Cambio de color cada 10-15".'],
  cons: ['Mirar antes de recibir.', 'Escuchar y reaccionar rápido.'],
  var: ['+ Orden con colores de conos en vez de voz.', '− Un solo balón.'],
  d: { z: [[42.5, 24, 20, 20]], c: esq(42.5, 24, 20, 20), p: [A(45, 27), A(58, 29), A(48, 40), A(60, 41), B(52, 26), B(46, 33), B(56, 36), B(61, 33), N(51, 31), N(54, 41), N(45, 38), N(58, 25)], b: [[45.9, 27.5], [56.9, 36.5]], a: [['pase', 45, 27, 51, 31, 0], ['pase', 56, 36, 54, 41, 0]] } });

T({ id: 'j04', n: 'Tiburones y pececillos', cat: 'jue', tipo: 'Juego de activación', ed: 'AI', dif: 1, md: ['MD-2', 'MD-3', 'MD-4'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'cal',
  jug: 'Todo el grupo', np: 16, esp: [30, 20], ser: '6 cruces x 3 rondas', rec: '20" entre cruces', dur: 10,
  obj: 'Conducción en velocidad y protección del balón ante presión.',
  desc: 'Los "pececillos" con balón deben cruzar de un fondo al otro conduciendo. Dos "tiburones" en el centro intentan robarles o sacarles el balón. Quien pierde el balón se convierte en tiburón.',
  reglas: ['Se cruza a la señal.', 'El balón debe acabar controlado tras la línea de fondo.', 'Gana el último pececillo.'],
  cons: ['Usar el cuerpo para proteger.', 'Cambio de ritmo al ver el hueco.'],
  var: ['+ Tiburones con zona libre más ancha.', '− Tiburones solo pueden tapar, no robar.'],
  d: { z: [[37.5, 24, 30, 20], [37.5, 24, 4, 20, '#22c55e'], [63.5, 24, 4, 20, '#22c55e']], p: [A(39.5, 27), A(39.5, 31), A(39.5, 35), A(39.5, 39), A(39.5, 43), B(50, 30), B(54, 38)], b: [[40.4, 27.5], [40.4, 31.5], [40.4, 35.5], [40.4, 39.5], [40.4, 43.5]], a: [['cond', 39.5, 31, 64, 28, 0], ['cond', 39.5, 39, 64, 41, 0], ['mov', 50, 30, 54, 29.5, 0], ['mov', 54, 38, 57, 40, 0]] } });

T({ id: 'j05', n: 'Rey del cuadrado', cat: 'jue', tipo: 'Juego lúdico', ed: 'AICJ', dif: 1, md: ['MD-4', 'MD-3'], int: 3, rpe: '6-7', carga: 'Tensión', fase: 'pri',
  jug: 'Todos contra todos', np: 14, esp: [20, 20], ser: '4 x 2\'', rec: '1\'', dur: 12,
  obj: 'Proteger el balón y robar: duelos constantes en espacio reducido.',
  desc: 'Cada jugador conduce su balón e intenta sacar del cuadrado los balones de los demás sin perder el suyo. El que se queda sin balón sale y hace un ejercicio corto (5 sentadillas) para volver.',
  reglas: ['Todos contra todos.', 'Balón fuera = sales y haces la penalización.', 'Gana quien menos veces haya salido.'],
  cons: ['Cuerpo entre el rival y el balón.', 'Atacar al rival que tiene la cabeza baja.'],
  var: ['+ Reducir el espacio cada minuto.', '− Penalización más corta.'],
  d: { z: [[42.5, 24, 20, 20]], c: esq(42.5, 24, 20, 20), p: [A(46, 28), B(52, 30), N(58, 27), C(48, 38), A(55, 40), B(59, 35), N(51, 35)], b: [[46.9, 28.5], [52.9, 30.5], [58.9, 27.5], [48.9, 38.5], [55.9, 40.5], [59.9, 35.5], [51.9, 35.5]], a: [['cond', 51, 35, 54, 32, 0], ['mov', 52, 30, 50, 33.5, 0]] } });

T({ id: 'j06', n: 'Torneo 3 equipos a 2 porterías', cat: 'jue', tipo: 'Competición', ed: 'AICJS', dif: 1, md: ['MD-3', 'MD-4'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '3 equipos de 4-5 + 2P', np: 17, esp: [40, 30], ser: '6 partidos de 3\'', rec: 'El equipo que descansa', dur: 21,
  obj: 'Competir con intensidad y alto compromiso del grupo.',
  desc: 'Tres equipos. Juegan dos y el tercero espera fuera. El que gana se queda; el que pierde sale. En empate sale el que lleva más tiempo en el campo. Clasificación por victorias.',
  reglas: ['Partidos de 3\' o a un gol.', 'Entrada inmediata del equipo que espera.', 'Tabla de puntos visible.'],
  cons: ['Máxima intensidad desde el primer segundo.', 'El equipo que espera prepara su plan.'],
  var: ['+ Partidos de 2\'.', '− Con comodín para el equipo que va perdiendo.'],
  d: { z: [[32.5, 19, 40, 30]], g: [[32.5, 34, 'R'], [72.5, 34, 'L']], p: [P(34, 34), P(71, 34), A(42, 27), A(45, 39), A(52, 33), A(58, 26), B(48, 30), B(55, 38), B(62, 31), B(64, 40), N(50, 51.5), N(52.5, 51.5), N(55, 51.5), N(57.5, 51.5)], b: [[52.9, 33.5]], a: [['pase', 52, 33, 58, 26, 0], ['cond', 58, 26, 66, 30, 0], ['tiro', 66, 30, 71.5, 33, 0]] } });

T({ id: 'j07', n: 'Relevos de conducción y tiro', cat: 'jue', tipo: 'Competición', ed: 'AICJ', dif: 1, md: ['MD-2', 'MD-1'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: '3-4 equipos + P', np: 13, esp: [35, 30], ser: '4 rondas', rec: '1\'', dur: 12,
  obj: 'Velocidad de conducción y finalización en forma de competición.',
  desc: 'Cada equipo en fila. A la señal, el primero conduce en slalom, tira a portería y vuelve a chocar la mano del siguiente. Gol = 1 punto extra. Gana el equipo que termina antes con más goles.',
  reglas: ['Tiro desde fuera del área pequeña.', 'Si se salta un cono, vuelve a él.', 'Puntos: llegar primero 3, segundo 2, tercero 1; más los goles.'],
  cons: ['Balón cerca en el slalom.', 'Cabeza arriba antes del tiro.'],
  var: ['+ Tiro con la pierna menos hábil.', '− Sin slalom.'],
  d: { z: [[70, 19, 35, 30]], pk: [[78, 28], [81, 31], [84, 28], [78, 40], [81, 37], [84, 40]], p: [P(103.5, 34), A(73, 28), A(71, 28), B(73, 40), B(71, 40)], b: [[73.9, 28.5], [73.9, 40.5]], a: [['cond', 73, 28, 88, 30, 0], ['tiro', 88, 30, 104, 32, 0], ['cond', 73, 40, 88, 38, 0]] } });

T({ id: 'j08', n: 'Roba la bandera', cat: 'jue', tipo: 'Juego lúdico', ed: 'ICJS', dif: 2, md: ['MD-2', 'MD-3'], int: 3, rpe: '6-7', carga: 'Velocidad', fase: 'pri',
  jug: '2 equipos de 6-8', np: 14, esp: [40, 30], ser: '3 x 4\'', rec: '1\'', dur: 15,
  obj: 'Desmarques, sprints y toma de decisiones en equipo.',
  desc: 'Cada equipo defiende sus balones (las "banderas") en una zona al fondo de su campo. Los jugadores entran en campo rival para llevarse un balón conduciendo hasta su campo. Si un rival les toca en su campo, vuelven a su zona sin balón.',
  reglas: ['Solo se puede llevar un balón a la vez.', 'En tu campo puedes tocar al rival; en el suyo, no.', 'Gana quien tenga más balones al final.'],
  cons: ['Atacar a la vez por varios lados.', 'Organizar quién ataca y quién defiende.'],
  var: ['+ Los balones solo se pueden pasar, no conducir.', '− Zona segura en el centro del campo rival.'],
  d: { z: [[32.5, 19, 40, 30]], l: [[52.5, 19, 52.5, 49]], c: [[34, 30, '#3b82f6'], [34, 38, '#3b82f6'], [71, 30, '#ef4444'], [71, 38, '#ef4444']], p: [A(40, 25), A(44, 34), A(41, 43), A(58, 28), A(61, 41), B(65, 26), B(62, 34), B(66, 43), B(48, 31), B(46, 40)], b: [[35.5, 32], [35.5, 34], [35.5, 36], [69.5, 32], [69.5, 34], [69.5, 36]], a: [['mov', 61, 41, 69, 36, 0], ['cond', 69.5, 36, 55, 40, -3], ['mov', 62, 34, 64, 38, 0]] } });

T({ id: 'j09', n: 'Cruzar el campo (bulldog)', cat: 'jue', tipo: 'Juego de activación', ed: 'AICJ', dif: 1, md: ['MD-3', 'MD-4', 'MD-2'], int: 3, rpe: '6-7', carga: 'Tensión', fase: 'cal',
  jug: 'Todo el grupo', np: 16, esp: [30, 25], ser: '3 rondas', rec: '1\'', dur: 10,
  obj: '1v1 con conducción y regate de forma progresiva.',
  desc: 'Todos conducen desde un fondo e intentan llegar al otro. Un defensor empieza en el centro; cada jugador al que roba el balón se une a defender. Los defensores aumentan en cada cruce.',
  reglas: ['Defensa solo dentro del campo.', 'Balón fuera = eliminado y se convierte en defensor.', 'Gana el último en cruzar.'],
  cons: ['Atacar el espacio libre entre defensores.', 'Regate con cambio de ritmo.'],
  var: ['+ Solo con la pierna menos hábil.', '− Dos zonas seguras en el centro.'],
  d: { z: [[37.5, 21.5, 30, 25]], p: [A(39, 25), A(39, 30), A(39, 35), A(39, 40), A(39, 45), B(52, 34)], b: [[39.9, 25.5], [39.9, 30.5], [39.9, 35.5], [39.9, 40.5], [39.9, 45.5]], a: [['cond', 39, 30, 66, 26, 0], ['cond', 39, 40, 66, 44, 0], ['mov', 52, 34, 55, 40, 0]] } });

T({ id: 'j10', n: 'Rondo de eliminación', cat: 'jue', tipo: 'Competición', ed: 'ICJS', dif: 2, md: ['MD-1', 'MD-2', 'MD-4'], int: 2, rpe: '5', carga: 'Activación', fase: 'cal',
  jug: '8v2', np: 10, esp: [18, 18], ser: '1 ronda hasta el final', rec: '—', dur: 10,
  obj: 'Pase preciso bajo presión con competición individual.',
  desc: 'Rondo 8v2. El jugador que pierde el balón queda eliminado y sale. El rondo se va haciendo más pequeño y difícil. Los últimos tres son los ganadores.',
  reglas: ['Dos toques.', 'Eliminado quien comete el error.', 'El espacio se reduce cuando quedan 5 poseedores.'],
  cons: ['Calidad del primer toque.', 'Elegir el pase seguro.'],
  var: ['+ Un toque al final.', '− Tres toques.'],
  d: { z: [[43.5, 25, 18, 18]], c: esq(43.5, 25, 18, 18), p: [...ring(52.5, 34, 9, 8, 'A'), B(51, 32), B(54.5, 36)], b: [[52.5, 25.9]], a: [['pase', 52.5, 25, 58.9, 27.6, 0], ['pase', 58.9, 27.6, 46.1, 40.4, 0]] } });

T({ id: 'j11', n: 'Fútbol-golf', cat: 'jue', tipo: 'Juego lúdico', ed: 'AICJS', dif: 1, md: ['MD+1', 'MD-1'], int: 1, rpe: '2-3', carga: 'Recuperación', fase: 'pri',
  jug: 'Parejas o tríos', np: 12, esp: [60, 45], ser: '1 recorrido de 6 hoyos', rec: '—', dur: 18,
  obj: 'Precisión de golpeo en un ambiente distendido de recuperación.',
  desc: 'Recorrido de 6 "hoyos" (porterías de conos de 1 m) por el campo. Cada jugador cuenta los golpeos que necesita para pasar el balón por cada hoyo. Gana quien menos golpeos suma.',
  reglas: ['Se golpea desde donde quedó el balón.', 'Turnos alternos.', 'Máximo 6 golpeos por hoyo.'],
  cons: ['Elegir el golpeo: interior, empeine o bombeado.', 'Ritmo tranquilo y charla en el grupo.'],
  var: ['+ Hoyos más estrechos.', '− Hoyos más cerca.'],
  d: { z: [[22.5, 11.5, 60, 45]], c: [[30, 18], [31, 18], [52, 14], [53, 14], [74, 22], [75, 22], [70, 48], [71, 48], [45, 50], [46, 50], [32, 40], [33, 40]], t: [[30.5, 16.5, '1', 1], [52.5, 12.5, '2', 1], [74.5, 20.5, '3', 1], [70.5, 46.5, '4', 1], [45.5, 48.5, '5', 1], [32.5, 38.5, '6', 1]], p: [A(26, 30), B(28, 32), A(48, 22)], b: [[26.9, 30.5]], a: [['pase', 26, 30, 30.5, 18.5, 0], ['pase', 48, 22, 52.5, 14.5, -3]] } });

T({ id: 'j12', n: 'Tres en raya con relevos', cat: 'jue', tipo: 'Juego cognitivo', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD-2'], int: 3, rpe: '5-6', carga: 'Velocidad', fase: 'cal',
  jug: 'Equipos de 3-4', np: 12, esp: [20, 15], ser: '5 partidas', rec: '30"', dur: 10,
  obj: 'Sprint con toma de decisiones bajo fatiga y trabajo en equipo.',
  desc: 'Un tablero de 3 x 3 aros (o conos) a 15 m. Cada equipo tiene 3 petos. Por relevos, sprintan, dejan un peto en una casilla y vuelven. Cuando se acaban los petos, mueven los suyos hasta hacer tres en raya.',
  reglas: ['Solo un jugador por equipo en el tablero.', 'Choque de manos para dar el relevo.', 'Gana el primero que hace tres en raya.'],
  cons: ['Pensar la jugada antes de salir.', 'Sprint corto y máximo.'],
  var: ['+ Conduciendo un balón.', '− Distancia de 10 m.'],
  d: { z: [[57, 28, 9, 9]], c: [[58.5, 29.5, '#22c55e'], [61.5, 29.5, '#22c55e'], [64.5, 29.5, '#22c55e'], [58.5, 32.5, '#22c55e'], [61.5, 32.5, '#22c55e'], [64.5, 32.5, '#22c55e'], [58.5, 35.5, '#22c55e'], [61.5, 35.5, '#22c55e'], [64.5, 35.5, '#22c55e']], p: [A(42, 29), A(40, 29), B(42, 36), B(40, 36)], a: [['mov', 42, 29, 58, 30, 0], ['mov', 42, 36, 64, 35, 0]] } });

T({ id: 'j13', n: 'Secuencia de pases de memoria', cat: 'jue', tipo: 'Juego cognitivo', ed: 'ICJS', dif: 2, md: ['MD-1', 'MD-2', 'MD-3'], int: 2, rpe: '4', carga: 'Activación', fase: 'cal',
  jug: '8-10 jugadores', np: 9, esp: [25, 25], ser: '4 x 2\'', rec: '30"', dur: 10,
  obj: 'Atención, comunicación y movilidad sin balón.',
  desc: 'Los jugadores se numeran del 1 al 9 y se pasan el balón siempre en orden (1→2→3…→9→1) mientras se mueven por el espacio. Después se añade un segundo balón con orden inverso.',
  reglas: ['Siempre en movimiento.', 'Dos toques.', 'Si se rompe la secuencia, se empieza desde el 1.'],
  cons: ['Saber dónde está el siguiente antes de recibir.', 'Ofrecerse al que te va a pasar.'],
  var: ['+ Dos balones en sentidos contrarios.', '− Jugadores quietos al principio.'],
  d: { z: [[40, 21.5, 25, 25]], p: [A(43, 25, '1'), A(52, 24, '2'), A(61, 26, '3'), A(62, 35, '4'), A(60, 43, '5'), A(51, 44, '6'), A(43, 42, '7'), A(44, 33, '8'), A(52, 34, '9')], b: [[43.9, 25.5]], a: [['pase', 43, 25, 52, 24, 0], ['pase', 52, 24, 61, 26, 0], ['pase', 61, 26, 62, 35, 0], ['mov', 51, 44, 54, 40, 0]] } });

T({ id: 'j14', n: 'Partido con comodín cambiante', cat: 'jue', tipo: 'Juego cognitivo', ed: 'CJS', dif: 2, md: ['MD-3', 'MD-4'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '5v5 + 2 comodines + 2P', np: 14, esp: [45, 35], ser: '4 x 4\'', rec: '1\'30"', dur: 22,
  obj: 'Adaptarse rápido a superioridades e inferioridades cambiantes.',
  desc: 'Partido con dos comodines. El entrenador dice en voz alta con qué equipo juegan en cada momento ("¡rojos!", "¡azules!", "¡nadie!"). Los equipos deben reconocer la situación y adaptar su juego.',
  reglas: ['Cambio de orden cada 20-40".', 'Comodines a dos toques.', 'Gol de un comodín vale doble.'],
  cons: ['En superioridad, paciencia y amplitud.', 'En inferioridad, juntarse y defender el centro.'],
  var: ['+ Señal visual en vez de voz.', '− Cambios cada minuto.'],
  d: { z: [[30, 16.5, 45, 35]], g: [[30, 34, 'R'], [75, 34, 'L']], p: [P(31.5, 34), P(73.5, 34), A(40, 26), A(42, 40), A(52, 32), A(58, 22), A(62, 42), B(46, 30), B(48, 44), B(56, 36), B(64, 30), B(67, 38), N(52.5, 22), N(52.5, 46), E(52.5, 53)], b: [[52.9, 32.5]], a: [['pase', 52, 32, 52.5, 22, 0], ['pase', 52.5, 22, 62, 42, 4]] } });

T({ id: 'j15', n: 'Partido con zonas de bonus', cat: 'jue', tipo: 'Competición', ed: 'ICJS', dif: 1, md: ['MD-3', 'MD-2'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '6v6 + 2P', np: 14, esp: [50, 35], ser: '3 x 6\'', rec: '2\'', dur: 22,
  obj: 'Motivar el tiro desde fuera y la llegada por bandas.',
  desc: 'Partido normal con zonas marcadas: gol desde fuera del área = 2 puntos, gol tras centro desde las zonas de banda = 2 puntos, gol de cabeza = 3 puntos.',
  reglas: ['Toques libres.', 'Marcador visible.', 'El entrenador puede cambiar las zonas de bonus.'],
  cons: ['Buscar las zonas que dan más puntos.', 'Defender evitando tiros de lejos.'],
  var: ['+ Bonus solo tras robo en campo rival.', '− Solo una zona de bonus.'],
  d: { z: [[27.5, 16.5, 50, 35], [27.5, 16.5, 50, 6, '#a855f7', 'x2 centro'], [27.5, 45.5, 50, 6, '#a855f7'], [62, 22.5, 6, 23, '#f59e0b', 'x2 tiro']], g: [[27.5, 34, 'R'], [77.5, 34, 'L']], p: [P(29, 34), P(76, 34), A(40, 28), A(44, 40), A(52, 34), A(58, 19), A(66, 30), A(68, 38), B(36, 34), B(46, 26), B(50, 42), B(60, 30), B(70, 33), B(64, 44)], b: [[58.9, 19.5]], a: [['cond', 58, 19, 70, 19, 0], ['pase', 70, 19, 72, 32, 2], ['mov', 68, 38, 72, 34, 0]] } });

T({ id: 'j16', n: 'Torneo 1v1 por escalera', cat: 'jue', tipo: 'Competición', ed: 'ICJS', dif: 2, md: ['MD-4'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: 'Parejas en 4-6 campos', np: 12, esp: [12, 8], ser: '6 rondas de 45"', rec: '45"', dur: 12,
  obj: 'Duelos 1v1 máximos con motivación competitiva.',
  desc: 'Varios campos pequeños en fila con miniporterías. En cada ronda se juega 1v1 durante 45". El ganador sube un campo y el perdedor baja. El objetivo es terminar en el campo 1 ("el campo del rey").',
  reglas: ['Empate: gana quien marcó primero; si no, piedra-papel-tijera.', 'Reposición rápida de balón.', 'Rotación inmediata entre rondas.'],
  cons: ['Encarar y finalizar rápido.', 'Defender bajo y paciente.'],
  var: ['+ 2v2 por escalera.', '− Rondas de 30".'],
  d: { z: [[26, 28, 12, 8], [40, 28, 12, 8], [54, 28, 12, 8], [68, 28, 12, 8]], mg: [[26, 32, 'L'], [38, 32, 'R'], [40, 32, 'L'], [52, 32, 'R'], [54, 32, 'L'], [66, 32, 'R'], [68, 32, 'L'], [80, 32, 'R']], t: [[32, 26.8, 'Campo 1', .8], [46, 26.8, 'Campo 2', .8], [60, 26.8, 'Campo 3', .8], [74, 26.8, 'Campo 4', .8]], p: [A(30, 31), B(34, 33), A(44, 33), B(48, 31), A(58, 31), B(62, 33), A(72, 33), B(76, 31)], b: [[30.9, 31.5], [44.9, 33.5], [58.9, 31.5], [72.9, 33.5]], a: [['cond', 58, 31, 64.5, 32, 0], ['mov', 54, 38, 42, 38, 0]] } });

T({ id: 'j17', n: 'Carrera al balón por números', cat: 'jue', tipo: 'Juego de activación', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD-2'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'cal',
  jug: '2 equipos numerados + 2P', np: 14, esp: [35, 30], ser: '10-12 salidas', rec: '30" entre salidas', dur: 10,
  obj: 'Velocidad de reacción y duelo con finalización.',
  desc: 'Dos equipos sentados en las bandas, cada jugador con un número. El entrenador lanza un balón al centro y dice uno o varios números: esos jugadores salen y juegan 1v1, 2v2 o 3v3 hasta marcar o que salga el balón.',
  reglas: ['Salida sentado o tumbado.', 'Máximo 15" de duelo.', 'Gol = punto para el equipo.'],
  cons: ['Primer paso explosivo.', 'Ganar la posición al rival antes de llegar al balón.'],
  var: ['+ Operaciones matemáticas ("2 + 3").', '− Salida de pie.'],
  d: { z: [[35, 19, 35, 30]], g: [[35, 34, 'R'], [70, 34, 'L']], p: [P(36.5, 34), P(68.5, 34), ...[40, 45, 50, 55, 60, 65].map((x, i) => A(x, 19, String(i + 1))), ...[40, 45, 50, 55, 60, 65].map((x, i) => B(x, 49, String(i + 1))), E(52.5, 53)], b: [[52.5, 34]], a: [['mov', 50, 19, 52, 32.5, 0], ['mov', 50, 49, 53, 35.5, 0], ['pase', 52.5, 52, 52.5, 34.6, 0]] } });

T({ id: 'j18', n: 'Mini-mundial 3v3', cat: 'jue', tipo: 'Competición', ed: 'AICJS', dif: 1, md: ['MD-4', 'MD-3'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: '4-6 equipos de 3', np: 15, esp: [25, 20], ser: 'Liguilla de partidos de 3\'', rec: 'Partido de descanso', dur: 24,
  obj: 'Competición con mucha participación individual y alta intensidad.',
  desc: 'Equipos de 3 con nombre de selección. Dos o tres campos de 25 x 20 con miniporterías. Liguilla rápida de partidos de 3\' con tabla de clasificación y final.',
  reglas: ['Partidos de 3\'.', 'Victoria 3 puntos, empate 1.', 'Sin porteros; gol solo en campo rival.'],
  cons: ['Intensidad máxima en cada partido.', 'Animarse entre compañeros.'],
  var: ['+ Partidos de 2\' a un toque en campo rival.', '− 4v4.'],
  d: { z: [[25, 22, 25, 20], [55, 22, 25, 20]], mg: [[25, 32, 'L'], [50, 32, 'R'], [55, 32, 'L'], [80, 32, 'R']], p: [A(32, 27), A(36, 37), A(42, 31), B(38, 29), B(44, 36), B(46, 27), N(62, 28), N(66, 37), N(72, 31), C(68, 27), C(73, 37), C(60, 34)], b: [[42.9, 31.5], [72.9, 31.5]], a: [['cond', 42, 31, 48, 31, 0]] } });

T({ id: 'j19', n: 'Desafío de habilidades por equipos', cat: 'jue', tipo: 'Dinámica de grupo', ed: 'AICJS', dif: 1, md: ['MD+1', 'MD-1'], int: 2, rpe: '3-4', carga: 'Recuperación', fase: 'pri',
  jug: 'Equipos de 4-5', np: 16, esp: [40, 30], ser: '4 estaciones x 4\'', rec: '1\' (cambio)', dur: 20,
  obj: 'Cohesión de grupo y técnica en un formato de retos.',
  desc: 'Cuatro estaciones con retos que suman puntos para el equipo: 1) toques sin que caiga el balón entre todos, 2) precisión a una portería de conos a 15 m, 3) control de balón aéreo, 4) pases en triángulo en 30". Gana el equipo con más puntos.',
  reglas: ['Todos los miembros deben participar en cada reto.', 'Tiempo fijo por estación.', 'Puntos anotados en una pizarra.'],
  cons: ['Organizarse y animar.', 'Calidad técnica sin presión física.'],
  var: ['+ Retos con la pierna menos hábil.', '− Más tiempo por estación.'],
  d: { z: [[32.5, 19, 19, 14, '#60a5fa', '1 Toques'], [53.5, 19, 19, 14, '#f59e0b', '2 Precisión'], [32.5, 35, 19, 14, '#a855f7', '3 Aéreo'], [53.5, 35, 19, 14, '#22c55e', '4 Triángulo']], p: [A(38, 24), A(42, 22), A(44, 27), B(57, 26), N(37, 40), N(45, 41), C(58, 40), C(66, 40), C(62, 45)], c: [[69, 24], [69, 28]], b: [[40, 25], [57.9, 26.5], [41, 39], [58.9, 40.5]], a: [['pase', 57, 26, 68.5, 26, 0], ['pase', 58, 40, 66, 40, 0], ['pase', 66, 40, 62, 45, 0]] } });

T({ id: 'j20', n: 'Partido "todos tocan"', cat: 'jue', tipo: 'Dinámica de grupo', ed: 'AICJS', dif: 2, md: ['MD-3', 'MD-2'], int: 3, rpe: '6', carga: 'Duración', fase: 'pri',
  jug: '6v6 + 2P', np: 14, esp: [50, 35], ser: '3 x 6\'', rec: '1\'30"', dur: 22,
  obj: 'Juego colectivo: implicar a todos los jugadores en la posesión.',
  desc: 'Para que un gol valga, todos los jugadores de campo del equipo deben haber tocado el balón en esa posesión. Un gol rápido sin cumplir la regla no vale, pero sí cuenta un gol tras robo en menos de 5" (para premiar la presión).',
  reglas: ['El portero no cuenta para la regla.', 'Gol tras robo en menos de 5" siempre vale.', 'Un "capitán" lleva la cuenta en voz alta.'],
  cons: ['Comunicación: "¡falto yo!".', 'Ocupar espacios para que todos puedan recibir.'],
  var: ['+ Todos tocan y máximo 3 toques.', '− Solo 4 jugadores distintos.'],
  d: { z: [[27.5, 16.5, 50, 35]], g: [[27.5, 34, 'R'], [77.5, 34, 'L']], p: [P(29, 34), P(76, 34), A(36, 26), A(36, 42), A(46, 34), A(54, 22), A(58, 44), A(66, 32), B(42, 30), B(44, 42), B(52, 30), B(60, 36), B(68, 26), B(70, 40)], b: [[36.9, 26.5]], a: [['pase', 36, 26, 46, 34, 0], ['pase', 46, 34, 36, 42, 0], ['pase', 36, 42, 58, 44, 0], ['pase', 58, 44, 54, 22, 3], ['pase', 54, 22, 66, 32, 0], ['tiro', 66, 32, 76.5, 35, 0]] } });
