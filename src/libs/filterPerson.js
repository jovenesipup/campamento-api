export const getFilter = (p_dni, p_nombre, p_apellidos) => {
    const dni = p_dni ? p_dni : "";
    const nombre = p_nombre ? p_nombre : "";
    const apellidos = p_apellidos ? p_apellidos : "";
  
    return {dni, nombre, apellidos}
  }
  