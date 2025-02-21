import { Role } from "../models/role";
export declare const fetchRoles: () => Promise<Role[]>;
export declare const createRole: (role: Role) => Promise<void>;
export declare const updateRole: (id: string, data: Partial<Role>) => Promise<void>;
export declare const deleteRole: (id: string) => Promise<void>;
//# sourceMappingURL=roleService.d.ts.map