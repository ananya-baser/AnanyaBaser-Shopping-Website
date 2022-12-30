import products from "./home-products"
import bestDeals from './home-best-deals'
import productList from './product-list'
export function getHomeProducts () {
    return products
}
export function setHomeProducts (newProducts) {
    products = newProducts
}
export function getHomeBestDeals () {
    return bestDeals
}
export function setHomeBestDeals (newBestDeals) {
    bestDeals = newBestDeals
}
function renderCartDropOffPersonalisationCampaign(data) {
    const value = data.kv.Name;
    const textDiv = document.createElement('div')
    textDiv.style.cssText = `position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            text-align: center;`
    textDiv.innerText = value
    document.getElementById('banner1').appendChild(textDiv)
}

function addToCartPersonalizationCampaign(data){
    let product=data.kv.Product;
    console.log(product);
    console.log(data);


}

function productViewedPersonalisationCampaign(data){
    let products = getHomeProducts();
    // handling top picks
    let lastProductViewed =JSON.parse(data.kv.last_product_viewed);
    let productPresentInArray = -1
    for (let i=0; i<products.length; i++) {
        if (lastProductViewed.id === products[i].id) {
            productPresentInArray = i
            break
        }
    }
    if(productPresentInArray === -1) {
        products.pop();
        products.unshift(lastProductViewed);
    }
    else {
        products.splice(productPresentInArray, 1);
        products.unshift(lastProductViewed);
    }
    setHomeProducts(products);

    let bestDeals = getHomeBestDeals()
    productPresentInArray = -1
    let filterProducts = productList.filter((product) => product.typeOfProduct === lastProductViewed.typeOfProduct).slice(0, 3)
    for (let i=0; i<filterProducts.length; i++) {
        let tempProduct = filterProducts[i]
        for (let j=0; j<bestDeals.length; j++) {
            if (tempProduct.id === bestDeals[j].id) {
                productPresentInArray = j
                break
            }
        }
        if (productPresentInArray === -1) {
            bestDeals.pop()
            bestDeals.unshift(tempProduct)
        }
        else {
            bestDeals.splice(productPresentInArray, 1)
            bestDeals.unshift(tempProduct)
        }
    }
    setHomeBestDeals(bestDeals)
}
document.addEventListener("CT_web_native_display", function(event) {
    const data = event.detail;
    const topic = data.kv.topic;
    switch (topic) {
       
        case "Product Viewed":{
            productViewedPersonalisationCampaign(data);
        }
       
    }
});

