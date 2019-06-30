import { getQuery, graphqlURL, graphqlAllCountriesQuery } from './queries'

export async function getFromTrevorblades() {
    let countries
    await fetch(graphqlURL, getQuery(graphqlAllCountriesQuery))
        .then(response => response.json())
            .then(results => { countries = results.data.countries  })
                .catch(err => console.log(`loadData.componentDidMount  error: ${err}`))    
    return countries
}

export async function getFromRestcountries() {
    let countries
    await fetch(`https://restcountries.eu/rest/v2/all?fields=borders;capital;population;region;alpha2Code;alpha3Code`)
        .then(res => res.json())
            .then(res =>{ countries = res })
                .catch(err => console.log(`loadData.componentDidMount  error: ${err}`)) 
    return countries
}

export async function setCountriesInfo(addCountry) {
    let countriesTrevorblades = await getFromTrevorblades()
    let countriesRestcountries = await getFromRestcountries()

    countriesTrevorblades.map(country => {
        for(let i=0; i<countriesRestcountries.length; ++i) {
            if(country.code == countriesRestcountries[i].alpha2Code) {
                country = {...country,...countriesRestcountries[i]}
                addCountry(country)
                break
            }
        }
    })
}
