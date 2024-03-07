export interface ArticleType {
    id: number
    attributes: {
        title: string
        subtitle: string
        author: string
        published_date: string
        createdAt: string
        updatedAt: string
        publishedAt: string
        locale: string
        content: string
        viewCount: string
        article_category: ArticleCategory
        thumbnail: Thumbnail
    }
}

export type ArticleCategoryArray = {
    data: Array<{
        id: number
        attributes: {
            name: string
            createdAt: string
            updatedAt: string
            publishedAt: string
        }
    }>
}

export type ArticleCategory = {
    data: {
        id: number
        attributes: {
            name: string
            width: number
            height: number
            size: number
            url: string
        }
    }
}

interface Thumbnail {
    data: {
        id: number
        attributes: {
            name: string
            width: number
            height: number
            size: number
            url: string
        }
    }
}
