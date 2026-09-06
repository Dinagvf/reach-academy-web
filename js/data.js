// OFERTA ACADÉMICA Y MAPEO DE CATEGORÍAS TARIFA
const coursesData = [
    { id: 1, category: "examenes", title: "TOEFL iBT", modality: "PARA ADMISIÓN Y BECAS EN EL EXTERIOR", description: "¿La universidad o beca que quieres te exige un puntaje mínimo de inglés? Te preparamos con estrategia, práctica de Speaking y Writing y simulacros reales hasta que lo alcances.", tarifaCategoria: "universitario" },
    { id: 2, category: "examenes", title: "Digital SAT", modality: "PARA APLICAR A UNIVERSIDADES EN EE.UU.", description: "El puntaje que las universidades estadounidenses miran de cerca. Preparación intensiva en Math y en Reading & Writing, enfocada en la nueva estructura digital del examen.", tarifaCategoria: "universitario" },
    { id: 3, category: "examenes", title: "Duolingo English Test (DET)", modality: "LA OPCIÓN MÁS RÁPIDA Y ECONÓMICA", description: "Cada vez más universidades lo aceptan, y se hace en línea — más rápido y económico que otros exámenes. Trabajamos el formato, los subpuntajes y la práctica con retroalimentación inmediata.", tarifaCategoria: "universitario" },
    { id: 4, category: "idiomas", title: "Inglés General", modality: "PARA DOMINAR EL IDIOMA A TU RITMO", description: "Desde cero o desde donde estés, hasta hablar con confianza. Un plan armado a tu nivel, con clases que avanzan cuando tú avanzas — sin apurar temas que aún no dominas.", tarifaCategoria: "escolar" },
    { id: 5, category: "idiomas", title: "Inglés Académico", modality: "SI SABES QUE PRESENTARÁS TOEFL O DUOLINGO", description: "¿Ya tienes una meta internacional en la mira? Construimos tu inglés con el examen como norte desde el primer día, para que llegues a la preparación final con una base sólida.", tarifaCategoria: "escolar" },
    { id: 6, category: "idiomas", title: "Francés", modality: "PARA TUS PLANES EN EUROPA", description: "¿Piensas estudiar, trabajar o mudarte a Europa? Estamos formando grupos de francés desde nivel principiante. Escríbenos y te avisamos apenas abra el próximo.", tarifaCategoria: "escolar" },
    { id: 7, category: "stem", title: "Materias de Bachillerato", modality: "PARA IR AL DÍA Y MEJORAR TUS NOTAS", description: "Matemática, física, química e inglés, al ritmo de tu colegio. ¿Tienes un examen o una entrega cerca? Pausamos el plan y te ayudamos a prepararla — porque no basta con entender la materia, hay que irte bien en clase.", tarifaCategoria: "escolar" },
    { id: 8, category: "stem", title: "Nivelación Internacional", modality: "SI TU META ES ESTUDIAR FUERA DE VENEZUELA", description: "El pénsum venezolano en matemática, física y química deja vacíos frente a lo que se estudia en otros países y en exámenes como el SAT. Los identificamos y los cerramos con el mismo contenido que se aprende afuera, para que nada te tome por sorpresa.", tarifaCategoria: "escolar" },
    { id: 9, category: "stem", title: "Introducción a Economía y Negocios", modality: "PARA FUTUROS ESTUDIANTES DE NEGOCIOS, FINANZAS O ECONOMÍA", description: "¿Piensas estudiar administración, economía o finanzas? Adelántate con los fundamentos que el colegio casi no toca, de la mano de una fundadora con título en Business y Economics y un máster en Finanzas.", tarifaCategoria: "universitario" },
    { id: 10, category: "admisiones", title: "Asesoría de Admisión Académica", modality: "PARA UNIVERSIDADES EN EE.UU. Y EUROPA", description: "Te guiamos paso a paso: selección de universidades, ensayos, requisitos, plazos y documentación. Convertimos un proceso que parece imposible desde Venezuela en pasos claros — ya sea que tu meta esté en Estados Unidos o en Europa.", tarifaCategoria: "universitario" },
    { id: 11, category: "admisiones", title: "Asesoría de Admisión Deportiva", modality: "PARA ESTUDIANTES-ATLETAS", description: "Si practicas un deporte a buen nivel, puede ser tu vía de entrada a una universidad en el exterior. Te orienta alguien que vivió el proceso desde adentro: entré a una universidad de EE.UU. como estudiante-atleta y jugué en su equipo. Sé cómo funciona el sistema, qué buscan los entrenadores y cómo prepararte.", tarifaCategoria: "universitario" },
    { id: 12, category: "admisiones", title: "Test Vocacional (con TES)", modality: "SI AÚN NO SABES QUÉ ESTUDIAR", description: "Antes de elegir universidad, hay que elegir carrera. A través de nuestra alianza con TES, aplicamos un test de aptitudes con resultados en 48 horas que te ayuda a descubrir qué camino se ajusta mejor a ti — con bases reales, no corazonadas.", tarifaCategoria: "vocacional" },
    { id: 13, category: "olimpiadas", title: "Olimpiadas de Matemáticas", modality: "PARA MENTES QUE QUIEREN MÁS QUE EL COLEGIO", description: "El colegio se queda corto para quienes de verdad disfrutan la matemática. Entrenamos el pensamiento y las técnicas de resolución de problemas que exigen las olimpiadas, con un profesor que compite y conoce ese mundo desde adentro. Clases 100% online.", tarifaCategoria: "universitario" }
];

