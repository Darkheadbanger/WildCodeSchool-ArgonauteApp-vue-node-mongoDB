# wildCodeSchool_project

Voici ma participation à l'exercice préparatoire de l'entretien technique pour la Wild Code School.

Pour pouvoir ouvrir le site d'Argonaute, vous devez installer toutes les déndences avec cette instructions "npm install". Ensuite pour le front-end et le back-end.

Front-end:
1. Tout d'abord cloner le projet avec l'instruction "git clone "code de ce projet https ou ssh".
2. Ouvrez le terminal
2. Installer toutes les dépendences en écrivant sur le terminal "npm install"
3. Créer un fichier .env dans le root du client, dans ce fichier .env ecrivez votre BASE API pour le backend par exemple: VITE_API_BASE_URL=http://localhost:3000

Back-end
1. Après avoir clonner le projet et s'occuper du front-end, vous devez ouvrir le fichier backend
2. Ouvrez le terminal.
3. Dans le terminal de votre IDE (environnement de développement) ou votre terminal bash, installer toutes les dépendences existants en écrivant "npm install".
4. Créer un fichier .env dans le root du server
5. Ecrivez 3 choses donc:
A. Votre identification pour se connecter a mongoDB, par exemple: "CONNECT_TO_MONGODB='mongodb+srv://jimbob:<PASSWORD>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority' et mettez dans la promesse mongoose.connect.
Vous devez remplacer le <password> avec votre mot de passe de mongoDB et remplacer l'adresse SRV par la vôtre
B. Ensuite, entrez l'adresse localhost du frontend pour pouvoir communiquer avec le front end, par exemple: FRONTEND_ORIGIN="http://localhost:4200/".
C Et a la fin, mettez le port du backend que vous utilisez pour créer le serveur par exemple: ORIGINALPORT = "3000"
