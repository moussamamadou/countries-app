const getCountryData = async (code = 'all') => {
    let url = '';
    try{
        // If there is no code passed around fetch all else fetch the country with the corresponding code
        if (code === 'all'){
            url = 'https://restcountries.eu/rest/v2/all';
        }else{
            url = 'https://restcountries.eu/rest/v2/alpha/' + code.toUpperCase();
        }        
        const data = await fetch(url)
        .then(response => {
            if (response.ok){
                //console.log("Fetch Resolved ! Status : ", response.status);
                return response.json();
            }else{
                console.log("Fetch Resolved but response not ok ! Status : ", response.status);
            }
        })
        .then(json => json)
        .catch((error) => {
            console.log("Error on fetch all countries : ", error);
        });
        return data;
    } catch (error) {
        console.log('Global Error on getCountryData() : ', error);
    }
}

export default getCountryData;
