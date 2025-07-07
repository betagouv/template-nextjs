# template-nextjs

![GitHub last commit (branch)](https://img.shields.io/github/last-commit/betagouv/template/main)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/betagouv/template)

Template minimal avec Next.js qui intègre les recommandations tech beta.gouv.fr.

👉 Démo: https://betagouv.github.io/template-nextjs

## ⚠️ IMPORTANT : Limites d'utilisation
Bien que ce code soit distribué sous licence open source Apache-2.0, certains éléments contenus dans ce repository sont protégés et leur réutilisation est strictement interdite :

### Système de Design de l'État Français (DSFR)
Ce repository met en oeuvre le [Système de Design de l'État Français (DSFR)](https://www.systeme-de-design.gouv.fr/). **Il est formellement interdit à tout autre acteur d'utiliser le DSFR pour des sites web ou des applications**. Le DSFR représente l'identité numérique de l'État français.

### Sanctions légales
En cas d'usage non autorisé, vous vous exposez à des poursuites légales, notamment sur la base des articles suivants :
- Usurpation des symboles de la République française ([art. 444-1 Code pénal](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006418825))
- Contrefaçon ([art. L335-2 Code de la propriété intellectuelle](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032655082))
- Entrave au fonctionnement d'un système automatisé de traitement de données de l'État ([art. 323-2 Code pénal](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030939443))
- Escroquerie ([art. 313-2 du Code pénal](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049531795))

**Recommandation** : Si vous souhaitez réutiliser ce code, supprimez ou remplacez tous les éléments liés à la marque DossierFacile et au DSFR avant déploiement.

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
# run unit tests with vitest
yarn test

# build, serve and launch playwright interactive end-to-end tests
yarn e2e --ui
```
## Projets connexes

| projet                                                                                          | description                                                 |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [garronej/react-dsfr-next-appdir-demo](https://github.com/garronej/react-dsfr-next-appdir-demo) | minimal Next.js + react-dsfr + MUI integration              |
| [inclusion-numerique/stack](https://github.com/inclusion-numerique/stack)                       | Stack DSFR + Next.js + OIDC                                 |
| [InseeFrLab/vite-insee-starter](https://github.com/InseeFrLab/vite-insee-starter)               | Starter SPA Vite + DSFR + OIDC                              |
| [betagouv/rails-template](https://github.com/betagouv/rails-template)                           | Template DSFR pour Ruby on Rails                            |
| [betagouv/django-template](https://github.com/betagouv/django-template)                         | Template DSFR pour Django                                   |
| [codegouvfr/eleventy-dsfr](https://github.com/codegouvfr/eleventy-dsfr)                         | Template DSFR pour [eleventy](https://www.11ty.dev/)        |
| [codegouvfr/docsify-dsfr-template](https://github.com/codegouvfr/docsify-dsfr-template)         | Template DSFR pour [docsify](https://docsify.js.org/#/)     |
| [sneko/dsfr-connect](https://github.com/sneko/dsfr-connect)                                     | Themes DSFR pour bootstrap, vuetify, mui, infima, emails... |
| [laruiss/create-vue-dsfr](https://github.com/laruiss/create-vue-dsfr)                           | Un starter Vue.js + Nuxt3 + DSFR                            |
| [socialgouv/template](https://github.com/socialgouv/template)                                   | Version initiale de ce template                             |
