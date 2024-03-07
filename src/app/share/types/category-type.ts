export type CategoryType = {
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

export type CategoryData = {
    id: number
    attributes: {
        name: string
        createdAt: string
        updatedAt: string
        publishedAt: string
    }
}
