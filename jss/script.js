// Todas las reseñas REALES de Airbnb - Cabaña de Cristian
const resenasAirbnb = [
    {
        nombre: "Carrie",
        texto: "La cabaña es acogedora y muy bien mantenida. Todo estaba muy limpio, utensilios necesarios en buen estado, comercios cerca. Fuimos sin auto, la playa está lejos… recomendamos ir en auto. La atención de Cristian increíble, llegamos y la tinaja estaba lista, siempre atento. Rodeada de árboles preciosos y un silencio invaluable… volvería sin lugar a dudas. Mis dos perritos la pasaron de maravilla. ¡Gracias Cristian por todo!",
        categoria: "Con mascota",
        fecha: "Junio de 2026"
    },
    {
        nombre: "Osvaldo",
        detalles: "Los Andes, Chile",
        texto: "Experiencia inolvidable, fui con mi pareja e hijo de 1 año y cuando llegamos todo impecable, todas las amenidades que anuncia si están, el lugar era bastante tranquilo y privado, las camas todas con sábanas nuevas y cobertores, la tinaja exquisita, nos esperó con leña y cuando la acabamos salimos a comprar más cerca de la cabaña (que por cierto es bien económica) amamos la estancia de Cristian, una persona muy buena y amable, nos recomendó muchos lugares a los cuales podíamos salir a pasear, sin duda volveremos a ir.",
        categoria: "Con niños",
        fecha: "Junio de 2026"
    },
    {
        nombre: "Pablo",
        detalles: "3 años en Airbnb",
        texto: "Fue una excelente estadía, sin ningún problema básico, negocios cerca y todo lo que se indica en la descripción. Cristian muy amable, ayudándonos en todo constantemente. A mi familia y a mí les encantó, 100% recomendable.",
        categoria: "Con niños",
        fecha: "Mayo de 2026"
    },
    {
        nombre: "Carla Anastasia",
        detalles: "1 año en Airbnb",
        texto: "Fue un placer el alojamiento de don Cristian, todo de maravilla. La tinaja muy espaciosa, nada de ruidos, fue como estar en casa. Además de poder tener seguridad del entorno, la casa incluye seguridad perimetral con cámaras las 24 hrs y luz con sensores. Además el anfitrión fue súper amable y flexible con uno. Muy recomendado.",
        categoria: "Con mascota",
        fecha: "Febrero de 2026"
    },
    {
        nombre: "Keyla",
        detalles: "Santiago, Chile",
        texto: "Nuestra estadía fue excelente. El anfitrión fue muy amable y atento en todo momento, lo que hizo que la experiencia fuera aún más agradable. La cabaña es espaciosa y muy cómoda. El agua caliente funciona perfecto y la presión de agua es excelente, algo que realmente se agradece. La tinaja fue un gran momento de relajo entre amigos y nos divertimos mucho con el tacataca y la máquina arcade. Sin duda volveríamos, totalmente recomendado.",
        categoria: "En grupo",
        fecha: "Febrero de 2026"
    },
    {
        nombre: "Fabian Esteban",
        detalles: "3 meses en Airbnb",
        texto: "La cabaña tiene todo lo necesario para una cómoda estadía, es acogedora y confortable. La tinaja estuvo 100/10. Cristian el anfitrión, fue muy preocupado de lo que pudiéramos necesitar como por ejemplo el agua (fue muy rápido desde que le avisamos para reabastecer). La pasamos increíble y el sector muy tranquilo.",
        categoria: "Con mascota",
        fecha: "Febrero de 2026"
    },
    {
        nombre: "Karina",
        detalles: "9 años en Airbnb",
        texto: "Súper linda la casa, y tremendo anfitrión, súper preocupado totalmente de nosotros, recomendaciones para salir a distintos lugares del sector, totalmente atento! Y la casa, todo lo que aparece en las fotos y especificaciones tal cual.... ¡Arcade, tinaja, hamaca! 👍 ¡Recomendable!",
        categoria: "Con niños",
        fecha: "Marzo de 2026"
    },
    {
        nombre: "Gabriela",
        detalles: "Chile",
        texto: "El lugar se ajustaba bien a la descripción y el anfitrión, Cristián, fue de principio a fin muy amable, disponible y atento a lo que necesitáramos. Desde la cabaña pudimos recorrer distintas playas y encontrar una en especial muy a nuestro gusto, pequeña y con muy poca gente!",
        categoria: "Con niños",
        fecha: "Febrero de 2026"
    },
    {
        nombre: "Cindy",
        detalles: "1 año en Airbnb",
        texto: "Cristian es un muy buen anfitrión, muy atento, preocupado, mucha disposición a resolver dudas y muy cordial. El lugar cumplió con la descripción, disfrutamos mucho la casa, la tinaja exquisita. Hay playas cerca muy bonitas también. Recomendado 100%, volveremos a ir.",
        categoria: "Estadía larga",
        fecha: "Febrero de 2026"
    },
    {
        nombre: "Denisse",
        detalles: "Santiago, Chile",
        texto: "Me sentí como en casa, Cristian siempre atento en todo, muy amable y el lugar muy tranquilo para pasar en familia. Sin embargo volveríamos.",
        categoria: "Con niños",
        fecha: "Mayo de 2026"
    },
    {
        nombre: "Camila",
        detalles: "Santiago, Chile",
        texto: "Cristian estuvo siempre comprometido, siendo flexible a nuestras necesidades y atento a nuestras inquietudes y requerimientos. El alojamiento, excelente.",
        categoria: "Con mascota",
        fecha: "Abril de 2026"
    },
    {
        nombre: "Jean",
        detalles: "Santiago, Chile",
        texto: "Cristian muy preocupado y atento por el agua, la casa muy cómoda para 6 personas con tinaja, fogón y hamaca.",
        categoria: "Con mascota",
        fecha: "Enero de 2026"
    },
    {
        nombre: "Sara",
        detalles: "4 meses en Airbnb",
        texto: "Muchas gracias, quedamos súper contentos con la estadía.",
        categoria: "Con niños",
        fecha: "Abril de 2026"
    },
    {
        nombre: "Bobb",
        detalles: "Fayetteville, Georgia",
        texto: "Excelente anfitrión, pendiente de todo.",
        categoria: "Con niños",
        fecha: "Febrero de 2026"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-resenas');
    contenedor.innerHTML = ''; // Limpiamos

    resenasAirbnb.forEach(r => {
        const estrellas = '<i class="bi bi-star-fill estrella-dorada"></i> '.repeat(5);

        // Color dinámico para las etiquetas
        let badgeColor = "bg-secondary";
        if (r.categoria.includes("mascota")) badgeColor = "bg-success";
        if (r.categoria.includes("niños")) badgeColor = "bg-primary";
        if (r.categoria.includes("grupo")) badgeColor = "bg-info text-dark";

        contenedor.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="card p-4 border-0 shadow-sm rounded-3 h-100 d-flex flex-column justify-content-between card-resena">
                    <div>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <div class="small text-nowrap">${estrellas}</div>
                            <span class="badge ${badgeColor} opacity-75 fs-8">${r.categoria}</span>
                        </div>
                        <p class="fst-italic text-muted small">"${r.texto}"</p>
                    </div>
                    <div class="mt-3 border-top pt-2 d-flex justify-content-between align-items-center">
                        <div>
                            <h6 class="fw-bold mb-0 text-teal">${r.nombre}</h6>
                            <small class="text-muted fs-8">${r.detalles ? r.detalles : 'Huésped verificado'}</small>
                        </div>
                        <small class="text-muted fs-8 fst-italic text-nowrap">${r.fecha}</small>
                    </div>
                </div>
            </div>
        `;
    });
});