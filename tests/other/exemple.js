// Pour les tests asynchrones
/**
 * Intention :
 *  Vérifier que fetchUser() renvoie bien un objet utilisateur
 *  avec l’identifiant attendu.
 *
 * Données de test :
 *  - Pas de paramètres d’entrée
 *
 * Oracle :
 *  - La promesse est résolue avec un objet { id: 1 }
 */
test('résout', async () => {
    await expect(fetchUser()).resolves.toMatchObject({ id: 1 })
})


// Pour les tests qui ont des callbacks, on encapsule dans une promesse
/**
 * Intention :
 *  Fournir une fonction read(p) qui transforme fs.readFile (callback)
 *  en une promesse exploitable dans les tests.
 *
 * Données de test :
 *  - p : chemin d’un fichier à lire
 *
 * Oracle :
 *  - Si la lecture réussit, la promesse est résolue avec les données
 *  - Si une erreur survient, la promesse est rejetée avec l’erreur
 */
const read = (p) =>
    new Promise((res, rej) =>
        fs.readFile(p, (e, d) => (e ? rej(e) : res(d)))
    )

