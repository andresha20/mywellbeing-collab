const fetcher = async (url, body) => {
    const result = await fetch(url, body);
    console.log(result)
    const resultJSON = await result.json();
    return resultJSON;
}

export default fetcher;