const interestCategoryMap = {
    "Idiomas": "idiomas",
    "Refuerzo Escolar": "stem",
    "Preparación para Exámenes": "examenes",
    "Admisión Universitaria": "admisiones",
    "Olimpiadas de Matemáticas": "olimpiadas"
};

// TARIFAS BASE DE RESPALDO LOCAL (MATRIZ OFICIAL REACH ACADEMY)
const TARIFAS_FALLBACK = [
    // Escolar - Puntuales
    { id_programa: "escolar", modalidad: "puntual", duracion_min: 45, horas_semanales: 1, precio_eur: 11, precio_usd: 10 },
    { id_programa: "escolar", modalidad: "puntual", duracion_min: 60, horas_semanales: 1, precio_eur: 15, precio_usd: 13 },
    { id_programa: "escolar", modalidad: "puntual", duracion_min: 90, horas_semanales: 1, precio_eur: 22, precio_usd: 20 },
    { id_programa: "escolar", modalidad: "puntual", duracion_min: 120, horas_semanales: 1, precio_eur: 30, precio_usd: 26 },
    
    // Universitario - Puntuales
    { id_programa: "universitario", modalidad: "puntual", duracion_min: 45, horas_semanales: 1, precio_eur: 14, precio_usd: 12 },
    { id_programa: "universitario", modalidad: "puntual", duracion_min: 60, horas_semanales: 1, precio_eur: 18, precio_usd: 16 },
    { id_programa: "universitario", modalidad: "puntual", duracion_min: 90, horas_semanales: 1, precio_eur: 27, precio_usd: 24 },
    { id_programa: "universitario", modalidad: "puntual", duracion_min: 120, horas_semanales: 1, precio_eur: 36, precio_usd: 32 },

    // Escolar - Mensual 45 Min
    { id_programa: "escolar", modalidad: "mensual", duracion_min: 45, horas_semanales: 1, precio_eur: 41, precio_usd: 40 },
    { id_programa: "escolar", modalidad: "mensual", duracion_min: 45, horas_semanales: 2, precio_eur: 82, precio_usd: 80 },
    { id_programa: "escolar", modalidad: "mensual", duracion_min: 45, horas_semanales: 3, precio_eur: 123, precio_usd: 120 },
    { id_programa: "escolar", modalidad: "mensual", duracion_min: 45, horas_semanales: 4, precio_eur: 164, precio_usd: 160 },
    { id_programa: "escolar", modalidad: "mensual", duracion_min: 45, horas_semanales: 5, precio_eur: 205, precio_usd: 200 },
    { id_programa: "escolar", modalidad: "mensual", duracion_min: 45, horas_semanales: 6, precio_eur: 246, precio_usd: 240 },

    // Escolar - Mensual 60 Min
    { id_programa: "escolar", modalidad: "mensual", duracion_min: 60, horas_semanales: 1, precio_eur: 55, precio_usd: 50 },
    { id_programa: "escolar", modalidad: "mensual", duracion_min: 60, horas_semanales: 2, precio_eur: 109, precio_usd: 100 },
    { id_programa: "escolar", modalidad: "mensual", duracion_min: 60, horas_semanales: 3, precio_eur: 164, precio_usd: 150 },
    { id_programa: "escolar", modalidad: "mensual", duracion_min: 60, horas_semanales: 4, precio_eur: 218, precio_usd: 200 },
    { id_programa: "escolar", modalidad: "mensual", duracion_min: 60, horas_semanales: 5, precio_eur: 273, precio_usd: 250 },
    { id_programa: "escolar", modalidad: "mensual", duracion_min: 60, horas_semanales: 6, precio_eur: 328, precio_usd: 300 },

    // Universitario - Mensual 45 Min
    { id_programa: "universitario", modalidad: "mensual", duracion_min: 45, horas_semanales: 1, precio_eur: 51, precio_usd: 48 },
    { id_programa: "universitario", modalidad: "mensual", duracion_min: 45, horas_semanales: 2, precio_eur: 102, precio_usd: 96 },
    { id_programa: "universitario", modalidad: "mensual", duracion_min: 45, horas_semanales: 3, precio_eur: 153, precio_usd: 144 },
    { id_programa: "universitario", modalidad: "mensual", duracion_min: 45, horas_semanales: 4, precio_eur: 204, precio_usd: 192 },
    { id_programa: "universitario", modalidad: "mensual", duracion_min: 45, horas_semanales: 5, precio_eur: 255, precio_usd: 240 },
    { id_programa: "universitario", modalidad: "mensual", duracion_min: 45, horas_semanales: 6, precio_eur: 306, precio_usd: 288 },

    // Universitario - Mensual 60 Min
    { id_programa: "universitario", modalidad: "mensual", duracion_min: 60, horas_semanales: 1, precio_eur: 70, precio_usd: 65 },
    { id_programa: "universitario", modalidad: "mensual", duracion_min: 60, horas_semanales: 2, precio_eur: 140, precio_usd: 130 },
    { id_programa: "universitario", modalidad: "mensual", duracion_min: 60, horas_semanales: 3, precio_eur: 210, precio_usd: 195 },
    { id_programa: "universitario", modalidad: "mensual", duracion_min: 60, horas_semanales: 4, precio_eur: 280, precio_usd: 260 },
    { id_programa: "universitario", modalidad: "mensual", duracion_min: 60, horas_semanales: 5, precio_eur: 350, precio_usd: 325 },
    { id_programa: "universitario", modalidad: "mensual", duracion_min: 60, horas_semanales: 6, precio_eur: 420, precio_usd: 390 }
];

