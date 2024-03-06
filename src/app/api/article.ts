"use server";

export async function fetchArticlesById(id: string) {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `${process.env.STRAPI_API_URL}/articles/${id}?populate=*`,
      requestOptions,
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchArticlesByCategory(category: string) {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `${process.env.STRAPI_API_URL}/articles?populate=*&filters[article_category][name][$eq]=${category}&sort[0]=createdAt:desc`,
      requestOptions,
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchArticles() {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `${process.env.STRAPI_API_URL}/articles?populate=*&pagination[pageSize]=4`,
      requestOptions,
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}
