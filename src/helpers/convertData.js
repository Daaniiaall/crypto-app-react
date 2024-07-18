function convertData(data , type){
    // console.log(data[type]);

    // data[type] = Array ===> convertedData = Array
    const convertedData = data[type].map((item)=>{
        
        // return Array of Object
        return{
            date: item[0] ,
            [type]: item[1],
        }
    })
    return convertedData;

    // console.log(convertedData)
}

export {convertData};