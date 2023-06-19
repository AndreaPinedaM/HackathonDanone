import client from '../config/contentful';

const fetchData = async () => {
    try {
        const response = await client.getEntries();
        return response.items;
    } catch (error) {
        console.log('Error retrieving content from Contentful:', error);
    }
};

export default fetchData;





