// Datos del programa de reuniones
const meetingData = {
    "octubre-2": {
        date: "02 de octubre",
        bibleReference: "ECLESIASTÉS 3,4",
        president: "NOMBRE",
        openingPrayer: "NOMBRE",
        closingPrayer: "NOMBRE",
        content: [
            { type: "song", number: 93 },
            { type: "intro", duration: "1 min." },
            { 
                type: "section", 
                title: "TESOROS DE LA BIBLIA", 
                items: [
                    { number: 1, title: "Fortalezcan su cuerda triple", duration: "10 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 2, title: "Busquemos perlas escondidas", duration: "10 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 3, title: "Lectura de la Biblia", duration: "4 mins.", participants: "NOMBRE / NOMBRE" }
                ]
            },
            { 
                type: "section", 
                title: "SEAMOS MEJORES MAESTROS", 
                items: [
                    { number: 4, title: "De casa en casa", duration: "4 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 5, title: "Predicación Informal", duration: "4 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 6, title: "Discurso", duration: "4 mins.", participants: "NOMBRE" }
                ]
            },
            { type: "song", number: 131 },
            { 
                type: "section", 
                title: "NUESTRA VIDA CRISTIANA", 
                items: [
                    { number: 7, title: "Cuando tengan problemas en su matrimonio, no aparten a Jehová de su vida", duration: "4 mins.", participants: "NOMBRE" },
                    { number: 8, title: "Estudio bíblico de congregación", duration: "30 mins.", participants: "NOMBRE / NOMBRE", conductor: true }
                ]
            },
            { type: "conclusion", duration: "3 mins." },
            { type: "song", number: 51 }
        ]
    },
    "octubre-9": {
        date: "09 de octubre",
        bibleReference: "ECLESIASTÉS 5,6",
        president: "NOMBRE",
        openingPrayer: "NOMBRE",
        closingPrayer: "NOMBRE",
        content: [
            { type: "song", number: 28 },
            { type: "intro", duration: "1 min." },
            { 
                type: "section", 
                title: "TESOROS DE LA BIBLIA", 
                items: [
                    { number: 1, title: "Fortalezcan su cuerda triple", duration: "10 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 2, title: "Busquemos perlas escondidas", duration: "10 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 3, title: "Lectura de la Biblia", duration: "4 mins.", participants: "NOMBRE / NOMBRE" }
                ]
            },
            { 
                type: "section", 
                title: "SEAMOS MEJORES MAESTROS", 
                items: [
                    { number: 4, title: "Título", duration: "4 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 5, title: "Título", duration: "4 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 6, title: "Título", duration: "4 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 7, title: "Título", duration: "4 mins.", participants: "NOMBRE" }
                ]
            },
            { type: "song", number: 28 },
            { 
                type: "section", 
                title: "NUESTRA VIDA CRISTIANA", 
                items: [
                    { number: 8, title: "Título", duration: "4 mins.", participants: "" },
                    { number: 9, title: "Título", duration: "4 mins.", participants: "" },
                    { number: 10, title: "Estudio bíblico de congregación", duration: "30 mins.", participants: "NOMBRE / NOMBRE", conductor: true }
                ]
            },
            { type: "conclusion", duration: "3 mins." },
            { type: "song", number: 28 }
        ]
    },
    "octubre-16": {
        date: "16 de octubre",
        bibleReference: "ECLESIASTÉS 7,8",
        president: "NOMBRE",
        openingPrayer: "NOMBRE",
        closingPrayer: "NOMBRE",
        content: [
            { type: "song", number: 28 },
            { type: "intro", duration: "1 min." },
            { 
                type: "section", 
                title: "TESOROS DE LA BIBLIA", 
                items: [
                    { number: 1, title: "Fortalezcan su cuerda triple", duration: "10 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 2, title: "Busquemos perlas escondidas", duration: "10 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 3, title: "Lectura de la Biblia", duration: "4 mins.", participants: "NOMBRE / NOMBRE" }
                ]
            },
            { 
                type: "section", 
                title: "SEAMOS MEJORES MAESTROS", 
                items: [
                    { number: 4, title: "Título", duration: "4 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 5, title: "Título", duration: "4 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 6, title: "Título", duration: "4 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 7, title: "Título", duration: "4 mins.", participants: "NOMBRE" }
                ]
            },
            { type: "song", number: 28 },
            { 
                type: "section", 
                title: "NUESTRA VIDA CRISTIANA", 
                items: [
                    { number: 8, title: "Título", duration: "4 mins.", participants: "" },
                    { number: 9, title: "Título", duration: "4 mins.", participants: "" },
                    { number: 10, title: "Estudio bíblico de congregación", duration: "30 mins.", participants: "NOMBRE / NOMBRE", conductor: true }
                ]
            },
            { type: "conclusion", duration: "3 mins." },
            { type: "song", number: 28 }
        ]
    },
    "octubre-23": {
        date: "23 de octubre",
        bibleReference: "ECLESIASTÉS 9,10",
        president: "NOMBRE",
        openingPrayer: "NOMBRE",
        closingPrayer: "NOMBRE",
        content: [
            { type: "song", number: 28 },
            { type: "intro", duration: "1 min." },
            { 
                type: "section", 
                title: "TESOROS DE LA BIBLIA", 
                items: [
                    { number: 1, title: "Título", duration: "10 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 2, title: "Busquemos perlas escondidas", duration: "10 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 3, title: "Lectura de la Biblia", duration: "4 mins.", participants: "NOMBRE / NOMBRE" }
                ]
            },
            { 
                type: "section", 
                title: "SEAMOS MEJORES MAESTROS", 
                items: [
                    { number: 4, title: "Título", duration: "4 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 5, title: "Título", duration: "4 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 6, title: "Título", duration: "4 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 7, title: "Título", duration: "4 mins.", participants: "NOMBRE" }
                ]
            },
            { type: "song", number: 28 },
            { 
                type: "section", 
                title: "NUESTRA VIDA CRISTIANA", 
                items: [
                    { number: 8, title: "Título", duration: "4 mins.", participants: "" },
                    { number: 9, title: "Título", duration: "4 mins.", participants: "" },
                    { number: 10, title: "Estudio bíblico de congregación", duration: "30 mins.", participants: "NOMBRE / NOMBRE", conductor: true }
                ]
            },
            { type: "conclusion", duration: "3 mins." },
            { type: "song", number: 28 }
        ]
    },
    "octubre-30": {
        date: "30 de octubre",
        bibleReference: "ECLESIASTÉS 11,12",
        president: "NOMBRE",
        openingPrayer: "NOMBRE",
        closingPrayer: "NOMBRE",
        content: [
            { type: "song", number: 28 },
            { type: "intro", duration: "1 min." },
            { 
                type: "section", 
                title: "TESOROS DE LA BIBLIA", 
                items: [
                    { number: 1, title: "Título", duration: "10 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 2, title: "Busquemos perlas escondidas", duration: "10 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 3, title: "Lectura de la Biblia", duration: "4 mins.", participants: "NOMBRE / NOMBRE" }
                ]
            },
            { 
                type: "section", 
                title: "SEAMOS MEJORES MAESTROS", 
                items: [
                    { number: 4, title: "Título", duration: "4 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 5, title: "Título", duration: "4 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 6, title: "Título", duration: "4 mins.", participants: "NOMBRE / NOMBRE" },
                    { number: 7, title: "Título", duration: "4 mins.", participants: "NOMBRE" }
                ]
            },
            { type: "song", number: 28 },
            { 
                type: "section", 
                title: "NUESTRA VIDA CRISTIANA", 
                items: [
                    { number: 8, title: "Título", duration: "4 mins.", participants: "" },
                    { number: 9, title: "Título", duration: "4 mins.", participants: "" },
                    { number: 10, title: "Estudio bíblico de congregación", duration: "30 mins.", participants: "NOMBRE / NOMBRE", conductor: true }
                ]
            },
            { type: "conclusion", duration: "3 mins." },
            { type: "song", number: 28 }
        ]
    }
};

// Función para renderizar el contenido de una reunión
function renderMeeting(sectionId) {
    const meeting = meetingData[sectionId];
    if (!meeting) return;
    
    let html = `
        <div class="program-info">
            <div class="program-date">${meeting.date}</div>
            <div class="bible-reference">${meeting.bibleReference}</div>
        </div>
        
        <div class="prayer-info">
            <div class="president-info">Presidente: ${meeting.president}</div>
            <div class="prayer-assignment">Oración: ${meeting.openingPrayer}</div>
        </div>
    `;
    
    // Renderizar cada elemento del contenido
    meeting.content.forEach(item => {
        if (item.type === "song") {
            html += `
                <div class="song-item">
                    <div class="song-icon">♪</div>
                    <div class="item-title">Canción ${item.number}</div>
                </div>
            `;
        } else if (item.type === "intro") {
            html += `
                <div class="program-item">
                    <div class="item-time">00:00:00</div>
                    <div class="item-title">Palabras de Introducción</div>
                    <div class="item-duration">${item.duration}</div>
                </div>
            `;
        } else if (item.type === "section") {
            // Determinar la clase CSS según el título de la sección
            let sectionClass = "section-otros";
            if (item.title.includes("TESOROS")) sectionClass = "section-tesoros";
            else if (item.title.includes("MAESTROS")) sectionClass = "section-maestros";
            else if (item.title.includes("VIDA")) sectionClass = "section-vida";
            
            html += `
                <div class="program-section">
                    <div class="section-header ${sectionClass}">${item.title}</div>
                    <div class="section-content">
            `;
        
         /*else if (item.type === "section") {
            html += `
                <div class="program-section">
                    <div class="section-header">${item.title}</div>
                    <div class="section-content">
            `;*/
            
            item.items.forEach(sectionItem => {
                const conductorText = sectionItem.conductor ? "<div style='font-size:12px; color:#7f8c8d; margin-top:5px;'>Conductor / Lector</div>" : "";
                
                html += `
                    <div class="program-item">
                        <div class="item-time">00:00:00</div>
                        <div class="item-number">${sectionItem.number}.</div>
                        <div class="item-title">${sectionItem.title}</div>
                        <div class="item-duration">${sectionItem.duration}</div>
                        <div class="item-participants">${sectionItem.participants}</div>
                    </div>
                    ${conductorText}
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
        } else if (item.type === "conclusion") {
            html += `
                <div class="program-item">
                    <div class="item-time">00:00:00</div>
                    <div class="item-title">Palabras de conclusión</div>
                    <div class="item-duration">${item.duration}</div>
                </div>
            `;
        }
    });
    
    // Oración final
    html += `
        <div class="prayer-info">
            <div class="prayer-assignment">Oración: ${meeting.closingPrayer}</div>
        </div>
    `;
    
    document.getElementById('meeting-content').innerHTML = html;
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Cargar la primera reunión por defecto
    renderMeeting('octubre-2');
    
    // Agregar event listeners a los botones de navegación
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Renderizar la reunión correspondiente
            const sectionId = this.getAttribute('data-section');
            renderMeeting(sectionId);
        });
    });
});