# TF2 Config Master

<div align="center">

[![Deployment Status](https://img.shields.io/github/actions/workflow/status/arroyoquiel/TF2-Config-Master/deploy.yml?branch=main&label=deployment&color=ff6b00)](https://arroyoquiel.github.io/TF2-Config-Master/)
[![License](https://img.shields.io/github/license/arroyoquiel/TF2-Config-Master?color=blue)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/arroyoquiel/TF2-Config-Master?color=7a7a7a)](https://github.com/arroyoquiel/TF2-Config-Master/commits/main)
[![Repo Size](https://img.shields.io/github/repo-size/arroyoquiel/TF2-Config-Master?color=5f3dc4)](https://github.com/arroyoquiel/TF2-Config-Master)

[![Platform](https://img.shields.io/badge/Platform-Web_Browser-1f883d?style=flat-square)](https://arroyoquiel.github.io/TF2-Config-Master/)
[![Privacy](https://img.shields.io/badge/Privacy-100%25_Local_/_No_Uploads-1f883d?style=flat-square&logo=shibboleth&logoColor=white)](https://arroyoquiel.github.io/TF2-Config-Master/)
[![GDPR](https://img.shields.io/badge/GDPR-Compliant-1f883d?style=flat-square&logo=shibboleth&logoColor=white)](https://arroyoquiel.github.io/TF2-Config-Master/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0e7490?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

A simple, browser-based tool to combine conflicting Team Fortress 2 custom configurations, scripts, and HUDs.

### 🚀 [Open the Web App](https://arroyoquiel.github.io/TF2-Config-Master/)

</div>

---

### Why this exists

TF2's `tf/custom/` folder has a major limitation: it only loads one file per path. 

If your personal binds and a performance config (like mastercomfig) both contain an `autoexec.cfg` or class configurations (like `medic.cfg`), the game will silently load only one of them and completely ignore the other. This usually means your personal binds stop working the moment you install a performance config.

This tool lets you drag and drop your VPKs, ZIPs, and custom folders, merges conflicting scripts, lets you choose which files to keep when there are binary conflicts, and packages everything into a single clean ZIP file ready for your `custom/` folder.

---

### Features

* **Automatic .cfg Merging:** If you drop two files with the same name (like two `autoexec.cfg` files), the tool appends them together and adds comments showing where each block of code came from.
* **Asset Conflict Resolver:** Binary files like `.wav` hitsounds or `.vtf` textures cannot be merged. The tool lists these conflicts and lets you select which mod's file you want to keep.
* **Folder Leveling (Nesting Fix):** HUDs downloaded from GitHub often come inside a nested parent folder (like `maxihud-master/`) which breaks if you put it directly into TF2. The app automatically detects this and strips the useless top-level folder.
* **VPK & ZIP Parsing:** Supports dragging in `.vpk` files and standard `.zip` archives. The extraction happens entirely inside your browser.
* **100% Private:** No files are uploaded to any server. All parsing, merging, and packaging runs locally in your browser memory.

---

### How to use it

1. Drag and drop your custom folders, `.zip` files, or `.vpk` files into the drop zone.
2. If there are any file conflicts (like duplicate hitsounds), select which mod's file you want to use in the "Conflicts to Resolve" panel.
3. Click **Download Merged ZIP** and extract the output directly into your `team fortress 2/tf/custom/` directory.

---

### Running Offline

This is a completely static web application. If you want to use it offline, you can clone this repository and open the `src/index.html` file in any modern web browser.

---

### License & Credits

* This project is licensed under the [MIT License](LICENSE).
* Third-party libraries, licenses, and copyright attributions are listed in [THIRD-PARTY-NOTICES.txt](THIRD-PARTY-NOTICES.txt).