// ENDPOINTS Y TASA AUTOMÁTICA
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTNpJc9L0jMDbp9IqnFxCO_Wl4iMkJ_RG9CWNr2gkDpGYbQ-wiCZtpQlHcKYyMYw4phJLvZ5Mmu1Z2_/pub?gid=0&single=true&output=csv";
const BCV_API_URL = "https://ve.dolarapi.com/v1/euros/oficial";

let TASA_BCV_EUR = 42.50; // Respaldo base
let tarifasData = [...TARIFAS_FALLBACK];
let cursoSeleccionadoObj = null;

// OBTENER TASA BCV AUTOMÁTICAMENTE DESDE LA API EN VIVO
async function obtenerTasaBCV() {
    try {
        const response = await fetch(BCV_API_URL);
        if (!response.ok) throw new Error("Error al consultar la API de BCV");
        const data = await response.json();
        
        if (data && (data.promedio || data.monto)) {
            TASA_BCV_EUR = parseFloat(data.promedio || data.monto);
            console.log(`Tasa BCV (EUR) automatizada en vivo: Bs. ${TASA_BCV_EUR}`);
        }
    } catch (error) {
        console.warn("Usando tasa de respaldo:", TASA_BCV_EUR, error);
    }
}

// CARGAR MATRIZ DE TARIFAS DESDE GOOGLE SHEETS
async function cargarTarifasDesdeGoogleSheets() {
    try {
        const response = await fetch(SHEET_CSV_URL);
        if (!response.ok) throw new Error("Respuesta no OK de Google Sheets");

        const dataText = await response.text();
        const lines = dataText.split(/\r?\n/).filter(l => l.trim() !== "");
        
        if (lines.length > 1) {
            const parsed = lines.slice(1).map(line => {
                const cols = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(c => c.trim().replace(/^"|"$/g, ''));
                return {
                    id_programa: (cols[0] || "").toLowerCase().trim(),
                    nivel_categoria: (cols[1] || "").trim(),
                    modalidad: (cols[2] || "").toLowerCase().trim(),
                    duracion_min: parseInt(cols[3]) || 0,
                    horas_semanales: parseInt(cols[4]) || 1,
                    clases_mes: parseInt(cols[5]) || 0,
                    precio_eur: parseFloat(cols[6]) || 0,
                    precio_usd: parseFloat(cols[7]) || 0,
                    moneda_pago: cols[8] || "EUR / USD"
                };
            });
            if (parsed.length > 0) {
                tarifasData = parsed;
                console.log("Tarifas sincronizadas desde Google Sheets:", tarifasData.length, "registros.");
            }
        }
    } catch (error) {
        console.warn("Usando matriz de respaldo local para tarifas:", error.message);
    }
}

