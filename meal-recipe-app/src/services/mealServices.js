import { api } from "./Api"

export const getMealCategories = async () => {
    const response = api.get('categories.php')
    return response.json()
}