/* PREVENCIÓN Y RECUPERACIÓN */
T({ id: 'p01', n: 'FIFA 11+ (versión de campo)', cat: 'pre', tipo: 'Prevención', ed: 'ICJS', dif: 1, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 2, rpe: '4', carga: 'Activación', fase: 'cal',
  jug: 'Todo el equipo por parejas', np: 20, esp: [30, 20], ser: '3 partes · 20\'', rec: '—', dur: 20,
  obj: 'Reducir lesiones de rodilla, tobillo e isquios con un calentamiento estructurado.',
  desc: 'Parte 1: carreras con movilidad y contactos con el compañero entre dos filas de conos. Parte 2: fuerza, pliometría y equilibrio (planchas, nórdicos, sentadillas a una pierna y saltos). Parte 3: carreras a velocidad con cambios de dirección.',
  reglas: ['Hacerlo al menos dos veces por semana.', 'Progresar de nivel 1 a nivel 3.', 'Técnica correcta en todos los ejercicios.'],
  cons: ['Rodilla alineada con el pie en todos los apoyos.', 'Tronco estable al aterrizar.'],
  var: ['+ Nivel 3 de cada ejercicio.', '− Nivel 1 para jóvenes o al volver de una lesión.'],
  d: { z: [[37.5, 24, 30, 20]], c: [...conos(40, 27, 64, 27, 6), ...conos(40, 41, 64, 41, 6, '#facc15')], p: [A(40, 29), A(40, 39), A(44, 29), A(44, 39)], a: [['mov', 40, 29, 64, 29, 0], ['mov', 40, 39, 64, 39, 0], ['mov', 64, 31, 40, 37, 0]], t: [[52.5, 34, '6 conos · ida ejercicio, vuelta trote', .85]] } });

T({ id: 'p02', n: 'Nórdicos de isquiotibiales', cat: 'pre', tipo: 'Prevención', ed: 'CJS', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '7', carga: 'Tensión', fase: 'vc',
  jug: 'Parejas', np: 20, esp: [20, 10], ser: '2-3 x 5-8 reps', rec: '1\'30"', dur: 10,
  obj: 'Aumentar la fuerza excéntrica de los isquiotibiales para prevenir roturas.',
  desc: 'De rodillas, un compañero sujeta los tobillos. El jugador baja el tronco hacia delante lo más lento posible, frenando con los isquios, y se ayuda con las manos al llegar al suelo para volver a subir.',
  reglas: ['Hacerlo 2 veces por semana, lejos del partido (MD-4/MD-3).', 'Progresión: 2 x 5 → 3 x 8.', 'Evitar en MD-2 y MD-1 por el dolor muscular que provoca.'],
  cons: ['Cadera extendida: cuerpo recto de rodillas a cabeza.', 'Bajada en 3-5".'],
  var: ['+ Pausa isométrica a mitad de recorrido.', '− Rango parcial o con banda de ayuda.'],
  d: { z: [[42.5, 29, 20, 10]], p: [A(45, 33), B(45, 35.5), A(50, 33), B(50, 35.5), A(55, 33), B(55, 35.5), A(60, 33), B(60, 35.5)], a: [['mov', 45, 32, 45, 30, 0]], t: [[52.5, 30.5, 'Bajar lento 3-5"', .8]] } });

T({ id: 'p03', n: 'Copenhagen para aductores', cat: 'pre', tipo: 'Prevención', ed: 'CJS', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '6-7', carga: 'Tensión', fase: 'vc',
  jug: 'Parejas', np: 20, esp: [20, 10], ser: '2-3 x 6-10 reps por lado', rec: '1\'', dur: 10,
  obj: 'Fortalecer los aductores, una de las zonas que más se lesionan en el fútbol.',
  desc: 'Plancha lateral con la pierna de arriba apoyada en el compañero (en la rodilla en el nivel corto o en el tobillo en el nivel largo). Se sube y baja la cadera de forma controlada.',
  reglas: ['Empezar con palanca corta (rodilla).', '2 veces por semana.', 'Progresión semanal de repeticiones.'],
  cons: ['Cuerpo alineado, sin rotar la cadera.', 'Movimiento lento y controlado.'],
  var: ['+ Palanca larga (tobillo).', '− Isométrico de 15-20".'],
  d: { z: [[42.5, 29, 20, 10]], p: [A(46, 33), B(46, 36), A(53, 33), B(53, 36), A(60, 33), B(60, 36)], t: [[52.5, 30.5, 'Plancha lateral + pierna en el compañero', .75]] } });

T({ id: 'p04', n: 'Circuito de core y antirrotación', cat: 'pre', tipo: 'Prevención', ed: 'AICJS', dif: 1, md: ['MD-4', 'MD-3', 'MD-2'], int: 2, rpe: '5', carga: 'Tensión', fase: 'vc',
  jug: 'Todo el grupo', np: 20, esp: [20, 15], ser: '2 vueltas x 5 ejercicios (30" / 15")', rec: '1\' entre vueltas', dur: 10,
  obj: 'Mejorar la estabilidad del tronco para transmitir fuerza y prevenir lesiones lumbares.',
  desc: 'Plancha frontal, plancha lateral (cada lado), dead bug, bird dog y press Pallof con goma. 30" de trabajo y 15" de pausa.',
  reglas: ['Respiración continua, sin bloquear.', 'Calidad postural antes que tiempo.', 'Puede hacerse al final de la sesión.'],
  cons: ['Columna neutra en todos los ejercicios.', 'Abdomen activo como si fueras a recibir un golpe.'],
  var: ['+ 40" o con inestabilidad.', '− 20" de trabajo.'],
  d: { z: [[42.5, 26.5, 20, 15]], p: [A(45, 30), A(50, 30), A(55, 30), A(60, 30), A(45, 38), A(50, 38), A(55, 38), A(60, 38)], t: [[52.5, 34.5, 'Plancha · lateral · dead bug · bird dog · Pallof', .75]] } });

T({ id: 'p05', n: 'Propiocepción de tobillo y rodilla', cat: 'pre', tipo: 'Prevención', ed: 'AICJS', dif: 1, md: ['MD-2', 'MD-1', 'MD-3'], int: 1, rpe: '3', carga: 'Activación', fase: 'cal',
  jug: 'Parejas con balón', np: 16, esp: [20, 15], ser: '3 ejercicios x 2 x 30" por pierna', rec: '15"', dur: 10,
  obj: 'Mejorar el control neuromuscular para prevenir esguinces.',
  desc: 'Apoyo a una pierna con ojos abiertos y cerrados, apoyo monopodal mientras se reciben y devuelven pases del compañero, y pequeños saltos a una pierna con aterrizaje estable.',
  reglas: ['Pie descalzo o con bota, según el material.', 'Progresar a superficies inestables (bosu, cojín).', 'Ambas piernas.'],
  cons: ['Rodilla ligeramente flexionada.', 'Mirada al frente.'],
  var: ['+ Superficie inestable con pase de cabeza.', '− Apoyo con una mano en el compañero.'],
  d: { z: [[42.5, 26.5, 20, 15]], p: [A(46, 30), B(46, 37), A(52.5, 30), B(52.5, 37), A(59, 30), B(59, 37)], b: [[46, 36]], a: [['pase', 46, 37, 46, 30, 1.5], ['pase', 52.5, 37, 52.5, 30, 1.5]] } });