// RENDERIZAR TARJETAS
function renderCourses(categoryToFilter = "examenes") {
    const container = document.getElementById("coursesContainer");
    if (!container) return;

    container.className = "row g-4 justify-content-center";
    container.innerHTML = "";

    const filteredCourses = coursesData.filter(course => course.category === categoryToFilter);

    filteredCourses.forEach(course => {
        const cardHTML = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card course-card h-100 p-4 shadow-sm">
                    <div class="card-body d-flex flex-column justify-content-between p-0">
                        <div>
                            <small class="text-muted fw-bold d-block mb-2">${course.modality}</small>
                            <h3 class="h5 fw-bold text-navy mb-2" style="color: var(--reach-navy);">${course.title}</h3>
                            <p class="card-text text-secondary mb-4">${course.description}</p>
                        </div>
                        <div>
                            <div class="row g-2">
                                <div class="col-5">
                                    <button class="btn btn-outline-secondary w-100 py-2 btn-ver-precio" 
                                            data-bs-toggle="modal" 
                                            data-bs-target="#modalPrecios" 
                                            data-course-id="${course.id}">
                                        <i class="bi bi-calculator me-1"></i>Precios
                                    </button>
                                </div>
                                <div class="col-7">
                                    <a href="#contacto" class="btn btn-outline-reach w-100 py-2 btn-select-course" data-course-title="${course.title}">Más Info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });

    attachCourseSelectionEvents();
}

function attachCourseSelectionEvents() {
    const courseButtons = document.querySelectorAll(".btn-select-course");
    const programaSelect = document.getElementById("programaContacto");

    courseButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const courseTitle = e.currentTarget.getAttribute("data-course-title");
            if (programaSelect && courseTitle) {
                programaSelect.value = courseTitle;
            }
        });
    });
}

