# template

![GitHub last commit (branch)](https://img.shields.io/github/last-commit/betagouv/template/main)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/betagouv/template)

Template minimal en Next.js qui intègre les recommandations tech beta.gouv.fr.

> ⚠️ Le [Système de Design de l'État](https://www.systeme-de-design.gouv.fr/) s'adresse **uniquement** aux développeurs et aux concepteurs, qu'ils soient agents publics ou prestataires pour des sites Internet de l'État (Ministères, Administrations centrales, Préfectures, Ambassades, etc.). cf [conditions d'utilisation](https://www.systeme-de-design.gouv.fr/utilisation-et-organisation/perimetre-d-application).

👉 Démo: https://betagouv.github.io/template

## Lancer le code

Après avoir cloné le projet :

### Développement

```bash
yarn # to install dependencies
yarn dev # to run in dev mode
```

### Gestion des environnements

Les variables issues des docker build-args, sont à utiliser dans `next.config.js`, pour les autres, il faut les définir dans les différents [`.env.*`](https://nextjs.org/docs/basic-features/environment-variables#environment-variable-load-order).

Le fichier `.env.staging` est utilisé pour les environnements de review et de pré-production.

Le fichier `.env.development` est utilisé pour l'environnement de développement.

:warning: Les variables d'environnement sont publiques (utilisées durant le build), ne commitez donc pas de variables privées dans ces fichiers.

## Liens

- <https://github.com/socialgouv/> : Version initiale du template
