const main =  () => {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const contentElement = document.querySelector("#content");
    const baseUrl = 'https://covid19.mathdro.id/api/countries';

    //trigger pencarian
    const onButtonSearchClicked = () => {
        const keyword = searchElement.value;
        getData(keyword)
    } 

    //fetch data from API according to the input keyword 
    const getData = async (keyword) => {
        try{
            const response = await fetch(`${baseUrl}/${keyword}`);
            const responseJson = await response.json();

            if(responseJson.error){
                showResponseMessage(responseJson.message);
            } else {
                renderData(responseJson, keyword)
            }

        } catch(error){
            showResponseMessage(error);
        }
    };

    //show data
    const renderData = (data, keyword) => {
        contentElement.innerHTML = "";

        const pasienPositif = data.confirmed.value;
        const pasienSembuh = data.recovered.value;
        const pasienMeninggal = data.deaths.value;
        const terakhirUpdate = data.lastUpdate;

        contentElement.innerHTML += `
        <div class="card">
            <div class="card-header">
                <h2>Negara ${keyword}</h2>
            </div>
            <div class="card-info">
                <p>Jumlah pasien positif : ${pasienPositif} </p>
                <p>Jumlah pasien sembuh : ${pasienSembuh} </p>
                <p>Jumlah pasien meninggal : ${pasienMeninggal} </p>
                <p>Terakhir Update : ${terakhirUpdate} </p>
            </div>    
        </div>`;
    }

    const showResponseMessage = (message = "Gunakan huruf kecil dalam percarian") => {
        alert(message);
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};

export default main;