# Project-Manager-App
This project is a collaborative event platform built in pairs using Node.js, Express.js, and TailwindCSS. It allows users to view events, add new ones, and vote for those they like. The app is based on a REST API and stores data in a database. The project was completed in two days and deployed online with a demo video.


---

##  Stack Technique

### 🔹 Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- Authentification JWT

### 🔹 Frontend

- React.js
- Vite
- TailwindCSS
- Axios

### 🔹 DevOps

- Docker
- Docker Compose
- Render (déploiement cloud)

---
## Installation en Local (Docker)

Tous les services s’exécutent dans des conteneurs Docker isolés et communiquent via un réseau Docker interne.

### 1️⃣ Prérequis

- Docker
- Docker Compose
- Git

Vérifier l’installation :

```bash

docker --version
docker compose version
``` 

### 2️⃣ Cloner le projet

```bash

git clone https://github.com/fresnel25/Project-Manager-App.git
cd Project-Manager-App

``` 

3️⃣ Configuration des variables d’environnement

Créer un fichier .env dans :

Backend_Project_Manager_App/


Ajouter :

```bash
PORT=5000
DATABASE_URL="postgresql://postgres:postgres@db:5432/project_manag?schema=public"
JWT_SECRET="votre_cle_secrete"
``` 

Important :
Lorsque vous utilisez Docker, db correspond au nom du service PostgreSQL défini dans docker-compose.yml (ce n’est pas localhost).


4️⃣ Lancer l’application en local

Depuis la racine du projet :
```bash
docker compose up --build
``` 
Cette commande va :

Construire les images Docker

Démarrer PostgreSQL

Exécuter Prisma

Lancer le backend

Lancer le frontend


##  Lancer l’application en ligne

https://project-manager-app-1-osh6.onrender.com/