// CÁLCULO DINÁMICO EN EL MODAL
function calcularPrecioModal() {
    if (!cursoSeleccionadoObj) return;

    const vistaRegulares = document.getElementById("vistaClasesRegulares");
    const contenedorHoras = document.getElementById("contenedorHorasSemanales");

    // Excepción Especial: Test Vocacional (con TES)
    if (cursoSeleccionadoObj.tarifaCategoria === "vocacional") {
        if (vistaRegulares) vistaRegulares.classList.add("d-none");
        document.getElementById("precioEUR").innerText = "N/A";
        document.getElementById("precioBS").innerText = "Pago exclusivo en USD";
        document.getElementById("precioUSD").innerText = "$300";
        return;
    }

    if (vistaRegulares) vistaRegulares.classList.remove("d-none");

    const modalidadInput = document.getElementById("selectModalidad").value.toLowerCase().trim(); 
    const duracionInput = parseInt(document.getElementById("selectDuracion").value);
    const horasSemanalesInput = parseInt(document.getElementById("selectHorasSemanales").value);

    if (modalidadInput === "puntual") {
        if (contenedorHoras) contenedorHoras.classList.add("d-none");
    } else {
        if (contenedorHoras) contenedorHoras.classList.remove("d-none");
    }

    // Búsqueda de tarifa coincidente
    const tarifaEncontrada = tarifasData.find(t => {
        const idCoincide = t.id_programa === cursoSeleccionadoObj.tarifaCategoria.toLowerCase().trim();
        const modalidadCoincide = t.modalidad.includes(modalidadInput) || modalidadInput.includes(t.modalidad);
        const duracionCoincide = t.duracion_min === duracionInput;

        if (modalidadInput === "puntual") {
            return idCoincide && modalidadCoincide && duracionCoincide;
        } else {
            return idCoincide && modalidadCoincide && duracionCoincide && t.horas_semanales === horasSemanalesInput;
        }
    });

    if (tarifaEncontrada) {
        const eur = tarifaEncontrada.precio_eur;
        const usd = tarifaEncontrada.precio_usd;
        const bs = eur * TASA_BCV_EUR;

        document.getElementById("precioEUR").innerText = `€${eur}`;
        document.getElementById("precioUSD").innerText = `$${usd}`;
        document.getElementById("precioBS").innerText = `Bs. ${bs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
        document.getElementById("precioEUR").innerText = "Consultar";
        document.getElementById("precioUSD").innerText = "Consultar";
        document.getElementById("precioBS").innerText = "Consultar";
    }
}

// INICIALIZACIÓN DE EVENTOS AL CARGAR LA PÁGINA
document.addEventListener("DOMContentLoaded", async () => {
    // 1. Obtener la tasa en vivo del BCV desde la API
    await obtenerTasaBCV();

    // 2. Render inicial de tarjetas
    renderCourses("examenes");

    // 3. Intentar sincronización con Google Sheets
    await cargarTarifasDesdeGoogleSheets();

    // 4. Control de pestañas
    const tabButtons = document.querySelectorAll("#programTabs .nav-link");
    tabButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            e.currentTarget.classList.add("active");
            renderCourses(e.currentTarget.getAttribute("data-category"));
        });
    });

    // 5. Abrir modal de precios
    document.addEventListener("click", (e) => {
        const btnVerPrecio = e.target.closest(".btn-ver-precio");
        if (btnVerPrecio) {
            const courseId = parseInt(btnVerPrecio.getAttribute("data-course-id"));
            cursoSeleccionadoObj = coursesData.find(c => c.id === courseId);

            if (cursoSeleccionadoObj) {
                document.getElementById("modalCursoTitulo").innerText = cursoSeleccionadoObj.title;
                calcularPrecioModal();
            }
        }
    });

    // 6. Escuchar cambios en los selectores del modal
    ["selectModalidad", "selectDuracion", "selectHorasSemanales"].forEach(id => {
        const elem = document.getElementById(id);
        if (elem) elem.addEventListener("change", calcularPrecioModal);
    });

    // 7. Botón cotizar WhatsApp desde el modal
    const btnCotizarWhatsApp = document.getElementById("btnCotizarWhatsApp");
    if (btnCotizarWhatsApp) {
        btnCotizarWhatsApp.addEventListener("click", () => {
            const curso = cursoSeleccionadoObj ? cursoSeleccionadoObj.title : "Programa";
            const eur = document.getElementById("precioEUR").innerText;
            const bs = document.getElementById("precioBS").innerText;
            const usd = document.getElementById("precioUSD").innerText;

            let msg = `¡Hola Reach Academy! 👋\n\n`;
            msg += `Quisiera consultar información y disponibilidad para el programa *${curso}*.\n`;
            msg += `• *Estimado Modal:* ${eur} (${bs}) / ${usd}\n\n`;
            msg += `¿Podrían indicarme los horarios disponibles?`;

            window.open(`https://api.whatsapp.com/send?phone=584121369189&text=${encodeURIComponent(msg)}`, "_blank");
        });
    }

    // 8. Botón "Explorar" del Hero
    const btnExplorar = document.getElementById("btnExplorar");
    if (btnExplorar) {
        btnExplorar.addEventListener("click", () => {
            const selectPerfil = document.getElementById("selectPerfil");
            const selectInteres = document.getElementById("selectInteres");
            const rolContacto = document.getElementById("rolContacto");

            if (selectPerfil && rolContacto) {
                rolContacto.value = selectPerfil.value;
                if (typeof actualizarRequisitosRol === "function") actualizarRequisitosRol();
            }

            if (selectInteres) {
                const interesSeleccionado = selectInteres.value;
                const categoriaObjetivo = interestCategoryMap[interesSeleccionado] || "examenes";

                renderCourses(categoriaObjetivo);

                tabButtons.forEach(btn => {
                    if (btn.getAttribute("data-category") === categoriaObjetivo) {
                        btn.classList.add("active");
                    } else {
                        btn.classList.remove("active");
                    }
                });

                document.getElementById("programas")?.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // 9. Validación condicional del formulario de contacto
    const rolContacto = document.getElementById("rolContacto");
    const inputEstudiante = document.getElementById("nombreEstudiante");
    const asteriscoEstudiante = document.getElementById("asteriscoEstudiante");

    function actualizarRequisitosRol() {
        if (!rolContacto || !inputEstudiante) return;

        if (rolContacto.value === "Representante") {
            inputEstudiante.setAttribute("required", "required");
            if (asteriscoEstudiante) asteriscoEstudiante.classList.remove("d-none");
            inputEstudiante.placeholder = "Ej. Alejandro Velazco (Obligatorio)";
        } else {
            inputEstudiante.removeAttribute("required");
            if (asteriscoEstudiante) asteriscoEstudiante.classList.add("d-none");
            inputEstudiante.placeholder = "Opcional si eres el estudiante";
        }
    }

    if (rolContacto) {
        rolContacto.addEventListener("change", actualizarRequisitosRol);
        actualizarRequisitosRol();
    }

    // 10. Formulario de WhatsApp
    const whatsappForm = document.getElementById("whatsappForm");
    if (whatsappForm) {
        whatsappForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const rol = rolContacto.value;
            const nombreSolicitante = document.getElementById("nombreContacto").value.trim();
            const nombreEstudianteInput = inputEstudiante.value.trim();

            if (rol === "Representante" && nombreEstudianteInput === "") {
                alert("Por favor, ingresa el nombre del estudiante.");
                inputEstudiante.focus();
                return;
            }

            const phoneNumber = "584121369189";
            const edad = document.getElementById("edadEstudiante").value.trim();
            const anoGraduacion = document.getElementById("anoBachillerato").value;
            const programa = document.getElementById("programaContacto").value;
            const mensajeAdicional = document.getElementById("mensajeContacto").value.trim();

            const nombreEstudianteFinal = (rol === "Estudiante" && nombreEstudianteInput === "") ? nombreSolicitante : nombreEstudianteInput;

            let textMessage = `¡Hola Reach Academy! 👋\n\n`;
            textMessage += `Solicitud de Información / Prueba de Nivelación:\n`;
            textMessage += `• *Solicitante:* ${nombreSolicitante} (${rol})\n`;
            textMessage += `• *Estudiante:* ${nombreEstudianteFinal}\n`;
            textMessage += `• *Edad:* ${edad} años\n`;
            textMessage += `• *Nivel escolar:* ${anoGraduacion}\n`;
            textMessage += `• *Programa de interés:* ${programa}\n`;

            if (mensajeAdicional !== "") {
                textMessage += `\n*Consulta adicional:* ${mensajeAdicional}`;
            }

            window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(textMessage)}`, "_blank");
        });
    }
});