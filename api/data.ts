export const fetchData = async () => {
    try {
        const res = await fetch(`{https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.API_KEY}}`);

        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json();

        if (data && data.articles) {
            return data.articles;
        } else {
            throw new Error('Invalid response format or no articles found');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of an error
    }
};
