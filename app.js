/* Datos del sitio. Lo que está vacío se muestra como pendiente mientras "borrador" sea true. */
const CONFIG = {
  borrador: false,
  wa: "5492612051061",          // WhatsApp de AF
  ig: "aestheticfitnessmendoza",
  direccion: "Martínez de Rosas 755",
  email: "aestheticfitnessmendoza@gmail.com",
  mapa: "https://www.google.com/maps/search/?api=1&query=Martinez+de+Rosas+755+Mendoza",
  horarios: "Lunes a Viernes de 8 a 21 hs|Sábados de 9 a 13 hs",
  heroVideo: "media/sesion.mp4",   // video vertical corto
  heroPoster: "media/sesion.jpg",
  heroFoto: "",
  fotos: {},
  /* Feed de Instagram en vivo. Pegar acá la URL JSON del feed:
     - Un servicio como Behold (conecta la cuenta y entrega una URL pública), o
     - un endpoint propio que consulte la API de Instagram con el token guardado en el servidor.
     Acepta las formas {posts:[...]} y {data:[...]}. Sin URL o si falla, se muestran las tarjetas de abajo. */
  feedUrl: "",
  igEmbed: false,               // true: muestra el perfil con el embed oficial de Instagram (solo funciona en hosting propio)
  igTiles: [                    // respaldo (publicaciones reales de @aestheticfitnessmendoza) mientras no haya feed conectado
    {src:"media/ig1.jpg", alt:"PRP facial", url:"https://www.instagram.com/aestheticfitnessmendoza/p/Dfsp1ITlOTD/"},
    {src:"media/ig2.jpg", alt:"Thermocycling o criolipólisis, cuál te conviene", url:"https://www.instagram.com/aestheticfitnessmendoza/p/DfqFGC6FBW_/"},
    {src:"media/ig3.jpg", alt:"Reel de Aesthetic Fitness", tipo:"video", url:"https://www.instagram.com/aestheticfitnessmendoza/reel/DfkWN6hBIeC/"},
    {src:"media/ig4.jpg", alt:"Vengan a probar una clase", url:"https://www.instagram.com/aestheticfitnessmendoza/p/DfIBKZJBIOS/"},
    {src:"media/ig5.jpg", alt:"Noviembre con N de", url:"https://www.instagram.com/aestheticfitnessmendoza/p/DfP9QY2FMkl/"},
    {src:"media/ig6.jpg", alt:"9 años, 9 preguntas", tipo:"video", url:"https://www.instagram.com/aestheticfitnessmendoza/reel/DfIAI4MBHOa/"}
  ]
};

