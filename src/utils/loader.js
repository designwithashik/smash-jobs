export const catagoriesAndJobsData = async() => {
    const categories = await fetch('/category.json');
    const categoriesData = await categories.json();
    const jobs = await fetch('/jobs.json');
    const jobsData = await jobs.json();
    return {categoriesData, jobsData}
}

export const jobDetails = async({ params }) => {
    const jobs = await fetch('/jobs.json');
    const jobsData = await jobs.json();
    const clickedJob = jobsData.find(job=>job.id == params.id)
    console.log(clickedJob);
    return clickedJob;
    // return params.id
}