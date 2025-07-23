const malla = {
  "I Semestre": [
    { nombre: "Biología celular (DBIO 1069)", codigo: "DBIO1069", abre: ["DBIO1075", "DMOR0012", "DBIO1076", "DBIO1072"] },
    { nombre: "Anatomía humana (DMOR 0003)", codigo: "DMOR0003", abre: ["DBIO1075"], prerrequisitos: [] },
    { nombre: "Química general y orgánica (DQUI 1035)", codigo: "DQUI1035", abre: ["DBIO1076"], prerrequisitos: [] },
    { nombre: "Bases conceptuales de la gestión del cuidado (ENFE A001)", codigo: "ENFEA001", abre: ["ENFEB001", "ENFEB002", "ENFEC003"], prerrequisitos: [] },
    { nombre: "Psicología del desarrollo y aprendizaje (ENFE A0002)", codigo: "ENFEA002", abre: ["ENFEC002"], prerrequisitos: [] },
  ],

  "II Semestre": [
    { nombre: "Estrategias para el aprendizaje (ASIGESA01)", codigo: "ASIGESA01", prerrequisitos: [] },
    { nombre: "Fisiología humana (DBIO 1075)", codigo: "DBIO1075", abre: ["DBIO1044", "DBIO1045", "ENFEC001", "ENFEC002"], prerrequisitos: ["DBIO1069","DMOR0003"] },
    { nombre: "Histoembriología (DMOR 0012)", codigo: "DMOR0012", prerrequisitos: ["DBIO1069"] },
    { nombre: "Bioquímica general (DBIO 1076)", codigo: "DBIO1076", prerrequisitos: ["DQUI1035"] },
    { nombre: "Primeros auxilios (ENFE B001)", codigo: "ENFEB001", prerrequisitos: ["ENFEA001"] },
    { nombre: "Socioantropología en la Salud (ENFE B002)", codigo: "ENFEB002", prerrequisitos: ["ENFEA001"] },
    { nombre: "Formación integral I", codigo: "FORMI", prerrequisitos: [] },
  ],

  "III Semestre": [
    { nombre: "Microbiología general (DBIO 1072)", codigo: "DBIO1072", prerrequisitos: ["DBIO1069"] },
    { nombre: "Farmacología general (DBIO 1044)", codigo: "DBIO1044", prerrequisitos: ["DBIO1075","DMOR0012","DBIO1076"] },
    { nombre: "Farmacología aplicada (DBIO 1045)", codigo: "DBIO1045", prerrequisitos: ["DBIO1075","DMOR0012","DBIO1076"] },
    { nombre: "Fisiopatología (ENFE C001)", codigo: "ENFEC001", prerrequisitos: ["DBIO1075","DMOR0012","DBIO1076"] },
    { nombre: "Enfermería en el ciclo vital (ENFE C002)", codigo: "ENFEC002", prerrequisitos: ["ENFEA002","DBIO1075","DMOR0012","DBIO1076","ENFEB001"] },
    { nombre: "Educación en salud (ENFE C003)", codigo: "ENFEC003", prerrequisitos: ["ENFEA001"] },
    { nombre: "Antropología (FILS 0001)", codigo: "FILS0001", prerrequisitos: [] },
    { nombre: "Formación integral II", codigo: "FORMII", prerrequisitos: ["FORMI"] },
  ],

  "IV Semestre": [
    { nombre: "Enfermería en Salud Comunitaria I (ENFE D001)", codigo: "ENFED001", prerrequisitos: ["ENFEC002","ENFEC003"] },
    { nombre: "Metodologías de enseñanza y aprendizaje en salud (ENFE D002)", codigo: "ENFED002", prerrequisitos: ["DBIO1072","DBIO1044","DBIO1045","ENFEC001","ENFEC002","ENFEC003"] },
    { nombre: "Gestión del cuidado en la persona (ENFE D003)", codigo: "ENFED003", prerrequisitos: ["DBIO1072","DBIO1044","DBIO1045","ENFEC001","ENFEC002"] },
    { nombre: "Comunicación e interacción humana (ENFE D004)", codigo: "ENFED004", prerrequisitos: [] },
    { nombre: "Epidemiología (ENFE 0014)", codigo: "ENFE0014", prerrequisitos: [] },
    { nombre: "Ética (FILS 0002)", codigo: "FILS0002", prerrequisitos: ["FILS0001"] },
    { nombre: "Formación integral III", codigo: "FORMIII", prerrequisitos: ["FORMII"] },
  ],

  "V Semestre": [
    { nombre: "Electivo de formación integral (ELEFORIN 01)", codigo: "ELEFORIN01", prerrequisitos: ["FILS0002"] },
    { nombre: "Gestión del cuidado en el adulto (ENFE E001)", codigo: "ENFEE001", prerrequisitos: ["ENFED001","ENFED002","ENFED003","ENFED004"] },
    { nombre: "Enfermería en Salud Mental (ENFE E002)", codigo: "ENFEE002", prerrequisitos: ["ENFED001","ENFED002","ENFED003","ENFED004"] },
    { nombre: "Administración en enfermería (ENFE E003)", codigo: "ENFEE003", prerrequisitos: ["FORMIII"] },
  ],

  "VI Semestre": [
    { nombre: "Gestión del cuidado en el Adulto Mayor (ENFE F001)", codigo: "ENFEF001", prerrequisitos: ["ENFEE001","ENFEE002"] },
    { nombre: "Gestión del cuidado en la Mujer y en el Recién Nacido (ENFE F002)", codigo: "ENFEF002", prerrequisitos: ["ENFEE001","ENFEE002"] },
    { nombre: "Enfermería en alteraciones de la salud mental (ENFE F003)", codigo: "ENFEF003", prerrequisitos: ["ENFEE001","ENFEE002"] },
    { nombre: "Gestión de enfermería en Servicios Clínicos (ENFE F004)", codigo: "ENFEF004", prerrequisitos: ["ENFEE003"] },
    { nombre: "Estadística (DMAE E003)", codigo: "DMAEE003", prerrequisitos: ["ENFE0014"] },
  ],

  "VII Semestre": [
    { nombre: "Electivo profesional (ELE01ENFE)", codigo: "ELE01ENFE", prerrequisitos: [] },
    { nombre: "Enfermería de Urgencia (ENFE G001)", codigo: "ENFEG001", prerrequisitos: ["ENFEF001","ENFEF002","ENFEF003"] },
    { nombre: "Gestión del cuidado en el Niño y la Niña (ENFE G002)", codigo: "ENFEG002", prerrequisitos: ["ENFEF001","ENFEF002","ENFEF003"] },
    { nombre: "Investigación (ENFE 0028)", codigo: "ENFE0028", prerrequisitos: ["DMAEE003"] },
    { nombre: "Ética en enfermería (ENFE 0031)", codigo: "ENFE0031", prerrequisitos: ["ENFEE001"] },
  ],

  "VIII Semestre": [
    { nombre: "Enfermería en Salud Comunitaria II (ENFE H001)", codigo: "ENFEH001", prerrequisitos: ["ENFEG001","ENFEG002"] },
    { nombre: "Investigación II (ENFE 0033)", codigo: "ENFE0033", prerrequisitos: ["ENFE0028"] },
    { nombre: "Gestión del cuidado en los Servicios de Urgencia (ENFE 0034)", codigo: "ENFE0034", prerrequisitos: ["ENFEG001","ENFEG002"] },
    { nombre: "Gestión del cuidado en el adolescente (ENFE 0035)", codigo: "ENFE0035", prerrequisitos: ["ENFEG002"] },
  ],

  "IX Semestre": [
    { nombre: "Internado intrahospitalario (ENFE I001)", codigo: "ENFEI001", prerrequisitos: ["ENFEH001","ENFE0033","ENFE0034","ENFE0035","FORMIV"] },
  ],

  "X Semestre": [
    { nombre: "Internado extrahospitalario (ENFE I002)", codigo: "ENFEI002", prerrequisitos: ["ENFEH001","ENFE0033","ENFE0034","ENFE0035","FORMIV"] },
  ],

  // Se agregó Formación integral IV, que era prerrequisito pero no listado:
  "Formación integral IV": [
    { nombre: "Formación integral IV", codigo: "FORMIV", prerrequisitos: ["FORMIII"] }
  ]
};

