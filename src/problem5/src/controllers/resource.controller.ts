import { Request, Response } from "express";
import { ResourceService } from "../services/resource.service";

const resourceService = new ResourceService();

export class ResourceController {
    static async create(req: Request, res: Response) {
        try {
            const data = await resourceService.createResource(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ error: "Error creating resource" });
        }
    }

    static async list(req: Request, res: Response) {
        const resources = await resourceService.listResources(req.query);
        res.json(resources);
    }

    static async get(req: Request, res: Response): Promise<any> {
        const resource = await resourceService.getResource(req.params.id);
        if (!resource) return res.status(404).json({ error: "Resource not found" });
        res.json(resource);
    }

    static async update(req: Request, res: Response) {
        try {
            const updatedResource = await resourceService.updateResource(req.params.id, req.body);
            res.json(updatedResource);
        } catch (error) {
            res.status(400).json({ error: "Update failed" });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            await resourceService.deleteResource(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: "Delete failed" });
        }
    }
}
