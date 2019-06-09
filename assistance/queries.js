export const graphqlURL = 'https://countries.trevorblades.com'
export const graphqlAllCountriesQuery = '{ countries { code name emoji currency languages { name } } }'

export function getQuery(queryContent) {
    return {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: queryContent })
    }
}

export function getQueryContent(countrycode) {
    return `{ country(code: "${countrycode}") { name emoji }}`
}