const SERVICIOS = [
  {id:"Electrofitness", q:"¿No tenés tiempo para entrenar?", t:"20 minutos de Electrofitness equivalen a 3 horas de gym. Entrenás con profe particular y turno a tu medida.", tags:["20 minutos","Profe particular"],
   dur:"20 min", formato:"Con profe particular",
   como:"La electroestimulación activa tus músculos mientras entrenás con tu profe. En 20 minutos trabajás más de 300 músculos, con un turno armado a tu medida.",
   ideal:["No tenés tiempo para ir al gym","Querés ver resultados rápido","Preferís entrenar con acompañamiento personal","Pasás el día sentado y el cuerpo ya te pasa factura"],
   incluye:["Clase con profe particular","Turno personalizado","Clase de prueba para conocer el método"],
   faqs:[["¿Cuánto dura una clase?","Veinte minutos, con tu profe a tu lado durante toda la sesión."],["¿Puedo probar antes de decidir?","Sí, tenemos clase de prueba. Escribinos y coordinamos tu horario."],["¿Con qué frecuencia conviene entrenar?","Lo definimos juntos según tu objetivo y tu disponibilidad."],["¿Necesito experiencia previa?","Tu profe adapta el entrenamiento a vos y te acompaña en cada sesión."]]},
  {id:"Thermocycling", q:"¿Querés bajar de peso sin actividades de alto impacto?", t:"Pedaleás 25 minutos dentro de una cápsula con calor infrarrojo y ozono. Sin correr ni saltar, y con drenaje que ayuda con celulitis y estrías.", tags:["25 minutos","Bajo impacto"],
   dur:"25 min", formato:"Cápsula con bici",
   como:"Te subís a la bicicleta dentro de una cápsula con calor infrarrojo y ozono y pedaleás 25 minutos. El calor y el drenaje acompañan el trabajo, sin correr ni saltar.",
   ideal:["Querés bajar de peso sin alto impacto","Necesitás cuidar tus articulaciones","Querés llegar al verano sin sumar horas de gym","Buscás ayuda con celulitis y estrías"],
   incluye:["Sesión de 25 minutos en cápsula","Calor infrarrojo y ozono","Drenaje mientras pedaleás"],
   faqs:[["¿Es de alto impacto?","No. Pedaleás sin correr ni saltar, así que no cargás las articulaciones."],["¿Cuánto dura la sesión?","Veinticinco minutos."],["¿Cuántas veces por semana se hace?","Tenemos planes de 2 y de 3 veces por semana, además de clase individual. Te ayudamos a elegir."],["¿Puedo ir con alguien?","Sí, tenemos opción 2x1 para ir en pareja o con una amiga."]]},
  {id:"Full Abdomen y Piernas", q:"¿Hay una zona que no baja ni con dieta ni entrenando?", t:"Dos horas de tratamiento con drenaje, masajes, maderoterapia, vacumterapia y copas en glúteos.", tags:["2 horas","Pack de 4 sesiones"],
   dur:"2 horas", formato:"Pack de 4 sesiones",
   como:"En dos horas combinamos drenaje, masajes, maderoterapia y vacumterapia sobre abdomen, flancos y piernas, y sumamos copas en glúteos.",
   ideal:["Hay una zona que no baja ni con dieta ni entrenando","Querés trabajar la flacidez en abdomen y piernas","Preferís un tratamiento sin impacto"],
   incluye:["Drenaje","Masajes","Maderoterapia","Vacumterapia","Copas en glúteos"],
   faqs:[["¿Cuánto dura cada sesión?","Dos horas de tratamiento."],["¿Qué zonas trabajamos?","Abdomen, flancos y piernas, con copas en glúteos."],["¿Cómo funciona el pack?","Son 4 sesiones. Algunos meses sumamos un regalo, consultanos cuál está vigente."],["¿Hay cupos?","Sí, son limitados. Escribinos para reservar tu lugar."]]},
  {id:"Criolipólisis", q:"¿Esa grasa localizada no se va?", t:"Frío controlado que trabaja la grasa localizada. Sin cirugía y sin dolor.", tags:["20 minutos por zona","Sin dolor"],
   dur:"20 min por zona", formato:"1, 2 o 3 zonas",
   como:"Aplicamos frío controlado sobre la zona que elegís durante 20 minutos para trabajar la grasa localizada. No hay cirugía ni dolor.",
   ideal:["Tenés grasa localizada que no baja con dieta","Entrenás y cuidás la comida, pero una zona no cambia","No querés pasar por una cirugía"],
   incluye:["Frío controlado en la zona elegida","20 minutos por zona","Opción de 1, 2 o 3 zonas"],
   faqs:[["¿Duele?","No, es un tratamiento sin dolor."],["¿Requiere cirugía?","No. Es un tratamiento sin cirugía."],["¿Cuánto dura?","Veinte minutos por cada zona."],["¿Cuántas zonas puedo trabajar?","Podés elegir una, dos o tres zonas. Contanos cuáles y te armamos el turno."]]},
  {id:"Copas Colombianas", q:"¿Sentís que la piel perdió firmeza?", t:"Succión, maderoterapia y drenaje linfático para trabajar flacidez y celulitis en piernas y glúteos.", tags:["50 minutos","Pack de 4 sesiones"],
   dur:"50 min", formato:"Sesión o pack de 4",
   como:"Combinamos succión con copas, maderoterapia y drenaje linfático en sesiones de 50 minutos, para trabajar flacidez y celulitis.",
   ideal:["Sentís que la piel perdió firmeza","Querés trabajar la celulitis en piernas y glúteos","Buscás un tratamiento sin impacto"],
   incluye:["Succión con copas","Maderoterapia","Drenaje linfático"],
   faqs:[["¿Cuánto dura una sesión?","Cincuenta minutos."],["¿Para qué sirve?","Para trabajar flacidez y celulitis con succión, maderoterapia y drenaje."],["¿Hay packs?","Sí, tenemos sesión individual y pack de 4 sesiones."]]},
  {id:"Depilación Definitiva", q:"¿Cuánto tiempo perdés depilándote cada mes?", t:"Soprano Ice, apta para todo tipo de piel y vello. Resultados progresivos desde las primeras sesiones.", tags:["Todo tipo de piel","Cupos limitados"],
   dur:"Por sesión", formato:"Fines de semana con cupos",
   como:"Usamos Soprano Ice, un equipo apto para todo tipo de piel y vello. Los resultados son progresivos y se empiezan a notar desde las primeras sesiones.",
   ideal:["Perdés tiempo depilándote cada mes","Querés dejar de pensarlo antes del verano","Creés que tu piel o tu vello no se pueden tratar"],
   incluye:["Equipo Soprano Ice","Apta para todo tipo de piel y vello","Turnos con cupos limitados"],
   faqs:[["¿Sirve para todo tipo de piel y vello?","Sí, Soprano Ice es apta para todo tipo de piel y vello."],["¿Cuándo se ven los resultados?","Son progresivos y se empiezan a notar desde las primeras sesiones."],["¿Cómo reservo?","Abrimos fechas con cupos limitados. Escribinos y te contamos las próximas."]]},
  {id:"Faciales", q:"¿Querés cuidar tu piel con tratamientos de cabina?", t:"Punta de diamante, máscara LED y radiofrecuencia para el cuidado de la piel del rostro.", tags:["Punta de diamante","Máscara LED"],
   dur:"A medida", formato:"Según tu piel",
   como:"Trabajamos con punta de diamante, máscara LED y radiofrecuencia, según lo que necesite tu piel.",
   ideal:["Querés cuidar la piel de tu rostro","No sabés qué tratamiento elegir"],
   incluye:["Punta de diamante","Máscara LED","Radiofrecuencia"],
   faqs:[["¿Qué técnicas usan?","Punta de diamante, máscara LED y radiofrecuencia."],["¿Cómo sé cuál me conviene?","Escribinos y te orientamos según lo que querés mejorar en tu piel."]]}
];
const EXTRA = {
  "Electrofitness": {color:"#065190", media:[{t:"v", src:"media/sesion.mp4", poster:"media/sesion.jpg"},{t:"v", src:"media/hombre.mp4", poster:"media/hombre.jpg"},{t:"i", src:"media/electro.jpg"}], thumb:"media/electro.jpg"},
  "Thermocycling": {color:"#e0663a", media:[{t:"i", src:"media/thermo2.jpg"},{t:"i", src:"media/thermo.jpg"},{t:"i", src:"media/thermo3.jpg"}], thumb:"media/thermo2.jpg"},
  "Full Abdomen y Piernas": {color:"#1f9d8f", media:[{t:"i", src:"media/full.jpg"}], thumb:"media/full.jpg"},
  "Criolipólisis": {color:"#2a9fd0", media:[{t:"i", src:"media/crio.jpg"},{t:"i", src:"media/crio2.jpg"}], thumb:"media/crio.jpg"},
  "Copas Colombianas": {color:"#6b5bd6", media:[{t:"i", src:"media/copas.jpg"}], thumb:"media/copas.jpg"},
  "Depilación Definitiva": {color:"#d94f8a", media:[{t:"i", src:"media/depi.jpg"}], thumb:"media/depi.jpg"},
  "Faciales": {color:"#b8892f", media:[{t:"v", src:"media/faciales.mp4", poster:"media/faciales.jpg"}], thumb:"media/faciales.jpg"}
};
SERVICIOS.forEach(s => Object.assign(s, EXTRA[s.id]));
const FRASES = [
  ["no tenés tiempo para entrenar","Electrofitness"],
  ["querés bajar de peso sin alto impacto","Thermocycling"],
  ["hay una zona que no baja ni con dieta","Criolipólisis"],
  ["sentís que la piel perdió firmeza","Copas Colombianas"],
  ["perdés tiempo depilándote cada mes","Depilación Definitiva"]
];
const FAMILIA = [
  {k:"claudia", n:"Claudia", r:"Fundadora"},
  {k:"jona", n:"Jona", r:"Hijo de Claudia, en Electrofitness"},
  {k:"pame", n:"Pame", r:"Nuera de Claudia, en Estética"}
];

