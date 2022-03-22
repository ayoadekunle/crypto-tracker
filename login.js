// const baseURL = "https://www.coingecko.com/en/api"

const fetchTrendingCoins = () => {
    let trendingCoins = {}
    const TrendingCoins = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
    fetch(TrendingCoins).then(response => {
        return response.json();
    }).then(data => {
        trendingCoins = data;
        console.log(trendingCoins);
        Object.keys(data).forEach((key) => {
            console.log(data[key].image);
            let div = document.createElement("div");
            let img = document.createElement("img");
            if (key === "0") {
                div.setAttribute("class", "carousel-item active");
            } else {
                div.setAttribute("class", "carousel-item");
            }
            img.setAttribute("src", data[key].image);
            img.setAttribute("class", "d-block w-100");
            div.appendChild(img);
            document.querySelector("#carousel-inner").appendChild(div);
        });
    }).catch(e => {
        console.log(e);
    });
};
