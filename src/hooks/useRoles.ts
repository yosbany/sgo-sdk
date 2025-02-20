import { useEffect, useState } from "react";
import { fetchRoles } from "../services/roleService";
import { Role } from "../models/role";

// Hook para obtener la lista de roles en tiempo real
export const useRoles = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchRoles().then((data) => {
      setRoles(data);
      setLoading(false);
    });
  }, []);

  return { roles, loading };
};