const $ = id => document.getElementById(id);
const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
const waLink = msg => { const n = (CONFIG.wa||"").replace(/\D/g,""); return "https://wa.me/" + n + "?text=" + encodeURIComponent(msg); };
const slug = t => t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const igUrl = "https://www.instagram.com/" + CONFIG.ig + "/";
const calm = matchMedia("(prefers-reduced-motion:reduce)").matches;
const hasEl = id => !!document.getElementById(id);
const goTo = id => { const t = document.getElementById(id); if (t) t.scrollIntoView({behavior: calm ? "auto" : "smooth", block:"start"}); };

document.querySelectorAll("[data-wa]").forEach(a => a.href = waLink(a.dataset.wa));
document.querySelectorAll("[data-go]").forEach(a => { a.setAttribute("href","#"); a.addEventListener("click", e => { e.preventDefault(); goTo(a.dataset.go); }); });

function imgEl(src, alt){ const i = document.createElement("img"); i.src = src; i.alt = alt || ""; i.loading = "lazy"; return i; }
function videoEl(src, poster){ const v = document.createElement("video"); v.src = src; if (poster) v.poster = poster; v.muted = true; v.defaultMuted = true; v.loop = true; v.playsInline = true; v.autoplay = true; v.preload = "metadata"; v.setAttribute("muted",""); v.setAttribute("playsinline",""); v.addEventListener("canplay", () => { const p = v.play(); if (p && p.catch) p.catch(() => {}); }); return v; }
function mediaEl(m, alt){ return m.t === "v" ? videoEl(m.src, m.poster) : imgEl(m.src, alt); }
function placeholder(text){ const p = el("div","ph"); if (CONFIG.borrador) p.append(el("span","",text)); return p; }

