# Configuration Jira — picsell.agency

Guide pour créer le projet Jira, importer le backlog (y compris sprints déjà réalisés) et synchroniser avec BMAD.

---

## Instance Picsell (configurée)

| Paramètre | Valeur |
|-----------|--------|
| URL | **https://picsell.atlassian.net** |
| Clé projet | **PA** |
| Config | [`jira-config.yaml`](jira-config.yaml) |
| Board | [Ouvrir le board PA](https://picsell.atlassian.net/jira/software/projects/PA/boards) |

## Prérequis

| Élément | Détail |
|---------|--------|
| Compte | Accès au site Picsell sur Atlassian |
| Droits | Créer des tickets sur le projet **PA** |
| Token API | [Atlassian API tokens](https://id.atlassian.com/manage-profile/security/api-tokens) |
| Fichier local | `.env.jira` (copie de `.env.jira.example`) |

---

## Étape 1 — Créer le projet Jira

> **Statut actuel :** le projet **PA** n’existe pas encore sur https://picsell.atlassian.net (API retourne 404). Créez-le avant `npm run jira:sync`.

1. Ouvrir : [Créer un projet Jira](https://picsell.atlassian.net/jira/projects/create)
2. Modèle : **Scrum** (Epics + Stories + Sprints)
3. Nom : `picsell.agency`
4. Clé : **`PA`** (déjà configurée dans `jira-config.yaml`)
5. Vous devez être **administrateur** ou **créateur** du projet pour l’import API
6. Activer **Epics** dans les paramètres du projet si ce n’est pas fait :
   - **Project settings** → **Features** → **Epics** : ON

### Workflow recommandé (colonnes board)

| Colonne Jira | Statuts inclus | Équivalent BMAD |
|--------------|----------------|-----------------|
| To Do | To Do | `backlog`, `ready-for-dev` |
| In Progress | In Progress | `in-progress` |
| In Review | In Review* | `review` |
| Done | Done | `done` |

\* Créer le statut **In Review** si absent : **Project settings** → **Workflows** → éditer le workflow Scrum → ajouter un statut entre *In Progress* et *Done*.

### Champs utiles (optionnel)

| Champ | Type | Usage |
|-------|------|--------|
| Story Points | Story Points (défaut) | Estimation (`stories.csv`) |
| External ID | Texte (custom) | Ex. `1.4` — lien avec `docs/epics.md` |
| Sprint BMAD | Texte ou label | Ex. `S5` |

---

## Étape 2 — Import CSV (backlog complet)

Fichiers dans [`import/`](import/) :

| Fichier | Contenu |
|---------|---------|
| `epics.csv` | 5 epics |
| `stories.csv` | 18 stories (historique + futur) |
| `sprints.csv` | S0–S8 (référence pour création manuelle des sprints) |

### Import via l’interface Jira

1. **Project settings** → **Import** (ou **System** → **External System Import** selon votre plan)
2. Choisir **CSV**
3. Importer **`epics.csv`** en premier
4. Importer **`stories.csv`** en mappant :
   - **Epic Name** → lien Epic parent
   - **Story Points** → Story Points
   - **Labels** → Labels
5. Après import : filtrer par label `picsell-vitrine` pour vérifier les 23 tickets (5 epics + 18 stories)

> **Note :** Les colonnes `Statut BMAD` et `Sprint BMAD` du CSV sont informatives. Jira place souvent tout en *To Do* à l’import — mettre à jour les statuts manuellement ou via le script (étape 4).

### Mapping statuts post-import (recommandé)

| External ID | Statut BMAD | Statut Jira cible |
|-------------|-------------|-------------------|
| 1.1, 1.3, 1.4, 2.3 | done | Done |
| 1.2, 2.1, 2.2 | review | In Review |
| 3.1 | ready-for-dev | To Do (+ label `ready-for-dev`) |
| 1.5, 3.2, 4.x, 5.x | backlog | To Do |

---

## Étape 3 — Créer les sprints (historique + futur)

Jira ne importe pas toujours les sprints via CSV. Créer manuellement sur le **Backlog** → **Create sprint** :

| Sprint | Dates | Statut |
|--------|-------|--------|
| S0 — Discovery | 24–27 jan 2026 | Closed |
| S1 — Epic 1 | 27–28 jan 2026 | Closed |
| S2 — Epic 2 | 28–29 jan 2026 | Closed |
| S3 — Coming Soon v1 | 11 fév 2026 | Closed |
| S4 — Alignement brand | 18–19 mai 2026 | Closed |
| S5 — Gate Epic 1 | 20 mai – 3 juin 2026 | **Active** |
| S6 — Epic 3 | 4–17 juin 2026 | Future |
| S7 — Epic 4 | 18 juin – 1 juil 2026 | Future |
| S8 — Epic 5 | 2–15 juil 2026 | Future |

Glisser les stories dans le sprint correspondant (colonne **Sprint BMAD** du CSV).

---

## Étape 4 — Synchronisation API (automatique)

### Configuration

```bash
cp .env.jira.example .env.jira
# Éditer .env.jira : JIRA_EMAIL + JIRA_API_TOKEN
```

Variables `.env.jira` :

```env
JIRA_BASE_URL=https://picsell.atlassian.net
JIRA_EMAIL=votre-email@picsell.agency
JIRA_API_TOKEN=votre_token_api
JIRA_PROJECT_KEY=PA
```

### Vérifier puis synchroniser

```bash
# Test connexion + infos projet PA
npm run jira:verify

# Simulation (aucune écriture Jira)
npm run jira:sync:dry

# Création epics + stories
npm run jira:sync

# Mise à jour des statuts depuis sprint-status.yaml
npm run jira:sync:status
```

Le script lit :

- [`_bmad-output/implementation-artifacts/sprint-status.yaml`](../../_bmad-output/implementation-artifacts/sprint-status.yaml)
- [`docs/jira/import/stories.csv`](import/stories.csv) (métadonnées)

---

## Étape 5 — Lier BMAD au projet Jira

Mettre à jour `sprint-status.yaml` :

```yaml
project_key: PA
tracking_system: jira
jira:
  base_url: https://VOTRE-WORKSPACE.atlassian.net
  board_id: 123  # ID du board Scrum (optionnel)
```

Conserver `story_location` pour les fichiers story locaux ; Jira devient la **source de vérité** pour statuts et sprints en équipe.

---

## Structure Jira cible

```
picsell.agency (PA)
├── Epic 1 — Fondations & Vitrine Picsell
│   ├── PA-xx [1.1] Initialisation… ✅
│   ├── PA-xx [1.2] Grand Mécanisme 🔄
│   ├── PA-xx [1.3] AEO & GA4 ✅
│   ├── PA-xx [1.4] Design System ✅
│   └── PA-xx [1.5] Surfaces Brand 📋
├── Epic 2 — Navigateur 3 Piliers
│   └── …
├── Epic 3 — BMAD & Fond Transparent
├── Epic 4 — Portfolio & ROI
└── Epic 5 — Conversion & Accessibilité
```

---

## Maintenance

| Action | Quand |
|--------|-------|
| Mettre à jour `sprint-status.yaml` | Fin de chaque story (BMAD) |
| `node scripts/jira/sync-to-jira.mjs --status-only` | Après changement de statut local |
| Mettre à jour `docs/BACKLOG.md` | Fin de sprint |
| `CHANGELOG.md` | Chaque version livrée |
| Ré-exporter CSV | Si recréation projet Jira |

---

## Dépannage

| Problème | Solution |
|----------|----------|
| Epic Link manquant à l’import | Importer epics avant stories ; vérifier colonne *Epic Name* |
| Pas de type Epic | Activer Epics dans les features du projet |
| 401 API | Vérifier email + token ; URL sans slash final |
| 403 API | Droits *Create issues* sur le projet |
| Statuts non trouvés | Aligner `status_mapping` dans `jira-config.yaml` |

---

## Références

- [BACKLOG.md](../BACKLOG.md) — sprints et stories
- [epics.md](../epics.md) — AC détaillés
- [Jira REST API v3](https://developer.atlassian.com/cloud/jira/platform/rest/v3/)
