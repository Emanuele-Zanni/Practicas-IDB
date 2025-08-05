// Inicializar la base de datos
const db = new Dexie("MiBaseDeDatos");
db.version(1).stores({
  personas: "++id,nombre,edad", // ++id es autoincremental
});

// Función para agregar una persona
async function agregarPersona(nombre, edad) {
  await db.personas.add({ nombre, edad });
  mostrarPersonas();
}

// Mostrar datos guardados
async function mostrarPersonas() {
  const personas = await db.personas.toArray();
  const lista = document.getElementById("listaDatos");
  lista.innerHTML = ""; // Limpiar lista anterior
  personas.forEach((p) => {
    const item = document.createElement("li");
    item.textContent = `${p.nombre} - ${p.edad} años`;
    lista.appendChild(item);
  });
}

// Manejo del formulario
document.getElementById("dataForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  if (nombre && edad) {
    await agregarPersona(nombre, edad);
    e.target.reset(); // limpiar formulario
  }
});

// Mostrar datos al cargar
mostrarPersonas();
