import { getFromTrevorblades, getFromRestcountries } from '../assistance/loadData'
require('isomorphic-fetch');

it('Trevorblades API test', async function() {
    const countries = await getFromTrevorblades();
    expect(countries[0].name).toBe('Andorra')
})

it('Restcountries API test', async function() {
    const countries = await getFromRestcountries();
    expect(countries[0].capital).toBe('Kabul')
})
