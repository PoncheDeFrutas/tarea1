```bash
 mkdir tarea-api && cd tarea-api
❯ git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint:
hint:   git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint:   git branch -m <name>
Initialized empty Git repository in /home/ponche/proyects/tarea-api/.git/
❯ pnpm init
Wrote to /home/ponche/proyects/tarea-api/package.json

{
  "name": "tarea-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "packageManager": "pnpm@10.14.0"
}
❯ pnpm install express
Packages: +67
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 67, reused 67, downloaded 0, added 67, done

dependencies:
+ express 5.1.0

Done in 2.6s using pnpm v10.14.0
❯ touch index.js
❯ nano index.js
❯ nano package.json
❯ pnpm start

> tarea-api@1.0.0 start /home/ponche/proyects/tarea-api
> node index.js

API v1 escuchando en http://localhost:3000
^C%                                                                                                                                             ❯ echo "node_modules" > .gitignore
git add .
git commit -m "feat: API v1 muestra nombre y canción favorita"

[master (root-commit) 5d1a658] feat: API v1 muestra nombre y canción favorita
 4 files changed, 606 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 index.js
 create mode 100644 package.json
 create mode 100644 pnpm-lock.yaml
❯ git tag -a release-1.0 -m "release-1.0: versión inicial (nombre + canción)"
git branch -M main
❯ git remote add origin git@github.com:PoncheDeFrutas/tarea1.git
git push -u origin main
Enumerating objects: 6, done.
Counting objects: 100% (6/6), done.
Delta compression using up to 12 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 7.29 KiB | 3.65 MiB/s, done.
Total 6 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:PoncheDeFrutas/tarea1.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
❯ git push origin release-1.0
Enumerating objects: 1, done.
Counting objects: 100% (1/1), done.
Writing objects: 100% (1/1), 194 bytes | 194.00 KiB/s, done.
Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:PoncheDeFrutas/tarea1.git
 * [new tag]         release-1.0 -> release-1.0
❯ git checkout -b hotfix
Switched to a new branch 'hotfix'
❯ nano index.js
❯ pnpm start

> tarea-api@1.0.0 start /home/ponche/proyects/tarea-api
> node index.js

API v1 escuchando en http://localhost:3000
^C%                                                                                                                                             ❯ nano index.js
❯ pnpm start

> tarea-api@1.0.0 start /home/ponche/proyects/tarea-api
> node index.js

API v1 escuchando en http://localhost:3000
^C%                                                                                                                                             ❯ git add index.js
❯ git commit -m "fix: reemplaza canción por álbum favorito (hotfix)"
git push -u origin hotfix
[hotfix c153a01] fix: reemplaza canción por álbum favorito (hotfix)
 1 file changed, 1 insertion(+), 1 deletion(-)
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 350 bytes | 350.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote:
remote: Create a pull request for 'hotfix' on GitHub by visiting:
remote:      https://github.com/PoncheDeFrutas/tarea1/pull/new/hotfix
remote:
To github.com:PoncheDeFrutas/tarea1.git
 * [new branch]      hotfix -> hotfix
branch 'hotfix' set up to track 'origin/hotfix'.
❯ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
❯ git pull
Already up to date.
❯ git merge --no-ff hotfix -m "merge: integra hotfix de álbum favorito"
git push
Merge made by the 'ort' strategy.
 index.js | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
Enumerating objects: 1, done.
Counting objects: 100% (1/1), done.
Writing objects: 100% (1/1), 237 bytes | 237.00 KiB/s, done.
Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:PoncheDeFrutas/tarea1.git
   5d1a658..40a9d2f  main -> main
❯ git tag -a release-2.0 -m "release-2.0: muestra álbum favorito"
git push origin release-2.0
Enumerating objects: 1, done.
Counting objects: 100% (1/1), done.
Writing objects: 100% (1/1), 186 bytes | 186.00 KiB/s, done.
Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:PoncheDeFrutas/tarea1.git
 * [new tag]         release-2.0 -> release-2.0
❯ git branch -d hotfix
git push origin --delete hotfix
Deleted branch hotfix (was c153a01).
To github.com:PoncheDeFrutas/tarea1.git
 - [deleted]         hotfix
❯ gitkraken
~/proyects/tarea-api main
```<img width="1355" height="655" alt="Captura de pantalla 2025-08-11 190550" src="https://github.com/user-attachments/assets/6ba72082-bb98-42e9-a8a3-5b4f4a527d16" />
<img width="1365" height="650" alt="Captura de pantalla 2025-08-11 190905" src="https://github.com/user-attachments/assets/f1d00ff6-dcf7-4084-aa4f-f85f3c698c99" />
<img width="1914" height="1076" alt="image" src="https://github.com/user-attachments/assets/cda0ef0b-fe8f-43e9-a6bf-b8bfd9d0099f" />


