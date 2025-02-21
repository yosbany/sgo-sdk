"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRole = exports.updateRole = exports.createRole = exports.fetchRoles = void 0;
const database_1 = require("firebase/database");
const db = (0, database_1.getDatabase)();
const ROLES_PATH = "roles"; // Ruta en la base de datos
// Obtener todos los roles
const fetchRoles = async () => {
    const snapshot = await (0, database_1.get)((0, database_1.ref)(db, ROLES_PATH));
    return snapshot.exists() ? Object.values(snapshot.val()) : [];
};
exports.fetchRoles = fetchRoles;
// Crear un nuevo rol
const createRole = async (role) => {
    const newRoleRef = (0, database_1.push)((0, database_1.ref)(db, ROLES_PATH));
    await (0, database_1.set)(newRoleRef, { ...role, id: newRoleRef.key, last_updated: new Date().toISOString() });
};
exports.createRole = createRole;
// Actualizar un rol existente
const updateRole = async (id, data) => {
    await (0, database_1.update)((0, database_1.ref)(db, `${ROLES_PATH}/${id}`), { ...data, last_updated: new Date().toISOString() });
};
exports.updateRole = updateRole;
// Eliminar un rol
const deleteRole = async (id) => {
    await (0, database_1.remove)((0, database_1.ref)(db, `${ROLES_PATH}/${id}`));
};
exports.deleteRole = deleteRole;
//# sourceMappingURL=roleService.js.map