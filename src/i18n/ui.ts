export const languages: Record<string, string> = {
	en: "English",
	es: "Español",
};

export const defaultLang = "en";

export const ui = {
	en: {
		"nav.experience": "Experience",
		"nav.education": "Education",
		"nav.about_me": "About me",
		"nav.contact": "Contact",
		"hero.available_for_work": "Available for work",
		"hero.greeting": "Hey, I'm Ignacio Sanhueza",
		"hero.description":
			"+10 years of experience. <strong>Software engineer</strong> from Viña del Mar, Chile 🇨🇱",
		"page.title": "Ignacio Sanhueza's porfolio",
		"education.list": [
			{
				name: "Viña del Mar University, Chile",
				imageURL: "/UVM_logo.webp",
				degree: "Computer Science",
				date: "2015",
				url: "https://www.uvm.cl/"
			},
			{
				name: "Centennial College, Canada",
				imageURL: "/centennial_college_logo.webp",
				degree: "Computer Science",
				date: "2014 (one semester abroad)",
				url: "https://www.centennialcollege.ca/"
			}
		],
		"experience.list": [
			{
				date: "September 2021 - Present",
				company: "Globant",
				description:
					"Worked with React, React Native, Node JS and Next JS in several projects. All of them with big companies from United States, such as Walmart, The Walt Disney company and Mission Lane.",
				title: "Senior Web UI Developer",
				link: "/globant",
				technologies: [
					"react native",
					"typescript",
					"react",
					"jest",
					"javascript",
					"nextjs",
					"node",
				],
			},
			{
				date: "September 2019 - September 2021 (2 years)",
				company: "Khipu",
				description:
					"Developed different projects, such as a payment gateway as a service, using scraping, and mantaining/adding new features to a cross platform app.",
				title: "Full Stack Developer",
				link: "/khipu",
				technologies: [
					"react native",
					"react",
					"grails",
					"node",
					"java",
					"jest",
				],
			},
			{
				date: "March 2017 - Sept 2019 (2.5 years)",
				company: "Santander Bank",
				description:
					"SQL Server script optimization and automation for different processes. Developer of an .NET C# app to make simulations for bank provisions for Chile, according to IFRS regulation.Developer of Reports and visualizations using Power BI.",
				title: "Full Stack Developer / Data Analyst",
				link: "/santander",
				technologies: ["sql-server", ".net", "c#", "powerbi", "react"],
			},
			{
				date: "Feb 2014 - March 2017 (4 years)",
				company: "Metric Arts",
				description:
					"Worked in several projects as a full stack C# developer, creating apps from scratch. Azure Cloud Developer, using several services, like Azure Functions, Azure SQL Server or virtual machines. BI developer, using Azure SQL Server, stream analytics and Power BI to create a near real time report for a mining company. Developer of a Python based app to make web scraping to retail companies using selenium tool.",
				title: "Full Stack Developer",
				link: "/metric-arts",
				technologies: [
					"sql-server",
					".net",
					"c#",
					"powerbi",
					"azure",
					"python",
				],
			},
		],
		"bio.paragraphs": [
			"My name is Ignacio, but my friends call me 'Nacho' (yeah, like the snack). I began my professional career in a small consultant company as a <strong>Data Analyst</strong>, but soon I started to develop curiosity on becoming a <strong>Full Stack developer</strong>",
			"I've learned and worked in several programming languages, such as <strong>Python</strong>, <strong>Java</strong>, <strong>.NET</strong> and <strong>Javascript</strong>, until I finally decided to specialize in <strong>React</strong> and <strong>React Native</strong>.",
			"I've never had any problems speaking both in <strong>english</strong> or <strong>spanish</strong>, which has led me to work in big companies, such as Walmart or Disney.",
		],
	},
	es: {
		"nav.experience": "Experiencia",
		"nav.education": "Educación",
		"nav.about_me": "Sobre mí",
		"nav.contact": "Contacto",
		"hero.available_for_work": "Disponible para trabajar",
		"hero.greeting": "Hola, soy Ignacio Sanhueza",
		"hero.description":
			"+10 años de experiencia. <strong>Ingeniero Civil Informático</strong> de Viña del Mar, Chile 🇨🇱.",
		"page.title": "Porfolio de Ignacio Sanhueza",
		"education.list": [
			{
				name: "Universidad de Viña del Mar, Chile",
				imageURL: "/UVM_logo.webp",
				degree: "Ingeniería Civil Informática",
				date: "2015",
				url: "https://www.uvm.cl/"
			},
			{
				name: "Centennial College, Canadá",
				imageURL: "/centennial_college_logo.webp",
				degree: "Computer Science",
				date: "2014 (semestre de intercambio)",
				url: "https://www.centennialcollege.ca/"
			}
		],
		"experience.list": [
			{
				date: "Septiembre 2021 - Presente",
				company: "Globant",
				description:
					"Trabajé con React, React Native, Node JS y Next JS en distintos proyectos; todos ellos con grandes empresas de Estados Unidos, como Walmart, The Walt Disney Company y Mission Lane.",
				title: "Desarrollador Web UI Senior",
				link: "/globant",
				technologies: [
					"react native",
					"typescript",
					"react",
					"jest",
					"javascript",
					"nextjs",
					"node",
				],
			},
			{
				date: "Septiembre 2019 - Septiembre 2021 (2 años)",
				company: "Khipu",
				description:
					"Desarrollo de distintos proyectos, como una plataforma de pago como servicio, usando scraping, además de mantención y añadir nuevas funcionalidades a una aplicación multiplataforma.",
				title: "Full Stack Developer",
				link: "/khipu",
				technologies: [
					"react native",
					"react",
					"grails",
					"node",
					"java",
					"jest",
				],
			},
			{
				date: "March 2017 - Sept 2019 (2.5 years)",
				company: "Santander Bank",
				description:
					"SQL Server script optimization and automation for different processes. Developer of an .NET C# app to make simulations for bank provisions for Chile, according to IFRS regulation.Developer of Reports and visualizations using Power BI.",
				title: "Full Stack Developer / Data Analyst",
				link: "/santander",
				technologies: ["sql-server", ".net", "c#", "powerbi", "react"],
			},
			{
				date: "Feb 2014 - March 2017 (4 years)",
				company: "Metric Arts",
				description:
					"Worked in several projects as a full stack C# developer, creating apps from scratch. Azure Cloud Developer, using several services, like Azure Functions, Azure SQL Server or virtual machines. BI developer, using Azure SQL Server, stream analytics and Power BI to create a near real time report for a mining company. Developer of a Python based app to make web scraping to retail companies using selenium tool.",
				title: "Full Stack Developer",
				link: "/metric-arts",
				technologies: [
					"sql-server",
					".net",
					"c#",
					"powerbi",
					"azure",
					"python",
				],
			},
		],
		"bio.paragraphs": [
			"Me llamo Ignacio, pero mis amigos me dicen Nacho. Comencé mi carrera profesional en una pequeña consultora como <strong>Analista de Datos</strong>, pero pronto comencé a desarrollar curiosidad por la programación <strong>Full Stack</strong>.",
			"Seguí mis pasos aprendiendo distintos lenguajes de programación, como <strong>Python</strong>, <strong>Java</strong>, <strong>.NET</strong> y <strong>Javascript</strong>, hasta que finalmente decidí especializarme en <strong>React</strong> y <strong>React Native</strong>.",
			"Nunca he tenido problemas para desenvolverme tanto en <strong>inglés</strong> como en Español, lo cual me ha llevado a trabajar para grandes compañías de renombre, como Walmart o Disney",
		],
	},
} as const;
