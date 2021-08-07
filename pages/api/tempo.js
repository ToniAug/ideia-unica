async function tempo(request, response){
    const dymanicDate = new Date();

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dymanicDate.toGMTString(),
    })
}

export default tempo;