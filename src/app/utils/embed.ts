export function embedUrl(content: string) {
    const regex =
        /<figure class="media"><oembed url="https:\/\/www\.youtube\.com\/watch\?v=([^"]*)"><\/oembed><\/figure>/g

    content = content.replace(regex, function (match, videoId) {
        let embedUrl = `https://www.youtube.com/embed/${videoId}`
        return `<iframe width="100%" height="450" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`
    })

    return content
}
