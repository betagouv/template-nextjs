# template

![GitHub last commit (branch)](https://img.shields.io/github/last-commit/betagouv/template/main)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/betagouv/template)

Template minimal avec Next.js qui intègre les recommandations tech beta.gouv.fr.

> ⚠️ Le [Système de Design de l'État](https://www.systeme-de-design.gouv.fr/) s'adresse **uniquement** aux développeurs et aux concepteurs, qu'ils soient agents publics ou prestataires pour des sites Internet de l'État (Ministères, Administrations centrales, Préfectures, Ambassades, etc.). cf [conditions d'utilisation](https://www.systeme-de-design.gouv.fr/utilisation-et-organisation/perimetre-d-application).

👉 Démo: https://betagouv.github.io/template

## Lancer le code

Après avoir cloné le projet :

### Développement

```bash
yarn # to install dependencies
yarn dev # to run in dev mode
```

Point your browser to [http://127.0.0.1:3000/template](http://127.0.0.1:3000/template) and start playing.

### Tests

```
# run JEST unit tests
yarn test

# build, serve and launch playwright interactive end-to-end tests
yarn e2e --ui

# run storybook
yarn storybook
```

### Gestion des environnements

Les variables issues des docker build-args, sont à utiliser dans `next.config.js`, pour les autres, il faut les définir dans les différents [`.env.*`](https://nextjs.org/docs/basic-features/environment-variables#environment-variable-load-order).

Le fichier `.env.staging` est utilisé pour les environnements de review et de pré-production.

Le fichier `.env.development` est utilisé pour l'environnement de développement.

:warning: Les variables d'environnement sont publiques (utilisées durant le build), ne commitez donc pas de variables privées dans ces fichiers.

## Projets connexes

| projet                                                                                  | description                                                 |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [inclusion-numerique/stack](https://github.com/inclusion-numerique/stack)               | Template DSFR + Next.js + SSO                               |
| [betagouv/rails-template](https://github.com/betagouv/rails-template)                   | Template DSFR pour Ruby on Rails                            |
| [betagouv/django-template](https://github.com/betagouv/django-template)                 | Template DSFR pour Django                                   |
| [codegouvfr/eleventy-dsfr](https://github.com/codegouvfr/eleventy-dsfr)                 | Template DSFR pour [eleventy](https://www.11ty.dev/)        |
| [codegouvfr/docsify-dsfr-template](https://github.com/codegouvfr/docsify-dsfr-template) | Template DSFR pour [docsify](https://docsify.js.org/#/)     |
| [sneko/dsfr-connect](https://github.com/sneko/dsfr-connect)                             | Themes DSFR pour bootstrap, vuetify, mui, infima, emails... |
| [socialgouv/template](https://github.com/socialgouv/template)                           | Version initiale de ce template                             |

```

```
