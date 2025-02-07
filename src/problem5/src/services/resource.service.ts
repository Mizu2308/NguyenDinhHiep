import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ResourceService {
    async createResource(data: { name: string; type: string }) {
        return prisma.resource.create({ data });
    }

    async listResources(filter?: { type?: string }) {
        return prisma.resource.findMany({ where: filter });
    }

    async getResource(id: string) {
        return prisma.resource.findUnique({ where: { id } });
    }

    async updateResource(id: string, data: Partial<{ name: string; type: string }>) {
        return prisma.resource.update({ where: { id }, data });
    }

    async deleteResource(id: string) {
        return prisma.resource.delete({ where: { id } });
    }
}
