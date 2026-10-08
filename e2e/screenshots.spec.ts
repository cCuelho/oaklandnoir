import { test, expect } from "@playwright/test";
import path from "path";

const routes = [
  { name: "home", path: "/" },
  { name: "books", path: "/books" },
  { name: "beano-haden", path: "/books/the-fall-of-beano-haden" },
  { name: "oakland-noir", path: "/oakland-noir" },
  { name: "read", path: "/read" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
] as const;

const outDir = path.join(process.cwd(), "screenshots", "demo");

test.describe("screenshot demo", () => {
  for (const route of routes) {
    test(`${route.name} @ ${route.path}`, async ({ page }, testInfo) => {
      await page.goto(route.path, { waitUntil: "networkidle" });
      await expect(page.locator("main")).toBeVisible();

      const project = testInfo.project.name.replace(/demo$/, "").replace(/-$/, "");
      const file = path.join(outDir, project, `${route.name}.png`);

      await page.screenshot({
        path: file,
        fullPage: true,
        animations: "disabled",
      });
    });
  }
});
