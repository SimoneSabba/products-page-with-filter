import axios from 'axios'

const BASE_URL = 'resources/store/1/productview/byCategory/10023';

/**
 * @description Build search query string parameter
 * @param {Array} filters 
 */
const buildFiltersQuery = (filters) => {
    let query = [];
    if (!filters.length) return;
    filters.forEach((filter) => {
        query.push(`facet=${filter.entryValue || filter.value}`);
    });
    return query.join('&');
}

/**
 * @description Return all products if no filters are passed, otherwise return filtered products
* @param {Array} filters 
* @return list of products
*/
export const getProducts = (filters) => {
    const query = buildFiltersQuery(filters);
    if (!query) {
        return getAll();
    } else {
        return search(query);
    }
}

/**
 * @description all products API
 */
export const getAll = () => {
    return axios.get(`wcs/${BASE_URL}`);
}

/**
 * @description search products API
 */
export const search = (query) => {
    return axios.get(`search/${BASE_URL}?${query}`);
}