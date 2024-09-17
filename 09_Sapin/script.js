function afficherPointeSapin(n) {
    let elem = "*"
    let aiguille = elem.repeat(n)
    return aiguille
}
afficherPointeSapin()
console.log(afficherPointeSapin(2))
console.log(afficherPointeSapin(5))


function afficherRectangle(hauteur, largeur) {
    // pour chaque "étage" de la hauteur
    //    appeler printEtoile
    etage = hauteur
    // for each hauteur
    //etage.forEach(printEtoile(largeur));
    // printEtoile(largeur)


    function printEtoile(n) {
        let elem = "*"
        let aiguille = elem.repeat(n)
        return aiguille
    }
    console.log(printEtoile(8))
    // console.log(printEtoile(largeur)) 




}
afficherRectangle(5, 5)

console.log(afficherRectangle(5, 5));