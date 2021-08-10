const getCountryData = async (code = 'all') => {
    try{

        if (code === 'all'){
            await fetch('https://restcountries.eu/rest/v2/all')
                    .then(response => {
                        if (response.ok){
                            console.log(response)
                        }else{
                            console.log("Fetch Resolved but response not ok !")
                        }
                    }).catch((error) => {
                        console.log("Error on fetch all countries : ", error);
                    })
        }else{
            

        }

       // return data;
    } catch (error) {
        console.log('Global Error on getCountryData() : ', error);
    }
}

export default getCountryData;