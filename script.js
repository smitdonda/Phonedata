
document.body.innerHTML = `<div class="container">
    <div class="container heading-container ">
    <h1>Phone Data</h1>
    <img src="https://www.nicepng.com/png/detail/10-107408_mobile-png-image-hd-all-mobile-phone-png.png" alt="Mobiles" >
    </div>
</div>
<div id = "mainContainer" class = "main-container"></div>;
`;

const getData = async () => {
    try {
        const data = await fetch ("https://api-mobilespecs.azharimm.site/v2/top-by-fans")
        const phone_data = await data.json();
        
        mainContainer.innerHTML ="";
        phone_data.data.phones.forEach((data) => {
            displaydata(data)
        });
    }
    catch (error) {
        console.log(error);
    }
};

getData();

const displaydata = (obj)=>{
    mainContainer.innerHTML +=`
        <div class="container main-container" id = "demo">
            <h3 class="blue"> Phone Name: <span>${obj.phone_name}</span> </h3>
            <p>Slug: <span>${obj.slug}</span></p>
            <p>Favorites: <span>${obj.favorites}</span></p>
            <p>More Details: <span>${obj.detail}</span></p>
        </div>`
};
