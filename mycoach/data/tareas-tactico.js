/* TÉCNICO-TÁCTICO */
// ---------- RONDOS ----------
T({ id: 'tt01', n: 'Rondo 4v1', cat: 'tt', tipo: 'Rondo', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD-2', 'MD+1'], int: 1, rpe: '3-4', carga: 'Activación', fase: 'cal',
  jug: '4v1', np: 5, esp: [8, 8], ser: '4 x 2\'', rec: '30"', dur: 10,
  obj: 'Activar al grupo con el balón y automatizar el pase y el perfil corporal.',
  desc: 'Cuatro jugadores en los lados de un cuadrado mantienen la posesión ante un defensor. El defensor que roba o fuerza el error cambia su puesto con el jugador que perdió el balón.',
  reglas: ['Toques libres en iniciación y dos toques como norma general.', 'Los jugadores exteriores no pueden entrar en el cuadrado.', 'Si el balón sale del espacio, cambia el defensor.'],
  cons: ['Recibir con el pie más lejano al defensor y perfilado.', 'Ofrecer siempre dos líneas de pase al poseedor.', 'Pase tenso y al pie bueno.'],
  var: ['+ Un toque obligatorio.', '+ Reducir a 6 x 6 m.', '− Ampliar a 10 x 10 m o jugar 5v1.'],
  d: { z: [[48.5, 30, 8, 8]], c: esq(48.5, 30, 8, 8), p: [...ring(52.5, 34, 4, 4, 'A'), B(51.5, 33.2)], b: [[52.5, 30.9]], a: [['pase', 52.5, 30, 56.5, 34, -1.2], ['mov', 51.5, 33.2, 54.2, 32]] } });

T({ id: 'tt02', n: 'Rondo 5v2 a dos toques', cat: 'tt', tipo: 'Rondo', ed: 'ICJS', dif: 2, md: ['MD-1', 'MD-2', 'MD-4', 'MD-3'], int: 2, rpe: '4-5', carga: 'Activación', fase: 'cal',
  jug: '5v2', np: 7, esp: [10, 10], ser: '4 x 3\'', rec: '45"', dur: 15,
  obj: 'Circulación rápida, cambios de orientación y primer contacto orientado.',
  desc: 'Cinco jugadores en el exterior y dos defensores dentro. Cada 10 pases consecutivos suman un punto. El defensor que roba sale y entra el jugador que perdió el balón.',
  reglas: ['Máximo dos toques.', 'Pase entre los dos defensores ("túnel") vale doble.', 'Los defensores cambian cada 60" si no roban.'],
  cons: ['Buscar el pase que rompe la línea de los dos defensores.', 'Los defensores presionan coordinados: uno cierra el pase interior.'],
  var: ['+ Un toque o 6 x 6 m por lado menos.', '− Añadir un comodín interior (5v2+1).'],
  d: { z: [[47.5, 29, 10, 10]], c: esq(47.5, 29, 10, 10), p: [A(47.5, 31), A(52.5, 29), A(57.5, 31.5), A(57.5, 37), A(50, 39), B(51.5, 33), B(54, 35.5)], b: [[52.5, 29.9]], a: [['pase', 52.5, 29, 50, 39, 0], ['mov', 51.5, 33, 51.3, 36.2]] } });

T({ id: 'tt03', n: 'Rondo 6v2 con transición', cat: 'tt', tipo: 'Rondo', ed: 'CJS', dif: 2, md: ['MD-4', 'MD-3', 'MD-2'], int: 3, rpe: '6-7', carga: 'Tensión', fase: 'pri',
  jug: '6v2 (+2 esperando)', np: 10, esp: [12, 12], ser: '5 x 2\'', rec: '1\'', dur: 15,
  obj: 'Pasar de la posesión a la presión tras pérdida en segundos.',
  desc: 'Rondo 6v2 en un cuadrado. Cuando los defensores roban, intentan sacar el balón conduciendo fuera del cuadrado o pasarlo a dos compañeros que esperan fuera. Los seis poseedores deben recuperar en 5 segundos.',
  reglas: ['Dos toques para los poseedores.', 'Robo + salida = punto para los defensores.', 'Recuperación en menos de 5" = punto para los poseedores.'],
  cons: ['Reacción inmediata de los 2-3 más cercanos al balón perdido.', 'Cerrar el lado del pasillo de salida.'],
  var: ['+ Los defensores salen hacia una miniportería.', '− Sin transición, solo posesión.'],
  d: { z: [[46.5, 28, 12, 12]], c: esq(46.5, 28, 12, 12), mg: [[64, 34, 'L']], p: [A(46.5, 31), A(46.5, 37), A(52.5, 28), A(58.5, 31), A(58.5, 37), A(52.5, 40), B(51, 34), B(54.5, 33), B(64, 30), B(64, 38)], b: [[54.5, 33.8]], a: [['cond', 54.5, 33, 60.5, 34, 0], ['mov', 58.5, 37, 56, 34.5, 0], ['mov', 58.5, 31, 56.5, 33.3, 0]] } });

T({ id: 'tt04', n: 'Rondo 4v4 + 2 comodines interiores', cat: 'tt', tipo: 'Rondo', ed: 'CJS', dif: 3, md: ['MD-4'], int: 3, rpe: '7-8', carga: 'Tensión', fase: 'pri',
  jug: '4v4+2', np: 10, esp: [15, 15], ser: '4 x 3\'', rec: '1\'30"', dur: 18,
  obj: 'Encontrar al jugador interior entre líneas y jugar de cara.',
  desc: 'Un equipo ocupa los cuatro lados del cuadrado y otro defiende dentro. Dos comodines interiores juegan siempre con los poseedores. Al robar, los defensores pasan a ocupar los lados.',
  reglas: ['Exteriores a dos toques, comodines a un toque.', 'Pase exterior → comodín → exterior del lado contrario = punto.', 'Cambio de roles inmediato tras robo.'],
  cons: ['El comodín se orienta antes de recibir para jugar de cara.', 'Los defensores protegen el interior antes que el exterior.'],
  var: ['+ Comodines a un toque y espacio 12 x 12 m.', '− Tres comodines.'],
  d: { z: [[45, 26.5, 15, 15]], c: esq(45, 26.5, 15, 15), p: [A(45, 34), A(52.5, 26.5), A(60, 34), A(52.5, 41.5), B(49.5, 31), B(55.5, 31), B(49.5, 37.5), B(55.5, 37), N(52.5, 33.5), N(52, 37.8)], b: [[45.8, 34]], a: [['pase', 45, 34, 52.5, 33.5, -1], ['pase', 52.5, 33.5, 60, 34, -1]] } });

T({ id: 'tt05', n: 'Rondo doble con cambio de zona', cat: 'tt', tipo: 'Rondo', ed: 'ICJS', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '6-7', carga: 'Tensión', fase: 'pri',
  jug: '5v2 + 5v2', np: 14, esp: [30, 10], ser: '4 x 3\'', rec: '1\'', dur: 16,
  obj: 'Mantener la posesión y cambiar el juego de zona para salir de la presión.',
  desc: 'Dos cuadrados de 10 x 10 m separados 10 m. Cada equipo tiene cinco jugadores en un cuadrado y dos defensores en el otro. Tras 6 pases, el equipo puede cambiar el balón al otro cuadrado; los defensores se desplazan a presionar allí.',
  reglas: ['Dos toques.', '6 pases + cambio de zona = punto.', 'Los defensores que roban intercambian el rol con su equipo.'],
  cons: ['El cambio de zona debe ser tenso y a ras de suelo.', 'Los defensores llegan al nuevo cuadrado a máxima velocidad.'],
  var: ['+ Solo un defensor puede ir a presionar al otro cuadrado (presión escalonada).', '− Cuadrados de 12 x 12 m.'],
  d: { z: [[37.5, 29, 10, 10], [57.5, 29, 10, 10]], c: [...esq(37.5, 29, 10, 10), ...esq(57.5, 29, 10, 10)], p: [A(37.5, 32), A(42.5, 29), A(47.5, 33), A(45, 39), A(38.5, 38), B(41.5, 33.5), B(44, 35.5), B(57.5, 31), B(62.5, 29), B(67.5, 34), B(63, 39), B(58, 37.5), A(61, 34), A(64, 35)], b: [[47, 33]], a: [['pase', 47.5, 33, 57.5, 31, -2], ['mov', 41.5, 33.5, 52, 31.5, 0]] } });

T({ id: 'tt06', n: 'Rondo 7v3 por líneas', cat: 'tt', tipo: 'Rondo', ed: 'JS', dif: 3, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '7v3', np: 10, esp: [20, 16], ser: '4 x 4\'', rec: '1\'30"', dur: 22,
  obj: 'Progresar por dentro superando líneas de presión con un pivote y dos interiores.',
  desc: 'Siete poseedores: cuatro en el perímetro (como centrales y laterales) y tres dentro (pivote y dos interiores) frente a tres defensores. Se suma un punto cuando el balón viaja de un lado del rectángulo al opuesto pasando por un interior.',
  reglas: ['Dos toques para todos.', 'Pase de lado a lado pasando por un interior = punto.', 'Robo: los tres defensores cambian con tres poseedores.'],
  cons: ['Los interiores se colocan entre los defensores, nunca en su misma línea.', 'Si un pase interior no está claro, circular por fuera para abrir el hueco.'],
  var: ['+ Los interiores juegan a un toque.', '− 8v3 con dos pivotes.'],
  d: { z: [[42.5, 26, 20, 16]], c: esq(42.5, 26, 20, 16), p: [A(42.5, 34), A(62.5, 34), A(52.5, 26), A(52.5, 42), N(48.5, 34, '6'), N(56.5, 30.5, '8'), N(56.5, 37.5, '8'), B(52.5, 31.5), B(52.5, 36.5), B(47, 30)], b: [[43.4, 34]], a: [['pase', 42.5, 34, 48.5, 34, 0], ['pase', 48.5, 34, 56.5, 37.5, 0], ['pase', 56.5, 37.5, 62.5, 34, 0]] } });

T({ id: 'tt07', n: 'Rondo 3v1 en triángulo', cat: 'tt', tipo: 'Rondo', ed: 'AI', dif: 1, md: ['MD-1', 'MD-2', 'MD-3', 'MD-4'], int: 1, rpe: '3', carga: 'Activación', fase: 'cal',
  jug: '3v1', np: 4, esp: [6, 6], ser: '4 x 2\'', rec: '30"', dur: 10,
  obj: 'Aprender a moverse para dar línea de pase (formar triángulos).',
  desc: 'Tres jugadores en un cuadrado pequeño se pasan el balón ante un defensor. Al no haber jugador en un lado, quien no tiene el balón debe moverse a la esquina libre para ofrecer siempre una línea de pase.',
  reglas: ['Toques libres.', 'Los poseedores solo se mueven por los lados del cuadrado.', 'Cambia el defensor tras robar.'],
  cons: ['Después de pasar, me muevo.', 'Mirar al compañero antes de pasar.'],
  var: ['+ Dos toques.', '− Defensor pasivo durante el primer minuto.'],
  d: { z: [[49.5, 31, 6, 6]], c: esq(49.5, 31, 6, 6), p: [A(49.5, 31), A(55.5, 31), A(49.5, 37), B(52, 33.5)], b: [[50.2, 31.6]], a: [['pase', 49.5, 31, 55.5, 31, 0], ['mov', 49.5, 37, 55.5, 37, 0]] } });

T({ id: 'tt08', n: 'Rondo regenerativo 8v2', cat: 'tt', tipo: 'Rondo', ed: 'ICJS', dif: 1, md: ['MD+1', 'MD-1'], int: 1, rpe: '2-3', carga: 'Recuperación', fase: 'pri',
  jug: '8v2', np: 10, esp: [20, 20], ser: '3 x 4\'', rec: '1\'', dur: 15,
  obj: 'Contacto con el balón a baja intensidad para recuperar tras el partido.',
  desc: 'Rondo amplio y lúdico con muchos jugadores en el perímetro. Se busca circulación suave, sin duelos ni carreras intensas. Ideal para titulares el día después del partido.',
  reglas: ['Toques libres.', 'Defensores cambian cada minuto (no por robo).', 'Sin entradas ni contactos.'],
  cons: ['Ritmo bajo y continuo.', 'Usar ambas piernas.'],
  var: ['+ Dos toques.', '− Tres defensores pasivos.'],
  d: { z: [[42.5, 24, 20, 20]], c: esq(42.5, 24, 20, 20), p: [...ring(52.5, 34, 10, 8, 'A', -90), B(50.5, 33), B(55, 36)], b: [[52.5, 24.9]] } });

// ---------- POSESIONES Y JUEGO DE POSICIÓN ----------
T({ id: 'tt09', n: 'Posesión 4v4 + 3 comodines', cat: 'tt', tipo: 'Posesión', ed: 'ICJS', dif: 2, md: ['MD-4'], int: 3, rpe: '7-8', carga: 'Tensión', fase: 'pri',
  jug: '4v4+3', np: 11, esp: [25, 20], ser: '5 x 3\'', rec: '1\'30"', dur: 22,
  obj: 'Conservar el balón en espacio reducido con superioridad numérica.',
  desc: 'Dos equipos de cuatro jugadores y tres comodines que juegan siempre con el poseedor (7v4). Se cuentan los pases consecutivos; cada 8 pases es un punto.',
  reglas: ['Equipos a tres toques, comodines a dos.', 'No se puede devolver el pase al jugador que te lo dio.', 'Saque rápido desde fuera si el balón sale.'],
  cons: ['Ocupar alturas y anchuras diferentes.', 'Presión inmediata tras pérdida del equipo que pierde.'],
  var: ['+ Comodines a un toque o 20 x 15 m.', '− Equipos a toques libres.'],
  d: { z: [[40, 24, 25, 20]], c: esq(40, 24, 25, 20), p: [A(43, 28), A(50, 40), A(58, 27), A(61, 39), B(47, 31), B(55, 33), B(52, 27), B(45, 38), N(52.5, 34), N(40, 34), N(65, 33)], b: [[43.8, 28.6]], a: [['pase', 43, 28, 52.5, 34, 0], ['pase', 52.5, 34, 61, 39, 0], ['mov', 58, 27, 62, 30, 0]] } });

T({ id: 'tt10', n: 'Posesión 5v5 + 2 comodines exteriores', cat: 'tt', tipo: 'Posesión', ed: 'ICJS', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '5v5+2', np: 12, esp: [30, 25], ser: '4 x 4\'', rec: '1\'30"', dur: 22,
  obj: 'Usar los apoyos exteriores para dar continuidad y cambiar la orientación del juego.',
  desc: 'Cinco contra cinco dentro de un rectángulo y dos comodines en los lados cortos. Punto al jugar de un comodín al otro pasando por un jugador interior.',
  reglas: ['Interiores a tres toques, comodines a dos.', 'Los comodines no pueden pasarse entre sí directamente.', 'Comodín → interior → comodín contrario = punto.'],
  cons: ['El interior que recibe del comodín se perfila para jugar hacia el otro lado.', 'Defender cerrando por dentro.'],
  var: ['+ Comodines a un toque.', '− Añadir un comodín interior.'],
  d: { z: [[37.5, 21.5, 30, 25]], c: esq(37.5, 21.5, 30, 25), p: [N(37.5, 34), N(67.5, 34), A(44, 27), A(44, 41), A(52.5, 34), A(60, 26), A(61, 41), B(48, 31), B(48, 38), B(56, 31), B(57, 37), B(64, 33)], b: [[38.4, 34]], a: [['pase', 37.5, 34, 52.5, 34, 0], ['pase', 52.5, 34, 67.5, 34, -3]] } });

T({ id: 'tt11', n: 'Juego de posición 6v6 + 3 (tercer hombre)', cat: 'tt', tipo: 'Juego de posición', ed: 'JS', dif: 3, md: ['MD-4'], int: 3, rpe: '7-8', carga: 'Tensión', fase: 'pri',
  jug: '6v6+3', np: 15, esp: [35, 30], ser: '4 x 4\'', rec: '2\'', dur: 24,
  obj: 'Progresar mediante el tercer hombre y jugar con el hombre libre.',
  desc: 'Dos equipos de seis y tres comodines (uno en cada extremo como apoyo y uno interior). El equipo en posesión suma punto cuando consigue jugar de un apoyo al otro o con un pase de tercer hombre (A-B-C, recibiendo de cara).',
  reglas: ['Dos toques.', 'Tercer hombre reconocido por el entrenador = punto doble.', 'Robo: transición y el otro equipo busca los mismos objetivos.'],
  cons: ['El pase al jugador marcado sirve para atraer y soltar al libre.', 'Fijar a un rival antes de pasar.'],
  var: ['+ Sin comodín interior.', '− Tres toques.'],
  d: { z: [[35, 19, 35, 30]], c: esq(35, 19, 35, 30), p: [N(35, 34), N(70, 34), N(52.5, 34), A(41, 25), A(41, 43), A(48, 29), A(57, 40), A(62, 25), A(63, 43), B(45, 34), B(50, 24), B(50, 42), B(57, 29), B(60, 36), B(66, 34)], b: [[41.8, 25.5]], a: [['pase', 41, 25, 52.5, 34, 0], ['pase', 52.5, 34, 48, 29, 0], ['pase', 48, 29, 62, 25, -2]] } });

