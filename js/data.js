// OFERTA ACADÉMICA DE REACH ACADEMY
const coursesData = [
    {
        id: 1,
        category: "examenes",
        title: "TOEFL iBT",
        modality: "PARA ADMISIÓN Y BECAS EN EL EXTERIOR",
        description: "¿La universidad o beca que quieres te exige un puntaje mínimo de inglés? Te preparamos con estrategia, práctica de Speaking y Writing y simulacros reales hasta que lo alcances."
    },
    {
        id: 2,
        category: "examenes",
        title: "Digital SAT",
        modality: "PARA APLICAR A UNIVERSIDADES EN EE.UU.",
        description: "El puntaje que las universidades estadounidenses miran de cerca. Preparación intensiva en Math y en Reading & Writing, enfocada en la nueva estructura digital del examen."
    },
    {
        id: 3,
        category: "examenes",
        title: "Duolingo English Test (DET)",
        modality: "LA OPCIÓN MÁS RÁPIDA Y ECONÓMICA",
        description: "Cada vez más universidades lo aceptan, y se hace en línea — más rápido y económico que otros exámenes. Trabajamos el formato, los subpuntajes y la práctica con retroalimentación inmediata."
    },
    {
        id: 4,
        category: "idiomas",
        title: "Inglés General",
        modality: "PARA DOMINAR EL IDIOMA A TU RITMO",
        description: "Desde cero o desde donde estés, hasta hablar con confianza. Un plan armado a tu nivel, con clases que avanzan cuando tú avanzas — sin apurar temas que aún no dominas."
    },
    {
        id: 5,
        category: "idiomas",
        title: "Inglés Académico",
        modality: "SI SABES QUE PRESENTARÁS TOEFL O DUOLINGO",
        description: "¿Ya tienes una meta internacional en la mira? Construimos tu inglés con el examen como norte desde el primer día, para que llegues a la preparación final con una base sólida."
    },
    {
        id: 6,
        category: "idiomas",
        title: "Francés",
        modality: "PARA TUS PLANES EN EUROPA",
        description: "¿Piensas estudiar, trabajar o mudarte a Europa? Estamos forming grupos de francés desde nivel principiante. Escríbenos y te avisamos apenas abra el próximo."
    },
    {
        id: 7,
        category: "stem",
        title: "Materias de Bachillerato",
        modality: "PARA IR AL DÍA Y MEJORAR TU NOTAS",
        description: "Matemática, física, química e inglés, al ritmo de tu colegio. ¿Tienes un examen o una entrega cerca? Pausamos el plan y te ayudamos a prepararla — porque no basta con entender la materia, hay que irte bien en clase."
    },
    {
        id: 8,
        category: "stem",
        title: "Nivelación Internacional",
        modality: "SI TU META ES ESTUDIAR FUERA DE VENEZUELA",
        description: "El pénsum venezolano en matemática, física y química deja vacíos frente a lo que se estudia en otros países y en exámenes como el SAT. Los identificamos y los cerramos con el mismo contenido que se aprende afuera, para que nada te tome por sorpresa."
    },
    {
        id: 9,
        category: "stem",
        title: "Introducción a Economía y Negocios",
        modality: "PARA FUTUROS ESTUDIANTES DE NEGOCIOS, FINANZAS O ECONOMÍA",
        description: "¿Piensas estudiar administración, economía o finanzas? Adelántate con los fundamentos que el colegio casi no toca, de la mano de una fundadora con título en Business y Economics y un máster en Finanzas."
    },
    {
        id: 10,
        category: "admisiones",
        title: "Asesoría de Admisión Académica",
        modality: "PARA UNIVERSIDADES EN EE.UU. Y EUROPA",
        description: "Te guiamos paso a paso: selección de universidades, ensayos, requisitos, plazos y documentación. Convertimos un proceso que parece imposible desde Venezuela en pasos claros — ya sea que tu meta esté en Estados Unidos o en Europa."
    },
    {
        id: 11,
        category: "admisiones",
        title: "Asesoría de Admisión Deportiva",
        modality: "PARA ESTUDIANTES-ATLETAS",
        description: "Si practicas un deporte a buen nivel, puede ser tu vía de entrada a una universidad en el exterior. Te orienta alguien que vivió el proceso desde adentro: entré a una universidad de EE.UU. como estudiante-atleta y jugué en su equipo. Sé cómo funciona el sistema, qué buscan los entrenadores y cómo prepararte."
    },
    {
        id: 12,
        category: "admisiones",
        title: "Test Vocacional (con TES)",
        modality: "SI AÚN NO SABES QUÉ ESTUDIAR",
        description: "Antes de elegir universidad, hay que elegir carrera. A través de nuestra alianza con TES, aplicamos un test de aptitudes con resultados en 48 horas que te ayuda a descubrir qué camino se ajusta mejor a ti — con bases reales, no corazonadas."
    },
    {
        id: 13,
        category: "olimpiadas",
        title: "Olimpiadas de Matemáticas",
        modality: "PARA MENTES QUE QUIEREN MÁS QUE EL COLEGIO",
        description: "El colegio se queda corto para quienes de verdad disfrutan la matemática. Entrenamos el pensamiento y las técnicas de resolución de problemas que exigen las olimpiadas, con un profesor que compite y conoce ese mundo desde adentro. Clases 100% online."
    }
];

