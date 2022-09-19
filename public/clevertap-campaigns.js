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
// function productViewedPersonalisationCampaign(data){
    
//     const name = data.kv.Name;
//     const product = data.kv.Product;

//     const textDiv = document.createElement('div');
//     textDiv.innerText = `Hi <h1 id="user-name">user</h1> this is the <p "product-name">product</p>`
//     textDiv.style.cssText = `   position: absolute;
//                                 top: 0;
//                                 left: 0;
//                                 width: 100%;
//                                 text-align: center;
//                                 background-color: yellow;
//                             `
//     const namePlace = textDiv.getElementById('user-name');
//     namePlace.innerHTML = name;

//     const productPlace = textDiv.getElementsByTagName('product-name');
//     productPlace.innerHTML = product;

//     document.getElementById('test').appendChild(textDiv)
//     // let product = data.kv.Product
    
//     console.log(data.kv.Product);
// }

console.log(1);
document.addEventListener("CT_web_native_display", function(event) {
    const data = event.detail;
    const topic = data.kv.topic;
    console.log(topic);
    switch (topic) {
        case "homepage": {
            renderCartDropOffPersonalisationCampaign(data)
            break;
        }
        case "Added to Cart":{
            addToCartPersonalizationCampaign(data)
            break;
        }

       
    }
});

