## Ziel

GitHub Action einrichten, die bei PRs und Pushes auf `main` Build/Tests/Lint/Security ausführt und bei `main`-Pushes den Quellcode 1:1 nach Bitbucket spiegelt. Bitbucket-Pipeline übernimmt anschließend Deployment auf den Webserver (landing.xyz.at).

## Neue Datei

`.github/workflows/ci-and-mirror.yml`

### Trigger

- `pull_request` → main (nur Checks)
- `push` → main (Checks + Mirror)

### Jobs

**1. `ci` (läuft immer)**

- Checkout
- Setup Bun (`oven-sh/setup-bun@v2`)
- `bun install --frozen-lockfile`
- Lint: `bun run lint`
- Tests: `bun test` (falls vorhanden — sonst überspringen)
- Build: `bun run build`
- Artefakt `dist/` hochladen (Retention 7 Tage)

**2. `security` (parallel zu ci)**

- **Dependency Audit:** `bun audit` (mit `continue-on-error: true`, damit Findings sichtbar sind, PR aber nicht blockiert wird — konfigurierbar)
- **CodeQL:** `github/codeql-action/init@v3` + `analyze@v3` für JavaScript/TypeScript

**3. `mirror-to-bitbucket` (nur bei push auf main, needs: [ci, security])**

- Checkout mit `fetch-depth: 0` (voller History)
- SSH-Agent starten mit `webfactory/ssh-agent@v0.9.0`, Key aus Secret `BITBUCKET_SSH_KEY`
- `ssh-keyscan bitbucket.org >> ~/.ssh/known_hosts`
- Bitbucket-Remote hinzufügen: `git remote add bitbucket $BITBUCKET_REPO_URL` (aus Variable/Secret)
- `git push bitbucket main --force-with-lease` (Source-Mirror)
- Optional: Tags mitpushen (`--tags`)

## Erforderliche GitHub Secrets (vom Nutzer im Repo zu setzen)

- `BITBUCKET_SSH_KEY` — privater SSH-Key (der Public-Key muss als **Access Key mit Write** im Bitbucket-Repo hinterlegt sein)
- `BITBUCKET_REPO_URL` — z.B. `git@bitbucket.org:workspace/repo.git`

## Hinweise

- Da Lovable ↔ GitHub bidirektional syncen, läuft die Action automatisch bei jedem Lovable-Edit auf `main`.
- Reine Frontend-Änderungen — kein App-Code wird angefasst.
- Bitbucket-Pipeline (`bitbucket-pipelines.yml`) ist nicht Teil dieser Änderung; die liegt im Bitbucket-Repo und triggert nach dem Push.

## Technische Details

- Node/Bun-Version: entspricht `package.json` / `bunfig.toml`
- CodeQL benötigt `permissions: security-events: write, actions: read, contents: read`
- Mirror-Job: `permissions: contents: read`
- `concurrency: group: mirror-${{ github.ref }}, cancel-in-progress: false` verhindert parallele Pushes
