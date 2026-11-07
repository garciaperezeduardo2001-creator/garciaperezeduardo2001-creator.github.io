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

// ---------- AMPLIACIÓN 2 ----------
T({ id: 'j21', n: 'Rondo con penalización divertida', cat: 'jue', tipo: 'Juego lúdico', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD-2', 'MD+1'], int: 2, rpe: '4', carga: 'Activación', fase: 'cal',
  jug: '6v2', np: 8, esp: [12, 12], ser: '4 x 2\'', rec: '30"', dur: 10,
  obj: 'Activación con buen ambiente y concentración en el pase.',
  desc: 'Rondo 6v2 en el que el jugador que pierde el balón, además de entrar en el medio, recibe una prenda divertida acordada por el grupo (llevar un peto en la cabeza, cantar el himno del club…).',
  reglas: ['Dos toques.', 'La prenda se cumple en el momento.', 'Penalizaciones elegidas por el grupo al empezar.'],
  cons: ['Disfrutar sin perder la calidad del pase.', 'Comunicación constante.'],
  var: ['+ Un toque.', '− Tres toques.'],
  d: { z: [[46.5, 28, 12, 12]], c: esq(46.5, 28, 12, 12), p: [...ring(52.5, 34, 6, 6, 'A'), B(51, 33), B(54, 35.5)], b: [[52.5, 28.9]], a: [['pase', 52.5, 28, 57.7, 31, 0, 1], ['pase', 57.7, 31, 47.3, 37, 0, 2], ['mov', 51, 33, 49, 35, 0, 2]] } });