T({ id: 'p06', n: 'Prevención de LCA: aterrizajes y cambios de dirección', cat: 'pre', tipo: 'Prevención', ed: 'ICJS', dif: 2, md: ['MD-4', 'MD-3'], int: 2, rpe: '5', carga: 'Tensión', fase: 'cal',
  jug: 'Grupos de 4', np: 16, esp: [20, 20], ser: '2 series x 4 ejercicios x 5 reps', rec: '30"', dur: 12,
  obj: 'Enseñar patrones de movimiento seguros para proteger la rodilla.',
  desc: 'Salto con caída a dos pies y "congelación", salto lateral a una pierna, frenada en 3 apoyos y cambio de dirección de 45° con buena alineación de cadera, rodilla y pie.',
  reglas: ['Feedback visual o vídeo si es posible.', 'Progresar velocidad solo con buena técnica.', 'Especialmente importante en fútbol femenino.'],
  cons: ['Rodilla por encima del pie, nunca hacia dentro.', 'Tronco sobre la pierna de apoyo.'],
  var: ['+ Con reacción a estímulo.', '− Sin salto, solo frenadas.'],
  d: { z: [[42.5, 24, 20, 20]], c: [[46, 30], [52, 30], [58, 26, '#facc15'], [58, 34, '#facc15'], [46, 40], [52, 40]], p: [A(44, 30), A(44, 40)], a: [['mov', 44.5, 30, 51.5, 30, 0], ['mov', 52, 30, 57.5, 26.5, 0], ['mov', 44.5, 40, 51.5, 40, 0]], t: [[49, 28, 'Frenada + 45°', .75], [49, 38, 'Salto y aterrizaje', .75]] } });

