import { useEffect, useState } from "react";
import { fetchRoles } from "../services/roleService";
// Hook para obtener la lista de roles en tiempo real
export const useRoles = () => {
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchRoles().then((data) => {
            setRoles(data);
            setLoading(false);
        });
    }, []);
    return { roles, loading };
};
//# sourceMappingURL=useRoles.js.map