'use server'

const requestOptions = {
    headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
    next: { revalidate: 5 },
}

export async function fetchArticles() {
    try {
        const res = await fetch(
            `${process.env.STRAPI_API_URL}/articles?populate=*&sort[0]=published_date:desc`,
            requestOptions
        )
        const response = await res.json()

        return response
    } catch (err) {
        console.error(err)
    }
}

export async function fetchArticlesById(id: string) {
    try {
        const res = await fetch(
            `${process.env.STRAPI_API_URL}/articles/${id}`,
            requestOptions
        )
        const response = await res.json()
        return response
    } catch (err) {
        console.error(err)
    }
}

export async function fetchArticlesByCategory(category: string) {
    try {
        const res = await fetch(
            `${process.env.STRAPI_API_URL}/articles?populate=*&filters[article_category][name][$eq]=${category}&sort[0]=publishedAt:desc`,
            requestOptions
        )
        const response = await res.json()

        return response
    } catch (err) {
        console.error(err)
    }
}

export async function fetchArticlesByView() {
    try {
        const res = await fetch(
            `${process.env.STRAPI_API_URL}/articles?populate=*&sort[0]=viewCount:desc&pagination[pageSize]=5`,
            requestOptions
        )
        const response = await res.json()
        return response
    } catch (err) {
        console.error(err)
    }
}

export async function fetchArticlesByRecent() {
    try {
        const res = await fetch(
            `${process.env.STRAPI_API_URL}/articles?populate=*&sort[0]=published_date:desc&pagination[pageSize]=5`,
            requestOptions
        )
        const response = await res.json()
        return response
    } catch (err) {
        console.error(err)
    }
}
