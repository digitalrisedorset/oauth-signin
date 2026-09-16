import path from "path";
import { mkdir, access, writeFile } from "fs/promises";
import { constants } from "fs";

export class WidgetSourceFileWriter {
    private readonly publishRoot = path.join(
        process.cwd(),
        "public",
        "reactedge"
    );

    async publish(filename: string, content: string): Promise<void> {
        const destination = path.join(this.publishRoot, filename);

        await mkdir(path.dirname(destination), { recursive: true });

        await writeFile(destination, content, "utf8");
    }

    async isPublished(filename: string): Promise<boolean> {
        try {
            await access(
                path.join(this.publishRoot, filename),
                constants.F_OK
            );

            return true;
        } catch {
            return false;
        }
    }
}