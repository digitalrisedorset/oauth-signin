// app/reactedge/contracts/[widget]/[contract]/route.ts

import { readFile } from "fs/promises";
import path from "path";

export async function readContract(widget: string, contract: string) {
    const file = await readFile(
        path.join(
            process.cwd(),
            "../reactedge/default/contracts",
            widget,
            contract
        ),
        "utf8"
    );

    return Response.json(JSON.parse(file));
}