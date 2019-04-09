const url = 'https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init';

fetch(url).then(function (response) {
    return response.json();
}).then(function (data) {
    data.list.forEach(function (jsonData, index) {
        dataHandling(data, [index], [0]);
    });
});

function dataHandling(data, listItem, secondListItem) {
    const imageURL = data.list[listItem].thumbnail[secondListItem].url;
    const title = data.list[listItem].name;
    const linkURL = data.list[listItem].url;
    const branding = data.list[listItem].branding;
    const markup = `
    <div class="row blocks">
    <div class="column block">
        <a href="${linkURL}" target="_blank"><img class="adImages" src="${imageURL}" alt="${title}" ></a>
        <a class="title font-style-2" href="${linkURL}" target="_blank"><h2 class="title-style">${title}</h2></a>
        <a class="brand font-style-2" href="${linkURL}" target="_blank"><p>${branding}</p></a>
    </div>
    </div>`;
    document.getElementById("container").innerHTML += markup;
}