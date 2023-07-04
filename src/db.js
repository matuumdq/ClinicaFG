export const doctors = [
	{
		id: 301,
		nombre: "Franco Gomez",
		caracteristicas: "Medicina Estetica",
		frase: "Mi objetivo es brindar resultados excepcionales mientras me aseguro de que mis pacientes se sientan cómodos y confiados durante todo el proceso",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684153270/franco_cbmhve.png",
	},
	{
		id: 302,
		nombre: "Alberto",
		caracteristicas: "Peeling",
		frase: "Mi maestría en el peeling facial me permite personalizar cada tratamiento para lograr una piel saludable, renovada y radiante según las necesidades y objetivos de cada paciente",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684167391/doc_myich9.jpg",
	},
	{
		id: 303,
		nombre: "Evelin",
		caracteristicas: "Capilar",
		frase: "Brindo soluciones efectivas y personalizadas para cada paciente, asegurando resultados duraderos y satisfactorios en problemas capilares",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684093270/doct3_geudgd.jpg",
	},
];

export const personal = [
	{
		id: 200,
		nombre: "Franco Gomez",
		especialidad: "Medicina Estetica",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684153270/franco_cbmhve.png",
	},
	{
		id: 201,
		nombre: "Morena",
		especialidad: "Dermatologo",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684093270/doct5_cv63cb.jpg",
	},
	{
		id: 202,
		nombre: "Evelin",
		especialidad: "Hifu",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684093270/doct3_geudgd.jpg",
	},
	{
		id: 203,
		nombre: "Amelia",
		especialidad: "Endopeel",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684093270/doct2_ypkqmw.jpg",
	},
	{
		id: 204,
		nombre: "Juana",
		especialidad: "Hilos",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684093116/doct_jgxyim.jpg",
	},
	{
		id: 205,
		nombre: "Lucia",
		especialidad: "Peeling",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684093270/doct4_me0nxx.jpg",
	},
	// {
	//   id: 206,
	//   nombre: "Matias",
	//   especialidad: "Implante Capilar",
	//   img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1683215737/doc_o625ww.png",
	// }
];

export const tratamientos = [
	{
		id: 0,
		name: "Diagnostico Cutaneo",
		explanation:
			"Con este examen, nuestros expertos pueden evaluar la salud de la piel y detectar cualquier problema, desde manchas solares y arrugas hasta acné y otras afecciones dermatológicas. ",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684155237/cutaneo_bzfghg.png",
		price: 250,
	},
	{
		id: 1,
		name: "Dermaplaning",
		explanation:
			" Este tratamiento es ideal para aquellos que buscan mejorar la textura y el tono de la piel, reducir la apariencia de las arrugas finas y los poros dilatados y lograr un brillo saludable. ",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684155236/dermaplaning_cvkwjl.png",
		price: 500,
	},
	{
		id: 2,
		name: "Hyaluron Pen",
		explanation:
			"Este tratamiento es ideal para aquellos que desean mejorar la apariencia de sus labios, líneas finas y arrugas sin los riesgos y tiempos de recuperación asociados con las inyecciones tradicionales. ",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684155236/Hialuron_fwypim.png",
		price: 700,
	},
	{
		id: 3,
		name: "Body Reduction",
		explanation:
			"Utilizamos las últimas tecnologías y equipos en el mercado, así como técnicas manuales como masajes y drenaje linfático para ayudar a nuestros pacientes a lograr sus objetivos de pérdida de peso y moldeado corporal.",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684155236/bodyred_lt8ygw.png",
		price: 900,
	},
	{
		id: 4,
		name: "Implante Capilar",
		explanation:
			"Recupera la confianza y el abundante cabello con nuestro revolucionario Implante Capilar. Disfruta de una melena natural, densa y radiante. ¡Vuelve a lucir orgulloso tu cabellera!",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684154113/micro_h3elyc.png",
		price: 300,
	},
	{
		id: 5,
		name: "Hifu",
		explanation:
			"¡Eleva tu belleza a nuevas alturas! Experimenta un lifting facial sin cirugía, tensando y rejuveneciendo tu piel de forma increíble. Deslumbra con una apariencia fresca y radiante!",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684155236/hifu_yjyjsf.png",
		price: 1000,
	},
];