/* Hero: video o foto, con rotación de problemas */
(function(){
  if (!hasEl("heroMedia")) return;
  const box = $("heroMedia");
  if (CONFIG.heroVideo) box.append(videoEl(CONFIG.heroVideo, CONFIG.heroPoster));
  else if (CONFIG.heroFoto) box.append(imgEl(CONFIG.heroFoto,"Aesthetic Fitness"));

  const rot = $("rot"), mas = $("rotMas"); let i = 0, hover = false;
  mas.addEventListener("click", () => { location.href = "servicios.html#" + slug(mas.dataset.svc); });
  if (calm) return;
  rot.addEventListener("mouseenter", () => hover = true); rot.addEventListener("mouseleave", () => hover = false);
  setInterval(() => {
    if (hover || document.hidden) return;
    rot.classList.add("out");
    setTimeout(() => { i = (i + 1) % FRASES.length; rot.textContent = FRASES[i][0]; mas.dataset.svc = FRASES[i][1]; rot.classList.remove("out"); }, 350);
  }, 3600);
})();

/* Cinta */
(function(){
  if (!hasEl("tape")) return;
  const t = $("tape"), names = SERVICIOS.map(s => s.id);
  for (let k = 0; k < 2; k++) names.concat(names).forEach(n => t.append(el("span","",n)));
})();

/* Tarjetas */
(function(){
  if (!hasEl("svcGrid")) return;
  const g = $("svcGrid"), sel = $("fServicio");
  SERVICIOS.forEach(s => {
    const c = el("article","card"); c.style.setProperty("--c", s.color);
    { const th = el("div","thumb"); if (s.thumb) th.append(imgEl(s.thumb, s.id)); else { th.classList.add("fill"); th.textContent = "Soprano Ice"; } c.append(th); }
    c.append(el("p","name",s.id), el("h3","q",s.q), el("p","",s.t));
    const ul = el("ul","tags"); s.tags.forEach(t => ul.append(el("li","",t))); c.append(ul);
        const row = el("div","row");
    const more = el("a","btn ghost sm","Más info"); more.href = "servicios.html#" + slug(s.id);
    const a = el("a","btn wa sm","Pedir turno"); a.target = "_blank"; a.rel = "noopener noreferrer"; a.href = waLink("Hola! Quiero pedir un turno para " + s.id + ".");
    row.append(more, a); c.append(row); g.append(c);
    sel.append(el("option","",s.id));
  });
  sel.append(el("option","","No sé cuál me conviene"));
})();

