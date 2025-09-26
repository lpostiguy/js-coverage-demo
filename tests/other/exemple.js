// Pour les tests asynchrones
test('résout', async () => {
    await expect(fetchUser()).resolves.toMatchObject({ id: 1 })
})

// Pour les tests qui on des callbacks, on utilise une promesse
const read = (p) => new Promise((res, rej) => fs.readFile(p, (e, d) => e ? rej(e) : res(d)))
