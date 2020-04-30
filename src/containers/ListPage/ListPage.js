import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { getProducts } from '../../utils/api';
import ProductsList from '../../components/ProductsList/ProductsList';
import Filters from '../../components/Filters/Filters';
import './ListPage.scss';


const ProductListPage = () => {
    // use breakpoint status to init showFilter status that should be only visible for mobile
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState([]);
    const [activeFilters, setActiveFilters] = useState([]);
    const [showFilter, setShowFilter] = useState(matches);

    /**
     * @description toggle filter handler for mobile view
     */
    const onToggleFilter = () => {
      const prevStatus = showFilter;
      setShowFilter(!prevStatus);
    }

    /**
     * @description select filter handler. Will apply selected filter
     * @param {Object} filter selected filter
     */
    const onClickFilter = (filter) => {
      if (!activeFilters.find((el) => el.label === filter.label)) {
        const prevFilters = [...activeFilters];
        prevFilters.push(filter);
        setActiveFilters(prevFilters);
      }
      
    }

    /**
     * @description selected filter handler. Will remove the filter from selected filters
     * @param {Object} filterToRemove filter selected to remove from active filter
     */
    const onRemoveFilter = (filterToRemove) => {
      const prevFilters = [...activeFilters];
      const newFilter = prevFilters.filter(
        (item) => {
          const value = filterToRemove.entryValue || filterToRemove.value;
          return !(item.entryValue === value || item.value === value);
        }
      );
      
      setActiveFilters(newFilter);
    }

    /**
     * @description API call to get the list of products. Once API call is successfull, will set the products and the filters
     */
    useEffect(() =>{
        setLoading(true);
        getProducts(activeFilters)
        .then(res => {
          const {CatalogEntryView, FacetView, catalogEntryView, facetView} = res.data;
          setProducts(CatalogEntryView || catalogEntryView);
          setFilters(FacetView || facetView);
          setLoading(false);
        })
      }, [activeFilters]);

      return (
        <article className="ListPage">
          <div className="ListPage__title-wrapper">
            <h1 className="ListPage__title">Tablets</h1>
            <span className="ListPage__count">{products.length} items</span>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              { 
                loading 
                ? <CircularProgress /> 
                : <Filters 
                    filters={filters} 
                    activeFilters={activeFilters} 
                    onClickFilter={onClickFilter}
                    onRemoveFilter={onRemoveFilter}
                    onToggleFilter={onToggleFilter}
                    showFilter={showFilter}
                  /> 
                }
            </Grid>
            <Grid item xs={12} sm={9}>
              { loading ? <CircularProgress /> : <ProductsList products={products} /> }
            </Grid>
          </Grid>
        </article>
      )
}

export default ProductListPage;