// FUNCIÓN PARA RENDERIZAR LAS TARJETAS
function renderCourses(categoryToFilter = "examenes") {
    const container = document.getElementById("coursesContainer");
    if (!container) return;

    container.innerHTML = ""; // Limpiar contenedor

    // Filtrar cursos por categoría
    const filteredCourses = coursesData.filter(course => course.category === categoryToFilter);

    // Inyectar HTML de las tarjetas
    filteredCourses.forEach(course => {
        const cardHTML = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card course-card h-100 p-4 shadow-sm">
                    <div class="card-body d-flex flex-column justify-content-between p-0">
                        <div>
                            <small class="text-muted fw-bold d-block mb-2">${course.modality}</small>
                            <h3 class="h5 fw-bold text-navy mb-3" style="color: var(--reach-navy);">${course.title}</h3>
                            <p class="card-text text-secondary mb-4">${course.description}</p>
                        </div>
                        <div>
                            <a href="#contacto" class="btn btn-outline-reach w-100 py-2">Más Información</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// INICIALIZACIÓN DE EVENTOS
document.addEventListener("DOMContentLoaded", () => {
    // 1. Cargar la categoría por defecto
    renderCourses("examenes");

    // 2. Control de clicks en los botones dentro del ul#programTabs
    const tabButtons = document.querySelectorAll("#programTabs .nav-link");
    tabButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            
            // Usamos e.currentTarget para asegurarnos de seleccionar el button completo
            const targetButton = e.currentTarget;
            targetButton.classList.add("active");

            const selectedCategory = targetButton.getAttribute("data-category");
            renderCourses(selectedCategory);
        });
    });

    // 3. Formulario de WhatsApp
    const whatsappForm = document.getElementById("whatsappForm");
    if (whatsappForm) {
        whatsappForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const phoneNumber = "584121369189";

            const nombreSolicitante = document.getElementById("nombreContacto").value.trim();
            const rol = document.getElementById("rolContacto").value;
            const nombreEstudianteInput = document.getElementById("nombreEstudiante").value.trim();
            const edad = document.getElementById("edadEstudiante").value.trim();
            const anoGraduacion = document.getElementById("anoBachillerato").value;
            const programa = document.getElementById("programaContacto").value;
            const mensajeAdicional = document.getElementById("mensajeContacto").value.trim();

            const nombreEstudiante = nombreEstudianteInput !== "" ? nombreEstudianteInput : nombreSolicitante;

            let textMessage = `¡Hola Reach Academy! 👋\n\n`;
            textMessage += `Solicitud de Información / Prueba de Nivelación:\n`;
            textMessage += `• *Solicitante:* ${nombreSolicitante} (${rol})\n`;
            textMessage += `• *Estudiante:* ${nombreEstudiante}\n`;
            textMessage += `• *Edad:* ${edad} años\n`;
            textMessage += `• *Nivel escolar:* ${anoGraduacion}\n`;
            textMessage += `• *Programa de interés:* ${programa}\n`;

            if (mensajeAdicional !== "") {
                textMessage += `\n*Consulta adicional:* ${mensajeAdicional}`;
            }

            const encodedMessage = encodeURIComponent(textMessage);
            const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

            window.open(whatsappURL, "_blank");
        });
    }
});