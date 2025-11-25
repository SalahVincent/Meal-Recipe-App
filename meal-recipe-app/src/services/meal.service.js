import api from "./api"

export const getMealCategories = async () => {
    const response = api.get('categories.php')
    return response.json()
}

export const getMealsByCategory = async ( category ) => {
    const response = api.get('filter.php', {
    searchParams: {
        c: category
    }
})
return response.json()
}

export const getMealDetailsById = async ( id ) => {
    const response = api.get('lookup.php', {
        searchParams: {
            i: id
        }
    })
    return response.json()
}