// Minimal "build": copies src/ into dist/ so deploy.yml has something to
// publish. No dependencies on purpose — the point of this repo is the
// scaffold around it, not the app.
import { mkdirSync, cpSync, rmSync } from "node:fs";
rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });
cpSync("src", "dist", { recursive: true });
console.log("built dist/");