/* Detalle con pestañas y preguntas frecuentes */
let activo = SERVICIOS[0].id;
function renderTabs(){
  if (!hasEl("tabs")) return;
  const box = $("tabs"); box.replaceChildren();
  SERVICIOS.forEach(s => {
    const b = el("button","",s.id); b.style.setProperty("--svc", s.color); b.type = "button"; b.setAttribute("role","tab"); b.setAttribute("aria-selected", String(s.id === activo));
    b.addEventListener("click", () => { activo = s.id; history.replaceState(null,"","#" + slug(s.id)); renderTabs(); renderPanel(); });
    box.append(b);
  });
}
function renderPanel(){
  if (!hasEl("panel")) return;
  const s = SERVICIOS.find(x => x.id === activo), p = $("panel"); p.replaceChildren();
  const wrap = el("div","panel"); wrap.style.setProperty("--svc", s.color);
  const left = el("div");
  left.append(el("h3","",s.id), el("p","sub",s.q), el("h4","","Cómo funciona"), el("p","how",s.como));
  left.append(el("h4","","Ideal si"));
  const l1 = el("ul","list"); s.ideal.forEach(x => l1.append(el("li","",x))); left.append(l1);
  left.append(el("h4","","Qué incluye"));
  const l2 = el("ul","list"); s.incluye.forEach(x => l2.append(el("li","",x))); left.append(l2);
  const f = el("div","facts");
  const fact = (k,v) => { const d = el("div"); d.append(el("small","",k), el("b","",v)); f.append(d); };
  fact("Duración", s.dur); fact("Modalidad", s.formato);
  left.append(f);
  const cta = el("div","cta");
  const a = el("a","btn wa","Pedir turno para " + s.id); a.target = "_blank"; a.rel = "noopener noreferrer"; a.href = waLink("Hola! Quiero pedir un turno para " + s.id + ".");
  cta.append(a); left.append(cta);
  const right = el("div","side");
  if (s.media && s.media.length){ const g = el("div","gal n" + Math.min(s.media.length,3)); s.media.slice(0,3).forEach(m => { const f = el("div","gi"); f.append(mediaEl(m, s.id)); g.append(f); }); right.append(g); }
  const faq = el("div","faq"); faq.append(el("h4","","Preguntas frecuentes"));
  s.faqs.forEach(([q,r],i) => { const d = document.createElement("details"); d.setAttribute("name","faq"); if (i === 0) d.open = true; const sm = el("summary","",q); d.append(sm, el("p","",r)); faq.append(d); });
  const d2 = document.createElement("details"); d2.setAttribute("name","faq"); d2.append(el("summary","","¿Cómo pido turno?"), el("p","","Por WhatsApp. Elegís el servicio, nos contás tu franja de preferencia y te respondemos con los horarios disponibles."));
  faq.append(d2);
  right.append(faq); wrap.append(left, right); p.append(wrap);
}
function desdeHash(){ const h = location.hash.slice(1); const m = SERVICIOS.find(s => slug(s.id) === h); if (m) activo = m.id; renderTabs(); renderPanel(); }
addEventListener("hashchange", desdeHash); desdeHash();

/* Turno: arma el mensaje */
(function(){
  if (!hasEl("fNombre")) return;
  const n = $("fNombre"), s = $("fServicio"), f = $("fFranja"), a = $("fEnviar");
  const upd = () => {
    const quien = n.value.trim() ? "Soy " + n.value.trim() + ". " : "";
    const que = s.value === "No sé cuál me conviene" ? "Quiero que me ayuden a elegir un servicio" : "Quiero pedir un turno para " + s.value;
    a.href = waLink("Hola! " + quien + que + ". Me queda mejor por la " + f.value.toLowerCase() + ". ¿Qué horarios tienen disponibles?");
  };
  [n,s,f].forEach(x => x.addEventListener("input", upd)); upd();
  $("turnoForm").addEventListener("submit", e => e.preventDefault());
})();

