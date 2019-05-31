// =========================================== //
//                   THEMES                    //
// =========================================== //

import agave from "./Media/thumbnails/agave.jpg";
import blue_sea from "./Media/thumbnails/blue_sea.jpg";
import blooming_blossom from "./Media/thumbnails/blooming_blossom.jpg";
import cherry_blossom from "./Media/thumbnails/cherry_blossom.jpg";
import dandelion from "./Media/thumbnails/dandelion.jpg";
import movie_moment from "./Media/thumbnails/movie_moment.jpg";
import orchid from "./Media/thumbnails/orchid.jpg";
import white_cherry from "./Media/thumbnails/white_cherry.jpg";

export const themes = {
  agave: {
    name: "Agave",
    img: agave,
    colorLight1: "#FEEEC1",
    colorDark1: "#506C4D",
    colorDark2: "#2A6175",
    colorAccent: "#A8CFFE",
    colorLight2: "#ABCDC6"
  },
  blue_sea: {
    name: "Blue Sea",
    img: blue_sea,
    colorLight1: "#9EA9E3",
    colorDark1: "#4A4D9A",
    colorDark2: "#1E479F",
    colorAccent: "#4478C1",
    colorLight2: "#B4D3E5"
  },
  blooming_blossom: {
    name: "Blooming Blossom",
    img: blooming_blossom,
    colorLight1: "#f5f5ef",
    colorDark1: "#32522a",
    colorDark2: "#b15f76",
    colorAccent: "#c78a95",
    colorLight2: "#e8d0d4"
  },
  cherry_blossom: {
    name: "Cherry Blossom",
    img: cherry_blossom,
    colorLight1: "#C59CC1",
    colorDark1: "#6E3454",
    colorDark2: "#8B275B",
    colorAccent: "#BF3F81",
    colorLight2: "#ED9FD1"
  },
  dandelion: {
    name: "Dandelion",
    img: dandelion,
    colorLight1: "#A792A3",
    colorDark1: "#81667B",
    colorDark2: "#21615D",
    colorAccent: "#43F0DA",
    colorLight2: "#D1F8F8"
  },
  movie_moment: {
    name: "Movie Moment",
    img: movie_moment,
    colorLight1: "#E095CE",
    colorDark1: "#8832B7",
    colorDark2: "#4691A5",
    colorAccent: "#45D5EE",
    colorLight2: "#B7F1F0"
  },
  orchid: {
    name: "Orchid",
    img: orchid,
    colorLight1: "#EDF19A",
    colorDark1: "#266B15",
    colorDark2: "#EA324B",
    colorAccent: "#F37A81",
    colorLight2: "#FCAF98"
  },
  white_cherry: {
    name: "White Cherry",
    img: white_cherry,
    colorLight1: "#C39394",
    colorDark1: "#870932",
    colorDark2: "#675B65",
    colorAccent: "#87AEAD",
    colorLight2: "#D5D5D3"
  }
};

// =========================================== //
//                   PROJECTS                  //
// =========================================== //

export const projects = [
  {
    id: "portfolio_v2",
    name: "Portfolio version 2",
    img: "portfolio_v2.jpg",
    description: "Second version of my portfolio (this page)",
    links: [
      { linkType: "webpage", url: "" },
      {
        linkType: "gitHub",
        url: "https://github.com/Naicah/Portfolio_v2"
      }
    ],
    techniques: ["React"]
  },
  {
    id: "retargeting",
    name: "Retargeting",
    img: "retargeting.jpg",
    description:
      "Project for a customer. Creates ads from JSON feed through Facebook Marketing API and keeps track of its statistics",
    links: [],
    techniques: ["Vue", "Koa"]
  },
  {
    id: "portfolio",
    name: "Portfolio",
    img: "portfolio.jpg",
    description: "First version of my protfolio",
    links: [
      { linkType: "webpage", url: "http://ninahedman.surge.sh/" },
      {
        linkType: "gitHub",
        url: "https://github.com/Naicah/Portfolio"
      }
    ],
    techniques: []
  },

  {
    id: "grex_bookingapp",
    name: "Booking App",
    img: "grex_bookingapp.jpg",
    description:
      "Web based application to book rooms, see attendance and ETA for attending people",
    links: [
      { linkType: "gitHub", url: "https://github.com/pazsea/bookingapp" }
    ],
    techniques: ["React", "Firebase"]
  },
  {
    id: "quire_by_capricorn",
    name: "Quire",
    img: "quire_by_capricorn.jpg",
    description: "Web based text editor",
    links: [
      {
        linkType: "gitHub",
        url: "https://github.com/Naicah/Quire-by-Capricorn"
      }
    ],
    techniques: []
  },
  {
    id: "javascript_genius",
    name: "JavaScript genius",
    img: "javascript_genius.jpg",
    description: "Landingpage for a fictional course at KYH",
    links: [],
    techniques: []
  },
  {
    id: "rueda_de_casino",
    name: "Rueda De Casino",
    img: "rueda_de_casino.jpg",
    description:
      "Website where one can find information about turns and events regarding the cuban salsa style Rueda de Casino",
    links: [],
    techniques: []
  }
];

