import { getDatabase, ref, get, set, push, update, remove } from "firebase/database";
import { Role } from "../models/role";

const db = getDatabase();
const ROLES_PATH = "roles"; // Ruta en la base de datos

// Obtener todos los roles
export const fetchRoles = async (): Promise<Role[]> => {
  const snapshot = await get(ref(db, ROLES_PATH));
  return snapshot.exists() ? Object.values(snapshot.val()) : [];
};

// Crear un nuevo rol
export const createRole = async (role: Role) => {
  const newRoleRef = push(ref(db, ROLES_PATH));
  await set(newRoleRef, { ...role, id: newRoleRef.key, last_updated: new Date().toISOString() });
};

// Actualizar un rol existente
export const updateRole = async (id: string, data: Partial<Role>) => {
  await update(ref(db, `${ROLES_PATH}/${id}`), { ...data, last_updated: new Date().toISOString() });
};

// Eliminar un rol
export const deleteRole = async (id: string) => {
  await remove(ref(db, `${ROLES_PATH}/${id}`));
};
