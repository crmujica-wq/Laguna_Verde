// Tus reseñas reales autorizadas de Airbnb
const resenasAirbnb = [
    {
        nombre: "Carlos M.",
        texto: "Excelente lugar para desconectarse. La cabaña es impecable, muy acogedora con su madera y la tinaja bajo las estrellas es espectacular.",
        estrellas: 5
    },
    {
        nombre: "María José F.",
        texto: "La tranquilidad de Laguna Verde se siente aquí. El internet funciona perfecto para trabajar y la cocina está full equipada. Volveremos.",
        estrellas: 5
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedor-resenas');

    resenasAirbnb.forEach(r => {
        let estrellas = '⭐'.repeat(r.estrellas);
        contenedor.innerHTML += `
            <div class="col-md-5">
                <div class="card p-4 border-0 shadow-sm rounded-3 h-100">
                    <div class="text-warning mb-2 small">${estrellas}</div>
                    <p class="fst-italic text-muted flex-grow-1">"${r.texto}"</p>
                    <h6 class="fw-bold mb-0 text-end text-teal">- ${r.nombre}</h6>
                    <small class="text-muted d-block text-end fs-7">Huésped de Airbnb</small>
                </div>
            </div>
        `;
    });
});