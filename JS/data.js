// OFERTA ACADÉMICA DE REACH ACADEMY
const coursesData = [
    {
        id: 1,
        category: "examenes",
        title: "TOEFL iBT Prep",
        modality: "Clases En Vivo / Presencial",
        description: "Estrategias específicas, prácticas de Speaking y Writing, y simulacros reales para alcanzar tu puntaje objetivo."
    },
    {
        id: 2,
        category: "examenes",
        title: "Digital SAT Mastery",
        modality: "Clases En Vivo",
        description: "Preparación intensiva en Math y Reading & Writing enfocada en la nueva estructura del examen digital."
    },
    {
        id: 3,
        category: "examenes",
        title: "Duolingo English Test (DET)",
        modality: "Entrenamiento Rápido",
        description: "Dominio del formato del examen, tips para subpuntajes y práctica intensiva con retroalimentación inmediata."
    },
    {
        id: 4,
        category: "idiomas",
        title: "Inglés Académico e Internacional",
        modality: "Todos los Niveles",
        description: "Desarrollo de fluidez, vocabulario avanzado y estructura gramatical para entornos académicos y profesionales."
    },
    {
        id: 5,
        category: "stem",
        title: "Tutorías STEM & Bachillerato",
        modality: "Acompañamiento Personalizado",
        description: "Refuerzo y nivelación intensiva en Matemáticas, Física y Química para estudiantes de bachillerato."
    },
    {
        id: 6,
        category: "admisiones",
        title: "Asesoría de Admisión Universitaria USA",
        modality: "Orientación 1-a-1",
        description: "Guía paso a paso en el proceso de postulación, preparación de ensayos y requisitos para universidades en EE. UU."
    }
];

// FUNCIÓN PARA RENDERIZAR LAS TARJETAS
function renderCourses(categoryToFilter = "examenes") {
    const container = document.getElementById("coursesContainer");
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

// LÓGICA DE LAS PESTAÑAS (TABS)
document.addEventListener("DOMContentLoaded", () => {
    // Cargar la primera categoría por defecto
    renderCourses("examenes");

    // Evento para cambiar de categoría al hacer clic en una pestaña
    const tabButtons = document.querySelectorAll("#programTabs button");
    tabButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            // Remover clase active de todos los botones
            tabButtons.forEach(btn => btn.classList.remove("active"));
            
            // Agregar clase active al botón presionado
            e.target.classList.add("active");

            // Obtener la categoría del atributo data-category y renderizar
            const selectedCategory = e.target.getAttribute("data-category");
            renderCourses(selectedCategory);
        });
    });
});