// =========================================== //
//                 EXPERIENCES                 //
// =========================================== //

export const experiences = [
  {
    type: "job",
    filter: "IT",
    name: "Projektadministratör för GDPR-projekt ",
    at: "Järfälla kommun (GoldWare Lankonsult)",
    date: "apr 2018 – maj 2018",
    endDate: "2018-05",
    text:
      "Modifiering och framtagning av instruktioner och mallar för personuppgiftsbiträdesavtal, varav mallarna kompleterades med input-fält och regler. Hjälpte verksamheten att bedöma i vilka fall personuppgiftsbiträdesavtal behövs, hitta avtal och nödvändigt material, fylla i avtalen, såg till så att detta arbete prioriterades och utfördes samt skapade överblick över hur långt de kommit i processen."
  },
  {
    type: "job",
    filter: "",
    name: "Dansinstruktör",
    at: "Heartbeats",
    date: "jan 2018 – FF",
    endDate: "",
    text:
      "Dansinstruktör inom den kubanska salsastilen Rueda de Casino. Håller kurser för nybörjare ända upp till avancerad med fokus på att alla individer ska utvecklas och ha kul. Vårt mål är att sprida glädje, välmående, personlig utveckling och gemenskap genom dans, samt stötta hjälporganisationer som Schools for the future, Juntos dibujando sonrisas och Hjärt-Lungfonden."
  },
  {
    type: "job",
    filter: "",
    name: "Administratör sjukvårdsskador ",
    at: "Folksam (GoldWare Lankonsult)",
    date: "sep 2017 – nov 2017",
    endDate: "2017-11",
    text:
      "Administration av fakturor för försäkringstagare inom sjukvårdsskador. Detta innefattade granskning av fakturorna för att säkerställa att försäkringen täcker det aktuella läkarbesöket/åtgärden samt attestering av dessa. Felsökning, mottagning samt arkivering utfördes även."
  },
  {
    type: "job",
    filter: "IT",
    name: "Manuell testare ",
    at: "Telia Company (GoldWare Lankonsult)",
    date: "jan 2016 – dec 2016",
    endDate: "2016-12",
    text:
      "Huvudansvar för framtagning av testfall, exekvering av tester och rapportering av testresultat vid utveckling av webbapplikation baserad på Alfreco Activity. Tog fram arbetssätt och mallar för dokumentation och rapportering av testfall och dess resultat. Tog även fram krav, säkerställde så att kraven uppfylldes, tog fram lösningar för att säkerställa bra användarvänlighet, funktionalitet och såg till att produkten följde flöden och processer både för den aktuella produkten och verksamheten i stort. Uppdraget innefattade nära samarbeta med både utvecklare, kravställare, kravanalytiker, beställare, produktägare, interaktionsdesigner och verksamhetsförvaltare."
  },
  {
    type: "job",
    filter: "IT",
    name: "Leveranstekniker ",
    at: "Telia Company (GoldWare Lankonsult)",
    date: "maj 2015 – dec 2016",
    endDate: "2016-12",
    text:
      "Projektledare för leverans av den IP-baserade telefonväxeln Touchpoint Plus, som är baserad på MiCloud Telepo-plattformen av Mitel. Detta innefattade såväl lösningsdesign och konfiguration av funktioner utefter kundens behov och önskemål samt porteringar av nummer, stöttning och workshop. Var även ansvarig för att planera ut uppdrag till lämplig tekniker inom teamet."
  },
  {
    type: "job",
    filter: "IT",
    name: "IT-konsult ",
    at: "GoldWare Lankonsult",
    date: "maj 2015 – aug 2018",
    endDate: "2018-08",
    text:
      "Uppdrag inom telekom, testning och administration. Även utfört support till kunder, intern webbdesign samt XML-konvertering. "
  },
  {
    type: "job",
    filter: "IT",
    name: "Systemförvaltare ",
    at: "Aleris",
    date: "jun 2014 – aug 2014",
    endDate: "2014-08",
    text:
      "Förvaltning och second line-support av ett flertal system, inventering av mjuk- och hårdvara inför utrullning och installation av ny Citrix-miljö samt ansvarig för upprättande av testplaner och testfall och utförande av manuella tester av såväl system som produkter."
  },
  {
    type: "job",
    filter: "IT",
    name: "Administratör och support TakeCare ",
    at: "Aleris Rehab",
    date: "sep 2013 – jul 2015",
    endDate: "2015-07",
    text:
      "Ansvarig för användaradministration, utbildning, support, planering och implementering av större förändringar av journalsystemet TakeCare samt huvudansvar för strukturering och planering av arbete i arbetsgruppen"
  },
  {
    type: "job",
    filter: "",
    name: "Receptionist ",
    at: "Aleris Rehab",
    date: "maj 2012 – jul 2015",
    endDate: "2015-07",
    text:
      "Kundservice, kassa, registrering av patienter, utfärdande av högkostnads- och frikort, telefon, städning, inköp, försäljning."
  },
  {
    type: "job",
    filter: "",
    name: "Barista ",
    at: "Espresso House",
    date: "maj 2011 –  maj 2012",
    endDate: "2012-05",
    text:
      "Tillredning av olika kaffedrinkar, mackor och sallader, kundservice, försäljning, kassa och pengahantering, städning, disk och inköp."
  },
  {
    type: "job",
    filter: "",
    name: "Kostymtekniker",
    at: "Kungliga Operan",
    date: "sep 2010 – jun 2016",
    endDate: "2015-06",
    text:
      "Kostymhantering så som fram- och upphängning av kostymer, påklädning, hjälp vid snabba klädbyten och mindre lagningar av kostymer för flertalet dansare eller sångare. Som påklädare till solist agerar man personlig assistent och hjälper dem med allt som behövs. Utdelning av blommor till applådtack förekom även."
  },
  {
    type: "job",
    filter: "",
    name: "Säljare och säljledare ",
    at: "Killnoise",
    date: "maj 2009 – dec 2010",
    endDate: "2010-12",
    text:
      "Försäljning av musiköronproppar under konserter på Globenarenorna och vissa andra musiktillställningar. Ansvarig för alla säljare, produkterna och växelkassan som säljledare."
  },

  {
    type: "education",
    filter: "IT",
    name: "Front-End Developer ",
    at: "KYH",
    date: "2018 – 2020",
    endDate: "2020",
    text:
      "Yrkeshögskoleutbildning inom front-end utveckling där ca en tredjedel görs i samband med företag i formen av LIA (Lärande i arbete) och examensarbete. Utbildningen resulterar i kunskap inom HTML, CSS, JavaScript, Backend-utveckling, UX design, grafiska verktyg för gränssnitt samt arbetsmetodik."
  },
  {
    type: "education",
    filter: "IT",
    name: "Data- och Systemvetenskap ",
    at: "Stockholms Universitet",
    date: "2013 – 2017",
    endDate: "2017",
    text:
      "Kandidat 180hp som resulterade i kunskap inom bland annat programmering (Java), människo-data-interaktion, beslutstödsmetoder, IT-säkerhet, organisations- och processmodellering, business intelligence, testning och webbdesign."
  },
  {
    type: "education",
    filter: "",
    name: "Textil, form, design ",
    at: "Vackstanäsgymnasiet",
    date: "2007 – 2010",
    endDate: "2010",
    text:
      "Gymnasieutbildning som resulterade i kunskap inom samhällsrelaterade ämnen, men även sömnad, mönsterkonstruktion, materiallära, vävning med mera."
  },

  {
    type: "extra",
    filter: "",
    name: "Volontärarbetare",
    at: "Hands On Lion Conservation Project at Antelope Park, Zimbabwe",
    date: "2019 ",
    endDate: "2019",
    text: ""
  },
  {
    type: "extra",
    filter: "",
    name: "Röstmottagare allmänna valet",
    at: "Huddinge Kommun",
    date: "2014",
    endDate: "2014",
    text: ""
  },
  {
    type: "extra",
    filter: "",
    name: "Röstmottagare Europaparlamentsvalet",
    at: "Huddinge Kommun",
    date: "2014",
    endDate: "2014",
    text: ""
  },
  {
    type: "extra",
    filter: "",
    name: "Provassistent högskoleprovet",
    at: "",
    date: "2011 ",
    endDate: "2011",
    text: ""
  },
  {
    type: "extra",
    filter: "",
    name: "Garderobiär",
    at: "Fotografiska Bar Restaurang och Event",
    date: "2011 ",
    endDate: "2011",
    text: ""
  },
  {
    type: "extra",
    filter: "",
    name: "Röstmottagare allmänna valet",
    at: "Huddinge Kommun",
    date: "2010",
    endDate: "2010",
    text: ""
  },
  {
    type: "extra",
    filter: "",
    name: "Röstmottagare kyrkovalet",
    at: "Huddinge Kommun",
    date: "2009",
    endDate: "2009",
    text: ""
  },
  {
    type: "extra",
    filter: "",
    name: "Arbetsplatsförlagd utbildning",
    at: "Åhléns",
    date: "2009",
    endDate: "2009",
    text: ""
  },
  {
    type: "extra",
    filter: "",
    name: "Handbollstränare",
    at: "Huddinge Handbollklubb",
    date: "2008-2012 ",
    endDate: "2012",
    text: ""
  },
  {
    type: "extra",
    filter: "",
    name: "Praktik",
    at: "Restaurang Skogås",
    date: "2006",
    endDate: "2006",
    text: ""
  },
  {
    type: "extra",
    filter: "",
    name: "Praktik",
    at: "Witzenmann Metallslangfabriken",
    date: "2006",
    endDate: "2006",
    text: ""
  },
  {
    type: "extra",
    filter: "",
    name: "Styrelseledamot i elevstyrelsen och kamratstödjare",
    at: "Tomtbergaskolan",
    date: "2003-2007",
    endDate: "2007",
    text: ""
  },
  {
    type: "extra",
    filter: "IT",
    name: "MiCloud Telepo Certified Solution Administrator",
    at: "Mitel",
    date: "2015 ",
    endDate: "2015",
    text: ""
  },
  {
    type: "extra",
    filter: "",
    name: "Barista- och serviceutbildning",
    at: "Espresso House",
    date: "2011 ",
    endDate: "2011",
    text: ""
  }
];

