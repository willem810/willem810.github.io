/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  var currentBranche = (await execa("git", ["rev-parse", "--abbrev-ref", "HEAD"])).stdout
  await execa("git", ["checkout", "--orphan", "gh-pages"]);
  try {
    // const folderName = fs.existsSync("dist") ? "dist" : "build";
    // await execa("rmdir", [folderName, "/q", "/s"]);

    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    // await execa("rmdir", [folderName, "/s", "/q"]);
    await execa("git", ["checkout", "-f", currentBranche]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    await execa("git", ["checkout", "-f", currentBranche]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Deployment failed. Removing temporary branch");

    process.exit(1);
  }

})();