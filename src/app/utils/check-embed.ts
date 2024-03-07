import { ArticleType } from '../share/types/article-type'

export const checkEmbed = (articles: ArticleType[]) => {
    const regex =
        /<figure class="media"><oembed url="https:\/\/www\.youtube\.com\/watch\?v=([^"]*)"><\/oembed><\/figure>/g

    const articlesWithVideo = articles.filter((article) => {
        return regex.test(article.attributes.content)
    })

    return articlesWithVideo
}
