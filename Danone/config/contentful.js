import { createClient } from 'contentful';

const client = createClient({
    space: 'y2f1aypq0d2h',
    accessToken: 'Zne97Fe1BLai7NJdpLvgEjIi4ChTHrGvDCJrJMz7bww'
});

export default client;

// import contentful from 'contentful'

// const client = contentful.createClient({
//     space: 'y2f1aypq0d2h',
//     environment: 'master', // defaults to 'master' if not set
//     accessToken: 'Zne97Fe1BLai7NJdpLvgEjIi4ChTHrGvDCJrJMz7bww'
// })

// client.getEntries()
//     .then((response) => console.log(response.items))
//     .catch(console.error)