T({ id: 'j22', n: 'El pañuelo con balón', cat: 'jue', tipo: 'Juego de activación', ed: 'AICJ', dif: 1, md: ['MD-1', 'MD-2'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'cal',
  jug: '2 equipos numerados', np: 12, esp: [30, 15], ser: '10-12 salidas', rec: '30"', dur: 10,
  obj: 'Reacción, aceleración y duelo 1v1 en forma de juego tradicional.',
  desc: 'Versión del juego del pañuelo: el entrenador en el centro con un balón dice un número. Los dos jugadores con ese número salen; el que coge el balón debe conducir hasta su línea sin que el rival le toque o le robe.',
  reglas: ['Si el rival roba, puede marcar en la línea contraria.', 'Punto por llegar a tu línea con el balón.', 'Números cambiados en cada ronda.'],
  cons: ['Amagar antes de coger el balón.', 'Protegerlo con el cuerpo al salir.'],
  var: ['+ Dos números a la vez (2v2).', '− Sin robo, solo carrera.'],
  d: { z: [[37.5, 26.5, 30, 15]], p: [...[30, 33, 36, 39].map((y, i) => A(38, y, String(i + 1))), ...[30, 33, 36, 39].map((y, i) => B(67, y, String(i + 1))), E(52.5, 30)], b: [[52.5, 34]], a: [['mov', 38, 36, 51.5, 34.3, 0, 1], ['mov', 67, 36, 53.5, 34.5, 0, 1], ['cond', 52, 34, 39, 34, 0, 2]] } });

T({ id: 'j23', n: 'Fútbol con 4 balones a la vez', cat: 'jue', tipo: 'Juego lúdico', ed: 'AIC', dif: 1, md: ['MD-3', 'MD-4'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '6v6', np: 12, esp: [40, 30], ser: '3 x 4\'', rec: '1\'30"', dur: 16,
  obj: 'Muchos contactos con balón, percepción y transiciones constantes.',
  desc: 'Partido 6v6 sin porteros con cuatro balones en juego a la vez y porterías grandes de conos. Cada gol se cuenta y el balón vuelve a entrar por el entrenador.',
  reglas: ['Cuatro balones siempre en juego.', 'Gol solo desde campo rival.', 'Cuenta de goles en voz alta.'],
  cons: ['Levantar la cabeza para ver todos los balones.', 'Organizarse: unos atacan, otros defienden.'],
  var: ['+ Cinco balones.', '− Dos balones.'],
  d: { z: [[32.5, 19, 40, 30]], c: [[32.5, 29], [32.5, 39], [72.5, 29], [72.5, 39]], p: [A(40, 26), A(42, 40), A(52, 30), A(58, 44), A(62, 24), A(66, 36), B(38, 34), B(46, 24), B(50, 42), B(56, 34), B(64, 30), B(68, 42)], b: [[40.9, 26.5], [52.9, 30.5], [58.9, 44.5], [56.9, 34.5]], a: [['cond', 62, 24, 70, 30, 0, 1], ['pase', 52, 30, 66, 36, 0, 1], ['tiro', 66, 36, 72.5, 34, 0, 2]] } });

T({ id: 'j24', n: 'Pases a ciegas por parejas (confianza)', cat: 'jue', tipo: 'Dinámica de grupo', ed: 'ICJS', dif: 1, md: ['MD+1', 'MD-1'], int: 1, rpe: '2', carga: 'Recuperación', fase: 'cal',
  jug: 'Parejas', np: 16, esp: [20, 20], ser: '3 x 2\'', rec: '30"', dur: 8,
  obj: 'Comunicación y confianza entre compañeros de forma distendida.',
  desc: 'Un jugador con los ojos cerrados (o con un peto tapando) conduce el balón guiado solo por la voz de su compañero entre conos. Después intercambian.',
  reglas: ['Solo instrucciones de voz.', 'Ritmo lento.', 'El guía es responsable de la seguridad.'],
  cons: ['Instrucciones cortas y claras.', 'Confianza en el compañero.'],
  var: ['+ Recorrido con más conos.', '− Ojos abiertos y guía con palmas.'],
  d: { z: [[42.5, 24, 20, 20]], c: [[47, 28], [55, 30], [50, 36], [58, 40], [46, 41]], p: [A(45, 26), B(43, 27), A(56, 36), B(58, 35)], b: [[45.9, 26.5], [56.9, 36.5]], a: [['cond', 45, 26, 51, 31, 2, 1], ['mov', 43, 27, 48, 30, 0, 1], ['cond', 56, 36, 54, 42, 0, 2]] } });

T({ id: 'j25', n: 'Partido de goles de cabeza', cat: 'jue', tipo: 'Juego lúdico', ed: 'ICJS', dif: 2, md: ['MD-1', 'MD-2'], int: 2, rpe: '5', carga: 'Activación', fase: 'pri',
  jug: '4v4 + 2P', np: 10, esp: [25, 20], ser: '3 x 4\'', rec: '1\'', dur: 14,
  obj: 'Juego aéreo: control con el pecho, pases de cabeza y remate.',
  desc: 'El balón se juega con las manos (lanzamiento al compañero), pero solo se puede marcar de cabeza. Si el balón cae al suelo, pasa al rival.',
  reglas: ['Máximo 3" con el balón en las manos.', 'No se puede andar con el balón.', 'Gol solo de cabeza.'],
  cons: ['Lanzar a la altura de la cabeza del compañero.', 'Atacar el balón con la frente.'],
  var: ['+ Gol de volea también vale.', '− Gol con la mano en el área pequeña.'],
  d: { z: [[40, 24, 25, 20]], g: [[40, 34, 'R'], [65, 34, 'L']], p: [P(41.5, 34), P(63.5, 34), A(48, 30), A(52, 38), A(56, 30), A(59, 35), B(46, 36), B(53, 33), B(58, 40), B(57, 27)], b: [[48.8, 30.5]], a: [['pase', 48, 30, 56, 30, -2, 1], ['pase', 56, 30, 59, 35, -1.5, 2], ['tiro', 59, 35, 64, 34, 0, 3]] } });

T({ id: 'j26', n: 'Supervivientes 1v1 en cuadrados', cat: 'jue', tipo: 'Competición', ed: 'AICJS', dif: 1, md: ['MD-4'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: 'Todo el grupo por parejas', np: 16, esp: [10, 10], ser: '6 rondas de 40"', rec: '40"', dur: 10,
  obj: 'Proteger el balón en 1v1 durante 40" bajo presión continua.',
  desc: 'Parejas en cuadrados de 10 x 10. Uno protege el balón y el otro intenta sacarlo del cuadrado. Si lo consigue, cambian los roles. Al final de los 40" gana quien tenga el balón.',
  reglas: ['Balón fuera = cambio de rol.', 'Contacto permitido dentro del reglamento.', 'Ganadores contra ganadores en la siguiente ronda.'],
  cons: ['Cuerpo entre rival y balón.', 'Brazos para sentir al rival, sin agarrar.'],
  var: ['+ Cuadrados de 8 x 8.', '− Rondas de 30".'],
  d: { z: [[36, 24, 10, 10], [48, 24, 10, 10], [60, 24, 10, 10], [36, 36, 10, 10], [48, 36, 10, 10], [60, 36, 10, 10]], p: [A(40, 29), B(42, 30), A(53, 28), B(54, 30), A(65, 29), B(63, 30), A(41, 41), B(43, 42)], b: [[39.5, 29.6], [52.5, 28.6], [65.5, 29.6], [40.5, 41.6]], a: [['cond', 53, 28, 55, 26, 0, 1], ['mov', 54, 30, 55.5, 28, 0, 1]] } });

T({ id: 'j27', n: 'Gymkana técnica por relevos', cat: 'jue', tipo: 'Competición', ed: 'AI', dif: 1, md: ['MD-2', 'MD-1', 'MD-3'], int: 3, rpe: '5-6', carga: 'Velocidad', fase: 'pri',
  jug: 'Equipos de 4', np: 16, esp: [35, 20], ser: '4 relevos', rec: '1\'', dur: 12,
  obj: 'Coordinación y técnica variada en formato de carrera por equipos.',
  desc: 'Recorrido: conducción en slalom, pase por una puerta de conos a un compañero, recoger el balón, 5 toques de habilidad (o 2 en categorías pequeñas) y tiro a una miniportería.',
  reglas: ['Si se falla la puerta, se repite el pase.', 'Relevo al chocar la mano.', 'Gana el equipo que acaba primero.'],
  cons: ['Calidad antes que prisa.', 'Animar a los compañeros.'],
  var: ['+ Toques con ambas piernas.', '− Sin toques de habilidad.'],
  d: { z: [[35, 24, 35, 20]], pk: [[41, 28], [44, 31], [47, 28], [50, 31]], c: [[56, 29], [56, 33]], mg: [[70, 34, 'R']], p: [A(37, 28), A(35, 28), B(37, 40), B(35, 40)], b: [[37.9, 28.5], [37.9, 40.5]], a: [['cond', 37, 28, 52, 30, 0, 1], ['pase', 52, 30, 60, 31, 0, 2], ['mov', 52, 30, 59, 32, 0, 2], ['tiro', 64, 33, 69.8, 34, 0, 3]] } });

T({ id: 'j28', n: 'Fútbol en parejas de la mano', cat: 'jue', tipo: 'Dinámica de grupo', ed: 'AICJS', dif: 1, md: ['MD+1', 'MD-1'], int: 2, rpe: '4', carga: 'Recuperación', fase: 'pri',
  jug: '4 parejas v 4 parejas', np: 16, esp: [35, 25], ser: '3 x 4\'', rec: '1\'', dur: 14,
  obj: 'Cooperación, comunicación y diversión con poca carga física.',
  desc: 'Partido en el que cada pareja va de la mano (o unida por un peto) y no puede soltarse. Solo puede jugar el balón uno de los dos en cada acción.',
  reglas: ['Si la pareja se suelta, balón para el rival.', 'Sin porteros, porterías pequeñas.', 'Ritmo tranquilo.'],
  cons: ['Coordinarse antes de cada acción.', 'Hablar constantemente.'],
  var: ['+ Tríos.', '− Sin restricción de quién toca.'],
  d: { z: [[35, 21.5, 35, 25]], mg: [[35, 34, 'L'], [70, 34, 'R']], p: [A(44, 28), A(45.5, 29), A(52, 38), A(53.5, 39), B(56, 30), B(57.5, 31), B(46, 40), B(47.5, 41)], b: [[45.5, 30.3]], a: [['pase', 45.5, 29, 52, 38, 0, 1], ['cond', 53.5, 39, 64, 36, 0, 2]] } });

T({ id: 'j29', n: 'Torneo de penaltis con portero rotativo', cat: 'jue', tipo: 'Competición', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD+1'], int: 1, rpe: '3', carga: 'Activación', fase: 'vc',
  jug: 'Todo el grupo', np: 16, esp: [20, 20], ser: 'Eliminatoria', rec: '—', dur: 12,
  obj: 'Cierre lúdico de sesión trabajando la concentración en el lanzamiento.',
  desc: 'Cada jugador lanza un penalti; si marca, sigue en el torneo; si falla, pasa a ser portero (rotativo) para los siguientes. Gana el último en pie.',
  reglas: ['Portero rotativo entre los eliminados.', 'Carrera máxima de 5 pasos.', 'Final a muerte súbita.'],
  cons: ['Decidir el lado antes de la carrera.', 'Golpeo firme.'],
  var: ['+ Solo con la pierna menos hábil.', '− Desde 8 m.'],
  d: { v: [82, 20, 26, 28], p: [P(104.5, 34), A(91, 34), A(88, 36), A(88, 32)], b: [[94, 34]], a: [['mov', 91, 34, 93.3, 34, 0, 1], ['tiro', 94, 34, 104.6, 31, 0, 2]] } });

T({ id: 'j30', n: 'Reto del equipo: 100 pases sin que caiga', cat: 'jue', tipo: 'Dinámica de grupo', ed: 'ICJS', dif: 2, md: ['MD-1', 'MD+1', 'MD-2'], int: 1, rpe: '3', carga: 'Recuperación', fase: 'vc',
  jug: 'Todo el grupo en círculo', np: 12, esp: [15, 15], ser: '3 intentos', rec: '—', dur: 10,
  obj: 'Cohesión y técnica de golpeo aéreo con un objetivo común.',
  desc: 'Todo el equipo en un círculo grande se pasa el balón en el aire (pie, muslo, pecho, cabeza) sin que toque el suelo. El objetivo es llegar a 100 toques entre todos. Se anota el récord del equipo.',
  reglas: ['Nadie puede dar dos toques seguidos más de dos veces.', 'Cuenta en voz alta todo el grupo.', 'Récord en la pizarra del vestuario.'],
  cons: ['Toques suaves y altos.', 'Avisar antes de recibir.'],
  var: ['+ Solo de cabeza y pecho.', '− Se permite un bote.'],
  d: { z: [[45, 26.5, 15, 15]], p: [...ring(52.5, 34, 7, 12, 'A')], b: [[52.5, 28]], a: [['pase', 52.5, 27, 58.6, 30.5, -2, 1], ['pase', 58.6, 30.5, 56, 40, -2, 2], ['pase', 56, 40, 46.4, 37.5, -2, 3]] } });

// ---------- AMPLIACIÓN (j31 – j38) ----------
T({ id: 'j31', n: 'Fútbol-béisbol', cat: 'jue', tipo: 'Juego lúdico', ed: 'AICJS', dif: 1, md: ['MD+2', 'MD-2', 'MD-1'], int: 2, rpe: '4-5', carga: 'Activación', fase: 'pri',
  jug: 'Dos equipos de 5-8', np: 14, esp: [30, 30], ser: '2 entradas por equipo', rec: '—', dur: 18,
  obj: 'Golpeo, carrera y cooperación en un juego distinto que rompe la rutina.',
  desc: 'El bateador golpea el balón con el pie desde la base y corre alrededor de 4 conos. El equipo que defiende debe controlar el balón y pasarlo a su jugador en la base antes de que el bateador llegue a un cono. Carrera completa: 1 punto.',
  reglas: ['El balón se golpea parado.', 'El que defiende solo puede usar los pies.', 'Tres eliminados: cambio de equipo.'],
  cons: ['Golpea hacia donde no hay nadie.', 'Defensores: pases rápidos.', 'Animar al equipo.'],
  var: ['+ Golpeo con la pierna mala.', '− Bateador puede parar en cada cono.'],
  d: { c: [[40, 46], [40, 22], [65, 22], [65, 46]], p: [A(38, 48), B(50, 30), B(58, 36), B(48, 40), B(60, 26), B(40, 44)], b: [[39.5, 47]], a: [['tiro', 39.5, 47, 56, 32, 0, 1], ['mov', 38, 48, 40, 23, 0, 1]] } });

T({ id: 'j32', n: 'El reloj: relevos contra el tiempo', cat: 'jue', tipo: 'Juego de activación', ed: 'AICJS', dif: 1, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'cal',
  jug: 'Dos equipos', np: 12, esp: [20, 20], ser: '4 rondas', rec: '1\'', dur: 10,
  obj: 'Velocidad con balón y cooperación: un equipo da vueltas conduciendo mientras el otro completa pases.',
  desc: 'El equipo A, en círculo, se pasa el balón contando pases. El equipo B, por relevos, da una vuelta completa al círculo conduciendo. Cuando el último de B termina, se apunta cuántos pases ha hecho A. Cambio de roles.',
  reglas: ['Pases solo al compañero de al lado (o saltando uno).', 'Conducción por fuera del círculo.', 'Gana quien haga más pases.'],
  cons: ['Pases rápidos y precisos.', 'Conducción rápida con el exterior.', 'Relevo con choque de manos.'],
  var: ['+ Pases a un toque.', '− Círculo más pequeño.'],
  d: { p: [...ring(52, 34, 7, 6, 'A'), B(43, 34)], b: [[45, 34.5]], a: [['cond', 43, 34, 52, 24, -3, 1]] } });

T({ id: 'j33', n: 'Partido de los retos (cartas)', cat: 'jue', tipo: 'Competición', ed: 'AICJS', dif: 1, md: ['MD-3', 'MD-2', 'MD-1'], int: 3, rpe: '6', carga: 'Tensión', fase: 'pri',
  jug: '5v5 + porteros', np: 12, esp: [40, 30], ser: '4 x 4\'', rec: '1\'', dur: 20,
  obj: 'Partido divertido con condiciones cambiantes que obligan a adaptarse.',
  desc: 'Antes de cada tiempo, cada equipo saca una carta con un reto: «solo gol de cabeza vale doble», «un jugador no puede tocar el balón», «gol tras 5 pases = 3», «todos deben pasar del medio campo»… Si se cumple el reto, punto extra.',
  reglas: ['Una carta por equipo y tiempo.', 'Reto cumplido: 1 punto extra.', 'El entrenador hace de árbitro de retos.'],
  cons: ['Lee el reto y organiza al equipo.', 'Adáptate rápido.', 'Diviértete compitiendo.'],
  var: ['+ Carta secreta (el rival no la conoce).', '− Retos más sencillos.'],
  d: { z: [[32.5, 19, 40, 30]], g: [[32.5, 34, 'R'], [72.5, 34, 'L']], p: [P(33.5, 34), P(71.5, 34), A(42, 26), A(46, 40), A(52, 32), A(58, 24), A(62, 42), B(48, 28), B(54, 38), B(60, 32), B(64, 26), B(44, 34)], b: [[52.8, 32.5]], a: [['pase', 52, 32, 58, 24, 1, 1], ['tiro', 58, 24, 71.8, 33, 0, 2]] } });

T({ id: 'j34', n: 'Bolos defendidos: tiro a conos con defensor', cat: 'jue', tipo: 'Juego lúdico', ed: 'AICJS', dif: 1, md: ['MD-3', 'MD-2', 'MD-1'], int: 3, rpe: '6', carga: 'Tensión', fase: 'pri',
  jug: '4v4', np: 8, esp: [30, 20], ser: '4 x 3\'', rec: '1\'', dur: 15,
  obj: 'Pase y tiro con precisión mientras se protege el propio objetivo.',
  desc: 'Cada equipo tiene 3 conos de pie (bolos) en su zona de fondo. Se gana un punto al derribar un bolo rival con un tiro raso desde fuera de la zona. Nadie puede entrar en las zonas de bolos.',
  reglas: ['Prohibido entrar en la zona de bolos.', 'Tiros siempre rasos.', 'Gana quien derriba los 3 bolos o tiene más al final.'],
  cons: ['Tira cuando el defensor no tape.', 'Defiende tapando la línea de tiro.', 'Mueve el balón rápido para abrir huecos.'],
  var: ['+ Bolos más pequeños.', '− 4 bolos por equipo.'],
  d: { z: [[37.5, 24, 30, 20], [37.5, 24, 4, 20, 'rgba(250,204,21,.18)'], [63.5, 24, 4, 20, 'rgba(250,204,21,.18)']], c: [[39.5, 28], [39.5, 34], [39.5, 40], [65.5, 28, '#facc15'], [65.5, 34, '#facc15'], [65.5, 40, '#facc15']], p: [A(46, 28), A(50, 38), A(54, 31), B(56, 36), B(58, 28), B(48, 33)], b: [[54.8, 31.5]], a: [['pase', 54, 31, 50, 38, 0, 1], ['tiro', 50, 38, 65.5, 40, 0, 2]] } });

T({ id: 'j35', n: 'Malabares por parejas: control y volea', cat: 'jue', tipo: 'Técnica lúdica', ed: 'AICJS', dif: 1, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 1, rpe: '3', carga: 'Activación', fase: 'cal',
  jug: 'Parejas', np: 2, esp: [6, 6], ser: '4 x 2\'', rec: '30"', dur: 10,
  obj: 'Dominio del balón en el aire: control con muslo, pie y cabeza y pase de volea.',
  desc: 'Parejas a 4-5 m. Pasarse el balón sin que toque el suelo: un control y pase de volea. Cuenta de pases seguidos; cada serie se intenta superar el récord.',
  reglas: ['Un control y un pase (dos toques).', 'Si cae al suelo, empieza la cuenta.', 'Récord por pareja.'],
  cons: ['Amortigua el balón.', 'Pase suave y alto al compañero.', 'Usa las dos piernas.'],
  var: ['+ Un toque obligatorio con la cabeza.', '− Se permite un bote.'],
  d: { p: [A(48, 34), A(54, 34), A(48, 40), A(54, 40)], b: [[51, 33]], a: [['pase', 48, 34, 54, 34, -2, 1], ['pase', 54, 34, 48, 34, -2, 2]] } });

T({ id: 'j36', n: 'Estrella de pases con competición', cat: 'jue', tipo: 'Juego de activación', ed: 'AICJS', dif: 1, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 2, rpe: '4', carga: 'Activación', fase: 'cal',
  jug: 'Dos grupos de 5-6', np: 12, esp: [15, 15], ser: '3 x 2\'', rec: '45"', dur: 10,
  obj: 'Pase y desplazamiento siguiendo un dibujo en estrella, compitiendo contra el otro grupo.',
  desc: 'Cinco conos en estrella. Cada jugador pasa al cono que no tiene al lado (dibujando una estrella) y sigue su pase. Gana el grupo que completa más vueltas enteras en 2 minutos.',
  reglas: ['Pase siempre en estrella.', 'Sigue tu pase.', 'Si el balón se escapa, se repite el pase.'],
  cons: ['Pase al pie bueno del compañero.', 'Control orientado hacia el siguiente cono.', 'Comunicación.'],
  var: ['+ Dos balones a la vez.', '− Pase al cono de al lado.'],
  d: { c: ring(52, 34, 7, 5, 'A').map(p => [p[1], p[2]]), p: ring(52, 34, 7, 5, 'A'), b: [[52, 26.6]], a: [['pase', 52, 27, 56.1, 39.7, 0, 1], ['pase', 56.1, 39.7, 45.3, 31.8, 0, 2], ['pase', 45.3, 31.8, 58.7, 31.8, 0, 3]] } });

T({ id: 'j37', n: 'Puntería: tiro a dianas en la portería', cat: 'jue', tipo: 'Juego lúdico', ed: 'AICJS', dif: 1, md: ['MD-2', 'MD-1'], int: 2, rpe: '4', carga: 'Activación', fase: 'pri',
  jug: 'Dos equipos', np: 10, esp: [20, 20], ser: '3 rondas', rec: '—', dur: 12,
  obj: 'Precisión en el tiro a los rincones de la portería.',
  desc: 'Se cuelgan aros, petos o conos en las cuatro esquinas de la portería. Cada jugador tira desde 14-16 m. Escuadra: 3 puntos; esquina baja: 2 puntos; resto de la portería: 1 punto.',
  reglas: ['Tiro desde la línea marcada.', 'Cada jugador tira 3 veces por ronda.', 'Gana el equipo con más puntos.'],
  cons: ['Elige el rincón antes de tirar.', 'Interior para colocar, empeine para fuerza.', 'Pie de apoyo apuntando a la diana.'],
  var: ['+ Tiro tras control.', '− Distancia más corta.'],
  d: { v: [80, 20, 28, 28], c: [[104.5, 30.6, '#facc15'], [104.5, 37.4, '#facc15']], p: [A(90, 34), A(88, 36), B(88, 32)], b: [[91, 34.5]], a: [['tiro', 91, 34, 104.5, 30.8, 0, 1]], t: [[104, 28, '3', 1], [104, 40, '2', 1]] } });

T({ id: 'j38', n: 'De las manos a los pies: pase con la mano y gol con el pie', cat: 'jue', tipo: 'Juego lúdico', ed: 'AICJS', dif: 1, md: ['MD+2', 'MD-2', 'MD-1'], int: 2, rpe: '5', carga: 'Activación', fase: 'pri',
  jug: '5v5 + porteros', np: 12, esp: [35, 25], ser: '3 x 4\'', rec: '1\'', dur: 15,
  obj: 'Desmarques y visión de juego en un juego de balonmano adaptado; el gol se hace con el pie o la cabeza.',
  desc: 'El balón se juega con la mano (máximo 3 pasos con el balón) y solo se puede marcar con el pie tras soltarlo uno mismo, de volea, o de cabeza tras un pase del compañero.',
  reglas: ['Máximo 3 pasos con el balón en la mano.', 'No se puede quitar el balón de las manos: solo interceptar.', 'Gol de cabeza: 2 puntos.'],
  cons: ['Desmárcate en cuanto tu equipo recupera.', 'Pases rápidos.', 'Atacar el espacio.'],
  var: ['+ Gol solo de cabeza.', '− Sin límite de pasos.'],
  d: { z: [[35, 21.5, 35, 25]], g: [[35, 34, 'R'], [70, 34, 'L']], p: [P(36, 34), P(69, 34), A(44, 28), A(48, 40), A(54, 32), A(60, 26), A(62, 40), B(50, 30), B(56, 38), B(60, 34), B(64, 30), B(42, 34)], b: [[54.8, 31]], a: [['pase', 54, 32, 60, 26, 2, 1], ['mov', 62, 40, 66, 34, 0, 1], ['pase', 60, 26, 66, 34, 2, 2], ['tiro', 66, 34, 69.8, 34, 0, 3]] } });