// Estado inicial de cada ramo
const estadoRamos = {};

function crearMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  // Inicializar estados
  Object.entries(malla).forEach(([semestre, ramos]) => {
    const col = document.createElement("div");
    col.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    col.appendChild(titulo);

    ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.classList.add("ramo");
      div.textContent = ramo.nombre;
      div.dataset.codigo = ramo.codigo;

      // Guardar estado
      estadoRamos[ramo.codigo] = {
        aprobado: false,
        prerrequisitos: ramo.prerrequisitos || [],
        abre: ramo.abre || [],
        elemento: div,
      };

      // Al principio bloqueamos si tiene prerrequisitos
      if ((ramo.prerrequisitos || []).length > 0) {
        div.classList.add("bloqueado");
      }

      div.addEventListener("click", () => toggleAprobado(ramo.codigo));

      col.appendChild(div);
    });

    container.appendChild(col);
  });
}

function toggleAprobado(codigo) {
  const ramo = estadoRamos[codigo];
  if (ramo.elemento.classList.contains("bloqueado")) return; // no se puede aprobar si está bloqueado

  ramo.aprobado = !ramo.aprobado;

  if (ramo.aprobado) {
    ramo.elemento.classList.add("aprobado");
  } else {
    ramo.elemento.classList.remove("aprobado");
  }

  actualizarBloqueos();
}

function actualizarBloqueos() {
  Object.values(estadoRamos).forEach(ramo => {
    if (ramo.prerrequisitos.length === 0) {
     
      ramo.elemento.classList.remove("bloqueado");
      return;
    }

    const desbloqueado = ramo.prerrequisitos.every(codPre => estadoRamos[codPre]?.aprobado);

    if (desbloqueado) {
      ramo.elemento.classList.remove("bloqueado");
    } else {

      if (ramo.aprobado) {
        ramo.aprobado = false;
        ramo.elemento.classList.remove("aprobado");
      }
      ramo.elemento.classList.add("bloqueado");
    }
  });
}


crearMalla();
