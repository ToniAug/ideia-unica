async function tempo(request, response){
    const dymanicDate = new Date();

    response.json({
        date: dymanicDate.toGMTString(),
    })
}

export default tempo;