export const cursos = [
	{
		id: 100,
		name: "Máster en Peeling",
		explanation:
			"¡Eleva tus habilidades en rejuvenecimiento facial! Aprende las técnicas avanzadas de peeling químico para lograr una piel radiante y rejuvenecida.",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684153270/peptonas_yqgae7.png",
		paralaximg:
			"https://images.squarespace-cdn.com/content/v1/5f68e31d42e3161ee32eb5df/1618512229238-UHOGCUIFLQGXPWMJT1V3/Esthetician4.jpg",
		price: 300,
		sinc: "sinc",
		modules: [
			{
				id: "1",
				name: "introduccion",
				modules:
					"Presentación y generalidades. Anatomía y fisiología de la piel. Sistema tegumentario. Manto hidrolipídico. Biotipos cutáneos y fototipos. Envejecimiento cutáneo. Lesiones elementales",
			},
			{
				id: "2",
				name: "2",
				modules:
					"Proceso de cicatrización. Recepción del paciente. Semiología. Historía clínica adaptada. Definición y clasificación de peeling. Indicaciones. Indicaciones pre peeling. Principios de bioseguridad. Preparación de la piel",
			},
			{
				id: "3",
				name: "3",
				modules:
					"PEELING NATURAL: Impacto del sol sobre la piel y su descamación. PEELING BIOLÓGICO: Peeling enzimatico. Ácido retinoico. PEELING MECÁNICO: Scrub. Microdermoabrasión. Punta de diamantes. Espátula ultrasónica. Dermaplaning. PEELING FÍSICO: Criopeel. Laser co2 fraccionado. Resurfacing",
			},
			{
				id: "4",
				name: "PEELING QUÍMICO",
				modules:
					"Presentaciones. Ácidos. Concentraciones y pH. Clasificación de ácidos. Alfahidroxiacidos. Betahidroxiácidos. Polihidroxiácidos. Mandélico. Glicólico. Salicílico. Retinóico. Tranexámico. Fenol. TCA. Peelings químicos combinados. Factores que influyen en la profundidad",
			},
			{
				id: "5",
				name: "PATOLOGÍAS DERMATOLÓGICAS Y PROTOCOLOS CON PEELING.",
				modules:
					"Proceso de melanogénesis. Luz de Wood. Hiperpigmentaciones. Melasma y cloasma. Acné. Secuelas de Acné. Pieles sensibles y rosácea. Envejecimiento y fotoenvejecimiento. Estrías. Cicatrices. Combinaciones con otros tratamientos. Indicaciones post peeling. Apoyo domiciliario. Complicaciones y su resolución. Caso clínico. Conclusiones",
			},
			{
				id: "6",
				name: "Practica",
				modules:
					"Peeling láser co2 facial. Peeling TCA facial. Peeling enzimático, mecánico y químico facial. Peeling mecánico y químico corporal",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia de los distintos tratamientos de Peeling. Conocer la mesa de trabajo y los materiales necesarios para realizar el tratamiento. Analizar distintos casos en donde se deba realizar peeling y conocer su justificación médica. Generación de protocolos combinados con peeling. Conocer el manejo de complicaciones. Consentimiento informado",
		includes:
			"Manual científico de estudio digital. Coffee break. Kit de bioseguridad para la práctica (camisolin, cofia, guantes). Kit de estudio (carpera, hojas, lapicera). Diploma/certificado digital. Apoyo docente por tiempo indefinido. Grabación de todas las clases",
		modality: [
			{
				name: "teoria",
				description:
					"8 al 12 de Mayo, de 13 a 15hs. Modalidad online por Zoom.",
			},
			{
				name: "practica",
				description:
					"Sábado 13 de Mayo, de 15hs a 19hs. Modalidad presencial u online.",
			},
		],
	},
	{
		id: 102,
		name: "MÁSTER EN HILOS COSMETOLÓGICOS",
		explanation:
			"¡Sumérgete en el fascinante mundo de los hilos cosméticos! Amplía tus conocimientos y habilidades en este innovador campo para ofrecer resultados sorprendentes en rejuvenecimiento facial y corporal.",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684153270/peptonas_yqgae7.png",
		paralaximg:
			"https://images.squarespace-cdn.com/content/v1/5f68e31d42e3161ee32eb5df/1618512229238-UHOGCUIFLQGXPWMJT1V3/Esthetician4.jpg",
		price: 20000,
		priceext: 200,
		sinc: "sinc",
		modules: [
			{
				id: "1",
				name: "1",
				modules:
					"Presentación y generalidades. Anatomía de superficie facial. Sistema Tegumentario. Envejecimiento cutáneo. Escala Glogau. Análisis facial. Planimetría facial. Estética regenerativa. Bioestimulación. Lesiones elementales cutáneas.",
			},
			{
				id: "2",
				name: "2",
				modules:
					"Análisis cutáneo. Fototipos cutáneos. Biotipos cutáneos. Generación de historia clínica. Hilos tópicos. Definición y Clasificación. Farmacología aplicada, conocimiento de los principales activos. Péptidos en estética. Mecanismo de acción. Marcas de hilos tópicos. Mesa de trabajo. Dermapen. Electroporación. Fotobiomodulación.",
			},
			{
				id: "3",
				name: "3",
				modules:
					"Protocolo facial. Marcación facial. Nano botox. Hilos nube. Protocolo corporal. Marcación corporal, será más orientado a la ptosis glútea. Técnica. Dispositivos utilizados para la técnica. Procedimientos no invasivos realizados con la técnica. Procedimiento mínimamente invasivo realizado con la técnica. Complemento con otras aparatologías para el uso facial y corporal, antes y después de la técnica, para el mejor resultado. Contraindicaciones. Complicaciones y su resolución",
			},
			{
				id: "4",
				name: "Practica",
				modules:
					"Hilos liquidos y solidos faciales con dermapen y fotobiomodulacion. Hilos liquidos y solidos faciales con dermapen y electroporador. Hilos liquidos corporales con microdermoabrasion y electroporador.",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia de los distintos tratamientos con hilos cosmetologicos. Conocer la mesa de trabajo y los materiales necesarios para realizar el tratamiento. Analizar distintos casos en donde se deba realizar hilos cosmetologicos y conocer su justificacion medica. Generacion de protocolos combinados con hilos cosmetologicos. Conocer el manejo de complicaciones. Consentimiento informado",
		includes:
			"Grabación de las 3 clases teóricas y de la clase práctica. Acceso ilimitado a las grabaciones. Coffee break. Kit de bioseguridad para la práctica (camisolin, cofia, guantes). Kit de estudio (carpera, hojas, lapicera). Manual científico de estudio digital. Diploma digital. Asistencia y asesoría post-curso a través de WhatsApp",
		modality: [
			{
				name: "teoria",
				description:
					"14, 15 y 16 de Junio, de 13 a 15hs. Modalidad online por Zoom.",
			},
			{
				name: "practica",
				description:
					" 17 de Junio de 14hs a 18hs. Modalidad presencial u online.",
			},
		],
	},
	{
		id: 103,
		name: "TÉCNICA Y OPERACIÓN DE VELA",
		explanation: "Dirigido a todos los profesionales de la estética",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684153270/peptonas_yqgae7.png",
		paralaximg:
			"https://images.squarespace-cdn.com/content/v1/5f68e31d42e3161ee32eb5df/1618512229238-UHOGCUIFLQGXPWMJT1V3/Esthetician4.jpg",
		price: 20000,
		priceext: 200,
		sinc: "asinc",
		modules: [
			{
				id: "1",
				name: "MÓDULO 1",
				modules:
					"Cuerpo humano. Planimetría anatómica. Célula. Tejidos. Sistema tegumentario. Tejido graso. Metabolización grasa. Sistema linfático. ",
			},
			{
				id: "2",
				name: "MÓDULO 2",
				modules:
					"Tecnologías del Vela. Radiofrecuencia. Vacumterapia. Láser de Diodo. Rodillos masajeadores. Repercusión a nivel fisiológico y anatómico. Zonas a tratar. Tiempo de la sesión. Modo de aplicación y distintas configuraciones. Indicaciones. Contraindicaciones. ",
			},
			{
				id: "3",
				name: "MÓDULO 3",
				modules: "Marcas. Adiposidad localizada. Flacidez. Celulitis. ",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia de fundamentos en el manejo de vela. Conocer los materiales necesarios para realizar los tratamientos. Analizar tratamientos, y conocer su justificación científica. Generación de protocolos combinados. Conocer el manejo de complicaciones",
		includes:
			"Grabación de las 3 clases teóricas y de la clase práctica. Acceso ilimitado a las grabaciones. Manual científico de estudio digital. Diploma digital. Asistencia y asesoría post-curso a través de WhatsApp",
		modality: [
			{
				name: "asincronico",
				description: "Enviamos Informacion detallada al email",
			},
		],
	},
	{
		id: 104,
		name: "SCULPTRA",
		explanation: "Dirigido a todos los profesionales de la estética",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684153270/peptonas_yqgae7.png",
		paralaximg:
			"https://images.squarespace-cdn.com/content/v1/5f68e31d42e3161ee32eb5df/1618512229238-UHOGCUIFLQGXPWMJT1V3/Esthetician4.jpg",
		price: 50000,
		priceext: 200,
		sinc: "asinc",
		modules: [
			{
				id: "1",
				name: "Temario",
				modules:
					"Factores del envejecimiento - principales cambios morfológicos. Historia, legislación y conceptos. Ácido Poli-L-Láctico - indicaciones y mecanismo de acción. Efectos inmediatos, recomendaciones, contraindicaciones, cuidados y diluciones / aplicaciones antes y después de la aplicación. Reacciones posteriores a la aplicación, complicaciones, anatomía facial, complicaciones y complicaciones.",
			},
			{
				id: "2",
				name: "Contenido práctico",
				modules:
					"• Dilución de Sculptra - paso 1. • Dilución de Sculptra - paso 2. • Cara - marcado y aplicación. • Cuello - marcado y aplicación. • Aplicaciones de la celulitis - técnica de la aguja (aplicación puntual). • Aplicaciones en Glúteos - técnica de la aguja. • Aplicaciones en Glúteos - técnica Con cánula. • Aplicaciones de brazo (flacidez) - técnica de aplicación con agujas. • Dilución para aplicación corporal. • Bioestimuladores para aplicación en la región glútea (con cánula) - parte 1. • Bioestimuladores para aplicación en la región glútea (con cánula) - parte 2. • Bioestimuladores para la celulitis. • Bioestimuladores para aplicación en la región glútea (con aguja). • Bioestimuladores para aplicación en la región del brazo.",
			},
		],
		objetives: "completar ",
		includes:
			"Grabación de las 3 clases. Acceso ilimitado a las grabaciones. Diploma digital. Acceso a grupo de WhatsApp",
		modality: [
			{
				name: "asincronico",
				description: "Enviamos Informacion detallada al email",
			},
		],
	},
	{
		id: 105,
		name: "MÁSTER EN PLASMA RICO EN PLAQUETAS",
		explanation: "Dirigido a todos los profesionales de la estética",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684153270/peptonas_yqgae7.png",
		paralaximg:
			"https://images.squarespace-cdn.com/content/v1/5f68e31d42e3161ee32eb5df/1618512229238-UHOGCUIFLQGXPWMJT1V3/Esthetician4.jpg",
		price: "COMPLETAR",
		priceext: "COMPLETAR",
		sinc: "asinc",
		modules: [
			{
				id: "1",
				name: "MÓDULO 1",
				modules:
					"Introducción. Generalidades. Medicina regenerativa. Biorevitalización. Bioplastía. Sistema Tegumentario. Biotipos y Fototipos. Envejecimiento cutáneo. Clasificación de Glogau. Lesiones elementales cutáneas",
			},
			{
				id: "2",
				name: "MÓDULO 2",
				modules:
					"Fisiología sanguínea. Plasma. Suero. Parámetros hematológicos normales. Plaquetas. Funciones. Hemostasia. Regeneración tisular. Factores de Crecimiento. Mecanismo de Acción. Proceso de cicatrización. Indicaciones. Contraindicaciones. Absolutas y relativas. Indicaciones pre procedimiento. Mesa de trabajo. Principios de bioseguridad. Preparación del paciente",
			},
			{
				id: "3",
				name: "PREPARACIÓN PLASMA",
				modules:
					"Obtención de plasma sanguíneo. Extracción. Centrifugación. Activación de plaquetas. Preparación plasma gel. Bioplastia con filler PRP. Ley nacional de sangre. Artículo 58 y 59. Disposición de ANMAT sobre el plasma autólogo rico en plaquetas. Ozonización de PRP",
			},
			{
				id: "4",
				name: "PROTOCOLOS CAPILAR Y FACIAL",
				modules:
					"PRP CAPILAR: Tricología. Alopecia. Mesoterapia. Dermapen. Ozonoterapia. Fotobiomodulación. PRP FACIAL: Mesoterapia. Dermapen. Microneedling plasma. Vampire facelift. Máscaras de plasma pobre en plaquetas. Fotobiomodulación. Skinbooster. Cicatrices. Vitiligo",
			},
			{
				id: "5",
				name: "PROTOCOLOS CORPORAL Y BIOPLASTIA CON RELLENO AUTÓLOGO",
				modules:
					"Bioplastia facial con plasma gel. PRP CORPORAL: Cicatrices. Estrías. Celulitis. Vitiligo. Subcisión con plasma en poceado celulítico. Complemento con otros tratamientos. Indicaciones post. Apoyo domiciliario. Complicaciones y resolución de las mismas. Discusión de caso clínico",
			},
			{
				id: "6",
				name: "Práctica",
				modules:
					"Extracción de sangre venosa. Centrifugación de sangre. Aspiración de PRP. Activación de PRP. Facial aguja 30g con diferentes técnicas de Mesoterapia. Facial con agujas MISAWA. Facial nanosoft. Skinbooster facial con CÁNULAS. Capilar con aguja 32g 4mm. Vampire facelift. Plasma rico ozonizado en manos. Microneedling plasma facial. Microneedling plasma capilar. BIOPLASTIA con plasma gel en PÓMULOS y mentón",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia de los distintos tratamientos con PRP. Conocer la mesa de trabajo y los materiales necesarios para realizar el tratamiento. Analizar distintos casos en donde se deba realizar PRP y conocer su justificación médica. Generación de protocolos combinados con PRP. Conocer el manejo de complicaciones. Consentimiento informado",
		includes:
			"Grabación de las clases. Acceso ilimitado a las grabaciones. Diploma digital. Acceso a grupo de WhatsApp",
		modality: [
			{
				name: "Teoría",
				description: "4 clases grabadas de 2hs cada una",
			},
			{
				name: "Práctica asincrónica",
				description:
					"Videos prácticos demostrativos de las técnicas paso a paso.",
			},
		],
	},
];
