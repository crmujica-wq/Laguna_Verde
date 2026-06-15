// Reseñas Autorizadas de Airbnb
const resenas = [
    { nombre: "Carlos M.", texto: "Increíble vista y el interior de madera es exquisito. Ideal para arrancar de Santiago.", estrellas: 5 },
    { nombre: "María J.", texto: "Un siete la cabaña, muy calientita y acogedora. Las fotos reflejan tal cual es el lugar.", estrellas: 5 }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cargar reseñas automáticamente
    const contenedor = document.getElementById('contenedor-resenas');
    resenas.forEach(r => {
        let estrellas = '⭐'.repeat(r.estrellas);
        contenedor.innerHTML += `
            <div class="col-md-6">
                <div class="card p-4 border-0 shadow-sm rounded-3">
                    <div class="text-warning mb-2">${estrellas}</div>
                    <p class="fst-italic text-muted">"${r.texto}"</p>
                    <h6 class="fw-bold mb-0 text-end">- ${r.nombre}</h6>
                </div>
            </div>
        `;
    });

    // 2. Escuchar la acción del Buscador Premium
    document.getElementById('btn-buscar').addEventListener('click', () => {
        const sector = document.getElementById('select-sector').value;
        const servicio = document.getElementById('select-servicio').value;
        
        alert(`Buscando cabañas en sector: [${sector}] con servicios: [${servicio}]. ¡Perfecto para conectar con tu lógica de programación!`);
    });
});