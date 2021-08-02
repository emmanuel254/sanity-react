import sanityClient from '@sanity/client'


export default sanityClient({
    projectId: "wz8yez7h",
    dataset: "production",
    useCdn: true
})