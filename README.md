# 📚 BookCritique - API de Revue de Livres

![Node.js](https://img.shields.io/badge/Node.js-14.x+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![JWT](https://img.shields.io/badge/JWT-Auth-orange)
![REST](https://img.shields.io/badge/REST-API-yellowgreen)

**BookCritique** est une API RESTful sophistiquée permettant aux utilisateurs d'explorer, critiquer et partager leurs avis sur des livres. Une solution backend élégante pour les passionnés de littérature.

## Architecture

```mermaid
graph TD
    A[Client] -->|HTTP Requests| B[API BookCritique]
    B --> C[(Base de Données)]
    B --> D[Authentification JWT]
    C --> E[Livres]
    C --> F[Critiques]
    C --> G[Utilisateurs]
