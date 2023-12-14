

export const data = async () => {
    const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=e77113443cad42829aed3c941b718170');
    const data = await res.json();
    return data;
}