'use server'

const requestOptions = {
    headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
}

export async function fetchCategory() {
    try {
        const res = await fetch(
            `${process.env.STRAPI_API_URL}/article-categories?sort[0]=name:asc`,
            requestOptions
        )
        const response = await res.json()
        return response
    } catch (err) {
        console.error(err)
    }
}
