import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const servicesDirectory = path.join(process.cwd(), 'src/content/services');

export interface ServiceContent {
    slug: string;
    title: string;
    description: string;
    roi: string[];
    order: number;
    content: string;
}

export async function getServiceBySlug(slug: string): Promise<ServiceContent | null> {
    try {
        const fullPath = path.join(servicesDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            description: data.description,
            roi: data.roi,
            order: data.order,
            content,
        };
    } catch (error) {
        return null;
    }
}

export async function getAllServices(): Promise<ServiceContent[]> {
    const fileNames = fs.readdirSync(servicesDirectory);
    const allServices = await Promise.all(
        fileNames.map(async (fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            return await getServiceBySlug(slug);
        })
    );

    return allServices
        .filter((service): service is ServiceContent => service !== null)
        .sort((a, b) => a.order - b.order);
}