T({ id: 'tt12', n: 'Posesión 8v8 + 3 en espacio amplio', cat: 'tt', tipo: 'Posesión', ed: 'CJS', dif: 2, md: ['MD-3'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '8v8+3', np: 19, esp: [50, 40], ser: '3 x 6\'', rec: '2\'', dur: 24,
  obj: 'Mantener la posesión con estructura de equipo y mucho volumen de carrera.',
  desc: 'Dos equipos de ocho con tres comodines. Espacio grande para que haya carreras largas y desmarques. 10 pases seguidos = punto.',
  reglas: ['Tres toques.', 'Comodines a dos toques.', 'Cada pase de más de 20 m bien recibido cuenta como dos.'],
  cons: ['Amplitud máxima en posesión, juntarse rápido sin balón.', 'Cambios de orientación para encontrar al jugador libre.'],
  var: ['+ 60 x 45 m para más volumen.', '− Cuatro comodines.'],
  d: { z: [[27.5, 14, 50, 40]], c: esq(27.5, 14, 50, 40), p: [A(32, 20), A(32, 48), A(42, 34), A(50, 18), A(50, 50), A(62, 30), A(70, 18), A(72, 46), B(38, 28), B(38, 40), B(46, 24), B(48, 42), B(56, 34), B(60, 22), B(64, 46), B(70, 34), N(52.5, 34), N(27.5, 34), N(77.5, 34)], b: [[32.8, 20.6]], a: [['pase', 32, 20, 50, 18, -2], ['pase', 50, 18, 72, 46, -3], ['mov', 62, 30, 68, 40, 0]] } });

T({ id: 'tt13', n: 'Posesión con 3 equipos (4v4v4)', cat: 'tt', tipo: 'Posesión', ed: 'ICJS', dif: 2, md: ['MD-4'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: '4+4 v 4', np: 12, esp: [30, 30], ser: '6 x 2\'', rec: '1\'', dur: 18,
  obj: 'Presión intensa tras pérdida y conservación con superioridad 8v4.',
  desc: 'Tres equipos de cuatro: dos mantienen la posesión juntos y uno presiona. El equipo que pierde el balón pasa a defender. Los periodos cortos permiten trabajar a alta intensidad.',
  reglas: ['Dos toques.', 'El equipo que provoca la pérdida pasa a poseer con el que no la cometió.', 'Cuenta de robos por equipo.'],
  cons: ['Presión en bloque de los cuatro, no individual.', 'Transición rápida al rol defensivo.'],
  var: ['+ Un toque o espacio 25 x 25 m.', '− Tres toques.'],
  d: { z: [[37.5, 19, 30, 30]], c: esq(37.5, 19, 30, 30), p: [A(41, 23), A(64, 24), A(41, 45), A(64, 44), N(52.5, 20), N(38, 34), N(67, 34), N(52.5, 48), B(48, 30), B(57, 30), B(48, 39), B(57, 38)], b: [[41.8, 23.6]], a: [['pase', 41, 23, 52.5, 20, 0], ['mov', 48, 30, 45, 25, 0], ['mov', 57, 30, 56, 23, 0]] } });

T({ id: 'tt14', n: 'Posesión 6v6 + 2 con cambio de orientación', cat: 'tt', tipo: 'Posesión', ed: 'CJS', dif: 2, md: ['MD-3'], int: 3, rpe: '6-7', carga: 'Duración', fase: 'pri',
  jug: '6v6+2', np: 14, esp: [40, 35], ser: '4 x 5\'', rec: '1\'30"', dur: 26,
  obj: 'Atraer en un lado para encontrar al jugador libre en el lado contrario.',
  desc: 'Rectángulo dividido en tres pasillos verticales. Se suma punto cuando, tras al menos tres pases en un pasillo lateral, se consigue jugar al pasillo lateral contrario. Dos comodines juegan en el pasillo central.',
  reglas: ['Tres toques.', 'Pase de banda a banda (directo o a través del comodín) = punto.', 'Los defensores pueden entrar en todos los pasillos.'],
  cons: ['Ocupar el pasillo débil con un jugador alejado para recibir el cambio.', 'Bascular en bloque para defender el cambio.'],
  var: ['+ El cambio debe ser directo (sin pasar por el centro).', '− Toques libres.'],
  d: { z: [[32.5, 16.5, 40, 35]], l: [[32.5, 26.5, 72.5, 26.5], [32.5, 41.5, 72.5, 41.5]], c: esq(32.5, 16.5, 40, 35), p: [A(38, 20), A(48, 22), A(58, 19), A(65, 48), A(45, 46), A(56, 36), B(42, 25), B(52, 25), B(46, 19), B(56, 30), B(62, 23), B(50, 37), N(40, 34), N(64, 34)], b: [[48.6, 22.6]], a: [['pase', 48, 22, 40, 34, 0], ['pase', 40, 34, 65, 48, 4]], t: [[71, 21.5, 'Pasillo 1', .8], [71, 49.5, 'Pasillo 3', .8]] } });

T({ id: 'tt15', n: 'Posesión 7v7 + 2 con finalización en miniporterías', cat: 'tt', tipo: 'Posesión', ed: 'ICJS', dif: 2, md: ['MD-3', 'MD-4'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '7v7+2', np: 16, esp: [45, 35], ser: '4 x 5\'', rec: '2\'', dur: 26,
  obj: 'Combinar posesión y progresión: conservar hasta encontrar el momento de atacar.',
  desc: 'Cada equipo defiende dos miniporterías y ataca otras dos. Antes de poder marcar hay que dar 6 pases seguidos. Dos comodines juegan con el poseedor.',
  reglas: ['Tres toques.', 'Gol solo tras 6 pases.', 'Gol tras robo en campo rival sin pases previos = válido (premia la presión).'],
  cons: ['Paciencia en posesión, verticalidad cuando se abre la línea.', 'Presión tras pérdida para aprovechar la regla del robo.'],
  var: ['+ Gol solo en una miniportería indicada por el entrenador.', '− 4 pases antes de marcar.'],
  d: { z: [[30, 16.5, 45, 35]], mg: [[30, 23, 'L'], [30, 45, 'L'], [75, 23, 'R'], [75, 45, 'R']], p: [A(36, 30), A(36, 40), A(45, 22), A(46, 46), A(54, 34), A(64, 24), A(66, 44), B(40, 27), B(40, 43), B(50, 28), B(50, 40), B(58, 30), B(60, 40), B(69, 34), N(52.5, 18), N(52.5, 50)], b: [[54.8, 34.6]], a: [['pase', 54, 34, 64, 24, 0], ['cond', 64, 24, 71, 23, 0], ['tiro', 71, 23, 74.5, 23, 0]] } });

T({ id: 'tt16', n: 'Posesión 10v10 en medio campo', cat: 'tt', tipo: 'Posesión', ed: 'CJS', dif: 2, md: ['MD-3'], int: 3, rpe: '6-7', carga: 'Duración', fase: 'pri',
  jug: '10v10', np: 20, esp: [60, 50], ser: '3 x 7\'', rec: '2\'', dur: 27,
  obj: 'Posesión con estructura de partido y alto volumen de distancia recorrida.',
  desc: 'Dos equipos de diez en un espacio grande. Cada equipo mantiene su dibujo táctico. Punto cada 10 pases o por pase largo bien controlado en el último tercio del espacio.',
  reglas: ['Toques libres, máximo 3 en el último tercio.', 'El balón no puede pasar 3 veces seguidas por el mismo jugador.', 'Saque rápido para mantener la densidad.'],
  cons: ['Respetar alturas y anchura del sistema.', 'Basculación y repliegue defensivo en bloque.'],
  var: ['+ Dos toques.', '− Añadir dos comodines.'],
  d: { z: [[22.5, 9, 60, 50]], c: esq(22.5, 9, 60, 50), p: [...fila(28, 18, 28, 50, 4, 'A'), ...fila(42, 14, 42, 54, 4, 'A'), A(58, 26), A(58, 42), ...fila(34, 22, 34, 46, 3, 'B'), ...fila(50, 16, 50, 52, 4, 'B'), ...fila(66, 20, 66, 48, 3, 'B')], b: [[28.8, 18.6]], a: [['pase', 28, 18, 42, 14, 0], ['pase', 42, 14, 58, 42, -6]] } });

T({ id: 'tt17', n: 'Pasar la línea: 4v2 por zonas', cat: 'tt', tipo: 'Posesión', ed: 'AICJ', dif: 1, md: ['MD-3', 'MD-4', 'MD-2'], int: 2, rpe: '5-6', carga: 'Tensión', fase: 'pri',
  jug: '4+4 v 2', np: 10, esp: [36, 18], ser: '4 x 3\'', rec: '1\'', dur: 16,
  obj: 'Encontrar el pase que supera una línea de presión.',
  desc: 'Tres zonas iguales. Un equipo de cuatro en cada zona extrema y dos defensores en la zona central. Los poseedores deben pasar el balón a la otra zona extrema superando a los defensores. Cuando el balón cambia de zona, entra un defensor a presionar.',
  reglas: ['Tres toques.', 'Solo entra un defensor en la zona del balón; el otro vigila la zona central.', 'Si los defensores roban, cambian con los que fallaron.'],
  cons: ['Mover el balón rápido de lado a lado para abrir un hueco.', 'Pase raso y tenso que atraviese la zona central.'],
  var: ['+ Entran dos defensores en la zona del balón.', '− Toques libres.'],
  d: { z: [[34.5, 25, 12, 18], [46.5, 25, 12, 18, '#f97316'], [58.5, 25, 12, 18]], p: [A(36, 28), A(44, 27), A(36, 40), A(44, 41), A(60, 28), A(68, 27), A(60, 40), A(68, 41), B(43, 33), B(52.5, 36)], b: [[44.6, 41.5]], a: [['pase', 44, 41, 60, 28, -2], ['mov', 43, 33, 41, 38, 0]] } });

T({ id: 'tt18', n: 'Juego de posición en 3 zonas', cat: 'tt', tipo: 'Juego de posición', ed: 'JS', dif: 3, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '5v5+3', np: 13, esp: [40, 30], ser: '4 x 4\'', rec: '2\'', dur: 24,
  obj: 'Progresar del primer al tercer tercio con apoyos en cada línea.',
  desc: 'Espacio dividido en tres zonas horizontales. Cada equipo comienza en la zona 1 y suma un punto cuando un jugador recibe controlado en la zona 3. Tres comodines (uno en cada zona) juegan con el poseedor.',
  reglas: ['Dos toques.', 'Recibir en zona 3 = punto y se sigue atacando hacia el lado contrario.', 'Comodines fijos en su zona.'],
  cons: ['Atraer en zona 1 para jugar con el comodín de zona 2.', 'Romper líneas con conducción si hay espacio.'],
  var: ['+ Comodines a un toque.', '− Cuatro comodines.'],
  d: { z: [[32.5, 19, 13.3, 30], [45.8, 19, 13.4, 30], [59.2, 19, 13.3, 30]], p: [N(39, 34, '1'), N(52.5, 34, '2'), N(66, 34, '3'), A(35, 24), A(35, 44), A(48, 22), A(56, 44), A(64, 26), B(42, 28), B(42, 40), B(50, 30), B(55, 38), B(62, 32)], b: [[35.8, 24.5]], a: [['pase', 35, 24, 52.5, 34, 0], ['pase', 52.5, 34, 64, 26, 0]], t: [[39, 22, 'Z1', .9], [52.5, 22, 'Z2', .9], [66, 22, 'Z3', .9]] } });

// ---------- JUEGOS REDUCIDOS ----------
T({ id: 'tt19', n: 'Juego reducido 3v3 + porteros', cat: 'tt', tipo: 'Juego reducido', ed: 'ICJS', dif: 2, md: ['MD-4'], int: 4, rpe: '8-9', carga: 'Tensión', fase: 'pri',
  jug: '3v3+2P', np: 8, esp: [25, 20], ser: '6 x 1\'30"', rec: '1\'30"', dur: 18,
  obj: 'Duelos, aceleraciones, frenadas y finalización a máxima intensidad.',
  desc: 'Partido 3v3 con porterías reglamentarias y porteros en un espacio reducido. Muchas acciones de alta intensidad: duelos, cambios de dirección y tiros.',
  reglas: ['Toques libres.', 'Balones de reposición junto a las porterías para no perder tiempo.', 'Gol de primera vale doble.'],
  cons: ['Atacar el espacio y finalizar rápido.', 'Presión individual agresiva.'],
  var: ['+ Series de 1\' con más intensidad.', '− 4v4 en 30 x 25 m.'],
  d: { z: [[40, 24, 25, 20]], g: [[40, 34, 'R'], [65, 34, 'L']], p: [P(41.5, 34), P(63.5, 34), A(48, 29), A(52, 38), A(57, 32), B(50, 32), B(55, 36), B(46, 37)], b: [[57.6, 32.6]], a: [['cond', 57, 32, 60, 34, 0], ['tiro', 60, 34, 64.5, 35.5, 0]] } });

T({ id: 'tt20', n: 'Juego reducido 4v4 + porteros', cat: 'tt', tipo: 'Juego reducido', ed: 'ICJS', dif: 2, md: ['MD-4'], int: 4, rpe: '8-9', carga: 'Tensión', fase: 'pri',
  jug: '4v4+2P', np: 10, esp: [30, 25], ser: '5 x 2\'', rec: '1\'30"', dur: 18,
  obj: 'Alta densidad de duelos y transiciones con finalización.',
  desc: 'Partido 4v4 con porteros. Se juega con balones de reposición rápida para mantener la intensidad. Indicado para el día de tensión (MD-4).',
  reglas: ['Máximo tres toques.', 'Todo el equipo debe estar pasado el medio campo para que el gol valga.', 'Reposición inmediata del portero.'],
  cons: ['Juntarse para presionar, separarse para atacar.', 'Transiciones rápidas.'],
  var: ['+ Toques libres pero sin descanso entre goles.', '− Espacio 35 x 30 m.'],
  d: { z: [[37.5, 21.5, 30, 25]], l: [[52.5, 21.5, 52.5, 46.5]], g: [[37.5, 34, 'R'], [67.5, 34, 'L']], p: [P(39, 34), P(66, 34), A(44, 28), A(46, 40), A(55, 30), A(60, 38), B(48, 33), B(53, 39), B(57, 27), B(62, 34)], b: [[60.6, 38.5]], a: [['pase', 60, 38, 55, 30, 0], ['mov', 46, 40, 56, 42, 0]] } });

T({ id: 'tt21', n: 'Juego reducido 4v4 a 4 miniporterías', cat: 'tt', tipo: 'Juego reducido', ed: 'AICJS', dif: 1, md: ['MD-4'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: '4v4', np: 8, esp: [30, 25], ser: '5 x 2\'', rec: '1\'30"', dur: 18,
  obj: 'Cambiar de orientación para atacar la portería menos defendida.',
  desc: 'Cada equipo ataca dos miniporterías y defiende otras dos. Obliga a levantar la cabeza y cambiar de lado cuando una portería está cerrada.',
  reglas: ['Toques libres.', 'Gol solo desde menos de 10 m.', 'No hay porteros.'],
  cons: ['Atraer a un lado y cambiar.', 'Defender juntos cerrando la portería cercana al balón.'],
  var: ['+ Dos toques.', '− 5v5 en 35 x 30 m.'],
  d: { z: [[37.5, 21.5, 30, 25]], mg: [[37.5, 26, 'L'], [37.5, 42, 'L'], [67.5, 26, 'R'], [67.5, 42, 'R']], p: [A(44, 30), A(47, 41), A(55, 26), A(59, 36), B(42, 36), B(51, 33), B(56, 41), B(62, 29)], b: [[55.6, 26.5]], a: [['pase', 55, 26, 59, 36, 0], ['cond', 59, 36, 64, 41, 0]] } });

T({ id: 'tt22', n: 'Juego 5v5 + porteros con comodines laterales', cat: 'tt', tipo: 'Juego reducido', ed: 'ICJS', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '7-8', carga: 'Tensión', fase: 'pri',
  jug: '5v5+2+2P', np: 14, esp: [40, 30], ser: '4 x 4\'', rec: '2\'', dur: 24,
  obj: 'Atacar por fuera usando a los comodines de banda y finalizar con centros.',
  desc: 'Partido 5v5 con porteros y dos comodines en las bandas que juegan con el poseedor. El gol tras centro de un comodín vale doble.',
  reglas: ['Tres toques; comodines a dos toques.', 'Los comodines no pueden entrar en el campo.', 'Gol tras centro = 2 puntos.'],
  cons: ['Llegar al área con al menos dos jugadores en cada centro.', 'Defensa del centro: vigilar al hombre y al balón.'],
  var: ['+ Comodines a un toque.', '− Toques libres.'],
  d: { z: [[32.5, 19, 40, 30]], g: [[32.5, 34, 'R'], [72.5, 34, 'L']], p: [P(34, 34), P(71, 34), N(52.5, 17.5), N(52.5, 50.5), A(42, 28), A(44, 40), A(52, 33), A(62, 30), A(64, 39), B(40, 34), B(48, 26), B(50, 42), B(58, 35), B(66, 33)], b: [[53.2, 18.2]], a: [['pase', 62, 30, 52.5, 17.5, 0], ['pase', 52.5, 17.5, 66, 37, 5], ['mov', 64, 39, 67, 35, 0]] } });

T({ id: 'tt23', n: 'Partido 7v7 + porteros', cat: 'tt', tipo: 'Juego reducido', ed: 'ICJS', dif: 2, md: ['MD-3'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '7v7+2P', np: 16, esp: [60, 45], ser: '3 x 7\'', rec: '2\'', dur: 27,
  obj: 'Juego colectivo con estructura y volumen alto de carrera.',
  desc: 'Partido en un espacio amplio con porterías reglamentarias. Ideal para el día de mayor volumen (MD-3): carreras largas, sprints y desmarques en profundidad.',
  reglas: ['Toques libres.', 'Fuera de juego desde los 20 m.', 'Cada equipo juega con su sistema (p. ej. 3-2-1 o 2-3-1).'],
  cons: ['Ocupar las alturas del sistema.', 'Basculación y coberturas defensivas.'],
  var: ['+ 3 toques máximo.', '− Sin fuera de juego.'],
  d: { z: [[22.5, 11.5, 60, 45]], g: [[22.5, 34, 'R'], [82.5, 34, 'L']], p: [P(24, 34), P(81, 34), A(32, 24), A(32, 44), A(42, 34), A(50, 18), A(50, 50), A(60, 34), A(70, 30), B(36, 34), B(46, 24), B(46, 44), B(55, 34), B(64, 22), B(64, 46), B(74, 34)], b: [[42.8, 34.5]], a: [['pase', 42, 34, 50, 50, 0], ['mov', 70, 30, 76, 40, 0], ['pase', 50, 50, 74, 42, -3]] } });

T({ id: 'tt24', n: 'Partido 8v8 + 2 comodines', cat: 'tt', tipo: 'Juego reducido', ed: 'CJS', dif: 2, md: ['MD-3'], int: 3, rpe: '7-8', carga: 'Duración', fase: 'pri',
  jug: '8v8+2+2P', np: 20, esp: [65, 50], ser: '3 x 8\'', rec: '2\'', dur: 30,
  obj: 'Superioridad en la construcción y ataque organizado con mucho volumen.',
  desc: 'Partido de área a área con dos comodines que juegan con el poseedor (10v8 en ataque). El equipo debe progresar desde su portero.',
  reglas: ['Tres toques.', 'Saque siempre en corto desde el portero.', 'Comodines a dos toques.'],
  cons: ['Usar la superioridad para progresar con pases.', 'El equipo sin balón se defiende en bloque medio.'],
  var: ['+ Sin comodines (8v8).', '− Toques libres.'],
  d: { z: [[20, 9, 65, 50]], g: [[20, 34, 'R'], [85, 34, 'L']], p: [P(21.5, 34), P(83.5, 34), N(52.5, 26), N(52.5, 42), A(30, 22), A(30, 46), A(38, 34), A(46, 16), A(46, 52), A(60, 34), A(70, 22), A(70, 46), B(36, 26), B(36, 42), B(44, 34), B(56, 18), B(56, 50), B(64, 34), B(76, 28), B(76, 40)], b: [[30.8, 22.5]], a: [['pase', 21.5, 34, 30, 22, 0], ['pase', 30, 22, 52.5, 26, 0], ['mov', 70, 22, 78, 20, 0]] } });

T({ id: 'tt25', n: 'Partido 10v10 con condicionantes', cat: 'tt', tipo: 'Juego reducido', ed: 'ICJS', dif: 2, md: ['MD-3'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '10v10+2P', np: 22, esp: [105, 68], ser: '2 x 12\'', rec: '3\'', dur: 30,
  obj: 'Trabajar el modelo de juego en situación real con objetivos tácticos concretos.',
  desc: 'Partido a campo completo con una consigna por bloque: por ejemplo, gol tras robo en campo rival en menos de 8 segundos vale doble, o gol tras centro vale doble.',
  reglas: ['Reglas de partido.', 'El entrenador cambia el condicionante en cada bloque.', 'Paradas breves solo para corregir conceptos clave.'],
  cons: ['Aplicar el modelo de juego del equipo.', 'Comunicación entre líneas.'],
  var: ['+ Tres toques máximo.', '− Reducir a 3/4 de campo.'],
  d: { v: [-4, -4, 113, 76], g: [], p: [P(3, 34), P(102, 34), A(18, 14), A(16, 28), A(16, 40), A(18, 54), A(34, 26), A(34, 42), A(48, 12), A(48, 56), A(56, 30), A(60, 40), B(87, 14), B(89, 28), B(89, 40), B(87, 54), B(72, 24), B(72, 44), B(62, 14), B(64, 54), B(50, 34), B(78, 34)], b: [[34.8, 26.5]], a: [['pase', 34, 26, 48, 12, 0], ['mov', 56, 30, 76, 20, 0], ['pase', 48, 12, 74, 18, -3]] } });

T({ id: 'tt26', n: 'Duelos 2v2 con apoyos exteriores', cat: 'tt', tipo: 'Juego reducido', ed: 'ICJS', dif: 2, md: ['MD-4'], int: 4, rpe: '8-9', carga: 'Tensión', fase: 'pri',
  jug: '2v2+4', np: 8, esp: [20, 15], ser: '8 x 45"', rec: '1\'', dur: 16,
  obj: 'Duelos intensos, desmarques cortos y uso del apoyo para superar al rival.',
  desc: 'Dos contra dos dentro de un rectángulo con cuatro apoyos (uno en cada lado). Se suma un punto al jugar de un apoyo de fondo al otro. Los apoyos rotan con los jugadores interiores en cada serie.',
  reglas: ['Apoyos a un toque.', 'Fondo a fondo = punto.', 'Series muy cortas a máxima intensidad.'],
  cons: ['Desmarcarse con cambio de ritmo.', 'Defensa agresiva sin dejar girarse al rival.'],
  var: ['+ Apoyos laterales neutralizados.', '− Series de 30".'],
  d: { z: [[42.5, 26.5, 20, 15]], p: [N(42.5, 34), N(62.5, 34), N(52.5, 26.5), N(52.5, 41.5), A(48, 31), A(56, 37), B(50, 34), B(55, 32)], b: [[43.3, 34]], a: [['pase', 42.5, 34, 48, 31, 0], ['mov', 56, 37, 59, 33, 0]] } });

// ---------- ATAQUE Y FINALIZACIÓN ----------
T({ id: 'tt27', n: 'Finalización tras pared', cat: 'tt', tipo: 'Finalización', ed: 'AICJS', dif: 1, md: ['MD-2', 'MD-1'], int: 2, rpe: '4-5', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 6-8 + P', np: 8, esp: [35, 40], ser: '2 x 6\'', rec: '1\'30"', dur: 15,
  obj: 'Precisión en el pase, desmarque tras pared y tiro en carrera.',
  desc: 'El jugador conduce, hace una pared con un compañero situado en la frontal y finaliza a portería. El que hizo la pared pasa a la fila de tiro y el que remató ocupa el puesto de apoyo.',
  reglas: ['Finalizar en máximo dos toques tras la pared.', 'Alternar pierna derecha e izquierda en cada serie.', 'Turnos rápidos sin esperas largas.'],
  cons: ['Pase a la pierna del apoyo y acelerar tras soltar el balón.', 'Tiro raso y colocado.'],
  var: ['+ Defensor pasivo tras el apoyo.', '− Tiro desde parado.'],
  d: { z: [[70, 14, 35, 40]], c: [[72, 34], [72, 37]], p: [P(103.5, 34), A(74, 34), A(74, 37.5), A(74, 40.5), N(86, 31)], b: [[75, 34.5]], a: [['cond', 74, 34, 80, 34, 0], ['pase', 80, 34, 86, 31, 0], ['pase', 86, 31, 90, 36, 0], ['mov', 80, 34, 89.5, 36, 1.5], ['tiro', 90, 36, 104, 32.5, 0]] } });

T({ id: 'tt28', n: 'Centros y remates con llegada de 3 jugadores', cat: 'tt', tipo: 'Finalización', ed: 'ICJS', dif: 2, md: ['MD-2'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: '3 rematadores + extremo + P', np: 10, esp: [52.5, 68], ser: '3 x 5\'', rec: '1\'30"', dur: 18,
  obj: 'Ocupar los espacios de remate (primer palo, segundo palo y punto de penalti).',
  desc: 'El extremo recibe en banda, conduce hasta línea de fondo y centra. Tres jugadores llegan desde fuera del área atacando cada uno una zona: primer palo, segundo palo y punto de penalti (o rechace).',
  reglas: ['Cada jugador ataca una zona distinta.', 'Alternar banda derecha e izquierda.', 'Remate de primera.'],
  cons: ['Llegar en carrera, no esperar parado en el área.', 'Centro tenso entre el portero y la defensa.'],
  var: ['+ Dos defensores en el área.', '− Centro desde parado.'],
  d: { v: [72, 4, 36, 52], g: [], p: [P(103.5, 34), A(80, 10), A(80, 30), A(78, 40), A(78, 48)], b: [[80.8, 10.6]], a: [['cond', 80, 10, 100, 9, 0], ['pase', 100, 9, 97, 29, 2], ['mov', 80, 30, 98, 30, 0], ['mov', 78, 40, 98, 40, -2], ['mov', 78, 48, 92, 36, 0]], z: [[96, 26, 5, 6, '#fde047'], [96, 37, 5, 6, '#fde047'], [91, 32, 4, 5, '#fde047']] } });

T({ id: 'tt29', n: 'Oleadas 3v2 + portero', cat: 'tt', tipo: 'Finalización', ed: 'ICJS', dif: 2, md: ['MD-2', 'MD-3'], int: 3, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: '3v2 → 2v1 + P', np: 12, esp: [40, 50], ser: '2 x 6\'', rec: '2\'', dur: 16,
  obj: 'Toma de decisiones en superioridad y finalización rápida.',
  desc: 'Tres atacantes salen desde el medio campo contra dos defensores. Al terminar la jugada, los dos defensores atacan en contra hacia la otra portería contra uno de los atacantes que se queda a defender (2v1).',
  reglas: ['Máximo 8" para finalizar.', 'Fuera de juego en la línea del área.', 'Transición inmediata tras gol o pérdida.'],
  cons: ['Fijar al defensor con el poseedor antes de pasar.', 'Ocupar amplitud y profundidad.'],
  var: ['+ 3v3 con un defensor que entra desde atrás.', '− 3v1.'],
  d: { z: [[65, 9, 40, 50]], g: [], p: [P(103.5, 34), A(68, 34), A(68, 22), A(68, 46), B(88, 30), B(88, 40)], b: [[68.8, 34.5]], a: [['cond', 68, 34, 80, 34, 0], ['mov', 68, 22, 90, 22, 0], ['mov', 68, 46, 92, 44, 0], ['pase', 80, 34, 90, 22, 0], ['tiro', 90, 22, 104, 32, 0]] } });

T({ id: 'tt30', n: 'Ataque 4v3 + portero desde medio campo', cat: 'tt', tipo: 'Finalización', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-3'], int: 3, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: '4v3+P', np: 8, esp: [52.5, 68], ser: '3 x 5\'', rec: '1\'30"', dur: 18,
  obj: 'Encontrar al jugador libre en superioridad y finalizar en pocos segundos.',
  desc: 'Cuatro atacantes salen desde el medio campo contra tres defensores y portero. Si los defensores recuperan, contraatacan hacia dos miniporterías situadas en el medio campo.',
  reglas: ['10" para finalizar.', 'Robo defensivo + gol en miniportería = punto para los defensores.', 'Atacantes con toques libres.'],
  cons: ['Atacar el espacio entre central y lateral.', 'Juego en profundidad cuando hay ventaja.'],
  var: ['+ 4v4 con un defensor que llega tarde.', '− 4v2.'],
  d: { v: [50, 0, 57, 68], g: [], mg: [[52.5, 20, 'R'], [52.5, 48, 'R']], p: [P(103.5, 34), A(60, 18), A(60, 50), A(58, 34), A(70, 30), B(86, 24), B(86, 34), B(86, 44)], b: [[58.8, 34.6]], a: [['pase', 58, 34, 70, 30, 0], ['mov', 60, 18, 90, 16, 0], ['pase', 70, 30, 90, 18, 0]] } });

T({ id: 'tt31', n: '1v1 al portero tras conducción', cat: 'tt', tipo: 'Finalización', ed: 'AICJ', dif: 1, md: ['MD-2', 'MD-1'], int: 2, rpe: '5', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 4-6 + P', np: 7, esp: [35, 30], ser: '2 x 5\'', rec: '1\'', dur: 12,
  obj: 'Definición en el mano a mano con el portero.',
  desc: 'El jugador conduce en velocidad desde 30 m y se enfrenta solo al portero. Debe decidir entre regatear al portero o definir antes de que salga.',
  reglas: ['Máximo 6" para finalizar.', 'Turnos alternos desde dos filas.', 'El portero puede salir libremente.'],
  cons: ['Conducir con el balón cerca en los últimos metros.', 'Mirar la posición del portero antes de decidir.'],
  var: ['+ Defensor que persigue desde atrás.', '− Portero que no sale del área pequeña.'],
  d: { z: [[70, 19, 35, 30]], c: [[72, 26], [72, 42]], p: [P(102, 34), A(73, 26), A(73, 42)], b: [[73.8, 26.4]], a: [['cond', 73, 26, 92, 31, 0], ['tiro', 92, 31, 104, 36, 0]] } });

T({ id: 'tt32', n: 'Ataque organizado 6v4 + portero', cat: 'tt', tipo: 'Finalización', ed: 'JS', dif: 3, md: ['MD-3', 'MD-2'], int: 3, rpe: '6-7', carga: 'Duración', fase: 'pri',
  jug: '6v4+P', np: 11, esp: [52.5, 68], ser: '3 x 6\'', rec: '2\'', dur: 22,
  obj: 'Romper un bloque bajo con circulación, amplitud y llegada desde segunda línea.',
  desc: 'Seis atacantes (dos extremos, dos interiores, delantero y mediapunta) contra cuatro defensores y portero en el último cuarto del campo. Los atacantes deben finalizar tras un máximo de 12 pases.',
  reglas: ['Tres toques.', 'Si los defensores roban, deben conducir hasta el medio campo para puntuar.', 'Gol tras centro o tras pase atrás vale doble.'],
  cons: ['Atraer por dentro para liberar por fuera.', 'Llegada de segunda línea al pase atrás.'],
  var: ['+ 6v5.', '− 6v3.'],
  d: { v: [52, 0, 56, 68], g: [], p: [P(103.5, 34), A(80, 8), A(80, 60), A(76, 26), A(76, 42), A(92, 34), A(84, 34), B(94, 22), B(95, 30), B(95, 38), B(94, 46)], b: [[76.8, 26.6]], a: [['pase', 76, 26, 80, 8, 0], ['cond', 80, 8, 96, 12, 0], ['pase', 96, 12, 88, 30, 0], ['mov', 84, 34, 88, 31, 0]] } });

T({ id: 'tt33', n: 'Tiro desde fuera del área y rechace', cat: 'tt', tipo: 'Finalización', ed: 'ICJS', dif: 1, md: ['MD-1', 'MD-2'], int: 2, rpe: '4', carga: 'Activación', fase: 'pri',
  jug: 'Grupos de 6-8 + P', np: 8, esp: [30, 40], ser: '2 x 5\'', rec: '1\'', dur: 12,
  obj: 'Golpeo desde la frontal y atención al segundo balón.',
  desc: 'Un jugador recibe un pase desde la banda y tira desde la frontal. Otro jugador sale en el momento del tiro a por el posible rechace del portero.',
  reglas: ['Tiro de primera o con un control.', 'El rechace se remata en un máximo de dos toques.', 'Rotación: tirador → rematador de rechace → pasador.'],
  cons: ['Golpeo con empeine, cuerpo encima del balón.', 'El rematador del rechace arranca cuando el balón sale del pie.'],
  var: ['+ Defensor que bloquea el tiro.', '− Balón parado.'],
  d: { z: [[75, 14, 30, 40]], p: [P(103.5, 34), N(84, 18), A(82, 34), A(84, 44)], b: [[84.6, 18.6]], a: [['pase', 84, 18, 82, 34, 0], ['tiro', 82, 34, 104, 31, 0], ['mov', 84, 44, 98, 38, 0]] } });

T({ id: 'tt34', n: 'Desmarque de ruptura 2v1 + portero', cat: 'tt', tipo: 'Finalización', ed: 'ICJS', dif: 2, md: ['MD-2'], int: 3, rpe: '7', carga: 'Velocidad', fase: 'pri',
  jug: '2v1+P', np: 6, esp: [40, 30], ser: '3 x 4\'', rec: '1\'30"', dur: 15,
  obj: 'Coordinar el momento del pase y el desmarque a la espalda del defensor.',
  desc: 'Un pasador en el medio campo y un delantero junto a un defensor. El delantero hace un desmarque de ruptura a la espalda y el pasador debe filtrar el balón en el momento justo sin que haya fuera de juego.',
  reglas: ['Fuera de juego activo en la línea del defensor.', 'El delantero tiene 6" para finalizar tras recibir.', 'El defensor solo puede salir cuando el pasador toca el balón.'],
  cons: ['Desmarque en diagonal, de fuera a dentro.', 'Pase al espacio, no al pie.'],
  var: ['+ 2v2.', '− Defensor pasivo.'],
  d: { z: [[65, 19, 40, 30]], p: [P(103.5, 34), A(68, 34), A(82, 26), B(83, 30)], b: [[68.8, 34.5]], a: [['mov', 82, 26, 94, 34, -2], ['pase', 68, 34, 93, 35, 0], ['tiro', 95, 34.5, 104, 32, 0]] } });

T({ id: 'tt35', n: 'Combinación por banda (lateral - extremo - interior)', cat: 'tt', tipo: 'Finalización', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD-2'], int: 2, rpe: '4-5', carga: 'Activación', fase: 'pri',
  jug: '3 por grupo + P', np: 10, esp: [52.5, 34], ser: '2 x 6\'', rec: '1\'', dur: 14,
  obj: 'Automatizar los movimientos de ataque por banda sin oposición.',
  desc: 'El lateral pasa al extremo, que se la devuelve al interior que aparece por dentro. El interior juega al lateral que dobla por fuera para centrar al área, donde llegan extremo e interior.',
  reglas: ['Sin oposición; con balón en juego hasta el remate.', 'Rotar posiciones en cada repetición.', 'Mismo patrón en ambas bandas.'],
  cons: ['Timing del desdoblamiento del lateral.', 'Pases a ras de suelo y a la pierna buena.'],
  var: ['+ Defensor que se mueve entre extremo y lateral.', '− Pases sin desdoble.'],
  d: { v: [55, 0, 52, 40], g: [], p: [P(103.5, 34), A(62, 10, 'LD'), A(78, 6, 'EX'), A(74, 20, 'IN')], b: [[62.8, 10.6]], a: [['pase', 62, 10, 78, 6, 0], ['pase', 78, 6, 74, 20, 0], ['mov', 62, 10, 92, 6, 2], ['pase', 74, 20, 92, 7, 0], ['pase', 94, 7, 98, 30, 2], ['mov', 78, 6, 96, 28, 0]] } });

// ---------- DEFENSA Y TRANSICIONES ----------
T({ id: 'tt36', n: 'Línea defensiva 6v6 + portero', cat: 'tt', tipo: 'Defensa', ed: 'JS', dif: 3, md: ['MD-3', 'MD-2'], int: 3, rpe: '6-7', carga: 'Duración', fase: 'pri',
  jug: '6v6+P', np: 13, esp: [52.5, 68], ser: '3 x 6\'', rec: '2\'', dur: 22,
  obj: 'Coordinar la línea de cuatro y los dos pivotes: basculación, cobertura y achique.',
  desc: 'Cuatro defensas y dos mediocentros defienden la portería contra seis atacantes. Si la defensa recupera, debe pasar a uno de dos apoyos situados en el medio campo para puntuar.',
  reglas: ['Atacantes a tres toques.', 'Recuperación + pase al apoyo = punto defensivo.', 'Fuera de juego activo.'],
  cons: ['Distancias cortas entre líneas (10-12 m).', 'Salir a presionar el pase atrás y achicar espacio.'],
  var: ['+ 6v7 con un atacante más.', '− Atacantes a dos toques.'],
  d: { v: [50, 0, 57, 68], g: [], p: [P(103.5, 34), B(92, 16), B(94, 28), B(94, 40), B(92, 52), B(82, 28), B(82, 40), A(76, 14), A(74, 34), A(76, 54), A(86, 22), A(86, 46), A(90, 34), N(54, 22), N(54, 46)], b: [[76.8, 14.6]], a: [['mov', 92, 16, 88, 18, 0], ['mov', 94, 28, 92, 24, 0], ['mov', 82, 28, 80, 22, 0]] } });

T({ id: 'tt37', n: 'Rondo de transición 6v3 con salida a portería', cat: 'tt', tipo: 'Transición', ed: 'CJS', dif: 3, md: ['MD-4'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: '6v3 + P', np: 10, esp: [15, 15], ser: '5 x 2\'', rec: '1\'30"', dur: 18,
  obj: 'Transición defensa-ataque rápida tras robo y transición ataque-defensa de los poseedores.',
  desc: 'Rondo 6v3 en un cuadrado situado a 25 m de portería. Si los tres defensores roban, atacan la portería con portero; los seis poseedores defienden en transición.',
  reglas: ['Poseedores a dos toques.', '10 pases = punto para los poseedores.', 'Tras el robo, 8" para finalizar.'],
  cons: ['Primer pase tras robo hacia delante.', 'Los poseedores más cercanos presionan y el resto corre hacia su portería.'],
  var: ['+ 5v3.', '− 7v3.'],
  d: { z: [[60, 26.5, 15, 15]], g: [], p: [P(103.5, 34), A(60, 30), A(60, 38), A(67.5, 26.5), A(75, 30), A(75, 38), A(67.5, 41.5), B(65, 33), B(70, 35), B(67, 38)], b: [[70.6, 35.5]], a: [['cond', 70, 35, 84, 34, 0], ['tiro', 84, 34, 104, 33, 0], ['mov', 75, 38, 82, 39, 0]] } });

T({ id: 'tt38', n: 'Presión tras pérdida (regla de 5 segundos)', cat: 'tt', tipo: 'Transición', ed: 'CJS', dif: 2, md: ['MD-4'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: '6v6+2', np: 14, esp: [40, 35], ser: '4 x 4\'', rec: '2\'', dur: 24,
  obj: 'Reacción inmediata tras perder el balón para recuperarlo cerca del área rival.',
  desc: 'Posesión 6v6 con dos comodines. El equipo que pierde el balón tiene 5" para recuperarlo: si lo consigue, suma dos puntos. Si el rival supera esos 5" con el balón, suma un punto.',
  reglas: ['Tres toques.', 'Recuperación en menos de 5" = 2 puntos.', 'Superar la presión 5" = 1 punto para el equipo que robó.'],
  cons: ['Presión del jugador más cercano y cierre de líneas de pase de los demás.', 'Si no se recupera en 5", replegar.'],
  var: ['+ Regla de 4".', '− Regla de 6".'],
  d: { z: [[32.5, 16.5, 40, 35]], c: esq(32.5, 16.5, 40, 35), p: [A(40, 24), A(42, 40), A(52, 30), A(56, 44), A(62, 24), A(66, 36), B(50, 34), B(46, 26), B(58, 30), B(48, 44), B(60, 40), B(38, 32), N(52.5, 18), N(52.5, 50)], b: [[50.6, 34.5]], a: [['mov', 52, 30, 50.5, 33, 0], ['mov', 56, 44, 52, 37, 0], ['mov', 42, 40, 47, 36, 0]] } });

T({ id: 'tt39', n: 'Duelos 1v1 defensivos en pasillo', cat: 'tt', tipo: 'Defensa', ed: 'ICJS', dif: 1, md: ['MD-4'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: '1v1 por parejas', np: 8, esp: [10, 20], ser: '8 x 15"', rec: '45"', dur: 12,
  obj: 'Defensa individual: temporizar, orientar y robar sin ser superado.',
  desc: 'El defensor pasa el balón al atacante, que intenta superarle y marcar en una miniportería al fondo del pasillo. El defensor debe orientar al atacante hacia la banda y robar.',
  reglas: ['El atacante tiene 8" para marcar.', 'Si el defensor roba, puede marcar en una miniportería de su lado.', 'Cambio de rol en cada repetición.'],
  cons: ['Perfil defensivo, piernas flexionadas.', 'No lanzarse; esperar el error del atacante.'],
  var: ['+ Pasillo de 12 m de ancho.', '− Pasillo de 8 m.'],
  d: { z: [[42, 24, 20, 10], [42, 36, 20, 10]], mg: [[62, 29, 'R'], [62, 41, 'R'], [42, 29, 'L'], [42, 41, 'L']], p: [A(46, 29), B(54, 29), A(46, 41), B(54, 41)], b: [[46.8, 29.5]], a: [['cond', 46, 29, 58, 26, 0], ['mov', 54, 29, 55, 26.5, 0]] } });

T({ id: 'tt40', n: 'Basculación defensiva de la línea de 4', cat: 'tt', tipo: 'Defensa', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-1'], int: 2, rpe: '4-5', carga: 'Activación', fase: 'pri',
  jug: '4 defensas + 6 circuladores', np: 10, esp: [35, 68], ser: '3 x 4\'', rec: '1\'', dur: 15,
  obj: 'Mover la línea defensiva en bloque según la posición del balón.',
  desc: 'Seis jugadores circulan el balón en semicírculo fuera del área, sin intención de penetrar. La línea de cuatro bascula, sale y se repliega según el balón y la posición del poseedor (balón tapado o descubierto).',
  reglas: ['Circulación lenta al principio y luego más rápida.', 'Pase atrás = la línea sale; balón descubierto = la línea cae.', 'El entrenador puede ordenar un pase en profundidad.'],
  cons: ['Distancias de 8-10 m entre defensas.', 'Lateral del lado contrario cierra por dentro.'],
  var: ['+ Los circuladores pueden atacar el espacio.', '− Sin balón, con señales del entrenador.'],
  d: { v: [62, 0, 46, 68], g: [], p: [P(103.5, 34), B(92, 20), B(94, 30), B(94, 40), B(93, 50), A(78, 8), A(74, 22), A(72, 34), A(74, 46), A(78, 60), A(84, 16)], b: [[78.8, 8.6]], a: [['mov', 92, 20, 90, 14, 0], ['mov', 94, 30, 93, 24, 0], ['mov', 94, 40, 94, 34, 0], ['mov', 93, 50, 94, 44, 0]] } });

T({ id: 'tt41', n: 'Contraataque 3v2 tras recuperación', cat: 'tt', tipo: 'Transición', ed: 'ICJS', dif: 2, md: ['MD-3'], int: 4, rpe: '8', carga: 'Duración', fase: 'pri',
  jug: '4v4+2P → 3v2', np: 10, esp: [70, 50], ser: '4 x 4\'', rec: '2\'', dur: 24,
  obj: 'Atacar rápido tras recuperar, aprovechando la superioridad momentánea.',
  desc: 'En una zona central se juega 4v4. Al recuperar, el equipo sale en contraataque hacia una portería con tres jugadores, mientras solo dos rivales pueden defender (los otros dos se quedan en la zona).',
  reglas: ['Tras robo, máximo 10" para finalizar.', 'Los atacantes que no participan esperan en la zona central.', 'Gol de contraataque = 2 puntos.'],
  cons: ['Primer pase vertical rápido.', 'Ocupar carril central y dos laterales en la carrera.'],
  var: ['+ 3v3 en el contraataque.', '− 3v1.'],
  d: { v: [17, 6, 92, 56], g: [], z: [[42.5, 19, 20, 30, '#f97316', 'Zona 4v4']], mg: [], p: [P(103.5, 34), P(1.5, 34), A(47, 26), A(56, 40), A(50, 34), A(58, 28), B(46, 38), B(54, 24), B(57, 34), B(48, 44)], b: [[58.6, 28.5]], a: [['pase', 58, 28, 76, 24, 0], ['mov', 50, 34, 80, 34, 0], ['mov', 56, 40, 78, 46, 0]] } });

// ---------- ACCIONES A BALÓN PARADO ----------
T({ id: 'tt42', n: 'Córner ofensivo con bloqueos', cat: 'tt', tipo: 'ABP', ed: 'CJS', dif: 2, md: ['MD-1'], int: 1, rpe: '3', carga: 'Activación', fase: 'pri',
  jug: '11v11 (o 7 atacantes v 6 defensores + P)', np: 14, esp: [16.5, 40], ser: '2 x 6\'', rec: '1\'', dur: 15,
  obj: 'Automatizar movimientos y bloqueos en el córner a favor.',
  desc: 'Cada jugador conoce su rol: bloqueador, rematador de primer palo, de segundo palo, de punto de penalti y jugador del rechace en la frontal. Se ensayan dos jugadas distintas con señal del lanzador.',
  reglas: ['Defensa pasiva al principio y luego activa.', 'Alternar córner derecho e izquierdo.', 'Dos jugadas con señal (brazo levantado, mano en la cabeza…).'],
  cons: ['Salir de la posición de partida a la vez, en la señal.', 'Bloqueo legal: estático, sin agarrar.'],
  var: ['+ Defensa activa en marcaje mixto.', '− Sin oposición.'],
  d: { v: [76, -2, 32, 50], g: [], p: [P(103.5, 34), A(104.5, 0.5, 'L'), A(92, 28), A(92, 32), A(91, 38), A(94, 42), A(86, 32), A(84, 40), B(100, 30), B(99, 35), B(96, 34), B(96, 39), B(93, 30), B(101, 39)], a: [['mov', 92, 28, 100, 28, 0], ['mov', 91, 38, 99, 40, 0], ['mov', 86, 32, 94, 34, 0], ['pase', 104.5, 0.5, 99, 30, 2]], b: [[104.4, 1.6]] } });

T({ id: 'tt43', n: 'Córner defensivo (marcaje mixto)', cat: 'tt', tipo: 'ABP', ed: 'CJS', dif: 2, md: ['MD-1'], int: 1, rpe: '3', carga: 'Activación', fase: 'pri',
  jug: '6-7 defensores + P v 6-7 atacantes', np: 14, esp: [16.5, 40], ser: '2 x 6\'', rec: '1\'', dur: 15,
  obj: 'Organizar la defensa del córner: zona en el área pequeña y marcas individuales.',
  desc: 'Tres jugadores defienden en zona (primer palo, centro del área pequeña y segundo palo) y el resto marca individualmente a los mejores rematadores. Un jugador queda en la frontal para el rechace y uno arriba para la salida.',
  reglas: ['Atacantes con movimientos libres.', 'Despejar siempre hacia las bandas.', 'Salida rápida tras despeje para dejar en fuera de juego.'],
  cons: ['Atacar el balón, no esperar.', 'Contacto con la marca antes del lanzamiento.'],
  var: ['+ Atacantes con bloqueos.', '− Centros desde parado sin oposición.'],
  d: { v: [76, -2, 32, 50], g: [], p: [P(103.5, 34), B(101, 29), B(101, 34), B(101, 39), B(95, 31), B(95, 37), B(92, 34), B(86, 30), A(104.5, 0.5), A(94, 30), A(94, 36), A(91, 33), A(97, 42)], z: [[99.5, 24.84, 5.5, 18.32, '#60a5fa', 'Zona']], b: [[104.4, 1.6]], a: [['pase', 104.5, 0.5, 98, 33, 2]] } });

T({ id: 'tt44', n: 'Falta lateral ofensiva', cat: 'tt', tipo: 'ABP', ed: 'CJS', dif: 2, md: ['MD-1'], int: 1, rpe: '3', carga: 'Activación', fase: 'pri',
  jug: '5-6 atacantes v 5 defensores + P', np: 12, esp: [30, 50], ser: '2 x 5\'', rec: '1\'', dur: 12,
  obj: 'Atacar el espacio entre la línea defensiva y el portero en las faltas laterales.',
  desc: 'Falta desde la banda a 30 m de la portería. Los rematadores parten en línea a la altura de la defensa y atacan zonas distintas en el momento del lanzamiento. Un jugador espera el rechace.',
  reglas: ['Fuera de juego activo.', 'Rotar lanzador derecho e izquierdo.', 'Se ensaya una jugada en corto alternativa.'],
  cons: ['Arrancar a la vez en el golpeo, sin adelantarse.', 'Balón tenso y cerrado hacia portería.'],
  var: ['+ Defensa activa.', '− Sin oposición.'],
  d: { v: [68, 0, 40, 60], g: [], p: [P(103.5, 34), A(78, 10, 'L'), A(86, 24), A(86, 30), A(86, 36), A(86, 42), A(80, 40), B(88, 24), B(88, 30), B(88, 36), B(88, 42), B(84, 18)], b: [[78.8, 10.8]], a: [['pase', 78, 10, 97, 32, 4], ['mov', 86, 24, 98, 26, 0], ['mov', 86, 30, 99, 31, 0], ['mov', 86, 36, 97, 38, 0]] } });

T({ id: 'tt45', n: 'Saque de banda ofensivo y presión', cat: 'tt', tipo: 'ABP', ed: 'ICJS', dif: 1, md: ['MD-1', 'MD-2'], int: 2, rpe: '4-5', carga: 'Activación', fase: 'pri',
  jug: '5v4', np: 9, esp: [30, 25], ser: '3 x 4\'', rec: '1\'', dur: 15,
  obj: 'Conservar el balón tras saque de banda y presionar si se pierde.',
  desc: 'Saque de banda en campo rival. Dos jugadores se ofrecen al pie y uno al espacio. Si el rival recupera, el equipo debe presionar en bloque cerca de la banda para recuperar.',
  reglas: ['Tres pases tras el saque = punto.', 'Robo rival + salida de la zona = punto rival.', 'Se repite desde ambas bandas.'],
  cons: ['Movimiento de "ir y volver" para soltarse de la marca.', 'Sacar rápido antes de que el rival se organice.'],
  var: ['+ 5v5.', '− 5v3.'],
  d: { z: [[70, 0, 30, 25]], p: [A(80, 0, 'S'), A(78, 6), A(84, 8), A(90, 5), A(86, 16), B(80, 8), B(86, 5), B(90, 10), B(84, 18)], b: [[80, 1.2]], a: [['mov', 78, 6, 76, 3, 0], ['mov', 90, 5, 96, 4, 0], ['pase', 80, 0, 76, 3, 0]] } });

// ---------- AMPLIACIÓN: TÉCNICA Y CIRCUITOS ----------
T({ id: 'tt46', n: 'Circuito de pases en "Y"', cat: 'tt', tipo: 'Circuito de pases', ed: 'AICJS', dif: 1, md: ['MD-1', 'MD-2', 'MD-3', 'MD-4'], int: 2, rpe: '3-4', carga: 'Activación', fase: 'cal',
  jug: '8-10 por circuito', np: 10, esp: [30, 20], ser: '2 x 4\' (uno por perfil)', rec: '45"', dur: 10,
  obj: 'Activar con pases de calidad, control orientado y apoyos a un toque.',
  desc: 'Patrón en forma de Y: el primero pasa al jugador de la base, que se la devuelve de cara (apoyo) y abre hacia uno de los dos brazos de la Y. Cada jugador sigue a su pase.',
  reglas: ['Pase y sigo a mi pase.', 'Alternar brazo derecho e izquierdo.', 'Dos balones a la vez para aumentar el ritmo.'],
  cons: ['Perfilarse antes de recibir.', 'Pase al pie contrario a la presión imaginaria.'],
  var: ['+ Pared con tercer hombre en el brazo.', '− Un solo balón.'],
  d: { z: [[37.5, 24, 30, 20]], c: [[39, 34], [50, 34], [62, 27], [62, 41]], p: [A(39, 34), A(37, 34), A(50, 34), A(62, 27), A(62, 41)], b: [[39.8, 34.6]], a: [['pase', 39, 34, 50, 34, 0], ['pase', 50, 34, 44, 35, 1.5], ['pase', 44, 35, 62, 27, 0], ['mov', 50, 34, 60, 29, 0]] } });

T({ id: 'tt47', n: 'Rombo de pases con tercer hombre', cat: 'tt', tipo: 'Circuito de pases', ed: 'ICJS', dif: 2, md: ['MD-1', 'MD-2', 'MD-4'], int: 2, rpe: '4', carga: 'Activación', fase: 'cal',
  jug: '8-10 por rombo', np: 10, esp: [25, 20], ser: '3 x 3\'', rec: '30"', dur: 12,
  obj: 'Automatizar la combinación de tercer hombre a alta velocidad de balón.',
  desc: 'Cuatro conos en rombo. A pasa a B (vértice central), B descarga de cara a A y este juega en largo a C, que recibe orientado y repite el patrón hacia el otro lado.',
  reglas: ['Máximo dos toques por jugador.', 'Rotar posición tras cada pase.', 'Cambiar el sentido cada serie.'],
  cons: ['El apoyo B se muestra con contramovimiento.', 'Pase tenso al pie lejano.'],
  var: ['+ Un toque en el apoyo.', '− Sin apoyo, pases en rombo.'],
  d: { z: [[40, 24, 25, 20]], c: [[42, 34], [52.5, 26], [63, 34], [52.5, 42]], p: [A(42, 34, 'A'), A(52.5, 27.5, 'B'), A(63, 34, 'C'), A(52.5, 42, 'D')], b: [[42.8, 34.6]], a: [['pase', 42, 34, 52.5, 27.5, 0], ['pase', 52.5, 27.5, 45, 33, 1.5], ['pase', 45, 33, 63, 34, -2], ['mov', 42, 34, 51, 26.5, 0]] } });

T({ id: 'tt48', n: 'Control orientado y pase por parejas', cat: 'tt', tipo: 'Técnica', ed: 'AIC', dif: 1, md: ['MD-1', 'MD-2', 'MD-3', 'MD-4', 'MD+1'], int: 1, rpe: '3', carga: 'Activación', fase: 'cal',
  jug: 'Parejas', np: 16, esp: [15, 10], ser: '4 x 2\'', rec: '30"', dur: 10,
  obj: 'Mejorar el control orientado y el pase con ambas piernas.',
  desc: 'Por parejas separadas 10-12 m con una "puerta" de conos delante de cada uno. El jugador controla orientando el balón hacia fuera de la puerta (izquierda o derecha) y pasa por dentro de la puerta del compañero.',
  reglas: ['Control con un toque fuera de la puerta.', 'Pase por la puerta del compañero.', 'Alternar pierna cada minuto.'],
  cons: ['Primer toque lejos del cuerpo y hacia el espacio.', 'Mirar antes de recibir.'],
  var: ['+ Un defensor pasivo detrás de cada puerta.', '− Control libre.'],
  d: { z: [[44, 29, 17, 10]], c: [[47, 32.5], [47, 35.5], [58, 32.5], [58, 35.5]], p: [A(45, 34), A(60, 34), A(45, 38), A(60, 38)], b: [[46, 34.6]], a: [['cond', 45, 34, 47.5, 31, 0], ['pase', 47.5, 31, 60, 34, 1]] } });

T({ id: 'tt49', n: 'Conducción y regate 1v1 en cuadrado', cat: 'tt', tipo: 'Técnica', ed: 'AI', dif: 1, md: ['MD-2', 'MD-3', 'MD-4'], int: 3, rpe: '6', carga: 'Tensión', fase: 'pri',
  jug: 'Parejas', np: 8, esp: [10, 10], ser: '6 x 45"', rec: '45"', dur: 12,
  obj: 'Aprender a superar al rival con regate y cambio de ritmo.',
  desc: 'Cuadrado con una puerta de conos en cada lado. El atacante intenta cruzar conduciendo cualquiera de las cuatro puertas; el defensor intenta robar o sacar el balón.',
  reglas: ['Cruzar una puerta conduciendo = punto.', 'Robo = cambio de rol.', 'Partidas cortas.'],
  cons: ['Amagar a un lado y salir por el otro.', 'Cambio de ritmo tras el regate.'],
  var: ['+ Solo dos puertas.', '− Defensor solo puede tapar, no robar.'],
  d: { z: [[47.5, 29, 10, 10]], c: [[51.5, 29], [53.5, 29], [51.5, 39], [53.5, 39], [47.5, 33], [47.5, 35], [57.5, 33], [57.5, 35]], p: [A(51, 35), B(54, 33)], b: [[51.8, 35.6]], a: [['cond', 51, 35, 56, 37.5, -1], ['cond', 56, 37.5, 58.5, 34, 0]] } });

T({ id: 'tt50', n: 'Juego de las puertas 6v6', cat: 'tt', tipo: 'Juego reducido', ed: 'AICJ', dif: 1, md: ['MD-3', 'MD-4', 'MD-2'], int: 3, rpe: '6-7', carga: 'Tensión', fase: 'pri',
  jug: '6v6', np: 12, esp: [35, 30], ser: '4 x 4\'', rec: '1\'30"', dur: 22,
  obj: 'Pase y recepción tras desmarque; ocupar espacios libres.',
  desc: 'Seis u ocho puertas de conos (2 m) repartidas por el espacio. Se puntúa al pasar el balón a través de una puerta a un compañero que lo recibe controlado al otro lado.',
  reglas: ['No se puede puntuar dos veces seguidas en la misma puerta.', 'Tres toques.', 'Sin porteros.'],
  cons: ['Buscar la puerta libre, lejos del balón.', 'Defender tapando líneas de pase, no solo puertas.'],
  var: ['+ Menos puertas.', '− Puertas de 3 m.'],
  d: { z: [[35, 19, 35, 30]], c: [[41, 24], [43, 24], [56, 23], [58, 23], [40, 42], [42, 42], [52, 34], [54, 34], [63, 41], [65, 41], [64, 28], [66, 28]], p: [A(38, 30), A(46, 38), A(50, 27), A(57, 39), A(61, 31), A(66, 45), B(42, 34), B(48, 31), B(54, 37), B(60, 25), B(62, 36), B(45, 45)], b: [[50.8, 27.5]], a: [['pase', 50, 27, 56, 34, 0], ['mov', 57, 39, 55.5, 32, 0]] } });

// ---------- AMPLIACIÓN: FASES DEL JUEGO ----------
T({ id: 'tt51', n: 'Salida de balón 6v4 + portero', cat: 'tt', tipo: 'Juego de posición', ed: 'CJS', dif: 3, md: ['MD-3', 'MD-4'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: 'P+6 v 4 (+2 apoyos)', np: 13, esp: [40, 68], ser: '4 x 4\'', rec: '1\'30"', dur: 22,
  obj: 'Construir desde el portero superando la primera línea de presión.',
  desc: 'El portero inicia con dos centrales, dos laterales y dos mediocentros contra cuatro presionadores. El equipo suma un punto al conducir o pasar a uno de los dos apoyos situados pasada la línea de 40 m.',
  reglas: ['Saque siempre en corto.', 'Robo de los presionadores = pueden finalizar en la portería.', 'Tres toques.'],
  cons: ['Centrales abiertos a la altura del área; portero como apoyo.', 'Atraer la presión para encontrar al pivote libre.'],
  var: ['+ 6v5 (presión con un mediocentro más).', '− 6v3.'],
  d: { v: [-4, 0, 50, 68], g: [], p: [P(2, 34), A(10, 24), A(10, 44), A(20, 8), A(20, 60), A(22, 30), A(24, 40), B(16, 30), B(16, 40), B(26, 18), B(28, 34), N(42, 22), N(42, 46)], b: [[3, 34.5]], l: [[38, 0, 38, 68]], a: [['pase', 2, 34, 10, 44, 0], ['pase', 10, 44, 24, 40, 0], ['pase', 24, 40, 42, 46, 0]] } });

T({ id: 'tt52', n: 'Superioridad 2v1 en banda + centro', cat: 'tt', tipo: 'Finalización', ed: 'ICJS', dif: 2, md: ['MD-2', 'MD-3'], int: 3, rpe: '6-7', carga: 'Velocidad', fase: 'pri',
  jug: '2v1 en banda + 2v2 en área + P', np: 8, esp: [40, 68], ser: '3 x 5\'', rec: '1\'30"', dur: 18,
  obj: 'Ganar el duelo en banda con superioridad y finalizar el centro.',
  desc: 'Lateral y extremo atacan en un pasillo lateral contra un defensor (2v1). Tras superar la línea, centran al área, donde dos rematadores atacan contra dos defensores y portero.',
  reglas: ['El defensor de banda solo actúa en su pasillo.', 'Centro antes de la línea de fondo.', 'Gol de primera vale doble.'],
  cons: ['Fijar al defensor antes de soltar el pase.', 'Rematadores: uno al primer palo, otro al segundo.'],
  var: ['+ 2v2 en banda.', '− Área sin defensores.'],
  d: { v: [56, 0, 52, 52], g: [], z: [[65, 0, 40, 12, '#facc15']], p: [P(103.5, 34), A(68, 6), A(76, 4), B(84, 6), A(88, 26), A(86, 36), B(94, 28), B(94, 36)], b: [[68.8, 6.6]], a: [['pase', 68, 6, 76, 4, 0], ['mov', 68, 6, 92, 9, 2], ['pase', 76, 4, 91, 8, 0], ['pase', 93, 9, 98, 31, 2], ['mov', 88, 26, 98, 29, 0]] } });

T({ id: 'tt53', n: 'Atacar por dentro: 4v4 + 3 con zona de pivote', cat: 'tt', tipo: 'Juego de posición', ed: 'JS', dif: 3, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '4v4+3', np: 11, esp: [36, 30], ser: '4 x 4\'', rec: '1\'30"', dur: 22,
  obj: 'Encontrar al pivote en la zona central y girar para progresar.',
  desc: 'Espacio con una zona central de 10 x 10 m donde solo puede entrar el comodín pivote. Dos comodines en los extremos. Punto por jugar extremo → pivote → extremo opuesto.',
  reglas: ['Pivote a dos toques y no puede ser presionado dentro de su zona.', 'Tres toques para el resto.', 'Si roban, el otro equipo busca el mismo objetivo.'],
  cons: ['El pivote se orienta antes de recibir.', 'Atraer fuera para abrir la línea de pase interior.'],
  var: ['+ Un defensor puede entrar en la zona central.', '− Pivote a toques libres.'],
  d: { z: [[34.5, 19, 36, 30], [47.5, 29, 10, 10, '#facc15']], p: [N(34.5, 34), N(70.5, 34), N(52.5, 34, '6'), A(40, 24), A(42, 44), A(63, 23), A(64, 44), B(44, 30), B(46, 39), B(59, 30), B(60, 40)], b: [[35.4, 34]], a: [['pase', 34.5, 34, 52.5, 34, 0], ['pase', 52.5, 34, 70.5, 34, 0]] } });

T({ id: 'tt54', n: 'Partido 9v9 con carriles exteriores', cat: 'tt', tipo: 'Juego reducido', ed: 'CJS', dif: 2, md: ['MD-3'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '9v9+2P', np: 20, esp: [80, 60], ser: '3 x 8\'', rec: '2\'', dur: 30,
  obj: 'Atacar por fuera, centrar y llegar al área con varios jugadores.',
  desc: 'Partido con dos carriles exteriores de 8 m donde no se puede defender. Gol tras centro desde el carril = 2 puntos. Obliga al equipo a ensanchar el campo y llegar con varios jugadores.',
  reglas: ['En los carriles solo puede estar un atacante y nadie defiende.', 'Máximo 3 toques en el carril.', 'Gol tras centro = 2 puntos.'],
  cons: ['Llegar al área con 3 jugadores en cada centro.', 'Bascular para tapar el pase al carril.'],
  var: ['+ Un defensor puede entrar en el carril.', '− Carriles de 10 m.'],
  d: { z: [[12.5, 4, 80, 60], [12.5, 4, 80, 8, '#facc15'], [12.5, 56, 80, 8, '#facc15']], g: [[12.5, 34, 'R'], [92.5, 34, 'L']], p: [P(14, 34), P(91, 34), A(24, 24), A(24, 44), A(36, 34), A(46, 20), A(46, 48), A(60, 34), A(70, 8), A(76, 30), A(78, 40), B(30, 34), B(40, 24), B(40, 44), B(54, 26), B(54, 42), B(66, 18), B(66, 50), B(84, 30), B(84, 38)], b: [[70.8, 8.6]], a: [['cond', 70, 8, 82, 8, 0], ['pase', 82, 8, 86, 33, 2], ['mov', 76, 30, 85, 32, 0], ['mov', 78, 40, 86, 37, 0]] } });

T({ id: 'tt55', n: 'Presión alta 7v6 + portero', cat: 'tt', tipo: 'Defensa', ed: 'JS', dif: 3, md: ['MD-3', 'MD-4'], int: 4, rpe: '8', carga: 'Duración', fase: 'pri',
  jug: '7 presionan v P+6', np: 14, esp: [52.5, 68], ser: '4 x 3\'', rec: '2\'', dur: 22,
  obj: 'Coordinar la presión alta para robar en campo rival.',
  desc: 'Un equipo saca desde su portero con seis jugadores y trata de llegar al medio campo. Siete jugadores presionan con referencias claras (activador, cierre del pivote, saltos a los laterales). Robo y finalización en menos de 10" = 2 puntos.',
  reglas: ['El equipo que sale suma al cruzar el medio campo controlado.', 'Robo + gol en < 10" = 2 puntos.', 'Saque siempre en corto.'],
  cons: ['El delantero orienta la presión hacia una banda.', 'Basculación del bloque entero; no presionar solo.'],
  var: ['+ 6v6.', '− El portero no puede participar.'],
  d: { v: [50, 0, 57, 68], g: [], p: [P(103, 34), B(95, 24), B(95, 44), B(86, 8), B(86, 60), B(88, 30), B(86, 40), A(90, 30), A(92, 40), A(80, 10), A(80, 58), A(82, 30), A(80, 40), A(72, 34)], b: [[94.2, 24.6]], a: [['mov', 90, 30, 93.5, 25.5, 0], ['mov', 80, 10, 85, 9, 0], ['mov', 82, 30, 86.5, 30, 0]] } });

T({ id: 'tt56', n: 'Defensa de centros laterales 4v4 + portero', cat: 'tt', tipo: 'Defensa', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-3'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: '4 defensores + P v 4 atacantes + 2 centradores', np: 11, esp: [30, 50], ser: '3 x 6 centros', rec: '1\'', dur: 15,
  obj: 'Defender el área en centros: marca, posición y despeje.',
  desc: 'Centros alternos desde las dos bandas. Cuatro defensores y el portero defienden contra cuatro rematadores. Tras el despeje, el defensor que gana el balón debe sacarlo hasta la frontal.',
  reglas: ['Centros a distintas alturas.', 'Despeje + salida de la línea = punto defensivo.', 'Gol = punto atacante.'],
  cons: ['Ver al hombre y al balón a la vez.', 'Ganar la posición antes del centro.'],
  var: ['+ 5 atacantes.', '− Centros desde parado.'],
  d: { v: [74, -2, 34, 70], g: [], p: [P(103, 34), N(96, 4), N(96, 64), B(99, 29), B(99, 38), B(95, 31), B(95, 37), A(93, 28), A(92, 34), A(93, 40), A(87, 33)], b: [[96.8, 4.6]], a: [['pase', 96, 4, 99, 32, 3], ['mov', 92, 34, 98, 33, 0]] } });

T({ id: 'tt57', n: 'Oleadas 4v4 con tres equipos', cat: 'tt', tipo: 'Transición', ed: 'ICJS', dif: 2, md: ['MD-3'], int: 4, rpe: '8', carga: 'Duración', fase: 'pri',
  jug: '4v4 (+4 esperando) + 2P', np: 14, esp: [50, 35], ser: '2 x 8\'', rec: '2\'', dur: 20,
  obj: 'Transiciones rápidas y continuas ataque-defensa.',
  desc: 'Dos equipos juegan 4v4 hacia una portería. Cuando un equipo marca o pierde el balón, el que defendía sale atacando hacia la portería contraria, donde le espera el tercer equipo. Juego continuo.',
  reglas: ['Máximo 10" por ataque.', 'El que pierde se queda esperando al otro lado.', 'Gol = punto para el equipo.'],
  cons: ['Primer pase vertical tras robo.', 'Repliegue rápido del equipo que entra a defender.'],
  var: ['+ 3v3 con espacio mayor.', '− 5v5.'],
  d: { z: [[27.5, 16.5, 50, 35]], g: [[27.5, 34, 'R'], [77.5, 34, 'L']], p: [P(29, 34), P(76, 34), A(55, 26), A(58, 40), A(50, 34), A(62, 33), B(64, 26), B(66, 40), B(70, 34), B(60, 34), N(36, 24), N(36, 44), N(40, 30), N(40, 38)], b: [[50.8, 34.5]], a: [['pase', 50, 34, 62, 33, 0], ['tiro', 66, 33, 76.5, 35, 0]] } });

T({ id: 'tt58', n: 'Rey de la pista 2v2', cat: 'tt', tipo: 'Juego reducido', ed: 'AICJS', dif: 1, md: ['MD-4'], int: 4, rpe: '8-9', carga: 'Tensión', fase: 'pri',
  jug: 'Parejas rotando + 2P', np: 10, esp: [25, 18], ser: '12-16\' en juego continuo', rec: 'Pasiva al esperar', dur: 16,
  obj: 'Duelos y finalización a máxima intensidad en forma de competición.',
  desc: 'Juego 2v2 con porteros. La pareja que marca se queda; la que recibe gol sale y entra otra pareja inmediatamente. Gana la pareja que suma más goles al final.',
  reglas: ['Partidos a un gol o 60" máximo.', 'Entrada inmediata de la siguiente pareja.', 'Balones de reposición junto a las porterías.'],
  cons: ['Atacar rápido, sin especular.', 'Defender en ayudas.'],
  var: ['+ 3v3.', '− Partidos de 45".'],
  d: { z: [[40, 25, 25, 18]], g: [[40, 34, 'R'], [65, 34, 'L']], p: [P(41.5, 34), P(63.5, 34), A(50, 30), A(55, 38), B(52, 34), B(57, 31), N(52, 46), N(54, 46), N(56, 46)], b: [[50.8, 30.5]], a: [['pase', 50, 30, 55, 38, 0], ['tiro', 55, 38, 63, 35, 0]] } });

T({ id: 'tt59', n: 'Pase atrás desde línea de fondo (cut-back)', cat: 'tt', tipo: 'Finalización', ed: 'ICJS', dif: 2, md: ['MD-2', 'MD-1'], int: 2, rpe: '5', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 6 + P', np: 7, esp: [30, 40], ser: '3 x 4\'', rec: '1\'', dur: 14,
  obj: 'Llegar a línea de fondo y pasar atrás al jugador que llega de segunda línea.',
  desc: 'El extremo recibe al espacio, conduce hasta la línea de fondo dentro del área y pasa raso hacia atrás, al punto de penalti, donde llegan dos jugadores de segunda línea para rematar.',
  reglas: ['Pase atrás siempre raso.', 'Remate de primera.', 'Alternar ambas bandas.'],
  cons: ['El rematador llega en carrera, no espera.', 'Levantar la cabeza antes del pase.'],
  var: ['+ Un defensor que persigue al extremo.', '− Pase desde parado.'],
  d: { z: [[75, 14, 30, 40]], p: [P(103.5, 34), A(82, 12), A(80, 30), A(80, 42), N(76, 22)], b: [[76.8, 22.6]], a: [['pase', 76, 22, 90, 14, 0], ['mov', 82, 12, 90, 15, 0], ['cond', 90, 15, 102, 22, 0], ['pase', 102, 22, 93, 33, 0], ['mov', 80, 30, 92, 33, 0], ['mov', 80, 42, 90, 38, 0]] } });

T({ id: 'tt60', n: 'Remate de cabeza por parejas', cat: 'tt', tipo: 'Técnica', ed: 'ICJS', dif: 1, md: ['MD-1', 'MD-2'], int: 2, rpe: '4', carga: 'Activación', fase: 'pri',
  jug: 'Parejas + P', np: 9, esp: [20, 30], ser: '3 x 6 remates', rec: '30"', dur: 12,
  obj: 'Técnica de remate de cabeza: impulso, contacto con la frente y dirección hacia abajo.',
  desc: 'Un jugador lanza el balón con la mano desde el lateral del área pequeña y su compañero remata de cabeza a portería, primero parado y después en carrera.',
  reglas: ['Remate hacia abajo, al suelo.', 'Alternar palo corto y largo.', 'Cambiar los roles tras cada serie.'],
  cons: ['Ojos abiertos y frente al balón.', 'Impulso con los brazos.'],
  var: ['+ Defensor pasivo que molesta.', '− Remate sin salto.'],
  d: { v: [80, 16, 28, 36], p: [P(103.5, 34), A(94, 28), N(100, 22), A(92, 38), N(99, 44)], b: [[99.4, 22.6]], a: [['pase', 100, 22, 95, 28, 1.5], ['tiro', 94, 28, 104, 31, 0], ['mov', 92, 38, 95, 36, 0]] } });

T({ id: 'tt61', n: 'Faltas directas: barrera y lanzamiento', cat: 'tt', tipo: 'ABP', ed: 'CJS', dif: 2, md: ['MD-1'], int: 1, rpe: '3', carga: 'Activación', fase: 'pri',
  jug: 'Lanzadores + barrera + P', np: 8, esp: [30, 30], ser: '2 x 6 lanzamientos', rec: '1\'', dur: 12,
  obj: 'Mejorar el golpeo a balón parado y la colocación de la barrera.',
  desc: 'Falta frontal desde 20-25 m con barrera de 3-4 jugadores (o maniquíes) y portero. Se ensayan lanzamiento directo, pase lateral y disparo, y una variante con un jugador que se tumba detrás de la barrera.',
  reglas: ['Barrera a 9,15 m.', 'Cada lanzador prueba dos tipos de golpeo.', 'El portero coloca la barrera con la voz.'],
  cons: ['Golpeo con interior para rosca o empeine para potencia.', 'La barrera salta coordinada.'],
  var: ['+ Lanzamiento con dos opciones de lanzador.', '− Sin barrera.'],
  d: { v: [72, 14, 36, 40], p: [P(102, 33), B(94, 29), B(94, 30.6), B(94, 32.2), B(94, 33.8), A(84, 34, 'L'), A(83, 37)], b: [[85, 34.3]], a: [['tiro', 85, 34, 104.5, 30.8, -3]] } });

T({ id: 'tt62', n: 'Partido 6v6 a dos porterías por equipo', cat: 'tt', tipo: 'Juego reducido', ed: 'AICJS', dif: 2, md: ['MD-3', 'MD-4'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '6v6', np: 12, esp: [45, 35], ser: '4 x 5\'', rec: '1\'30"', dur: 26,
  obj: 'Cambiar el lado del ataque y defender bien basculando.',
  desc: 'Cada equipo ataca dos porterías pequeñas situadas cerca de las esquinas del fondo rival y defiende otras dos. El cambio de orientación es clave para encontrar la portería libre.',
  reglas: ['Tres toques.', 'Gol solo dentro de la mitad rival.', 'Gol tras cambio de orientación = 2 puntos.'],
  cons: ['Atraer en un lado, finalizar en el otro.', 'Bascular en bloque.'],
  var: ['+ Dos toques.', '− Porterías más grandes.'],
  d: { z: [[30, 16.5, 45, 35]], mg: [[30, 21, 'L'], [30, 47, 'L'], [75, 21, 'R'], [75, 47, 'R']], p: [A(38, 30), A(40, 42), A(48, 22), A(52, 36), A(60, 26), A(64, 44), B(44, 26), B(46, 38), B(56, 30), B(58, 42), B(66, 30), B(70, 38)], b: [[52.8, 36.5]], a: [['pase', 52, 36, 60, 26, 0], ['pase', 60, 26, 64, 44, -5], ['cond', 64, 44, 72, 47, 0]] } });

T({ id: 'tt63', n: 'Fútbol-tenis (regenerativo lúdico)', cat: 'tt', tipo: 'Juego reducido', ed: 'AICJS', dif: 1, md: ['MD+1', 'MD-1'], int: 1, rpe: '2-3', carga: 'Recuperación', fase: 'pri',
  jug: '3v3 o 4v4', np: 8, esp: [16, 8], ser: '3 x 5\'', rec: '1\'', dur: 18,
  obj: 'Contacto con el balón y ambiente distendido con poca carga física.',
  desc: 'Dos equipos separados por una red o una línea de conos/vallas. El balón puede botar una vez en el suelo y cada equipo tiene un máximo de tres toques antes de pasarlo al otro lado.',
  reglas: ['Un bote como máximo.', 'Tres toques por equipo, no dos seguidos del mismo jugador.', 'Se puede usar la cabeza y cualquier parte salvo los brazos.'],
  cons: ['Control con muslo, pecho y cabeza.', 'Comunicación en el equipo.'],
  var: ['+ Sin bote.', '− Dos botes.'],
  d: { z: [[44.5, 30, 16, 8]], l: [[52.5, 29, 52.5, 39]], h: [[52.5, 31, 1], [52.5, 34, 1], [52.5, 37, 1]], p: [A(47, 32), A(47, 36), A(50, 34), B(55, 32), B(55, 36), B(58, 34)], b: [[50.8, 33.2]], a: [['pase', 50, 34, 56, 33, -2]] } });

T({ id: 'tt64', n: 'Cambio de juego en largo', cat: 'tt', tipo: 'Técnica', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-1', 'MD-3'], int: 2, rpe: '4', carga: 'Activación', fase: 'pri',
  jug: 'Grupos de 4-6', np: 8, esp: [50, 40], ser: '3 x 4\'', rec: '1\'', dur: 14,
  obj: 'Precisión en el pase largo de 30-40 m y control del balón aéreo.',
  desc: 'Dos zonas de 10 x 10 m separadas 30-40 m. Los jugadores de cada zona hacen 2-3 pases cortos y envían en largo a la zona contraria, donde deben controlar dentro de la zona.',
  reglas: ['El balón debe caer dentro de la zona.', 'Control en máximo dos toques.', 'Alternar pierna.'],
  cons: ['Golpeo con empeine interior, inclinado hacia atrás.', 'Amortiguar con el pie o el pecho.'],
  var: ['+ Un defensor en cada zona.', '− Zonas de 15 x 15 m.'],
  d: { z: [[30, 15, 10, 10], [65, 43, 10, 10]], p: [A(33, 18), A(37, 22), A(68, 46), A(72, 50)], b: [[37.8, 22.6]], a: [['pase', 33, 18, 37, 22, 0], ['pase', 37, 22, 70, 48, -6]] } });

T({ id: 'tt65', n: 'Contraataque tras córner defensivo', cat: 'tt', tipo: 'Transición', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-1'], int: 3, rpe: '6-7', carga: 'Velocidad', fase: 'pri',
  jug: '6 defensores + P v 5 atacantes', np: 12, esp: [105, 68], ser: '2 x 5 córners', rec: '1\'30"', dur: 15,
  obj: 'Organizar la salida rápida tras defender un córner.',
  desc: 'Tras despejar o atrapar el córner, el equipo que defendía sale en contraataque con tres jugadores (uno se quedó arriba y dos salen rápido) contra dos defensores que regresan.',
  reglas: ['Máximo 12" para finalizar el contraataque.', 'El portero puede sacar rápido con la mano.', 'Alternar córner derecho e izquierdo.'],
  cons: ['Primer pase hacia la banda o al jugador que se quedó arriba.', 'Correr por carriles diferentes.'],
  var: ['+ 3v3.', '− Sin defensores en la vuelta.'],
  d: { v: [-4, -4, 113, 76], g: [], p: [P(103, 34), A(104.5, 0.5), B(101, 30), B(101, 37), B(96, 32), B(96, 38), B(92, 30), B(60, 34), A(97, 34), A(93, 36), A(95, 28), N(40, 30), N(40, 38)], b: [[102, 33]], a: [['pase', 102, 34, 92, 30, 0], ['pase', 92, 30, 60, 34, 0], ['mov', 96, 38, 66, 48, 0], ['mov', 92, 30, 66, 20, 0], ['cond', 60, 34, 44, 34, 0]] } });

T({ id: 'tt66', n: 'Juego de pases con la mano y remate de cabeza', cat: 'tt', tipo: 'Juego reducido', ed: 'AI', dif: 1, md: ['MD-1', 'MD-2'], int: 2, rpe: '4-5', carga: 'Activación', fase: 'cal',
  jug: '5v5 + 2P', np: 12, esp: [30, 25], ser: '3 x 4\'', rec: '1\'', dur: 14,
  obj: 'Activación lúdica: desmarques, visión de juego y remate de cabeza.',
  desc: 'Se juega con las manos: el poseedor no puede moverse con el balón y debe pasar. Solo se puede marcar de cabeza tras un pase con la mano de un compañero.',
  reglas: ['Máximo 3" con el balón.', 'Robo solo interceptando el pase.', 'Gol solo de cabeza.'],
  cons: ['Desmarcarse a espacios libres.', 'Pase al aire a la altura de la cabeza del compañero.'],
  var: ['+ Gol de volea también vale.', '− Gol con la mano dentro del área pequeña.'],
  d: { z: [[37.5, 21.5, 30, 25]], g: [[37.5, 34, 'R'], [67.5, 34, 'L']], p: [P(39, 34), P(66, 34), A(46, 28), A(50, 38), A(56, 30), A(60, 36), A(48, 33), B(44, 36), B(52, 27), B(54, 35), B(62, 32), B(58, 41)], b: [[56.8, 30.5]], a: [['pase', 56, 30, 61, 35, -1.5], ['tiro', 61, 35, 66.5, 34, 0]] } });

T({ id: 'tt67', n: 'Rondo 4v2 con apoyos y salida (Rondo "en caja")', cat: 'tt', tipo: 'Rondo', ed: 'ICJS', dif: 2, md: ['MD-2', 'MD-3', 'MD-4'], int: 3, rpe: '6', carga: 'Tensión', fase: 'pri',
  jug: '4v2 + 2 apoyos', np: 8, esp: [14, 14], ser: '5 x 2\'', rec: '1\'', dur: 15,
  obj: 'Conservar y, al robar, salir rápido hacia un apoyo exterior.',
  desc: 'Rondo 4v2 en un cuadrado con dos apoyos en lados opuestos, fuera del cuadrado. Los defensores que roban deben pasar a cualquier apoyo; los apoyos rotan con los defensores tras cada robo.',
  reglas: ['Poseedores a dos toques.', 'Robo + pase a un apoyo = punto.', 'Rotación: defensor → apoyo → poseedor.'],
  cons: ['Al robar, levantar la cabeza y buscar el apoyo lejano.', 'Los poseedores cierran el pase al apoyo tras perder.'],
  var: ['+ 4v3.', '− Tres apoyos.'],
  d: { z: [[45.5, 27, 14, 14]], c: esq(45.5, 27, 14, 14), p: [A(45.5, 34), A(52.5, 27), A(59.5, 34), A(52.5, 41), B(51, 32.5), B(54.5, 36), N(41, 30), N(64, 38)], b: [[54.5, 36.8]], a: [['pase', 54.5, 36, 64, 38, 0]] } });

// ---------- AMPLIACIÓN 2 ----------
T({ id: 'tt68', n: 'Rondo itinerante en 3 zonas', cat: 'tt', tipo: 'Rondo', ed: 'CJS', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '6v3 (+3 en espera)', np: 12, esp: [42, 14], ser: '4 x 3\'', rec: '1\'', dur: 16,
  obj: 'Conservar y trasladar el rondo de zona con un pase largo y desplazamiento rápido.',
  desc: 'Tres cuadrados en línea. El rondo 6v3 empieza en el primero. Tras 6 pases, los poseedores envían el balón al cuadrado central y se desplazan todos allí; los defensores persiguen. Lo mismo hacia el tercer cuadrado.',
  reglas: ['Dos toques.', '6 pases + cambio de zona = punto.', 'Robo: los tres defensores cambian con el trío que falló.'],
  cons: ['Desplazamiento inmediato tras el pase de cambio.', 'Primer control orientado en la nueva zona.'],
  var: ['+ Solo 4 pases para cambiar.', '− 7v3.'],
  d: { z: [[31.5, 27, 14, 14], [45.5, 27, 14, 14, '#f59e0b'], [59.5, 27, 14, 14]], p: [A(31.5, 30), A(38.5, 27), A(45.5, 31), A(45.5, 38), A(38.5, 41), A(31.5, 38), B(36, 32), B(41, 35), B(38, 37)], b: [[44.6, 31.4]], a: [['pase', 45.5, 31, 52.5, 34, 0, 1], ['mov', 45.5, 38, 52, 38, 0, 1], ['mov', 38.5, 27, 50, 28.5, 0, 1], ['mov', 41, 35, 50, 35, 0, 2]] } });

T({ id: 'tt69', n: 'Salida de balón 3 + portero contra 2', cat: 'tt', tipo: 'Juego de posición', ed: 'AIC', dif: 1, md: ['MD-3', 'MD-2'], int: 2, rpe: '5', carga: 'Duración', fase: 'pri',
  jug: 'P+3 v 2 (+1 apoyo)', np: 7, esp: [30, 40], ser: '4 x 3\'', rec: '1\'', dur: 15,
  obj: 'Iniciar la construcción: abrir centrales y usar al portero.',
  desc: 'El portero y tres defensores (dos centrales y un pivote) deben superar a dos presionadores y pasar a un apoyo situado a 30 m. Iniciación a la salida de balón para las categorías base.',
  reglas: ['El portero siempre saca en corto.', 'Pase al apoyo = punto.', 'Si los presionadores roban, pueden tirar.'],
  cons: ['Centrales abiertos a los lados del área.', 'El pivote se ofrece entre los presionadores.'],
  var: ['+ 3v3.', '− Presión pasiva.'],
  d: { v: [-4, 10, 42, 48], g: [], p: [P(2, 34), A(10, 24), A(10, 44), A(20, 34), B(15, 30), B(15, 38), N(32, 34)], b: [[3, 34.5]], a: [['pase', 2, 34, 10, 44, 0], ['mov', 20, 34, 22, 40, 0], ['pase', 10, 44, 22, 40, 0], ['pase', 22, 40, 32, 34, 0]] } });

T({ id: 'tt70', n: 'Juego de posición por carriles (4+3 v 4+3)', cat: 'tt', tipo: 'Juego de posición', ed: 'JS', dif: 3, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '7v7', np: 14, esp: [45, 40], ser: '4 x 4\'', rec: '1\'30"', dur: 22,
  obj: 'Ocupar los cinco carriles y no repetir carril con el compañero cercano.',
  desc: 'Campo dividido en cinco carriles verticales. En posesión, no puede haber dos jugadores del mismo equipo en el mismo carril y a la misma altura. Punto por superar la línea final controlando el balón.',
  reglas: ['Tres toques.', 'Dos jugadores juntos en el mismo carril = balón al rival.', 'Conducir y superar la línea final = punto.'],
  cons: ['Amplitud en los carriles exteriores.', 'Escalonarse en alturas distintas por dentro.'],
  var: ['+ Dos toques.', '− Sin restricción de carril.'],
  d: { z: [[30, 14, 45, 40]], l: [[30, 22, 75, 22], [30, 30, 75, 30], [30, 38, 75, 38], [30, 46, 75, 46]], p: [A(36, 18), A(40, 34), A(48, 26), A(50, 42), A(58, 34), A(64, 50), A(66, 18), B(44, 30), B(46, 38), B(54, 26), B(56, 44), B(62, 34), B(68, 26), B(70, 42)], b: [[40.9, 34.5]], a: [['pase', 40, 34, 48, 26, 0], ['pase', 48, 26, 66, 18, 0], ['mov', 64, 50, 72, 50, 0]] } });

T({ id: 'tt71', n: 'Ataque de segunda jugada (rechaces)', cat: 'tt', tipo: 'Finalización', ed: 'ICJS', dif: 2, md: ['MD-2', 'MD-1'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: '3 atacantes v 2 defensores + P', np: 6, esp: [30, 40], ser: '3 x 5 acciones', rec: '1\'', dur: 14,
  obj: 'Atacar el rechace tras un tiro o un despeje.',
  desc: 'Un jugador tira desde la frontal; el entrenador lanza inmediatamente un segundo balón como si fuera un rechace del portero o un despeje. Los atacantes deben llegar antes que los defensores y finalizar.',
  reglas: ['El segundo balón sale nada más tirar.', 'Gol de rechace = 2 puntos.', 'Los defensores despejan fuera del área.'],
  cons: ['Seguir el tiro, no quedarse mirando.', 'Primer contacto hacia portería.'],
  var: ['+ Rechace aéreo.', '− Sin defensores.'],
  d: { z: [[75, 14, 30, 40]], p: [P(103.5, 34), A(84, 34), A(86, 26), A(86, 42), B(93, 30), B(93, 38), E(80, 46)], b: [[84.9, 34.5], [92, 44]], a: [['tiro', 84, 34, 104, 32, 0, 1], ['pase', 80, 46, 92, 41, 0, 2], ['mov', 86, 42, 91.5, 41, 0, 2], ['tiro', 92, 41, 104, 36, 0, 3]] } });

T({ id: 'tt72', n: 'Centro y remate 2v2 en el área', cat: 'tt', tipo: 'Finalización', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-3'], int: 3, rpe: '6-7', carga: 'Velocidad', fase: 'pri',
  jug: '2v2 en área + 2 centradores + P', np: 7, esp: [30, 68], ser: '3 x 6 centros', rec: '1\'', dur: 15,
  obj: 'Ganar la posición en el área contra oposición real.',
  desc: 'Centros alternos desde cada banda. Dos atacantes contra dos defensores en el área. Los atacantes deben cruzarse y atacar primer y segundo palo; los defensores marcan y despejan.',
  reglas: ['Centro tras conducción de 10 m.', 'Gol = punto para atacantes, despeje fuera del área = punto para defensores.', 'Cambio de roles cada serie.'],
  cons: ['Movimiento de contramarca antes del centro.', 'Atacar el balón, no esperarlo.'],
  var: ['+ 3v2.', '− Defensores pasivos.'],
  d: { v: [74, -2, 34, 72], g: [], p: [P(103, 34), N(90, 4), N(90, 64), A(92, 32), A(91, 37), B(95, 33), B(95, 38)], b: [[90.9, 4.6]], a: [['cond', 90, 4, 99, 6, 0, 1], ['mov', 92, 32, 98, 37, 2, 2], ['mov', 91, 37, 98, 30, -2, 2], ['pase', 99, 6, 98.5, 31, 3, 2]] } });

T({ id: 'tt73', n: 'Defensa en inferioridad 3v4 + portero', cat: 'tt', tipo: 'Defensa', ed: 'CJS', dif: 3, md: ['MD-3', 'MD-2'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '3 defensores + P v 4 atacantes', np: 8, esp: [35, 50], ser: '3 x 5 ataques', rec: '1\'30"', dur: 16,
  obj: 'Temporizar y cerrar el centro defendiendo en inferioridad hasta que llegan ayudas.',
  desc: 'Cuatro atacantes salen desde 35 m contra tres defensores y portero. Un cuarto defensor sale desde atrás 3" después. Los defensores deben temporizar y cerrar la portería sin lanzarse.',
  reglas: ['Ataque máximo de 10".', 'El defensor de ayuda sale a la señal.', 'Robo + pase al entrenador en el medio campo = punto defensivo.'],
  cons: ['Juntarse en el carril central.', 'Defender el pase, no al poseedor, cuando hay inferioridad.'],
  var: ['+ Sin defensor de ayuda.', '− 3v3.'],
  d: { z: [[70, 9, 35, 50]], p: [P(103.5, 34), B(92, 28), B(93, 34), B(92, 40), B(72, 52), A(76, 22), A(74, 34), A(76, 46), A(84, 34)], b: [[74.9, 34.5]], a: [['pase', 74, 34, 76, 22, 0, 1], ['mov', 92, 28, 90, 25, 0, 1], ['mov', 93, 34, 91.5, 30.5, 0, 1], ['mov', 72, 52, 86, 44, 0, 2]] } });

T({ id: 'tt74', n: 'Presión por señales (pase atrás y control malo)', cat: 'tt', tipo: 'Defensa', ed: 'JS', dif: 3, md: ['MD-4', 'MD-3'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: '6v6 + 2 comodines', np: 14, esp: [45, 40], ser: '4 x 4\'', rec: '2\'', dur: 24,
  obj: 'Reconocer las señales de presión y saltar todos a la vez.',
  desc: 'Posesión 6v6 + 2. El equipo sin balón solo puede presionar en bloque cuando aparece una señal: pase atrás, control hacia la banda o mal control. El entrenador valida si la presión fue en el momento correcto.',
  reglas: ['Robo tras señal correcta = 2 puntos.', 'Presión sin señal = punto para el rival.', 'Tres toques.'],
  cons: ['Uno salta y los demás cierran líneas de pase.', 'Reconocer la señal antes de que llegue el balón.'],
  var: ['+ Solo una señal válida (pase atrás).', '− El entrenador grita la señal.'],
  d: { z: [[30, 14, 45, 40]], p: [A(38, 24), A(38, 44), A(48, 34), A(58, 22), A(60, 46), A(68, 34), B(44, 28), B(44, 40), B(54, 30), B(55, 40), B(64, 28), B(64, 40), N(52.5, 16), N(52.5, 52)], b: [[48.9, 34.5]], a: [['pase', 58, 22, 48, 34, 0, 1], ['mov', 54, 30, 50, 33, 0, 2], ['mov', 44, 28, 40, 26, 0, 2], ['mov', 55, 40, 50.5, 40.5, 0, 2]] } });

T({ id: 'tt75', n: 'Partido 9v9 con fuera de juego en 3/4', cat: 'tt', tipo: 'Juego reducido', ed: 'JS', dif: 3, md: ['MD-3'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '9v9 + 2P', np: 20, esp: [75, 55], ser: '3 x 8\'', rec: '2\'', dur: 30,
  obj: 'Defender adelantado y atacar la espalda con desmarques de ruptura.',
  desc: 'Partido con líneas de fuera de juego a 25 m de cada portería. Obliga a la defensa a mantenerse alta y a los delanteros a sincronizar el desmarque con el pase.',
  reglas: ['Fuera de juego solo dentro de los últimos 25 m.', 'Toques libres.', 'Gol tras desmarque de ruptura = 2 puntos.'],
  cons: ['Línea defensiva coordinada al subir.', 'Desmarque en diagonal y en el momento del pase.'],
  var: ['+ Línea a 30 m.', '− Sin fuera de juego.'],
  d: { z: [[15, 6.5, 75, 55]], l: [[40, 6.5, 40, 61.5], [65, 6.5, 65, 61.5]], g: [[15, 34, 'R'], [90, 34, 'L']], p: [P(16.5, 34), P(88.5, 34), A(26, 22), A(26, 46), A(36, 34), A(44, 16), A(44, 52), A(54, 30), A(54, 40), A(62, 24), A(63, 42), B(66, 18), B(66, 30), B(66, 40), B(66, 50), B(56, 34), B(46, 26), B(46, 42), B(36, 22), B(36, 46)], b: [[54.9, 30.5]], a: [['mov', 63, 42, 76, 38, -2, 1], ['pase', 54, 30, 76, 37, 2, 1]] } });

T({ id: 'tt76', n: 'Oleadas 1v1 → 2v1 → 2v2', cat: 'tt', tipo: 'Finalización', ed: 'ICJS', dif: 2, md: ['MD-2', 'MD-3'], int: 4, rpe: '7-8', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 6-8 + P', np: 9, esp: [35, 35], ser: '3 rondas de cada situación', rec: '1\'', dur: 18,
  obj: 'Progresión de situaciones de ataque y defensa con finalización.',
  desc: 'Tres oleadas seguidas: primero 1v1, luego entra un atacante de apoyo (2v1) y por último un segundo defensor (2v2). Cada situación dura máximo 8".',
  reglas: ['Entradas a la señal del entrenador.', 'Máximo 8" por situación.', 'Rotación de filas tras cada oleada.'],
  cons: ['En 2v1: fijar al defensor antes de soltar.', 'En 2v2: paredes y cruces.'],
  var: ['+ Defensores salen antes.', '− Defensor pasivo en el 1v1.'],
  d: { z: [[70, 16.5, 35, 35]], p: [P(103.5, 34), A(74, 30), A(74, 40), B(90, 34), B(88, 46)], b: [[74.9, 30.5]], a: [['cond', 74, 30, 84, 31, 0, 1], ['mov', 74, 40, 88, 38, 0, 2], ['pase', 84, 31, 88, 38, 0, 2], ['mov', 88, 46, 92, 41, 0, 3], ['tiro', 88, 38, 104, 35, 0, 3]] } });

T({ id: 'tt77', n: 'Juego de posición 6v6 + 4 apoyos', cat: 'tt', tipo: 'Juego de posición', ed: 'CJS', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '6v6 + 4 apoyos', np: 16, esp: [35, 35], ser: '4 x 4\'', rec: '1\'30"', dur: 22,
  obj: 'Usar los apoyos exteriores para girar el juego y encontrar al libre.',
  desc: 'Cuatro apoyos, uno en cada lado del cuadrado, juegan con el poseedor a un toque. Punto cuando el balón pasa de un apoyo a otro distinto a través de un jugador interior que recibe de cara.',
  reglas: ['Apoyos a un toque, interiores a dos.', 'No vale pasar de un apoyo al de al lado directamente.', 'Robo: el otro equipo busca el mismo objetivo.'],
  cons: ['Recibir de cara al apoyo opuesto.', 'Atraer hacia un lado y salir por el contrario.'],
  var: ['+ Apoyos solo en dos lados.', '− Interiores a toques libres.'],
  d: { z: [[35, 16.5, 35, 35]], p: [N(35, 34), N(70, 34), N(52.5, 16.5), N(52.5, 51.5), A(42, 26), A(44, 42), A(52, 34), A(60, 24), A(62, 44), A(64, 33), B(46, 30), B(48, 38), B(56, 30), B(57, 40), B(40, 34), B(66, 28)], b: [[35.9, 34]], a: [['pase', 35, 34, 52, 34, 0], ['pase', 52, 34, 70, 34, -2], ['mov', 64, 33, 66, 38, 0]] } });

T({ id: 'tt78', n: 'Circuito de paredes con desmarque apoyo-ruptura', cat: 'tt', tipo: 'Circuito de pases', ed: 'ICJS', dif: 2, md: ['MD-2', 'MD-1'], int: 2, rpe: '5', carga: 'Activación', fase: 'pri',
  jug: 'Grupos de 6 + P', np: 7, esp: [40, 30], ser: '2 x 6\'', rec: '1\'', dur: 14,
  obj: 'Automatizar el desmarque de apoyo y la ruptura posterior con finalización.',
  desc: 'El delantero viene al apoyo, descarga de cara al centrocampista y sale en ruptura. El centrocampista le filtra el balón al espacio y el delantero finaliza. Rotación de posiciones.',
  reglas: ['Descarga a un toque.', 'Pase filtrado al espacio, nunca al pie.', 'Finalizar en dos toques.'],
  cons: ['Contramovimiento antes de venir al apoyo.', 'Timing: salir cuando el centrocampista levanta la cabeza.'],
  var: ['+ Defensor pasivo.', '− Sin finalización.'],
  d: { z: [[65, 19, 40, 30]], c: [[80, 34]], p: [P(103.5, 34), A(70, 34, 'MC'), A(84, 30, 'DC')], b: [[70.9, 34.5]], a: [['mov', 84, 30, 79, 32, 0, 1], ['pase', 70, 34, 78.5, 32.5, 0, 2], ['pase', 79, 32, 73, 35, 1.5, 3], ['mov', 79, 32, 92, 38, -2, 4], ['pase', 73, 35, 92, 38.5, 0, 4], ['tiro', 93, 38, 104, 33, 0, 5]] } });

T({ id: 'tt79', n: 'Ataque al lado débil 7v7', cat: 'tt', tipo: 'Juego reducido', ed: 'CJS', dif: 3, md: ['MD-3'], int: 3, rpe: '7', carga: 'Duración', fase: 'pri',
  jug: '7v7 + 2P', np: 16, esp: [60, 50], ser: '3 x 7\'', rec: '2\'', dur: 27,
  obj: 'Atraer al rival en un lado y atacar rápido el lado contrario.',
  desc: 'Partido 7v7. Gol tras un cambio de orientación (balón que cruza el pasillo central y llega al pasillo contrario en menos de dos pases) vale doble.',
  reglas: ['Tres toques.', 'Gol tras cambio de orientación = 2 puntos.', 'Fuera de juego en 3/4.'],
  cons: ['El extremo del lado débil, abierto y alto.', 'Cambio tenso, por bajo o a media altura.'],
  var: ['+ Solo valen goles tras cambio.', '− Toques libres.'],
  d: { z: [[22.5, 9, 60, 50]], l: [[22.5, 24, 82.5, 24], [22.5, 44, 82.5, 44]], g: [[22.5, 34, 'R'], [82.5, 34, 'L']], p: [P(24, 34), P(81, 34), A(34, 18), A(40, 30), A(46, 16), A(56, 22), A(54, 34), A(68, 52), A(66, 28), B(42, 20), B(50, 18), B(52, 28), B(60, 22), B(64, 34), B(70, 40), B(46, 40)], b: [[46.9, 16.5]], a: [['pase', 46, 16, 54, 34, 0, 1], ['pase', 54, 34, 68, 52, 0, 2], ['mov', 66, 28, 74, 38, 0, 2], ['cond', 68, 52, 76, 46, 0, 3], ['pase', 76, 46, 75, 38, 0, 4]] } });

// ---------- AMPLIACIÓN 3 ----------
T({ id: 'tt80', n: 'Rondo 4v2 + 1 pivote interior', cat: 'tt', tipo: 'Rondo', ed: 'ICJS', dif: 2, md: ['MD-2', 'MD-3', 'MD-4'], int: 2, rpe: '5', carga: 'Activación', fase: 'cal',
  jug: '4v2+1', np: 7, esp: [12, 12], ser: '4 x 2\'', rec: '45"', dur: 12,
  obj: 'Encontrar al pivote entre los dos defensores y jugar de cara.',
  desc: 'Cuatro poseedores en los lados y un pivote dentro que siempre juega con ellos. Pase al pivote y que este juegue a un lado distinto = punto.',
  reglas: ['Exteriores a dos toques, pivote a uno.', 'El pivote no puede devolver al que le pasó.', 'Robo: cambia el defensor con quien falló.'],
  cons: ['El pivote se coloca en el hueco entre defensores.', 'Exteriores: atraer antes de pasar dentro.'],
  var: ['+ Pivote a un toque obligatorio.', '− Pivote a dos toques.'],
  d: { z: [[46.5, 28, 12, 12]], c: esq(46.5, 28, 12, 12), p: [A(46.5, 34), A(52.5, 28), A(58.5, 34), A(52.5, 40), N(53, 34.5, '6'), B(50.5, 31.5), B(55.5, 37)], b: [[47.4, 34]], a: [['pase', 46.5, 34, 53, 34.5, 0, 1], ['mov', 50.5, 31.5, 52, 33, 0, 1], ['pase', 53, 34.5, 52.5, 28, 0, 2]] } });

T({ id: 'tt81', n: 'Posesión 4v4 + 4 apoyos en las esquinas', cat: 'tt', tipo: 'Posesión', ed: 'ICJS', dif: 2, md: ['MD-4'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '4v4+4', np: 12, esp: [22, 22], ser: '5 x 2\'30"', rec: '1\'15"', dur: 18,
  obj: 'Usar los apoyos diagonales y la tercera línea de pase.',
  desc: 'Cuatro apoyos en las esquinas del cuadrado juegan con el poseedor a un toque. Punto al conectar dos esquinas opuestas pasando por un interior.',
  reglas: ['Apoyos a un toque, interiores a dos.', 'Esquina → interior → esquina opuesta = punto.', 'Rotación de apoyos cada serie.'],
  cons: ['Recibir perfilado hacia la esquina contraria.', 'Defender cerrando el pase interior.'],
  var: ['+ Apoyos a un toque y sin repetir esquina.', '− Cinco interiores por equipo.'],
  d: { z: [[41.5, 23, 22, 22]], p: [N(41.5, 23), N(63.5, 23), N(41.5, 45), N(63.5, 45), A(47, 30), A(52, 36), A(58, 28), A(56, 41), B(50, 30), B(55, 33), B(48, 39), B(60, 37)], b: [[42.3, 23.6]], a: [['pase', 41.5, 23, 52, 36, 0, 1], ['mov', 55, 33, 53.5, 35, 0, 1], ['pase', 52, 36, 63.5, 45, 0, 2]] } });

T({ id: 'tt82', n: 'Finalización en 3 porterías', cat: 'tt', tipo: 'Finalización', ed: 'AICJS', dif: 1, md: ['MD-2', 'MD-1'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 6 + 3 porteros (o porterías vacías)', np: 9, esp: [40, 40], ser: '2 x 6\'', rec: '1\'30"', dur: 15,
  obj: 'Elegir la portería libre y finalizar rápido tras recibir.',
  desc: 'Tres porterías en semicírculo. El jugador recibe un pase del entrenador en el centro y debe finalizar en la portería que el entrenador indique con un color en el último momento.',
  reglas: ['Máximo dos toques.', 'Color de portería anunciado al tocar el balón.', 'Turnos rápidos.'],
  cons: ['Control orientado hacia la portería indicada.', 'Mirar antes de recibir.'],
  var: ['+ Defensor pasivo.', '− Portería anunciada antes del pase.'],
  d: { z: [[32.5, 14, 40, 40]], g: [[52.5, 14.5, 'D'], [33, 34, 'R'], [72, 34, 'L']], p: [P(52.5, 16), P(34.5, 34), P(70.5, 34), A(52.5, 40), E(52.5, 50)], b: [[52.5, 49]], a: [['pase', 52.5, 50, 52.5, 41, 0, 1], ['cond', 52.5, 40, 58, 36, 0, 2], ['tiro', 58, 36, 71.5, 33, 0, 3]] } });

T({ id: 'tt83', n: 'Repliegue tras pérdida 5v5 con portería y contraataque', cat: 'tt', tipo: 'Transición', ed: 'CJS', dif: 3, md: ['MD-3', 'MD-4'], int: 4, rpe: '8', carga: 'Duración', fase: 'pri',
  jug: '5v5 + 2P', np: 12, esp: [55, 40], ser: '4 x 4\'', rec: '2\'', dur: 24,
  obj: 'Replegar en bloque tras perder el balón para proteger la portería.',
  desc: 'Partido 5v5. Cuando un equipo pierde el balón en campo rival, debe tener al menos 4 jugadores por detrás del balón en 6". Si lo consigue y recupera, gol doble; si el rival marca antes, gol triple.',
  reglas: ['El entrenador cuenta los 6".', 'Gol en contraataque antes de replegar = 3 puntos.', 'Tres toques.'],
  cons: ['El más cercano presiona, el resto corre hacia su portería por dentro.', 'Cerrar el carril central primero.'],
  var: ['+ 5" para replegar.', '− 7" para replegar.'],
  d: { z: [[25, 14, 55, 40]], g: [[25, 34, 'R'], [80, 34, 'L']], p: [P(26.5, 34), P(78.5, 34), A(62, 24), A(66, 38), A(58, 44), A(54, 30), A(46, 36), B(64, 30), B(70, 42), B(56, 22), B(50, 40), B(40, 30)], b: [[64.9, 30.5]], a: [['pase', 64, 30, 40, 30, 0, 1], ['mov', 62, 24, 46, 28, 0, 1], ['mov', 66, 38, 48, 38, 0, 1], ['mov', 58, 44, 44, 40, 0, 1], ['cond', 40, 30, 32, 32, 0, 2]] } });

T({ id: 'tt84', n: 'Superioridad 3v2 en salida con lateral', cat: 'tt', tipo: 'Juego de posición', ed: 'CJS', dif: 2, md: ['MD-3', 'MD-2'], int: 3, rpe: '6', carga: 'Duración', fase: 'pri',
  jug: 'P+3 v 2 + 2 receptores', np: 8, esp: [40, 34], ser: '4 x 3\'', rec: '1\'', dur: 15,
  obj: 'Progresar por banda con central, lateral y pivote ante dos presionadores.',
  desc: 'En una mitad del ancho del campo, el portero inicia con central, lateral y pivote contra dos presionadores. Punto al pasar a uno de los dos receptores (extremo o interior) pasada la línea de 35 m.',
  reglas: ['Saque en corto.', 'Robo = finalizan en la portería.', 'Tres toques.'],
  cons: ['El lateral alto y abierto para fijar.', 'Central que conduce para atraer.'],
  var: ['+ 3v3.', '− Presión pasiva.'],
  d: { v: [-4, 0, 50, 40], g: [], p: [P(2, 30), A(10, 26, 'C'), A(22, 6, 'L'), A(22, 26, '6'), B(14, 22), B(18, 12), N(38, 8), N(38, 26)], b: [[3, 30.5]], a: [['pase', 2, 30, 10, 26, 0, 1], ['cond', 10, 26, 15, 18, 0, 2], ['mov', 22, 6, 26, 4, 0, 2], ['pase', 15, 18, 22, 6, 0, 3], ['pase', 22, 6, 38, 8, 0, 4]] } });

T({ id: 'tt85', n: 'Rondo 5v5 + 2 con salida a miniporterías', cat: 'tt', tipo: 'Posesión', ed: 'ICJS', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'pri',
  jug: '5v5+2', np: 12, esp: [30, 30], ser: '4 x 4\'', rec: '1\'30"', dur: 22,
  obj: 'Conservar y elegir cuándo atacar: tras 6 pases se puede marcar.',
  desc: 'Posesión en un cuadrado con una miniportería en cada lado. Tras 6 pases seguidos, el equipo puede marcar en cualquiera de las cuatro. Tras robo, puede marcar inmediatamente.',
  reglas: ['Tres toques.', 'Gol solo tras 6 pases o tras robo.', 'Comodines no pueden marcar.'],
  cons: ['Atacar la portería más alejada de la presión.', 'Presión tras pérdida para aprovechar la regla del robo.'],
  var: ['+ Solo dos porterías activas que cambia el entrenador.', '− 4 pases.'],
  d: { z: [[37.5, 19, 30, 30]], mg: [[52.5, 19, 'U'], [52.5, 49, 'D'], [37.5, 34, 'L'], [67.5, 34, 'R']], p: [A(42, 26), A(46, 40), A(54, 32), A(60, 24), A(62, 42), B(48, 28), B(50, 38), B(58, 30), B(58, 40), B(64, 34), N(42, 34), N(52.5, 44)], b: [[54.9, 32.5]], a: [['pase', 54, 32, 60, 24, 0, 1], ['cond', 60, 24, 64, 30, 0, 2], ['tiro', 64, 30, 67.3, 33.5, 0, 3]] } });

T({ id: 'tt86', n: 'Defensa del pase interior (línea de 4 + pivotes)', cat: 'tt', tipo: 'Defensa', ed: 'JS', dif: 3, md: ['MD-3', 'MD-2'], int: 3, rpe: '6', carga: 'Duración', fase: 'pri',
  jug: '6 defensores v 6 atacantes', np: 12, esp: [45, 50], ser: '3 x 5\'', rec: '1\'30"', dur: 18,
  obj: 'Cerrar el pase entre líneas y obligar al rival a jugar por fuera.',
  desc: 'Seis atacantes intentan dar un pase a un jugador entre líneas (zona marcada) y que reciba de cara. Línea de cuatro y dos pivotes defienden cerrando el centro y saltando al poseedor.',
  reglas: ['Pase recibido de cara entre líneas = punto atacante.', 'Robo y pase a un apoyo = punto defensivo.', 'Atacantes a dos toques.'],
  cons: ['Pivotes juntos, a 8-10 m.', 'El central sale al jugador entre líneas si recibe de espaldas.'],
  var: ['+ Atacantes a un toque.', '− 6v5.'],
  d: { v: [54, 4, 54, 60], g: [], z: [[74, 24, 12, 20, '#f59e0b', 'Entre líneas']], p: [P(103.5, 34), B(90, 20), B(91, 30), B(91, 38), B(90, 48), B(80, 30), B(80, 38), A(66, 18), A(64, 34), A(66, 50), A(76, 22), A(78, 46), A(84, 34)], b: [[64.9, 34.5]], a: [['pase', 64, 34, 66, 18, 0, 1], ['mov', 80, 30, 77, 25, 0, 1], ['mov', 80, 38, 79, 32, 0, 1], ['mov', 90, 20, 84, 20, 0, 1]] } });

T({ id: 'tt87', n: 'Llegada de segunda línea al área', cat: 'tt', tipo: 'Finalización', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-1'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: '4 atacantes v 2 defensores + P', np: 7, esp: [40, 50], ser: '3 x 5 ataques', rec: '1\'', dur: 15,
  obj: 'Que los centrocampistas lleguen desde atrás al área sin ser detectados.',
  desc: 'El delantero fija a los centrales y descarga; el extremo centra raso al punto de penalti, donde llega un centrocampista desde la frontal a toda velocidad.',
  reglas: ['El centrocampista sale cuando el balón llega al extremo.', 'Gol del centrocampista = 2 puntos.', 'Defensores activos.'],
  cons: ['Llegar en el momento del centro, no antes.', 'Atacar el espacio que deja el central.'],
  var: ['+ Un tercer defensor que sigue al centrocampista.', '− Sin defensores.'],
  d: { v: [66, 8, 42, 52], g: [], p: [P(103.5, 34), A(92, 34, '9'), A(80, 34, '8'), A(90, 14, 'EX'), B(96, 31), B(96, 38)], b: [[80.9, 34.5]], a: [['pase', 80, 34, 92, 34, 0, 1], ['pase', 92, 34, 90, 14, 0, 2], ['mov', 80, 34, 92, 32, -2, 3], ['cond', 90, 14, 99, 20, 0, 3], ['pase', 99, 20, 93, 32, 0, 4], ['tiro', 93, 32, 104, 35, 0, 5]] } });

T({ id: 'tt88', n: 'Partido con transición tras gol (reinicio rápido)', cat: 'tt', tipo: 'Transición', ed: 'ICJS', dif: 2, md: ['MD-4', 'MD-3'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: '4v4 + 2P (+4 en espera)', np: 14, esp: [35, 25], ser: '12\' continuos', rec: '—', dur: 14,
  obj: 'Concentración tras gol: el portero repone rápido y el equipo ataca en contra.',
  desc: 'Partido 4v4. Al recibir gol, el portero saca inmediatamente con otro balón y su equipo ataca; el equipo que marcó tiene que defender sin celebrar. Cada 3\' entra el equipo de reserva.',
  reglas: ['Saque del portero en menos de 3".', 'Gol en los 6" siguientes a un gol = 2 puntos.', 'Balones de reposición junto a cada portería.'],
  cons: ['No celebrar: transición defensiva inmediata.', 'El portero busca al jugador más adelantado.'],
  var: ['+ 3v3.', '− Saque en 5".'],
  d: { z: [[35, 21.5, 35, 25]], g: [[35, 34, 'R'], [70, 34, 'L']], p: [P(36.5, 34), P(68.5, 34), A(60, 30), A(62, 38), A(52, 34), A(45, 28), B(56, 34), B(50, 26), B(48, 40), B(42, 34)], b: [[37.5, 35]], a: [['tiro', 60, 30, 69, 33, 0, 1], ['pase', 36.5, 34, 50, 26, 0, 2], ['mov', 60, 30, 54, 28, 0, 2], ['cond', 50, 26, 60, 26, 0, 3]] } });

T({ id: 'tt89', n: 'Juego de posición 3 equipos 4+4 v 4', cat: 'tt', tipo: 'Juego de posición', ed: 'CJS', dif: 3, md: ['MD-4'], int: 4, rpe: '8', carga: 'Tensión', fase: 'pri',
  jug: '4+4 v 4', np: 12, esp: [30, 30], ser: '6 x 2\'', rec: '1\'', dur: 18,
  obj: 'Presión en inferioridad y transición defensa-ataque inmediata.',
  desc: 'Dos equipos mantienen la posesión 8v4: uno ocupa el perímetro y otro el interior. El equipo que pierde el balón pasa a defender. Los del perímetro solo juegan a dos toques y los interiores a uno.',
  reglas: ['Perímetro a dos toques, interiores a un toque.', 'Quien pierde, defiende.', 'Cuenta de pérdidas por equipo.'],
  cons: ['Interiores siempre perfilados.', 'Los 4 que presionan lo hacen en bloque.'],
  var: ['+ Espacio 25 x 25 m.', '− Interiores a dos toques.'],
  d: { z: [[37.5, 19, 30, 30]], p: [A(37.5, 26), A(52.5, 19), A(67.5, 40), A(46, 49), N(47, 30), N(58, 28), N(48, 40), N(58, 39), B(52, 26), B(44, 35), B(54, 34), B(62, 32)], b: [[38.4, 26.4]], a: [['pase', 37.5, 26, 47, 30, 0, 1], ['pase', 47, 30, 58, 39, 0, 2], ['mov', 54, 34, 56, 37, 0, 2], ['pase', 58, 39, 67.5, 40, 0, 3]] } });
