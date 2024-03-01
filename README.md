# Hydrogene
Test Hydrogene 
# si docker est installé sur votre machine

## Installation
1. Clonez ce référentiel sur votre machine locale.  
    - git init

2. Installez les dependances en executant les commandes suivantes :
    - npm init -y
    - npm install mongodb
    - npm install mongoose



## Fonctionnalités 
    - **Connexion à la base de données MongoDb.
    - **Creation des collections Users et Stuffs
    - **Migration des données dans des collections crées
    - **Recuperation des données à l'aide de l'agregation avec geonar
    - **une jointure avec la table "Stuffs" pour récupérer les **_Stuffs_**  correspondants à chaque utilisateur

## Lancer l'application
### si docker est installé sur votre machine locale
    - docker build -t hydrogene
    - docker-compose up

### Si non
    - node serveur.js
    - node migration.js
    - node aggregate-data.js

