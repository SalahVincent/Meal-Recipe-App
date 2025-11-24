import api from './theApi'

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