import { ArticleType } from '../share/types/article-type'

export const checkEmbed = (articles: ArticleType[]) => {
    const regex =
        /<figure class="media"><oembed url="https:\/\/www\.youtube\.com\/watch\?v=([^"]*)"><\/oembed><\/figure>/g

    // console.log(articles[2]?.attributes.content)
    // console.log(regex.test(articles[2]?.attributes.content))

    const articlesWithVideo = articles.filter((article) =>
        regex.test(article.attributes.content)
    )
    return articlesWithVideo
}
