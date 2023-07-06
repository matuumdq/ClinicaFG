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
		name: "INTRODUCCIÓN A LA MEDICINA ORTOMOLECULAR",
		explanation:
			"Exploraremos los fundamentos de esta disciplina, sus principios y aplicaciones en el campo de la salud.",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684153270/peptonas_yqgae7.png",
		paralaximg:
			"https://images.squarespace-cdn.com/content/v1/5f68e31d42e3161ee32eb5df/1618512229238-UHOGCUIFLQGXPWMJT1V3/Esthetician4.jpg",
		price: 30000,
		priceext: 200,
		sinc: "sinc",
		modules: [
			{
				id: "1",
				name: "MÓDULO 1",
				modules:
					"Introducción y generalidades. Definición. Historia. Indicaciones. Contraindicaciones. Biología celular. Mitocondria. Óxido-reducción. Radicales libres. Sistemas y moléculas antioxidantes. Envejecimiento celular. Telómeros. Colágeno. Vitaminas. Minerales. Aminoácidos. Proteínas y péptidos. Oligoelementos",
			},
			{
				id: "2",
				name: "MÓDULO 2",
				modules:
					"Fundamentos de la nutrición ortomolecular. Regulaciones legales. Objetivos. Ventajas y Desventajas. Consulta médica. Laboratorio a pedir. Estudios paraclínicos. Vías de administración. Tipos de soluciones intravenosas. Implicaciones nutricionales en el manejo de patologías de piel. Vitamina C. Biodisponibilidad de péptidos. Restricción calórica/ayuno y longevidad. Intoxicación por metales pesados",
			},
			{
				id: "3",
				name: "MÓDULO 3",
				modules:
					"Protocolos. Quelaciones. Oral e intravenosa. Terapias de reemplazo. Sueros y recomendaciones dietéticas. Manejo domiciliario. Antiage: Vit C, D-, Ribosa. Sulfato de Magnesio. Glutation. NAC. Complejo B. Myers. Suero Antiestrés. Triptófano. Glutation. Complejo B. Sulfato de Mg. Fenilalanina. Ácido alfa lipoico",
			},
		],
		objetives:
			"Incluir a las/os alumnos en el conocimiento, asistencia y manejo del tratamiento de Medicina Ortomolecular. Analizar los casos en donde se deba realizar Medicina Ortomolecular y conocer su justificación médica. Generación de protocolos combinados con Medicina Ortomolecular",
		includes:
			"Manual científico de estudio digital. Coffee break. Kit de bioseguridad para la práctica (camisolin, cofia, guantes). Kit de estudio (carpera, hojas, lapicera). Diploma/certificado digital. Apoyo docente por tiempo indefinido. Grabación de todas las clases",
		modality: [
			{
				name: "teoria",
				description:
					"12/7, 13/7 y 14/7, de 13:00 a 15:00 horas. Modalidad online por Zoom, quedan grabadas y se envían a todos los participantes.",
			},
			{
				name: "practica",
				description:
					"15/7, de 15:00 a 19:00 horas. Clínica del Dr Franco Gómez (Barrio Recoleta). Se puede hacer de manera presencial o a distancia (se envía material VIDEOGRÁFICO).",
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
	{
		id: 106,
		name: "MICROIMPLANTE CAPILAR",
		explanation: "Dirigido a médicos",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684154113/micro_h3elyc.png",
		paralaximg:
			"https://images.squarespace-cdn.com/content/v1/5f68e31d42e3161ee32eb5df/1618512229238-UHOGCUIFLQGXPWMJT1V3/Esthetician4.jpg",

		priceext: 200,
		sinc: "asinc",
		modules: [
			{
				id: "1",
				name: "PELO NORMAL Y ALOPECIAS",
				modules:
					"Tricologia. Generalidades de microinjerto capilar. Anatomía, fisiología y biología molecular de cabello y cuero cabelludo. Semiología. Exámenes complementarios. Alopecias",
			},
			{
				id: "2",
				name: "TRATAMIENTOS MÉDICOS",
				modules:
					"Inyectables, tópicos y orales. Mesoterapia. Carboxiterapia. Ozonoterapia",
			},
			{
				id: "3",
				name: "TRATAMIENTO QUIRÚRGICO",
				modules:
					"Tratamiento quirúrgico e indicaciones pre operatorias. Técnica FUE (follicular unit extracción). Diferencias entre las técnicas FUSS y FUE. Estudios pre quirúrgicos. Rasurado. Pre medicación. Anestesia. Diseño. UFs: - Definición. - Tca Extracción. - Tca Cosecha. - Conservación. Densidad distribución y orientación. Implantación, Incisiones, Colocación Y Nivelación. Indicaciones post quirúrgicas. Instrumental. Complicaciones intraoperatorias. Complicaciones post operatorias",
			},
		],
		objetives:
			"Incluir a las/os participantes en el conocimiento y tratamiento de Implante capilar. Analizar casos en donde se deba realizar el implante capilar y conocer su justificación médica. Conocer el manejo de complicaciones",
		includes:
			"Grabación de las clases. Acceso ilimitado a las grabaciones. Diploma digital. Manual científico de estudio digital",
		modality: [
			{
				name: "Teoría",
				description: "3 clases grabadas de 2hs cada una",
			},
			{
				name: "Práctica",
				description: "Fecha presencial a coordinar. Jornada de 6hs.",
			},
		],
	},
	{
		id: 107,
		name: "MÁSTER PLASMA FIBROBLAST",
		explanation: "Plasma pen y Plasma láser",
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
					"Presentación. Introducción. Generalidades. Topografía facial. Sistema tegumentario. Biotipo y fototipo cutáneo. Envejecimiento cutáneo. Lesiones Elementales",
			},
			{
				id: "2",
				name: "MÓDULO 2",
				modules:
					"Concepto plasma fibroblastic. Biofísica del plasma fibroblastic (cuarto estado de la materia, ionización, Campos electromagnéticos). Historia plasma Fibroblastic. Mecanismo de acción del plasma. Diferencia con el electrobisturí. Indicaciones. Contraindicaciones. Indicaciones pre tratamiento. Mesa de Trabajo. Técnicas de manejo",
			},
			{
				id: "3",
				name: "MÓDULO 3",
				modules:
					"Abordaje Facial. Arrugas superficiales y profundas. Lifting físico. Blefaroplasma. Flaccidez Facial. Abordaje Corporal. Flaccidez Corporal. Estrías. Cuidados post tratamiento. Complicaciones y Resoluciones. Casos clínicos",
			},
		],
		objetives: " COMPLETAR",
		includes:
			"Grabación de las clases. Diploma digital. Manual completo de estudio. Videos con la ejecución de la técnica paso a paso. Acceso a grupo de WhatsApp",
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
	{
		id: 108,
		name: "MÁSTER ENZIMAS BIOLÓGICAS",
		explanation: "Dirigido a todos los profesionales de la estética",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684153270/enzimas_yzyjo0.png",
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
					"Introducción y generalidades. Anatomía facial y corporal. Posición anatómica. Planimetría corporal. Planos anatómicos. Tejido epitelial. Tejido conectivo. Sistema tegumentario. Colágeno. Ácido hialurónico. Tejido adiposo. Envejecimiento cutáneo",
			},
			{
				id: "2",
				name: "MÓDULO 2",
				modules:
					"Bioquímica enzimática. Enzimas. Definición. Función. Clasificación. Cofactores y coenzimas. Reacción química. Proteínas. Proteínas recombinantes. Papel fisiológico de las enzimas hialuronidasa, colagenasa, lipasa y queratinasa. Enzimas en estética. Metaloproteinasas. Vías de administración. Enzimas biológicas tópicas. Obtención de enzimas biológicas. Biotecnología. Proceso de liofilización",
			},
			{
				id: "3",
				name: "MÓDULO 3",
				modules:
					"Indicaciones. Contraindicaciones y efectos secundarios. Protocolos Faciales: Flacidez. Cicatrices. Queloides. Quemaduras. Bolsas palpebrales. Adiposidad localizada submentoneana. Bichectomia enzimática. Protocolos Corporales: Flacidez. Quemaduras. Celulitis. Adiposidad localizada. Estrías. Cicatrices. Queloides. Complicaciones y su resolución",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia del tratamiento de Enzimas biológicas. Analizar tratamientos en donde se deba realizar enzimas biológicas y conocer su justificación médica. Generación de protocolos combinados con Enzimas biológicas. Conocer el manejo de complicaciones",
		includes:
			"Grabación de las clases. 3 videos con la ejecución de la técnica paso a paso: preparación y aplicación de enzimas biológicas, enzimas biológicas en rostro, enzima biológicas en glúteos. Diploma digital. Manual completo de estudio. Acceso a grupo de WhatsApp",
		modality: [
			{
				name: "Completar",
				description: "Completar",
			},
		],
	},
	{
		id: 109,
		name: "MÁSTER EN RADIOFRECUENCIA",
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
					"Anatomía facial y corporal. Posición anatómica. Planimetría. Planos anatómicos. Tejido epitelial. Tejido conjuntivo. Sistema Tegumentario. Lesiones elementales. Líneas de Langer",
			},
			{
				id: "2",
				name: "MÓDULO 2",
				modules:
					"Radiofrecuencia. Definición. Biofísica. Radiofrecuencia capacitiva, inductiva y resistiva. Radiofrecuencia monopolar. Radiofrecuencia bipolar. Radiofrecuencia tripolar. Radiofrecuencia multipolar. Radiofrecuencia 3DEEP. Radiofrecuencia fraccionada. Radiofrecuencia con agujas. Crio radiofrecuencia. Mecanismo de acción. Indicaciones. Contraindicaciones. Mesa de trabajo",
			},
			{
				id: "3",
				name: "MÓDULO 3",
				modules:
					"RADIOFRECUENCIA FACIAL: Arrugas. Flacidez. Cicatrices. RADIOFRECUENCIA CORPORAL: Flacidez. Celulitis. Combinación con otros tratamientos. Complicaciones",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia de fundamentos en el manejo de radiofrecuencia. Conocer los materiales necesarios para realizar el tratamiento. Analizar tratamientos, y conocer su justificación médica. Generación de protocolos combinados. Conocer el manejo de complicaciones",
		includes:
			"Grabación de las clases. Diploma digital. Acceso a grupo de WhatsApp",
		modality: [
			{
				name: "Completar",
				description: "Completar",
			},
		],
	},
	{
		id: 110,
		name: "MÁSTER EN PEPTONAS",
		explanation:
			"¿Eres profesional en el campo de la estética? ¿Te gustaría ofrecer un tratamiento innovador y efectivo a tus pacientes? ¡Entonces este curso es para ti! Con este curso, aprenderás todo lo que necesitas saber sobre las peptonas, una técnica que utiliza péptidos específicos para mejorar la apariencia y salud de la piel.",
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
					"Presentación. Caso clínico. Generalidades. Definición. Medicina regenerativa. Terapia biológica celular. Historia del uso de peptonas en medicina estética. Biología celular. Célula. Ciclo de Krebs. Metabolismo celular. Sistema tegumentario. Envejecimiento. Lesiones elementales",
			},
			{
				id: "2",
				name: "MÓDULO 2",
				modules:
					"Aminoácidos y Proteínas. Obtención de peptonas. Mecanismo de acción de las peptonas. Principales preparados biológicos de peptonas en medicina estética. Indicaciones. Contraindicaciones. Formas de presentación de las peptonas. Elaboración de historia clínica. Recepción del paciente. Mesa de trabajo. Bioseguridad. Indicaciones pre",
			},
			{
				id: "3",
				name: "MÓDULO 3",
				modules:
					"Lectura de vademécum. Tratamiento capilar con peptonas. Tipos de alopecia. Mesoterapia convencional y con dispositivos. Tratamientos faciales con peptonas. Mesoterapia. Dermapen. Dermaroller. Skinbooster. Tratamientos corporales con peptonas. Glúteos up. Reafirmación de abdomen. Tratamiento domiciliario con peptonas. Tratamientos complementarios a peptonas para un óptimo resultado. Indicaciones post. Complicaciones y su resolución. Caso clínico. Conclusión",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia de fundamentos en el manejo de radiofrecuencia. Conocer los materiales necesarios para realizar el tratamiento. Analizar tratamientos, y conocer su justificación médica. Generación de protocolos combinados. Conocer el manejo de complicaciones",
		includes:
			"Grabación de 3 clases teóricas. Grabación de la clase práctica. Acceso ilimitado a las grabaciones. Manual científico de estudio digital. Diploma digital. Asistencia y asesoría post-curso a través de WhatsApp",
		modality: [
			{
				name: "Completar",
				description: "Completar",
			},
		],
	},
	{
		id: 111,
		name: "MÁSTER EN MESOTERAPIA",
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
					"Presentación y generalidades. Anatomía y fisiología de la piel. Sistema tegumentario. Colágeno. Ácido hialurónico. Biotipos cutáneos y fototipos. Topografía superficial rostro. Unidades estéticas faciales. Envejecimiento cutáneo. Recepción del paciente. Historía clínica adaptada. Definición y clasificación de mesoterapia. Indicaciones. Indicaciones pre procedimiento. Mesa de trabajo. Esterilización. Asepsia. Bacteriológico. Bactericida. Bacteriostatico. Diferencia entre asépticos. Bioseguridad. Preparación de la piel. Activos. Plasma rico en plaquetas",
			},
			{
				id: "2",
				name: "MÓDULO 2",
				modules:
					"MESOTERAPIA CONVENCIONAL: Mecanismo de acción. Técnicas de administración. MESOTERAPIA CON PISTOLA: Pistolas. Variedades. Mecanismo de acción. Técnica de administración. MESOTERAPIA CON DERMAPEN: Dermapen. Variedades. Mecanismo de acción. Técnica de administración. MESOTERAPIA CON DERMAROLLER: Dermaroller. Variedades. Mecanismo de acción. Técnica de administración. MESOTERAPIA CON HYALURON PEN: Hyaluron pen. Variedades. Mecanismo de acción. Técnica de administración. MESOTERAPIA VIRTUAL: Electroporador. Variedades. Mecanismo de acción. Técnica de administración. MESOTERAPIA FACIAL: Antiage. Secuelas de acné. Melasma. Cloasma. MESOTERAPIA CORPORAL: Estrías. Cicatrices. Celulitis. Adiposidad localizada. MESOTERAPIA CAPILAR: Alopecia. Clasificación de alopecia con sus respectivos tratamientos",
			},
			{
				id: "3",
				name: "MÓDULO 3",
				modules:
					"Combinaciones con otros procedimientos. Indicaciones post procedimiento. Complicaciones y su resolución. Caso clínico. Conclusiones",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia del tratamiento de Mesoterapia. Conocer los materiales necesarios para realizar del tratamiento. Analizar tratamientos en donde se deba realizar la mesoterapia y conocer su justificación médica. Generación de protocolos combinados con mesoterapia. Conocer el manejo de complicaciones. Consentimiento informado.",
		includes:
			"Manual científico de estudio. 3 videos con la ejecución de la técnica paso a paso: mesoterapia facial, capilar y corporal. Certificado de participación. Acceso a grupo cerrado de WhatsApp. 3 clases grabadas",
		modality: [
			{
				name: "Completar",
				description: "Completar",
			},
		],
	},
	{
		id: 112,
		name: "MÁSTER EN DERMAPEN",
		explanation: "Dirigido a todos los profesionales de la estética",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684155236/dermaplaning_cvkwjl.png",
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
					"Presentación. Generalidades. Sistema Tegumentario. Biotipo y Fototipo Cutáneo. Envejecimiento Cutáneo. Proceso de cicatrización. Lesiones elementales. Dermapen. Usos. Marcas y modelos. Tipos de agujas. Dermaroller. Usos. Diferencias con Dermapen. Recepción del paciente. Elaboración de historia clínica. Consentimiento Informado. Principios activos utilizados. Mecanismo de acción. Indicaciones. Contraindicaciones. Indicaciones pre. Mesa de trabajo. Bioseguridad",
			},
			{
				id: "2",
				name: "MÓDULO 2",
				modules:
					"DERMAPEN CAPILAR: Anatomía y fisiología del cabello. Alopecia. Protocolos. DERMAPEN FACIAL: Topografía facial. Planos anatómicos. Protocolos para Antiage, flacidez, secuelas de acné, plasma rico. Vampire face lift. Microneedling plasma. Peeling. DERMAPEN CORPORAL: Flacidez, estrías. Complicaciones y Resoluciones",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia del tratamiento de Dermapen. Conocer los materiales necesarios para realizar el tratamiento. Analizar tratamientos en donde se deba realizar el Dermapen y conocer su justificación médica. Generación de protocolos combinados con Dermapen. Conocer el manejo de complicaciones",
		includes:
			"Manual completo de estudio. Certificado de participación. 2 videos con la ejecución de la técnica paso a paso: dermapen facial, dermapen en estrías. Acceso a grupo cerrado de WhatsApp",
		modality: [
			{
				name: "Completar",
				description: "Completar",
			},
		],
	},
	{
		id: 113,
		name: "MÁSTER EN CELULITIS",
		explanation: "Dirigido a todos los profesionales de la estética",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684155236/dermaplaning_cvkwjl.png",
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
					"Presentación. Generalidades. Sistema Tegumentario. Tejido Adiposo. Sistema circulatorio (venas - arterias - capilares y anatomía). Sistema Linfático ( órganos - linfa - ganglios). Irrigación sanguínea",
			},
			{
				id: "2",
				name: "MÓDULO 2",
				modules:
					"Etiología de la dermopaniculopatía edemato fibrosa (DEF o PEFE). Histología. Fisiopatogenia. Diagnóstico y Signos clínicos. Estadíos evolutivos de PEFE. Clasificación",
			},
			{
				id: "3",
				name: "MÓDULO 3",
				modules:
					"Tratamiento no invasivo. Endermology. Vacumterapia. Ultracavitacion. Crioterapia. Radiofrecuencia. Láser IPL. Presoterapia. Velaslim. Onda de choque. Manejo, mecanismo de acción y protocolos para cada tipo de celulitis. Tratamiento mínimamente invasivo: Subcisión. Carboxiterapia. Enzimas Biológicas. Mesoterapia. Manejo, técnica, mecanismo de acción, activos, protocolos para cada tipo de celulitis",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia del tratamiento. Conocer los materiales necesarios para realizar el tratamiento. Analizar tratamientos en donde se deba realizar y conocer su justificación médica. Conocer el manejo de complicaciones. Saber solucionar las complicaciones",
		includes:
			"Manual científico de estudio. Diploma/certificado. Acceso a grupo de WhatsApp. Videos prácticos demostrativos. 3 clases grabadas",
		modality: [
			{
				name: "Completar",
				description: "Completar",
			},
		],
	},
	{
		id: 114,
		name: "MÁSTER BODY REDUCTION LIPÓLISIS SIN CIRUGÍA",
		explanation: "Dirigido a todos los profesionales de la estética",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684155236/bodyred_lt8ygw.png",
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
					"Sistema Tegumentario. Histología y Fisiología del tejido adiposo. Adipócitos: funciones, tipos celulares, morfología, estructura. Metabolismo del tejido adiposo (sustratos, enzimas, productos y metabolitos). Obesidad. Sobrepeso. Adiposidad localizada (Mecanismo y funciones que generaran la misma). Adiposidad localizada (disminuirla mecanismo de acción general). Inflamación. Tratamientos con aparatologías: Criolipolisis, Ondas de choque, Velaslim, Ultracavitación, Hifu, Lipoláser, Carboxiterapias, Radiofrecuencia, Ultrasonido. Como manejar los equipos y combinarlos. Tratamientos inyectables (Mesoterapia coadyuvante lipolítica y fosfatidilcolina). Hidrolipoclasia",
			},
			{
				id: "2",
				name: "MÓDULO 2",
				modules:
					"Principales lipolíticos usados para la adiposidad localizada: Triac, Cafeína, Carnitina, Ampelopsina, Lipasa*, Fosfatidilcolina*. Cómo combinarlos para que el tratamiento contenga un resultado positivo. Modo de aplicación para cada caso. Dieta Cetogénica (Indicaciones, Contraindicaciones). Indicaciones. Selección del paciente ideal. Semiología. Protocolos",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia del tratamiento de Adiposidad localizada. Conocer los materiales necesarios para realizar el tratamiento. Analizar tratamientos en donde se deban realizar estos protocolos y conocer su justificación médica. Generación de protocolos combinados. Conocer el manejo de complicaciones. Consentimiento informado",
		includes:
			"Manual científico de estudio. 4 videos con la ejecución de la técnica paso a paso: preparación velaslim, velaslim, ultracavitación, ondas de choque. Certificado de participación. Acceso a grupo cerrado de WhatsApp. 3 clases grabadas",
		modality: [
			{
				name: "Completar",
				description: "Completar",
			},
		],
	},
	{
		id: 114,
		name: "MASTER BB GLOW Y BB LIPS",
		explanation: "Dirigido a todos los profesionales de la estética",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684155236/Hialuron_fwypim.png",
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
					"Introducción. Objetivo. Concepto de BELLEZA. Anatomía Facial. Sistema Tegumentario. Biotipo y fototipo Cutáneo. Envejecimiento Cutáneo. Lesiones elementales. Dermapen (Que es?/Funciones/Características). Historia Microneedling. Técnica Microneedling. Tipos de agujas. Profundidad de acuerdo a zona. Historia BB Glow. Descripción de BB glow. Principales Serums y sus activos. Principales Pigmentos y sus activos. Mecanismo de acción. Piel de Porcelana. Indicaciones. Contraindicaciones. Indicaciones pre. Mesa de Trabajo. Bioseguridad. Historia Clínica. Planimetría Facial. Morfología Facial. Proporción simétrica facial. Técnicas de manejo. Agujas y Profundidades en el bb glow. Protocolo. Indicaciones Post. Complicaciones",
			},
			{
				id: "2",
				name: "MÓDULO 2",
				modules:
					"Visagismo o Contouring. Tipos de Rostros. Técnica Dermoillumination. Fusiones de Pigmentos. Aplicación de los pigmentos en cada tipo morfológico facial. Técnica complementaria. BB Blush. BB Blush y los distintos tipos morfológicos de rostro. Fusión Dermoillumination con BB blush. BB Lips. Anatomía labial. Histologia labial (Mucosa). Planimetría labial. Simetría Labial. Activos utilizados. Pigmentos Utilizados. Dermapen. Cartuchos, Profundidad. Técnica paso a paso. Indicaciones Posteriores",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia del tratamiento de Adiposidad localizada. Conocer los materiales necesarios para realizar el tratamiento. Analizar tratamientos en donde se deban realizar estos protocolos y conocer su justificación médica. Generación de protocolos combinados. Conocer el manejo de complicaciones. Consentimiento informado",
		includes:
			"Manual completo de estudio. Certificado de participación. 3 videos con la ejecución de la técnica paso a paso: BB lips, BB glow (técnica piel de porcelana), BB glow (técnica dermoilumination). Acceso a grupo cerrado de WhatsApp. 3 clases grabadas",
		modality: [
			{
				name: "Completar",
				description: "Completar",
			},
		],
	},
	{
		id: 115,
		name: "MASOTERAPIA DESCONTRACTURANTE Y RELAJANTE",
		explanation: "Dirigido a todos los profesionales de la estética",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684155236/Hialuron_fwypim.png",
		paralaximg:
			"https://images.squarespace-cdn.com/content/v1/5f68e31d42e3161ee32eb5df/1618512229238-UHOGCUIFLQGXPWMJT1V3/Esthetician4.jpg",
		price: 20000,
		priceext: 200,
		sinc: "asinc",
		modules: [
			{
				id: "1",
				name: "MÓDULO 1",
				modules: "completar",
			},
			{
				id: "2",
				name: "MÓDULO 2",
				modules: "completar",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia de fundamentos en masoterapia descontracturante y relajante. Conocer los materiales necesarios para realizar los tratamientos. Analizar tratamientos, y conocer su justificación médica. Generación de protocolos combinados. Conocer el manejo de complicaciones",
		includes:
			"Manual científico de estudio. Certificado de participación. Acceso a grupo cerrado de WhatsApp. 3 clases grabadas",
		modality: [
			{
				name: "Completar",
				description: "Completar",
			},
		],
	},
	{
		id: 115,
		name: "INTRODUCCIÓN A LA COSMETOLOGÍA ",
		explanation:
			"Dirigido a todos los que quieran incursionar en el mundo de la cosmetología. NO HACE FALTA CONOCIMIENTOS PREVIOS",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684155236/Hialuron_fwypim.png",
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
					"Presentación. Generalidades. Introducción. Anatomía y fisiología del sistema tegumentario. Fototipos. Biotipos. Elementos de trabajo. Bioseguridad e higiene. Lesiones elementales: Primarias, Secundarias. Introducción a la química cosmética: Composición. Vehículos. Combinación correcta de los productos. Principios Activos. Indicación de cada Biotipo. Introducción a la aparatología facial: Punta de diamante. Espátula ultrasónica. Alta frecuencia. Cabina LED. Electroporador. Psicoestética, el abordaje ideal con el paciente. Protocolo de higiene facial. Indicaciones previas. El paso a paso. Modo de contacto con la piel. Introducción al masaje facial. Anamnesis. Consentimiento informado. Ambiente de trabajo. Imagen profesional. Introducción al Marketing digital. Indicaciones domiciliarias",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia del tratamiento. Conocer los materiales necesarios para realizar el tratamiento. Analizar tratamientos en donde se deba realizar y conocer su justificación. Conocer el manejo de complicaciones. Saber solucionar las complicaciones",
		includes:
			"Manual científico de estudio. Certificado de participación. 3 videos con la ejecución de la técnica paso a paso: preparación de la piel, peeling quìmico, dermaplaning. Acceso a grupo cerrado de WhatsApp. 6 clases grabadas",
		modality: [
			{
				name: "Completar",
				description: "Completar",
			},
		],
	},
	{
		id: 116,
		name: "INGENIERÍA FACIAL",
		explanation: "Dirigido a todos los profesiones de la estética",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684155236/Hialuron_fwypim.png",
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
					"Presentación y generalidades. Planos anatómicos. Sistema óseo. Sistema muscular. Sistema venoso facial. Sistema tegumentario. Cambios fisiológicos. Colágeno. Envejecimiento cutáneo. Fuerza aplicada. Planimetría facial. Abordaje clínico. Estética regenerativa. Farmacología aplicada. Bioestimulación. Aparatología facial.",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia del tratamiento de armonización facial. Conocer los materiales necesarios para realizar el tratamiento. Analizar tratamientos en donde se deba realizar el rejuvenecimiento y conocer su justificación médica.",
		includes:
			"Certificado de participación. Acceso a grupo cerrado de WhatsApp. 6 clases grabadas",
		modality: [
			{
				name: "Completar",
				description: "Completar",
			},
		],
	},
	{
		id: 116,
		name: "HYDRAPEN",
		explanation: "Dirigido a todos los profesiones de la estética",
		img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1684155236/Hialuron_fwypim.png",
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
					"Presentación. Generalidades. Sistema Tegumentario. Biotipo y Fototipo Cutáneo. Envejecimiento Cutáneo. Proceso de cicatrización. Lesiones elementales. Hydrapen. Usos. Marcas y modelos. Tipos de agujas. Dermaroller. Usos. Diferencias con Dermapen. Recepción del paciente. Elaboración de historia clínica. Consentimiento Informado. Principios activos utilizados. Mecanismo de acción. Indicaciones. Contraindicaciones. Indicaciones pre. Mesa de trabajo. Bioseguridad.",
			},
			{
				id: "2",
				name: "MÓDULO 2",
				modules:
					"HYDRAPEN CAPILAR: Anatomía y fisiología del cabello. Alopecia. Protocolos. HYDRAPEN FACIAL: Topografía facial. Planos anatómicos. Protocolos para Antiage, flacidez, secuelas de acné, plasma rico. Vampire face lift. Microneedling plasma. Peeling. HYDRAPEN CORPORAL: Flacidez, estrías. Complicaciones y Resoluciones.",
			},
		],
		objetives:
			"Introducir a las/os participantes en el conocimiento y asistencia del tratamiento de Hydrapen. Conocer los materiales necesarios para realizar el tratamiento. Analizar tratamientos en donde se deba realizar el Hydrapen y conocer su justificación médica. Generación de protocolos combinados con Hydrapen. Conocer el manejo de complicaciones",
		includes:
			"Manual científico de estudio. Certificado de participación. Acceso a grupo cerrado de WhatsApp. 3 clases grabadas",
		modality: [
			{
				name: "Completar",
				description: "Completar",
			},
		],
	},
];
