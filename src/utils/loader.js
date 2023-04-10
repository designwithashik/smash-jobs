export const catagoriesData = async() => {
    const categories = await fetch('category.json');
    return await categories.json()
}