angular.module('myApp', [])
.controller('MainController', ['$scope', function($scope) {
    $scope.profileImagePath = "../public/profilePic.png"; // Remplacez par le chemin de votre image
    $scope.name = 'Néo Bougio'; // Remplacez par votre nom et prénom

    $scope.sections = [
        {
            title: "Jeux vidéos",
            color: "#cc0000",
            items: [{img: "../public/profilePic.png", title: "Jeu 1", description: "Description du jeu 1 fzeuj k fehuiodezjiodze djizeo dez"},
                    {img: "../public/profilePic.png", title: "Jeu 2", description: "Description du jeu 2"},
            ]
        },
        {
            title: "Prototypes",
            color: "#4400aa",
            items: [{img: "../public/profilePic.png", title: "P 1", description: "Description du jeu 1"},
                    {img: "../public/profilePic.png", title: "P 2", description: "Description du jeu 2"},
                    {img: "../public/profilePic.png", title: "P 3", description: "Description du jeu 3"},
            ]
        },
    ]
}]);