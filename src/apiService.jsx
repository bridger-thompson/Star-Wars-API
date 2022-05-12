import axios from "axios";

export const apiService = {
    getNextUrl: async (pageURL) => {
        const response = await axios.get(pageURL);
        if (response.data.next != null) {
            return response.data.next;
        }
        else {
            return pageURL;
        }
    },

    getPrevUrl: async (pageURL) => {
        const response = await axios.get(pageURL);
        if (response.data.previous != null) {
            return response.data.previous;
        }
        else {
            return pageURL;
        }
    },

    getPersonDetailUrl: (character) => {
        return character.url.split("/api/")[1];
    },

    getHomeworldUrl: async (pageURL) => {
        const response = await axios.get(pageURL);
        return response.data.homeworld;
    },
    
    getObjectDetails: async (pageURL) => {
        const response = await axios.get(pageURL);
        return response.data;
    },

    getPeopleArray: async (pageURL) => {
        const response = await axios.get(pageURL);
        return response.data.results;
    },
};
