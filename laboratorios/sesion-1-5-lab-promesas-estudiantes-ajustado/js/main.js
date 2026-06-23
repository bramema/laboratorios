console.log("Inicio del laboratorio Sesion 1.5");
console.log("Abre la consola para revisar la carga de datos JSON.");

// TODO 1: Crea una funcion async llamada cargarEmpleados.
// Debe usar fetch("data/empleados.json").
// Debe convertir la respuesta con await respuesta.json().
// Debe mostrar los datos en consola usando console.log() o console.table().
// Debe recorrer los empleados e imprimir un mensaje por cada uno.
// Debe manejar errores con try/catch.

// TODO 2: Crea una funcion async llamada cargarProductos.
// Debe usar fetch("data/productos.json").
// Debe mostrar productos en consola y clasificar cada uno como Disponible o Agotado.

// TODO 3: Crea una funcion async llamada cargarTodo.
// Debe usar Promise.all() para cargar empleados y productos al mismo tiempo.
// Debe mostrar el total de empleados y productos cargados.

// TODO 4: Llama las funciones para probar el laboratorio.
// TODO 1: Función para cargar empleados



// ===================== EMPLEADOS =====================
async function cargarEmpleados() {
    try {
        const respuesta = await fetch("data/empleados.json");
        const datos = await respuesta.json();

        console.table(datos.empleados);

        datos.empleados.forEach(empleado => {
            console.log(
                `Empleado: ${empleado.nombre} ${empleado.apellido} - Cargo: ${empleado.cargo}`
            );
        });

        return datos.empleados;
    } catch (error) {
        console.error("Error al cargar empleados:", error);
        return [];
    }
}

// ===================== PRODUCTOS =====================
async function cargarProductos() {
    try {
        const respuesta = await fetch("data/productos.json");
        const datos = await respuesta.json();

        console.table(datos.productos);

        datos.productos.forEach(producto => {
            const estado = producto.stock > 0 ? "Disponible" : "Agotado";

            console.log(
                `Producto: ${producto.nombre} - Estado: ${estado}`
            );
        });

        return datos.productos;
    } catch (error) {
        console.error("Error al cargar productos:", error);
        return [];
    }
}

// ===================== CARGAR TODO =====================
async function cargarTodo() {
    try {
        const [empleados, productos] = await Promise.all([
            cargarEmpleados(),
            cargarProductos()
        ]);

        console.log(`Total empleados cargados: ${empleados.length}`);
        console.log(`Total productos cargados: ${productos.length}`);
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

// ===================== EJECUTAR =====================
cargarTodo();