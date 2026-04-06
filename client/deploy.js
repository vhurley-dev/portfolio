const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const run = (cmd) =>
  execSync(cmd, { stdio: "inherit", cwd: path.resolve(__dirname) });
const capture = (cmd) =>
  execSync(cmd, { cwd: path.resolve(__dirname) })
    .toString()
    .trim();

try {
  console.log("--- Initializing Safety Checks ---");

  // 1. Check if the Git tree is clean (excluding untracked files)
  const status = capture("git -C .. status --porcelain");
  if (status) {
    console.error("\n❌ ERROR: Your working tree is not clean.");
    console.error("Please commit or stash your changes before deploying.");
    console.log("\nUncommitted files detected:");
    console.log(status);
    process.exit(1);
  }

  // 2. Ensure we are on (or switch to) gh-pages
  const currentBranch = capture("git -C .. rev-parse --abbrev-ref HEAD");
  if (currentBranch !== "gh-pages") {
    console.log(
      `⚠️  Currently on '${currentBranch}'. Switching to 'gh-pages'...`,
    );
    run("git -C .. checkout gh-pages");
  }

  // 3. Sync with Cloud
  console.log("--- Syncing with GitHub ---");
  run("git -C .. fetch origin");
  run("git -C .. merge origin/main --no-edit");

  // 4. Clean docs folder (Relative to this script in /client)
  const docsPath = path.resolve(__dirname, "../docs");
  console.log("--- Preparing /docs folder ---");
  if (fs.existsSync(docsPath)) {
    fs.rmSync(docsPath, { recursive: true, force: true });
  }
  fs.mkdirSync(docsPath);

  // 5. Build Angular
  console.log("--- Building Angular App ---");
  run(
    'npx ng build --configuration production --base-href "/portfolio/" --output-path ../docs',
  );

  // 6. Fix Angular 17+ 'browser' folder quirk
  const browserPath = path.join(docsPath, "browser");
  if (fs.existsSync(browserPath)) {
    console.log("--- Moving files from /browser to /docs ---");
    const files = fs.readdirSync(browserPath);
    files.forEach((file) => {
      fs.renameSync(path.join(browserPath, file), path.join(docsPath, file));
    });
    fs.rmdirSync(browserPath);
  }

  // 7. Finalizing static files
  console.log("--- Creating 404.html and .nojekyll ---");
  fs.copyFileSync(
    path.join(docsPath, "index.html"),
    path.join(docsPath, "404.html"),
  );
  fs.writeFileSync(path.join(docsPath, ".nojekyll"), "");

  // 8. Push to GitHub
  console.log("--- Pushing to GitHub ---");
  run("git -C .. add .");

  // Using a simple ISO string for the timestamp to keep it cross-platform friendly
  const timestamp = new Date()
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");
  run(`git -C .. commit -m "Automated Deploy: ${timestamp}"`);
  run("git -C .. push origin gh-pages");

  // 9. Back to business
  console.log("--- Switching back to main ---");
  run("git -C .. checkout main");

  console.log(
    "\n🚀 Deployment Complete! Your portfolio is live. Go to Github Actions to monitor the deployment.",
  );
} catch (error) {
  console.error("\n❌ Deployment interrupted:", error.message);
  process.exit(1);
}
