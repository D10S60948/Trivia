export const URL = 'https://countries.trevorblades.com';

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