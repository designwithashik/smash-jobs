export const catagoriesAndJobsData = async() => {
    const categories = await fetch('category.json');
    const categoriesData = await categories.json();
    const jobs = await fetch('jobs.json');
    const jobsData = await jobs.json();
    return {categoriesData, jobsData}
}