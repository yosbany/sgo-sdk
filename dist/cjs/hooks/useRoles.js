"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRoles = void 0;
const react_1 = require("react");
const roleService_1 = require("../services/roleService");
// Hook para obtener la lista de roles en tiempo real
const useRoles = () => {
    const [roles, setRoles] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        (0, roleService_1.fetchRoles)().then((data) => {
            setRoles(data);
            setLoading(false);
        });
    }, []);
    return { roles, loading };
};
exports.useRoles = useRoles;
//# sourceMappingURL=useRoles.js.map