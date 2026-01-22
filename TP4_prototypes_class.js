// Travail de Andy
// Etape(1) Constructeur User + méthode login() via prototype. 
//a-Initialisation du constructeur User 
function User(nom, email) {
    this.nom = nom;
    this.email = email;
}

//b-Ajout de la  cete méthode de login grâce au prototype
User.prototype.login=function(){
    console.log(`[LOG] ${this.nom} est connecté.`);
};

//c-Test du Constructeur et du Prototypes
const Etudiant1=new User("Andy","AndyWilsonRMG@gmail.com");
Etudiant1.login();

//Etape(2)Transformation en class User
class UserClass{
    //Faire appelle au constructeur pour remplacer ma fonction "function User(nom,email)"
    constructor(nom,email){
        this.nom = nom;
        this.email = email;
    }  
    
    // Maintenant je peux avoir la méthode login à l'intérieur de la classe User 
    login(){
        console.log(`[ES6 CLass] L'étudiant ${this.nom} est bien vérifier.`);

    }
}

// Test de la version avec une nouvelle variable 
const Etudiant2 = new UserClass("kevin","kev_059MDG@gmail.com");
Etudiant2.login();

// Etape (3) class Admin extends User avec deleteUser()
// Le mot-clé "extends" crée le lien d'héritage
// prends tout ce que UserClass sait faire (le nom, l'email, la fonction login) et le donne à l'Admin
// pas besoin de réécrire la fonction login() dans l'Admin. Il la connaît déjà grâce à son "père".
class Admin extends UserClass {
    constructor(nom, email, grade) {
        // "super" appelle le constructeur du parent (UserClass)
        // C'est obligatoire pour ne pas avoir d'erreur 
        super(nom, email);
        this.grade = grade;
    }

    // Méthode spécifique demandée dans le TP 
    deleteUser(cible) {
        console.warn(`[ADMIN] ${this.nom} (Grade: ${this.grade}) a supprimé le compte de ${cible.nom}.`);
    }
}

// --- Test Final ---
// a.Création du profil Admin 
const monAdmin = new Admin("Andy Admin", "AndyWilson@insi.mg", "Chef de Projet");

// b. Vérifications de la connections grâce à l'héritage 
monAdmin.login();

// c. On utilise les Fonctions de l'admin  sur l'instance "Etudiant2" créée à l'étape 2
monAdmin.deleteUser(Etudiant2);