T({ id: 'p07', n: 'Movilidad de cadera y tobillo', cat: 'pre', tipo: 'Movilidad', ed: 'AICJS', dif: 1, md: ['MD+1', 'MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 1, rpe: '2', carga: 'Recuperación', fase: 'cal',
  jug: 'Todo el grupo', np: 20, esp: [20, 15], ser: '1 x 8 ejercicios x 8-10 reps', rec: '—', dur: 8,
  obj: 'Mantener y mejorar el rango de movimiento articular.',
  desc: 'Rutina de movilidad: 90/90 de cadera, rotaciones de cadera en cuadrupedia, movilidad de tobillo contra la pared, "world\'s greatest stretch", sentadilla profunda con apertura y balanceos de pierna.',
  reglas: ['Movimiento lento y controlado.', 'Sin dolor.', 'Ideal al comienzo de la sesión o en MD+1.'],
  cons: ['Respirar en cada posición.', 'Buscar el máximo rango sin compensar.'],
  var: ['+ Añadir carga ligera.', '− Menos repeticiones.'],
  d: { z: [[42.5, 26.5, 20, 15]], p: [A(45, 30), A(50, 30), A(55, 30), A(60, 30), A(45, 38), A(50, 38), A(55, 38), A(60, 38)], t: [[52.5, 34.5, '90/90 · tobillo · WGS · sentadilla', .8]] } });

T({ id: 'p08', n: 'Activación de glúteo con minibandas', cat: 'pre', tipo: 'Prevención', ed: 'CJS', dif: 1, md: ['MD-1', 'MD-2', 'MD-4', 'MD-3'], int: 1, rpe: '3', carga: 'Activación', fase: 'cal',
  jug: 'Todo el grupo', np: 20, esp: [20, 15], ser: '2 x 4 ejercicios x 10-12 reps', rec: '15"', dur: 8,
  obj: 'Activar los glúteos para estabilizar la cadera y la rodilla.',
  desc: 'Con una minibanda encima de las rodillas: puente de glúteo, apertura en tumbado lateral (clamshell), paso lateral (monster walk) y sentadilla con banda.',
  reglas: ['Banda de resistencia adecuada al nivel.', 'Mantener la tensión de la banda todo el ejercicio.', 'Antes del calentamiento con balón.'],
  cons: ['Rodillas hacia fuera contra la banda.', 'Pelvis estable.'],
  var: ['+ Banda más dura.', '− Sin banda.'],
  d: { z: [[42.5, 26.5, 20, 15]], c: [...conos(44, 29, 61, 29, 4), ...conos(44, 39, 61, 39, 4, '#facc15')], p: [A(46, 31), A(51, 31), A(56, 31), A(46, 37), A(51, 37), A(56, 37)], a: [['mov', 46, 37, 50, 37, 0], ['mov', 51, 37, 55, 37, 0]] } });

T({ id: 'p09', n: 'Regenerativo MD+1: trote y movilidad', cat: 'pre', tipo: 'Recuperación', ed: 'ICJS', dif: 1, md: ['MD+1'], int: 1, rpe: '2', carga: 'Recuperación', fase: 'pri',
  jug: 'Titulares', np: 11, esp: [105, 68], ser: '1 x 12-15\' trote + 10\' movilidad', rec: '—', dur: 25,
  obj: 'Favorecer la recuperación de los jugadores que disputaron más de 60 minutos.',
  desc: 'Trote suave alrededor del campo (60-65 % FCmáx) o bicicleta, seguido de movilidad articular y estiramientos suaves. No hay acciones intensas, ni saltos, ni cambios de dirección bruscos.',
  reglas: ['Intensidad muy baja: se debe poder hablar mientras se corre.', 'Solo titulares (más de 60\').', 'Los suplentes hacen el compensatorio.'],
  cons: ['Hidratarse.', 'Revisar molestias con el preparador físico.'],
  var: ['+ Añadir rondo suave.', '− Sustituir el trote por piscina o bicicleta.'],
  d: { v: [-5, -5, 115, 78], c: [[5, 5], [100, 5], [5, 63], [100, 63]], p: [A(30, 5), A(34, 5), A(38, 5), A(100, 40), A(60, 63)], a: [['mov', 40, 5, 95, 5, 0], ['mov', 100, 10, 100, 58, 0], ['mov', 95, 63, 10, 63, 0]], t: [[52.5, 34, 'Trote 60-65 % FCmáx · 12-15\'', 1.1]] } });

T({ id: 'p10', n: 'Rondo regenerativo + estiramientos', cat: 'pre', tipo: 'Recuperación', ed: 'AICJS', dif: 1, md: ['MD+1'], int: 1, rpe: '2-3', carga: 'Recuperación', fase: 'pri',
  jug: '6v2 / 7v2', np: 9, esp: [15, 15], ser: '3 x 3\' + 8\' estiramientos', rec: '1\'', dur: 20,
  obj: 'Recuperar con balón en un ambiente distendido.',
  desc: 'Rondos amplios y lúdicos con defensores que cambian cada minuto, seguidos de estiramientos suaves de los principales grupos musculares.',
  reglas: ['Toques libres.', 'Sin duelos ni carreras intensas.', 'Ambiente relajado.'],
  cons: ['Mover el balón con calma.', 'Estiramientos sin dolor, 20-30" cada uno.'],
  var: ['+ Dos toques.', '− Solo estiramientos.'],
  d: { z: [[45, 26.5, 15, 15]], c: esq(45, 26.5, 15, 15), p: [...ring(52.5, 34, 7.5, 7, 'A'), B(51, 33), B(54, 36)], b: [[52.5, 27.3]] } });

T({ id: 'p11', n: 'Autoliberación con foam roller', cat: 'pre', tipo: 'Recuperación', ed: 'CJS', dif: 1, md: ['MD+1', 'MD-1'], int: 1, rpe: '2', carga: 'Recuperación', fase: 'vc',
  jug: 'Individual', np: 20, esp: [20, 15], ser: '6 zonas x 45-60"', rec: '—', dur: 8,
  obj: 'Reducir la sensación de rigidez muscular.',
  desc: 'Rodillo en gemelos, isquios, cuádriceps, aductores, glúteo y espalda dorsal, rodando lentamente y deteniéndose en los puntos de más tensión.',
  reglas: ['Movimiento lento.', 'Evitar articulaciones y zona lumbar.', 'Combinar con respiración profunda.'],
  cons: ['Presión tolerable, sin dolor fuerte.', 'Unos 45-60" por zona.'],
  var: ['+ Pelota de masaje para zonas pequeñas.', '− Menos zonas.'],
  d: { z: [[42.5, 26.5, 20, 15]], p: [A(45, 30), A(50, 30), A(55, 30), A(60, 30), A(45, 38), A(50, 38), A(55, 38), A(60, 38)], t: [[52.5, 34.5, 'Gemelo · isquio · cuádriceps · aductor · glúteo', .75]] } });

T({ id: 'p12', n: 'Fuerza de tobillo y pie (gemelo y sóleo)', cat: 'pre', tipo: 'Prevención', ed: 'CJS', dif: 1, md: ['MD-4', 'MD-3'], int: 2, rpe: '5', carga: 'Tensión', fase: 'vc',
  jug: 'Todo el grupo', np: 20, esp: [20, 10], ser: '3 x 12-15 reps por ejercicio', rec: '45"', dur: 10,
  obj: 'Fortalecer el complejo gemelo-sóleo y el tendón de Aquiles.',
  desc: 'Elevaciones de talón a una pierna con rodilla extendida (gemelo) y con rodilla flexionada (sóleo), bajando lento en 3". Terminar con saltos de comba o pequeños rebotes.',
  reglas: ['Bajada excéntrica lenta.', 'Usar un escalón o el borde de un banco.', 'Ambas piernas por igual.'],
  cons: ['Subir al máximo de la punta.', 'Sin rebote al bajar.'],
  var: ['+ Con carga (mochila o mancuerna).', '− Dos piernas.'],
  d: { z: [[42.5, 29, 20, 10]], p: [A(45, 34), A(49, 34), A(53, 34), A(57, 34), A(61, 34)], t: [[52.5, 31, 'Elevaciones de talón · bajada 3"', .8]] } });

T({ id: 'p13', n: 'Readaptación: vuelta progresiva al campo', cat: 'pre', tipo: 'Readaptación', ed: 'CJS', dif: 2, md: ['MD-4', 'MD-3', 'MD-2'], int: 2, rpe: '4-6', carga: 'Mixta', fase: 'pri',
  jug: 'Jugador lesionado + preparador', np: 2, esp: [40, 30], ser: '20-30\' progresivos', rec: 'Según la fase', dur: 25,
  obj: 'Reintegrar al jugador lesionado con cargas progresivas antes de volver al grupo.',
  desc: 'Circuito por fases: 1) carrera lineal progresiva, 2) cambios de dirección suaves a 45° y 90°, 3) conducción y pases largos, 4) aceleraciones y sprints al 80-90 %, 5) acciones específicas de su posición.',
  reglas: ['Avanzar de fase solo sin dolor ni molestias.', 'Coordinar con el fisioterapeuta.', 'Registrar el RPE y las molestias de cada sesión.'],
  cons: ['Progresar volumen antes que intensidad.', 'Ojo con la fatiga acumulada.'],
  var: ['+ Pasar a tareas con oposición.', '− Mantener la fase anterior.'],
  d: { z: [[32.5, 19, 40, 30]], c: [[35, 22], [50, 22], [55, 28], [55, 40], [70, 46, '#facc15'], [70, 22, '#facc15']], p: [A(35, 24), E(40, 44)], b: [[60, 34]], a: [['mov', 36, 22, 49.5, 22, 0], ['mov', 50.5, 22.5, 54.5, 27.5, 0], ['cond', 55, 30, 55, 39, 0], ['mov', 56, 40, 69.5, 46, 0]], t: [[42.5, 20.5, '1 Lineal', .75], [58.5, 33, '2-3 COD + balón', .75], [64, 48, '4 Sprint', .75]] } });

T({ id: 'p14', n: 'Exposición a velocidad máxima (protección de isquios)', cat: 'pre', tipo: 'Prevención', ed: 'CJS', dif: 2, md: ['MD-2', 'MD-3'], int: 3, rpe: '6', carga: 'Velocidad', fase: 'pri',
  jug: 'Grupos de 4', np: 16, esp: [50, 20], ser: '4-6 sprints de 30-40 m', rec: '2\'', dur: 12,
  obj: 'Exponer al jugador a velocidades del 90-100 % cada semana para proteger los isquios.',
  desc: 'Sprints progresivos de 30-40 m alcanzando la velocidad máxima en los últimos 10 m. Es especialmente importante para los jugadores que llevan varios días sin hacer sprint (lesionados o suplentes).',
  reglas: ['Al menos una exposición a velocidad máxima por semana.', 'Recuperación completa.', 'No hacerlo con fatiga elevada.'],
  cons: ['Aumentar la velocidad de forma progresiva.', 'Mantener la relajación al correr rápido.'],
  var: ['+ 6 sprints de 40 m.', '− 4 sprints al 85 %.'],
  d: { z: [[30, 26, 50, 16]], c: [...conos(32, 29, 32, 39, 3), ...conos(62, 29, 62, 39, 3, '#facc15'), ...conos(72, 29, 72, 39, 3, '#22c55e')], p: [A(31, 29), A(31, 34), A(31, 39)], a: [['mov', 32, 34, 71.5, 34, 0]], t: [[47, 27.5, 'Progresivo', .8], [67, 27.5, '90-100 %', .8]] } });

T({ id: 'p15', n: 'Vuelta a la calma: estiramientos y respiración', cat: 'pre', tipo: 'Recuperación', ed: 'AICJS', dif: 1, md: ['MD+1', 'MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 1, rpe: '1-2', carga: 'Recuperación', fase: 'vc',
  jug: 'Todo el grupo', np: 20, esp: [20, 15], ser: '1 x 8-10\'', rec: '—', dur: 8,
  obj: 'Bajar las pulsaciones y empezar la recuperación tras la sesión.',
  desc: 'Tres minutos de trote muy suave y caminar, seguidos de estiramientos estáticos de 20-30" (cuádriceps, isquios, aductores, gemelos, glúteo y psoas) y dos minutos de respiración diafragmática tumbados.',
  reglas: ['Sin dolor.', 'Respiración nasal y lenta.', 'Momento para el feedback final de la sesión.'],
  cons: ['Exhalar más largo que inhalar.', 'Cada estiramiento 20-30".'],
  var: ['+ Añadir foam roller.', '− Solo respiración.'],
  d: { z: [[42.5, 26.5, 20, 15]], p: [...ring(52.5, 34, 6, 10, 'A'), E(52.5, 34)] } });

// ---------- AMPLIACIÓN ----------
T({ id: 'p16', n: 'Sentadilla búlgara y peso muerto a una pierna', cat: 'pre', tipo: 'Prevención', ed: 'CJS', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '6-7', carga: 'Tensión', fase: 'vc',
  jug: 'Todo el grupo', np: 20, esp: [20, 10], ser: '3 x 8 reps por pierna de cada ejercicio', rec: '1\'', dur: 12,
  obj: 'Fuerza unilateral para equilibrar piernas y proteger rodilla e isquios.',
  desc: 'Sentadilla búlgara con el pie trasero apoyado en un banco o en la espalda del compañero, y peso muerto a una pierna con bastón o balón en las manos.',
  reglas: ['Movimiento controlado: 3" de bajada.', 'Mismo volumen en ambas piernas.', 'Añadir carga solo con técnica perfecta.'],
  cons: ['Rodilla alineada con el segundo dedo del pie.', 'Cadera nivelada en el peso muerto.'],
  var: ['+ Mancuernas o mochila.', '− Sentadilla con apoyo.'],
  d: { z: [[42.5, 29, 20, 10]], p: [A(45, 33), A(50, 33), A(55, 33), A(60, 33), A(45, 37), A(50, 37), A(55, 37), A(60, 37)], t: [[52.5, 30.5, 'Búlgara · peso muerto unilateral', .75]] } });

T({ id: 'p17', n: 'Isométricos de isquiotibiales', cat: 'pre', tipo: 'Prevención', ed: 'CJS', dif: 1, md: ['MD-2', 'MD-3', 'MD-4'], int: 2, rpe: '4-5', carga: 'Activación', fase: 'vc',
  jug: 'Todo el grupo', np: 20, esp: [20, 10], ser: '3 x 20-30" por pierna', rec: '30"', dur: 8,
  obj: 'Mantener la fuerza de los isquios con poca fatiga (apto cerca del partido).',
  desc: 'Puente a una pierna con el talón apoyado sobre un banco, un balón o un cono alto, manteniendo la cadera arriba. Variante con rodilla casi extendida para trabajar el isquio en posición larga.',
  reglas: ['Sin dolor.', 'Cadera alta y estable.', 'Apto para MD-2 por su baja fatiga.'],
  cons: ['Empujar el talón hacia abajo.', 'Abdomen activo.'],
  var: ['+ 40" o rodilla más extendida.', '− Dos piernas.'],
  d: { z: [[42.5, 29, 20, 10]], p: [A(45, 34), A(49, 34), A(53, 34), A(57, 34), A(61, 34)], b: [[46.5, 34], [50.5, 34], [54.5, 34], [58.5, 34]], t: [[52.5, 31, 'Puente con talón elevado', .8]] } });

T({ id: 'p18', n: 'Aductores con balón (squeeze) y movilidad de pubis', cat: 'pre', tipo: 'Prevención', ed: 'CJS', dif: 1, md: ['MD-2', 'MD-1', 'MD-3'], int: 1, rpe: '3', carga: 'Activación', fase: 'cal',
  jug: 'Todo el grupo', np: 20, esp: [20, 10], ser: '3 x 10" por posición', rec: '20"', dur: 6,
  obj: 'Activar los aductores y prevenir dolor en la zona del pubis.',
  desc: 'Tumbado boca arriba, apretar un balón entre las rodillas con las piernas flexionadas (10" al 80 %), luego con las piernas extendidas y entre los tobillos. Terminar con aperturas de cadera controladas.',
  reglas: ['Presión progresiva, sin dolor.', 'Respirar durante el apretón.', 'Útil como test diario de molestias.'],
  cons: ['Lumbar apoyada en el suelo.', 'Apretar de forma progresiva, no de golpe.'],
  var: ['+ 15" al 100 %.', '− Solo rodillas flexionadas.'],
  d: { z: [[42.5, 29, 20, 10]], p: [A(45, 34), A(50, 34), A(55, 34), A(60, 34)], b: [[46, 34], [51, 34], [56, 34], [61, 34]], t: [[52.5, 31, 'Apretar balón 10"', .8]] } });

T({ id: 'p19', n: 'Movilidad torácica y de hombro', cat: 'pre', tipo: 'Movilidad', ed: 'AICJS', dif: 1, md: ['MD+1', 'MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 1, rpe: '2', carga: 'Recuperación', fase: 'cal',
  jug: 'Todo el grupo', np: 20, esp: [20, 15], ser: '1 x 6 ejercicios x 8 reps', rec: '—', dur: 6,
  obj: 'Mejorar la rotación del tronco y la movilidad del hombro (clave en porteros).',
  desc: 'Rotaciones torácicas en cuadrupedia, "libro abierto" tumbado de lado, ángeles en el suelo, círculos de brazos, gato-camello y rotación con bastón de pie.',
  reglas: ['Movimientos lentos.', 'Sin dolor.', 'Recomendado a diario para porteros.'],
  cons: ['Mover desde la columna dorsal, no la lumbar.', 'Respirar al girar.'],
  var: ['+ Con goma ligera.', '− Menos repeticiones.'],
  d: { z: [[42.5, 26.5, 20, 15]], p: [A(45, 30), A(50, 30), A(55, 30), A(60, 30), A(45, 38), A(50, 38), A(55, 38), A(60, 38)], t: [[52.5, 34.5, 'Rotación · libro abierto · ángeles', .8]] } });

T({ id: 'p20', n: 'Equilibrio dinámico en estrella (Y-balance)', cat: 'pre', tipo: 'Prevención', ed: 'ICJS', dif: 1, md: ['MD-2', 'MD-1', 'MD-3'], int: 1, rpe: '3', carga: 'Activación', fase: 'cal',
  jug: 'Grupos de 3', np: 15, esp: [20, 15], ser: '2 x 3 direcciones x 5 por pierna', rec: '20"', dur: 8,
  obj: 'Control neuromuscular de rodilla y tobillo y detección de asimetrías.',
  desc: 'Apoyado a una pierna en el centro de tres conos (delante, atrás-dentro y atrás-fuera), el jugador alcanza con el otro pie lo más lejos posible en cada dirección sin perder el equilibrio.',
  reglas: ['Volver al centro sin apoyar el pie.', 'Comparar el alcance de ambas piernas.', 'Asimetría > 4 cm: revisar con el preparador.'],
  cons: ['Rodilla de apoyo alineada.', 'Talón apoyado todo el tiempo.'],
  var: ['+ Ojos cerrados.', '− Menor distancia.'],
  d: { z: [[45, 27, 15, 14]], c: [[52.5, 28.5], [48, 39], [57, 39]], p: [A(52.5, 35)], a: [['mov', 52.5, 34, 52.5, 29.5, 0], ['mov', 52, 35.5, 48.5, 38.5, 0], ['mov', 53, 35.5, 56.5, 38.5, 0]] } });

T({ id: 'p21', n: 'Saltos de comba (rigidez de tobillo)', cat: 'pre', tipo: 'Prevención', ed: 'AICJS', dif: 1, md: ['MD-2', 'MD-1', 'MD-4'], int: 2, rpe: '4', carga: 'Activación', fase: 'cal',
  jug: 'Todo el grupo', np: 20, esp: [20, 15], ser: '4 x 30"', rec: '30"', dur: 5,
  obj: 'Mejorar la reactividad del tobillo y del tendón de Aquiles.',
  desc: 'Saltos de comba a pies juntos, alternos y a una pierna, con contactos cortos. Si no hay combas, saltos pequeños y rápidos en el sitio.',
  reglas: ['Contactos cortos sobre el antepié.', 'Saltos bajos.', 'Volumen bajo.'],
  cons: ['Tobillo "duro", como un muelle.', 'Mirada al frente.'],
  var: ['+ A una pierna.', '− Pies juntos.'],
  d: { z: [[42.5, 26.5, 20, 15]], p: [A(45, 30), A(50, 30), A(55, 30), A(60, 30), A(45, 38), A(50, 38), A(55, 38), A(60, 38)], t: [[52.5, 34.5, 'Comba · 30" ON / 30" OFF', .8]] } });

T({ id: 'p22', n: 'Readaptación de tobillo: saltos y cambios de dirección', cat: 'pre', tipo: 'Readaptación', ed: 'CJS', dif: 2, md: ['MD-4', 'MD-3', 'MD-2'], int: 2, rpe: '4-6', carga: 'Mixta', fase: 'pri',
  jug: 'Jugador lesionado + preparador', np: 2, esp: [20, 15], ser: '3 fases x 3-4 series', rec: '1\'', dur: 20,
  obj: 'Volver a correr, saltar y cambiar de dirección tras un esguince de tobillo.',
  desc: 'Fase 1: equilibrio monopodal y saltos bipodales. Fase 2: saltos laterales y unipodales con aterrizaje estable. Fase 3: cambios de dirección a 45° y 90° y luego 180°, primero anticipados y después reactivos.',
  reglas: ['Avanzar de fase solo sin dolor ni inflamación al día siguiente.', 'Coordinar con el fisioterapeuta.', 'Vendaje o tobillera si lo indica.'],
  cons: ['Calidad del aterrizaje antes que velocidad.', 'Comparar con la pierna sana.'],
  var: ['+ Cambios de dirección reactivos.', '− Mantener la fase anterior.'],
  d: { z: [[42.5, 26.5, 20, 15]], h: [[46, 31, 1], [48, 31, 1], [50, 31, 1]], c: [[55, 31], [60, 28, '#facc15'], [60, 35, '#facc15']], p: [A(44, 31), E(50, 39)], a: [['mov', 44.5, 31, 54.5, 31, 0], ['mov', 55, 31, 59.5, 28.5, 0]], t: [[48, 29, 'Saltos', .7], [58, 37, 'COD 45°', .7]] } });

T({ id: 'p23', n: 'Lanzamientos con balón medicinal (core explosivo)', cat: 'pre', tipo: 'Prevención', ed: 'JS', dif: 2, md: ['MD-4', 'MD-3'], int: 3, rpe: '6', carga: 'Tensión', fase: 'vc',
  jug: 'Parejas', np: 16, esp: [20, 15], ser: '3 x 6 lanzamientos por ejercicio', rec: '1\'', dur: 10,
  obj: 'Potencia del tronco y transferencia de fuerza para golpeos y duelos.',
  desc: 'Por parejas con un balón medicinal de 2-4 kg: lanzamiento rotacional lateral contra el compañero, lanzamiento por encima de la cabeza y lanzamiento de pecho desde rodillas.',
  reglas: ['Máxima velocidad en cada lanzamiento.', 'Mismo número a cada lado.', 'Peso adecuado a la edad.'],
  cons: ['El giro empieza en la cadera.', 'Abdomen firme.'],
  var: ['+ Lanzamiento tras desplazamiento.', '− Balón de 1-2 kg.'],
  d: { z: [[42.5, 26.5, 20, 15]], p: [A(45, 30), B(45, 38), A(52.5, 30), B(52.5, 38), A(60, 30), B(60, 38)], b: [[45, 31.5], [52.5, 31.5], [60, 31.5]], a: [['pase', 45, 30, 45, 38, 1.5], ['pase', 52.5, 30, 52.5, 38, 1.5], ['pase', 60, 30, 60, 38, 1.5]] } });

// ---------- AMPLIACIÓN 2 ----------
T({ id: 'p24', n: 'Hip thrust a una pierna', cat: 'pre', tipo: 'Prevención', ed: 'CJS', dif: 1, md: ['MD-4', 'MD-3'], int: 2, rpe: '5', carga: 'Tensión', fase: 'vc',
  jug: 'Todo el grupo', np: 20, esp: [20, 10], ser: '3 x 10-12 por pierna', rec: '45"', dur: 8,
  obj: 'Fortalecer el glúteo para estabilizar la cadera y proteger isquios y rodilla.',
  desc: 'Espalda apoyada en un banco o en el balón, pie de apoyo en el suelo y la otra pierna elevada. Subir la cadera hasta alinear el cuerpo y bajar lento.',
  reglas: ['Pausa de 1" arriba.', 'Pelvis nivelada.', 'Ambas piernas igual.'],
  cons: ['Empujar con el talón.', 'Costillas abajo, sin arquear la espalda.'],
  var: ['+ Con carga en la cadera.', '− A dos piernas.'],
  d: { z: [[42.5, 29, 20, 10]], p: [A(45, 34), A(50, 34), A(55, 34), A(60, 34)], t: [[52.5, 31, 'Hip thrust unilateral', .8]] } });

T({ id: 'p25', n: 'Step-down y control de rodilla', cat: 'pre', tipo: 'Prevención', ed: 'ICJS', dif: 1, md: ['MD-2', 'MD-3', 'MD-4'], int: 2, rpe: '4', carga: 'Activación', fase: 'cal',
  jug: 'Todo el grupo', np: 20, esp: [20, 10], ser: '2 x 10 por pierna', rec: '30"', dur: 6,
  obj: 'Control excéntrico del cuádriceps y alineación de la rodilla.',
  desc: 'De pie sobre un escalón o cajón bajo, bajar lentamente el talón de la otra pierna hasta rozar el suelo y volver a subir, sin que la rodilla se vaya hacia dentro.',
  reglas: ['Bajada en 3".', 'Rodilla por encima del segundo dedo.', 'Ante el espejo o con el compañero corrigiendo.'],
  cons: ['Cadera atrás como al sentarse.', 'Pelvis estable.'],
  var: ['+ Escalón más alto.', '− Apoyo de una mano.'],
  d: { z: [[42.5, 29, 20, 10]], p: [A(46, 34), B(46, 37), A(53, 34), B(53, 37), A(60, 34), B(60, 37)], t: [[52.5, 31, 'Step-down · el compañero corrige', .75]] } });

T({ id: 'p26', n: 'Respiración y relajación post-partido', cat: 'pre', tipo: 'Recuperación', ed: 'AICJS', dif: 1, md: ['MD+1'], int: 1, rpe: '1', carga: 'Recuperación', fase: 'vc',
  jug: 'Todo el grupo', np: 20, esp: [20, 15], ser: '1 x 8-10\'', rec: '—', dur: 10,
  obj: 'Bajar la activación y favorecer la recuperación tras el partido.',
  desc: 'Tumbados, respiración diafragmática 4-6 (4" inspirar, 6" espirar), seguida de relajación progresiva: tensar 5" y soltar cada grupo muscular, de los pies a la cabeza.',
  reglas: ['Ambiente tranquilo.', 'Sin móviles.', 'Terminar con una frase de cierre del entrenador.'],
  cons: ['Espirar más largo que inspirar.', 'Notar la diferencia entre tensión y relajación.'],
  var: ['+ 15 minutos.', '− Solo respiración, 5 minutos.'],
  d: { z: [[42.5, 26.5, 20, 15]], p: [...ring(52.5, 34, 5.5, 9, 'A'), E(52.5, 34)] } });

T({ id: 'p27', n: 'Saltos con giro de 90° y aterrizaje estable', cat: 'pre', tipo: 'Prevención', ed: 'ICJS', dif: 2, md: ['MD-4', 'MD-3'], int: 2, rpe: '5', carga: 'Tensión', fase: 'cal',
  jug: 'Grupos de 4', np: 16, esp: [20, 15], ser: '2 x 6 saltos por lado', rec: '45"', dur: 8,
  obj: 'Prevención de lesión de rodilla: controlar la rotación al aterrizar.',
  desc: 'Salto vertical con giro de 90° en el aire y aterrizaje a dos piernas manteniendo la posición 2". Progresión a aterrizaje a una pierna.',
  reglas: ['Aterrizaje silencioso.', 'Rodillas alineadas con los pies.', 'Mismo número de giros a cada lado.'],
  cons: ['Mirar al frente al aterrizar.', 'Cadera y rodillas flexionadas.'],
  var: ['+ Aterrizaje a una pierna.', '− Sin giro.'],
  d: { z: [[42.5, 26.5, 20, 15]], c: [[46, 30], [52, 30], [58, 30], [46, 38], [52, 38], [58, 38]], p: [A(46, 32), A(52, 32), A(46, 36)], t: [[55, 34.5, '↻ 90°', 1.2]] } });

// ---------- AMPLIACIÓN 3 ----------
T({ id: 'p28', n: 'Puente lateral con abducción de cadera', cat: 'pre', tipo: 'Prevención', ed: 'CJS', dif: 2, md: ['MD-4', 'MD-3', 'MD-2'], int: 2, rpe: '5', carga: 'Tensión', fase: 'vc',
  jug: 'Todo el grupo', np: 20, esp: [20, 10], ser: '2 x 8-10 por lado', rec: '30"', dur: 6,
  obj: 'Glúteo medio y core lateral para estabilizar la pelvis en carrera.',
  desc: 'En plancha lateral sobre el codo, elevar la pierna de arriba sin rotar la cadera y bajar controlado.',
  reglas: ['Cuerpo alineado.', 'Pierna ligeramente por detrás del cuerpo.', 'Ambos lados.'],
  cons: ['No rotar la pelvis hacia arriba.', 'Movimiento lento.'],
  var: ['+ Con minibanda en los tobillos.', '− Rodillas apoyadas.'],
  d: { z: [[42.5, 29, 20, 10]], p: [A(45, 34), A(50, 34), A(55, 34), A(60, 34)], t: [[52.5, 31, 'Plancha lateral + abducción', .8]] } });

T({ id: 'p29', n: 'Isquios en posición larga: peso muerto con goma', cat: 'pre', tipo: 'Prevención', ed: 'CJS', dif: 1, md: ['MD-4', 'MD-3'], int: 2, rpe: '5', carga: 'Tensión', fase: 'vc',
  jug: 'Todo el grupo', np: 20, esp: [20, 10], ser: '3 x 10', rec: '45"', dur: 8,
  obj: 'Fortalecer los isquiotibiales en posición alargada, donde suelen lesionarse.',
  desc: 'Peso muerto rumano con una goma pisada bajo los pies: bajar con la espalda recta hasta notar estiramiento en los isquios y subir apretando glúteos.',
  reglas: ['Rodillas ligeramente flexionadas y fijas.', 'Bajada de 3".', 'Espalda neutra.'],
  cons: ['Cadera hacia atrás, no hacia abajo.', 'Goma tensa todo el recorrido.'],
  var: ['+ A una pierna.', '− Sin goma.'],
  d: { z: [[42.5, 29, 20, 10]], p: [A(45, 34), A(49, 34), A(53, 34), A(57, 34), A(61, 34)], t: [[52.5, 31, 'Peso muerto rumano con goma', .8]] } });

T({ id: 'p30', n: 'Equilibrio con perturbaciones del compañero', cat: 'pre', tipo: 'Prevención', ed: 'ICJS', dif: 1, md: ['MD-2', 'MD-1'], int: 1, rpe: '3', carga: 'Activación', fase: 'cal',
  jug: 'Parejas', np: 16, esp: [20, 15], ser: '3 x 20" por pierna', rec: '15"', dur: 6,
  obj: 'Reacción neuromuscular de tobillo y rodilla ante empujones inesperados.',
  desc: 'Apoyo a una pierna. El compañero da pequeños empujones en hombros y cadera desde distintas direcciones; el jugador mantiene el equilibrio sin apoyar el otro pie.',
  reglas: ['Empujones suaves y aleatorios.', 'Rodilla ligeramente flexionada.', 'Cambio de roles.'],
  cons: ['Abdomen activo.', 'Mirada al frente.'],
  var: ['+ Ojos cerrados o pase de balón a la vez.', '− Apoyo a dos pies.'],
  d: { z: [[42.5, 26.5, 20, 15]], p: [A(46, 31), B(47.5, 29.5), A(53, 31), B(54.5, 29.5), A(60, 31), B(61.5, 29.5), A(46, 38), A(53, 38), A(60, 38)], a: [['mov', 47.5, 29.5, 46.6, 30.4, 0]] } });

T({ id: 'p31', n: 'Rutina de pies y arco plantar', cat: 'pre', tipo: 'Prevención', ed: 'AICJS', dif: 1, md: ['MD-2', 'MD-1', 'MD+1'], int: 1, rpe: '2', carga: 'Activación', fase: 'vc',
  jug: 'Todo el grupo', np: 20, esp: [20, 10], ser: '1 x 6\'', rec: '—', dur: 6,
  obj: 'Fortalecer la musculatura del pie para prevenir fascitis y sobrecargas.',
  desc: 'Descalzos: "pie corto" (acortar el arco sin mover los dedos), recoger una toalla con los dedos, caminar de puntillas y de talones, y equilibrio sobre la punta.',
  reglas: ['Sobre césped o esterilla.', 'Movimientos controlados.', 'Ambos pies.'],
  cons: ['Activar el arco sin encoger los dedos.', 'Postura erguida.'],
  var: ['+ Sobre superficie inestable.', '− Sentado.'],
  d: { z: [[42.5, 29, 20, 10]], p: [A(45, 34), A(50, 34), A(55, 34), A(60, 34)], t: [[52.5, 31, 'Pie corto · toalla · puntillas · talones', .75]] } });

T({ id: 'p32', n: 'Movilidad dinámica post-sesión con balón', cat: 'pre', tipo: 'Movilidad', ed: 'AICJS', dif: 1, md: ['MD+1', 'MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 1, rpe: '2', carga: 'Recuperación', fase: 'vc',
  jug: 'Parejas', np: 16, esp: [20, 15], ser: '1 x 8\'', rec: '—', dur: 8,
  obj: 'Vuelta a la calma activa con movilidad y toques suaves de balón.',
  desc: 'Por parejas a 5 m: pases suaves mientras se realizan movilidades (zancada con giro, rotación de cadera, sentadilla profunda) entre cada recepción.',
  reglas: ['Ritmo lento.', 'Una movilidad distinta cada minuto.', 'Sin carreras.'],
  cons: ['Respiración profunda.', 'Amplitud máxima sin dolor.'],
  var: ['+ Pase con la pierna menos hábil.', '− Sin balón.'],
  d: { z: [[42.5, 26.5, 20, 15]], p: [A(45, 30), B(50, 30), A(55, 30), B(60, 30), A(45, 38), B(50, 38), A(55, 38), B(60, 38)], b: [[46, 30.5], [56, 38.5]], a: [['pase', 45, 30, 50, 30, 1], ['pase', 55, 38, 60, 38, 1]] } });

T({ id: 'p33', n: 'Fuerza de cuello y tronco (juego aéreo)', cat: 'pre', tipo: 'Prevención', ed: 'JS', dif: 1, md: ['MD-4', 'MD-3'], int: 2, rpe: '4', carga: 'Tensión', fase: 'vc',
  jug: 'Parejas', np: 16, esp: [20, 10], ser: '2 x 10" por dirección', rec: '20"', dur: 6,
  obj: 'Proteger el cuello en los duelos aéreos y los golpes de cabeza.',
  desc: 'Isométricos de cuello: el compañero aplica una presión suave con la mano en la frente, nuca y laterales, y el jugador mantiene la cabeza en posición neutra.',
  reglas: ['Presión progresiva y suave.', 'Sin movimiento del cuello.', 'Respiración continua.'],
  cons: ['Barbilla ligeramente recogida.', 'Hombros abajo.'],
  var: ['+ 15" por dirección.', '− Con la propia mano.'],
  d: { z: [[42.5, 29, 20, 10]], p: [A(46, 33), B(46, 35.5), A(52.5, 33), B(52.5, 35.5), A(59, 33), B(59, 35.5)], t: [[52.5, 31, 'Isométricos de cuello por parejas', .8]] } });

T({ id: 'p34', n: 'Recuperación MD+1 en piscina o bicicleta', cat: 'pre', tipo: 'Recuperación', ed: 'CJS', dif: 1, md: ['MD+1'], int: 1, rpe: '2', carga: 'Recuperación', fase: 'pri',
  jug: 'Titulares', np: 11, esp: [20, 10], ser: '1 x 20-25\'', rec: '—', dur: 25,
  obj: 'Recuperar sin impacto tras el partido.',
  desc: 'Bicicleta estática suave o trabajo en piscina (caminar, carrera en agua profunda, movilidad) a baja intensidad, terminando con estiramientos suaves.',
  reglas: ['Frecuencia cardiaca baja (60-65 % FCmáx).', 'Sin impacto.', 'Hidratación.'],
  cons: ['Disfrutar y charlar.', 'Avisar de molestias.'],
  var: ['+ Contraste de agua fría y caliente si hay instalación.', '− Solo 15\'.'],
  d: { z: [[42.5, 29, 20, 10, '#38bdf8', 'Piscina / bici']], p: [A(46, 33), A(50, 35), A(54, 33), A(58, 35)] } });

T({ id: 'p35', n: 'Activación pre-partido (MD)', cat: 'pre', tipo: 'Prevención', ed: 'ICJS', dif: 1, md: ['MD-1'], int: 2, rpe: '4', carga: 'Activación', fase: 'cal',
  jug: 'Todo el equipo', np: 20, esp: [30, 20], ser: '1 x 15\'', rec: '—', dur: 15,
  obj: 'Calentamiento de partido con prevención integrada (también para el MD-1).',
  desc: 'Movilidad (3\'), activación de glúteo y core (3\'), técnica de carrera y cambios de dirección (4\'), rondo (3\') y dos sprints de 15 m (2\').',
  reglas: ['Bloques cortos y seguidos.', 'Terminar 10-15\' antes del inicio.', 'Igual en todos los partidos (rutina).'],
  cons: ['Activar sin fatigar.', 'Concentración progresiva.'],
  var: ['+ Añadir pases largos.', '− Sin sprints en categorías base.'],
  d: { z: [[37.5, 24, 30, 20]], c: [...conos(40, 27, 64, 27, 5), ...conos(40, 41, 64, 41, 5, '#facc15')], p: [A(40, 29), A(40, 39), A(52, 34), A(48, 34), A(56, 34)], b: [[52.9, 34.5]], a: [['mov', 40, 29, 64, 29, 0], ['mov', 40, 39, 64, 39, 0], ['pase', 48, 34, 56, 34, 1.5]] } });

T({ id: 'p36', n: 'Prevención de pubalgia: circuito de aductores y abdominales', cat: 'pre', tipo: 'Prevención', ed: 'JS', dif: 2, md: ['MD-4', 'MD-3'], int: 2, rpe: '5', carga: 'Tensión', fase: 'vc',
  jug: 'Todo el grupo', np: 20, esp: [20, 15], ser: '2 vueltas x 4 ejercicios (30")', rec: '15"', dur: 8,
  obj: 'Equilibrar la fuerza entre aductores y abdominales.',
  desc: 'Copenhague corta (rodilla), apretón de balón con elevación de cadera, dead bug con balón y plancha con alcance alterno.',
  reglas: ['Sin dolor en el pubis.', '30" por ejercicio.', 'Calidad del movimiento.'],
  cons: ['Lumbar apoyada en el dead bug.', 'Cadera estable.'],
  var: ['+ Copenhague larga (tobillo).', '− 20" por ejercicio.'],
  d: { z: [[42.5, 26.5, 20, 15]], p: [A(45, 30), B(45, 32.5), A(52, 30), A(59, 30), A(45, 38), A(52, 38), A(59, 38)], b: [[52, 31], [52, 39]], t: [[52.5, 34.5, 'Copenhague · apretón · dead bug · plancha', .75]] } });

T({ id: 'p37', n: 'Readaptación de isquios: fases de vuelta al sprint', cat: 'pre', tipo: 'Readaptación', ed: 'CJS', dif: 3, md: ['MD-4', 'MD-3', 'MD-2'], int: 3, rpe: '5-8', carga: 'Mixta', fase: 'pri',
  jug: 'Jugador lesionado + preparador', np: 2, esp: [60, 20], ser: 'Según fase', rec: 'Completa', dur: 25,
  obj: 'Volver a correr a velocidad máxima tras una lesión de isquiotibiales.',
  desc: 'Fase 1: carreras al 60-70 % de 60 m. Fase 2: progresivos al 80 %. Fase 3: aceleraciones y desaceleraciones. Fase 4: sprints al 90-100 % y acciones de partido (desmarque de ruptura, carrera hacia atrás y giro).',
  reglas: ['Avanzar solo sin dolor ni molestia al día siguiente.', 'Fuerza excéntrica (nórdicos) en paralelo.', 'Coordinación con el fisioterapeuta.'],
  cons: ['La velocidad máxima es la última fase.', 'Registrar sensaciones de cada sesión.'],
  var: ['+ Con balón y oposición.', '− Mantener la fase anterior.'],
  d: { z: [[22.5, 26, 60, 16]], c: [...conos(24, 29, 24, 39, 3), ...conos(44, 29, 44, 39, 3, '#22c55e'), ...conos(64, 29, 64, 39, 3, '#facc15'), ...conos(81, 29, 81, 39, 3, '#ef4444')], p: [A(23, 34), E(50, 41)], a: [['mov', 24, 34, 80.5, 34, 0]], t: [[34, 27.5, '60-70 %', .8], [54, 27.5, '80 %', .8], [72.5, 27.5, '90-100 %', .8]] } });

// ---------- AMPLIACIÓN (p38 – p45) ----------
T({ id: 'p38', n: 'Calentamiento RAMP con balón', cat: 'pre', tipo: 'Activación preventiva', ed: 'AICJS', dif: 1, md: ['MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 2, rpe: '3-4', carga: 'Activación', fase: 'cal',
  jug: 'Parejas', np: 2, esp: [20, 15], ser: '1 x 14\'', rec: '—', dur: 14,
  obj: 'Calentar con las cuatro fases RAMP: elevar temperatura, activar, movilizar y potenciar, siempre con balón.',
  desc: 'Elevar: pases por parejas en movimiento (3\'). Activar: puente de glúteo y plancha con pase de balón (3\'). Movilizar: zancadas con giro y pase, apertura de cadera (4\'). Potenciar: saltos y salida de 10 m con control (4\').',
  reglas: ['Cada bloque con balón.', 'Intensidad que sube poco a poco.', 'Terminar con dos sprints máximos.'],
  cons: ['Calidad en los movimientos.', 'Respirar y soltar.', 'Al final, piernas listas para esprintar.'],
  var: ['+ Potenciar con duelos 1v1.', '− Sin saltos (MD+1).'],
  d: { c: [...conos(40, 28, 60, 28, 5), ...conos(40, 40, 60, 40, 5, '#facc15')], p: [A(40, 31), A(40, 37), A(46, 31), A(46, 37)], b: [[40.8, 31.6]], a: [['pase', 40, 31, 46, 37, 0, 1], ['mov', 40, 37, 52, 37, 0, 2]], t: [[50, 26, 'Elevar · Activar · Movilizar · Potenciar', .8]] } });

T({ id: 'p39', n: 'Isquiotibiales con fitball (curl de piernas)', cat: 'pre', tipo: 'Fuerza preventiva', ed: 'CJS', dif: 2, md: ['MD-4', 'MD-3', 'MD+2'], int: 2, rpe: '5', carga: 'Tensión', fase: 'pri',
  jug: 'Individual', np: 1, esp: [3, 3], ser: '3 x 8-10', rec: '1\'', dur: 10,
  obj: 'Fortalecer isquiotibiales con control de cadera, complemento a los nórdicos.',
  desc: 'Tumbado boca arriba con los talones sobre un fitball. Elevar la cadera y flexionar las rodillas acercando el balón, manteniendo la cadera alta. Progresión a una pierna.',
  reglas: ['La cadera no baja durante el movimiento.', 'Bajada lenta (3 segundos).', 'Progresar a una pierna cuando se hagan 3 x 10 limpias.'],
  cons: ['Aprieta glúteos.', 'Controla la vuelta.', 'Respira.'],
  var: ['+ A una pierna.', '− Solo puente de glúteo sobre el balón.'],
  d: { p: [A(50, 34), A(56, 34), A(62, 34)], c: [[52, 34, '#f97316'], [58, 34, '#f97316'], [64, 34, '#f97316']], t: [[56, 30, 'Curl con fitball', .8]] } });

T({ id: 'p40', n: 'Movilidad de tobillo en carga (dorsiflexión)', cat: 'pre', tipo: 'Movilidad', ed: 'AICJS', dif: 1, md: ['MD+1', 'MD+2', 'MD-4', 'MD-3', 'MD-2', 'MD-1'], int: 1, rpe: '2', carga: 'Recuperación', fase: 'cal',
  jug: 'Individual', np: 1, esp: [5, 5], ser: '2 x 10 por pierna', rec: '—', dur: 6,
  obj: 'Mejorar la dorsiflexión de tobillo, relacionada con lesiones de tobillo, rodilla y pubis.',
  desc: 'De pie frente a una pared con un pie adelantado. Llevar la rodilla hacia la pared sin levantar el talón (test de la rodilla a la pared). Después, el mismo movimiento con una goma tirando del tobillo hacia atrás.',
  reglas: ['El talón siempre apoyado.', 'La rodilla va en la línea del segundo dedo.', 'Anotar la distancia: debe mejorar.'],
  cons: ['Movimiento lento y controlado.', 'Busca la tensión, no el dolor.', 'Igual en las dos piernas.'],
  var: ['+ Con carga (mancuerna en la rodilla).', '− Sin goma.'],
  d: { p: [A(48, 34), A(54, 34), A(60, 34)], l: [[46, 30, 46, 38], [52, 30, 52, 38], [58, 30, 58, 38]], t: [[53, 28, 'Rodilla a la pared', .8]] } });

T({ id: 'p41', n: 'Prevención para porteros: hombros, muñecas y dedos', cat: 'pre', tipo: 'Fuerza preventiva', ed: 'ICJS', dif: 1, md: ['MD-4', 'MD-3', 'MD-2'], int: 1, rpe: '3', carga: 'Activación', fase: 'cal',
  jug: 'Porteros', np: 2, esp: [5, 5], ser: '2 x 10 por ejercicio', rec: '30"', dur: 10,
  obj: 'Proteger hombro, muñeca y dedos del portero antes del trabajo de caídas y blocajes.',
  desc: 'Rotaciones externas con goma, Y-T-W boca abajo, flexoextensión de muñeca con goma y apretar una pelota de tenis. Termina con blocajes suaves a dos manos.',
  reglas: ['Movimientos lentos.', 'Sin dolor.', 'Siempre antes de las caídas.'],
  cons: ['Hombros hacia atrás y abajo.', 'Muñecas firmes al blocar.', 'Dedos activos.'],
  var: ['+ Con mancuernas ligeras.', '− Sin goma.'],
  d: { g: [[0, 34, 'R']], p: [P(4, 34), P(9, 34)], b: [[10, 34.6]], t: [[6.5, 30, 'Hombro · muñeca · dedos', .8]] } });

T({ id: 'p42', n: 'Excéntricos de gemelo y Aquiles en escalón', cat: 'pre', tipo: 'Fuerza preventiva', ed: 'CJS', dif: 2, md: ['MD-4', 'MD-3', 'MD+2'], int: 2, rpe: '4-5', carga: 'Tensión', fase: 'pri',
  jug: 'Individual', np: 1, esp: [3, 3], ser: '3 x 12 por pierna', rec: '45"', dur: 10,
  obj: 'Fortalecer el tendón de Aquiles y el sóleo, sobre todo en jugadores con molestias o muchos minutos.',
  desc: 'De pie en un escalón con la punta de los pies. Subir con las dos piernas y bajar lentamente con una sola (4 segundos). Hacerlo con la rodilla estirada (gemelo) y flexionada (sóleo).',
  reglas: ['Bajada de 4 segundos.', 'Subida con las dos piernas.', 'Rodilla estirada y flexionada.'],
  cons: ['Controla la bajada hasta el final.', 'Sin rebotes.', 'Molestia leve aceptable; dolor no.'],
  var: ['+ Con mochila o mancuerna.', '− Bajada con las dos piernas.'],
  d: { p: [A(50, 34), A(56, 34)], l: [[48, 36, 58, 36]], t: [[53, 30, 'Bajada lenta a una pierna', .8]] } });

T({ id: 'p43', n: 'Control lumbopélvico: dead bug y bird dog', cat: 'pre', tipo: 'Core', ed: 'AICJS', dif: 1, md: ['MD+2', 'MD-4', 'MD-3', 'MD-2'], int: 1, rpe: '3', carga: 'Activación', fase: 'cal',
  jug: 'Individual', np: 1, esp: [3, 3], ser: '2 x 10 por lado', rec: '30"', dur: 8,
  obj: 'Controlar la zona lumbar y la pelvis mientras se mueven brazos y piernas: base para correr y golpear sin lesiones.',
  desc: 'Dead bug: boca arriba, extender brazo y pierna contrarios sin despegar la zona lumbar. Bird dog: a cuatro patas, extender brazo y pierna contrarios manteniendo la espalda recta.',
  reglas: ['Zona lumbar pegada al suelo en el dead bug.', 'Sin girar la cadera en el bird dog.', 'Movimiento lento.'],
  cons: ['Respira y suelta el aire al extender.', 'Mueve solo lo que toca.', 'Calidad antes que repeticiones.'],
  var: ['+ Con goma o balón entre manos y rodillas.', '− Solo piernas.'],
  d: { p: [A(48, 32), A(54, 32), A(48, 38), A(54, 38)], t: [[51, 28, 'Dead bug · Bird dog', .8]] } });

T({ id: 'p44', n: 'Pliometría de bajo impacto para readaptación', cat: 'pre', tipo: 'Readaptación', ed: 'CJS', dif: 1, md: ['MD-4', 'MD-3', 'MD+2'], int: 2, rpe: '4', carga: 'Tensión', fase: 'pri',
  jug: 'Individual', np: 1, esp: [10, 5], ser: '3 x 10 contactos por ejercicio', rec: '1\'', dur: 10,
  obj: 'Reintroducir los saltos de forma progresiva tras una lesión: de dos piernas a una, de poco a mucho impacto.',
  desc: 'Saltos de comba suaves, saltos laterales sobre una línea, saltos adelante y atrás, y finalmente saltos a una pierna en el sitio. Se avanza solo si no hay dolor al día siguiente.',
  reglas: ['Progresión: dos piernas → una pierna.', 'Aterrizaje silencioso.', 'Sin dolor al día siguiente para avanzar.'],
  cons: ['Rodilla alineada.', 'Contacto corto con el suelo.', 'Para si notas molestia.'],
  var: ['+ Saltos a una pierna con giro.', '− Solo saltos a dos piernas.'],
  d: { l: [[46, 34, 58, 34]], p: [A(48, 32), A(52, 36), A(56, 32)], a: [['mov', 48, 32, 50, 35, 1, 1], ['mov', 52, 36, 54, 33, -1, 1]] } });

T({ id: 'p45', n: 'Rutina de 10 minutos en casa tras el partido', cat: 'pre', tipo: 'Recuperación', ed: 'ICJS', dif: 1, md: ['MD', 'MD+1'], int: 1, rpe: '1-2', carga: 'Recuperación', fase: 'vc',
  jug: 'Individual', np: 1, esp: [3, 3], ser: '1 x 10\'', rec: '—', dur: 10,
  obj: 'Facilitar la recuperación tras el partido: movilidad suave, respiración y elevación de piernas.',
  desc: 'Movilidad de cadera y columna (3\'), foam roller suave en gemelos, cuádriceps e isquios (4\'), piernas elevadas contra la pared con respiración lenta (3\'). Beber y comer bien después.',
  reglas: ['Sin dolor.', 'Ritmo muy suave.', 'Mejor la misma noche o la mañana siguiente.'],
  cons: ['Respira en 4 tiempos: inspira 4, suelta 6.', 'Hidrátate.', 'Duerme bien.'],
  var: ['+ 15\' con estiramientos suaves.', '− Solo piernas en alto.'],
  d: { p: [A(50, 34)], t: [[50, 30, 'Movilidad · roller · piernas en alto', .8]] } });