/* Sobre nosotros */
(function(){
  if (!hasEl("fam")) return;
  const box = $("fam");
  FAMILIA.forEach(p => {
    const c = el("div","per"), av = el("div","av");
    if (CONFIG.fotos[p.k]) av.append(imgEl(CONFIG.fotos[p.k], p.n)); else av.textContent = p.n[0];
    c.append(av, el("h4","",p.n), el("p","",p.r)); box.append(c);
  });
})();

/* Instagram: feed en vivo si hay URL, tarjetas de respaldo si no */
function pintarTiles(items, vivo){
  if (!hasEl("tiles")) return;
  const box = $("tiles"); box.replaceChildren();
  for (let i = 0; i < 6; i++){
    const it = items[i];
    const a = el("a","tile"); a.href = (it && it.url) || igUrl; a.target = "_blank"; a.rel = "noopener noreferrer"; a.setAttribute("aria-label","Ver en Instagram");
    if (it && it.src){ { const im = imgEl(it.src, it.alt); im.loading = "eager"; a.append(im); } if (it.tipo === "video") a.append(el("span","vid")); } else a.append(placeholder("Post " + (i+1)));
    box.append(a);
  }
  $("livetag").hidden = !vivo;
}
async function cargarFeed(){
  if (!CONFIG.feedUrl) return false;
  try{
    const r = await fetch(CONFIG.feedUrl, {cache:"no-store"}); if (!r.ok) return false;
    const j = await r.json(); const raw = j.posts || j.data || (Array.isArray(j) ? j : []);
    const items = raw.map(p => {
      const tipo = /VIDEO|REEL/i.test(p.mediaType || p.media_type || "") ? "video" : "foto";
      const src = p.thumbnailUrl || p.thumbnail_url || (p.sizes && p.sizes.medium && p.sizes.medium.mediaUrl) || p.mediaUrl || p.media_url;
      return {url: p.permalink, src, tipo, alt: String(p.caption || "").slice(0,120)};
    }).filter(x => x.src && x.url).slice(0,6);
    if (!items.length) return false;
    pintarTiles(items, true); return true;
  }catch(e){ return false; }
}
if (CONFIG.igEmbed && hasEl("tiles")){ const f = document.createElement("iframe"); f.src = igUrl + "embed"; f.title = "Instagram de Aesthetic Fitness"; f.loading = "lazy"; f.className = "igframe"; $("tiles").replaceChildren(f); $("tiles").className = "igwrap"; }
else pintarTiles(CONFIG.igTiles, false);
if (hasEl("igBtn")) $("igBtn").href = igUrl;
if (hasEl("igLink")) $("igLink").href = igUrl;
if (hasEl("tiles") && !CONFIG.igEmbed){ cargarFeed(); if (CONFIG.feedUrl) setInterval(cargarFeed, 10 * 60 * 1000); }

/* Ubicación */
(function(){
  if (!hasEl("dir")) return;
  const todo = t => CONFIG.borrador ? el("span","todo",t) : document.createTextNode("");
  $("dir").append(document.createTextNode(CONFIG.direccion + ", Mendoza"));
  if (CONFIG.mapa){ const a = el("a","btn","Cómo llegar"); a.href = CONFIG.mapa; a.target = "_blank"; a.rel = "noopener noreferrer"; $("mapa").append(a); }
  if (CONFIG.horarios) CONFIG.horarios.split("|").forEach((l,i) => { if (i) $("hor").append(document.createElement("br")); $("hor").append(document.createTextNode(l)); }); else $("hor").append(todo("[Días y horarios]"));
  $("waLink").href = waLink("Hola! Quiero info.");
  if (hasEl("mail")){ $("mail").href = "mailto:" + CONFIG.email; $("mail").textContent = CONFIG.email; }
})();

if (hasEl("fTel")) { const f = $("fTel"); f.href = waLink("Hola! Quiero info."); }
