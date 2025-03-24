const knex = require('knex');

const database = knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'schema_userblock',
    },
});

async function getRoleName(email, password_hash) {
  try {
      console.log('Consultando la base de datos...');
      
      const result = await database('users')
          .join('roles', 'users.role_id', 'roles.id')
          .select('roles.role_name', 'users.password_hash')
          .where('users.email', email) // Asegúrate de que 'name' sea el nombre correcto de la columna
          .first();

      console.log('Resultado de la consulta:', result);

      if (!result) {
        console.log('Usuario no encontrado');
        return null;  // 🔹 Evita errores al retornar null
    }

      if (result.password_hash === password_hash) {
          console.log('Rol encontrado:', result.role_name);
          return result.role_name;
      } else {
          console.log('Usuario no encontrado o contraseña incorrecta');
          return null;
      }
  } catch (error) {
      console.error('Error al obtener el rol:', error);
      throw error;
  }
}

module.exports = {
    getRoleName,
};