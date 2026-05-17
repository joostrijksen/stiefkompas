// lib/content/fs.ts
import path from "path";
import { promises as fs } from "fs";

function resolvePath(p: string) {
  // Als p al absoluut is: 그대로 gebruiken
  // Anders: vanaf project root resolven
  return path.isAbsolute(p) ? p : path.join(process.cwd(), p);
}

export async function readUtf8(p: string) {
  const full = resolvePath(p);
  try {
    return await fs.readFile(full, "utf8");
  } catch (e: any) {
    throw new Error(`Content file not found: ${full}`);
  }
}

export async function readJson<T = any>(p: string): Promise<T> {
  const raw = await readUtf8(p);
  try {
    return JSON.parse(raw) as T;
  } catch (e: any) {
    throw new Error(`Invalid JSON in content file: ${resolvePath(p)}`);
  }
}