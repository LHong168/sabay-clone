export interface ArticleType {
    id: number;
        attributes: {
        title: string;
        subtitle: string;
        author: string;
        published_date: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        content: string;
        viewCount: string;
        article_category: ArticleCategory;
        thumbnail: Thumbnail;
    };
}

interface ArticleCategory {
  data: {
    id: number;
    attributes: {
        name: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
  };
}

interface Thumbnail {
    data: {
        id: number;
        attributes: {
            name: string;
            width: number;
            height: number;
            size: number;
            url: string;
        };
    };
}