// =========================================== //
//                CODE SKILLS                  //
// =========================================== //

export const codeSkills = [
  {
    icon: "fab fa-html5",
    main: "HTML5",
    styles: "Bootstrap"
  },
  {
    icon: "fab fa-css3",
    main: "CSS3",
    styles: "LESS, Animations"
  },
  {
    icon: "far fa-file-code",
    main: "JavaScript",
    styles: "AJAX, jQuery, JSON, React, Vue"
  },
  {
    icon: "fab fa-node-js",
    main: "node.js",
    styles: "Express, Koa, Knex"
  },
  {
    icon: "fas fa-cogs",
    main: "Java, SQL",
    styles: "Firebase, Wordpress"
  },
  {
    icon: "fas fa-desktop",
    main: "Adobe XD",
    styles: "Photoshop, Postman "
  }
];

// =========================================== //
//                  TEMPLATES                  //
// =========================================== //

// =========== EXPERIENCES ===========
// {
//   type: "job",
//   filter: "",
//   name: "",
//   at: "",
//   date: "",
//   text: ""
// },
// {
//   type: "education",
//   filter: "",
//   name: "",
//   at: "",
//   date: "",
//   text: ""
// },
// {
//   type: "extra",
//   filter: "",
//   name: "",
//   at: "",
//   date: "",
//   text: ""
// },
