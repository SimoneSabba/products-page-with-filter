import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import ButtonFilter from '../ButtonFilter/ButtonFilter';

const ActiveFilters = (props) => {
    let activeFilters;
    if (props.filters.length) {
        activeFilters = props.filters.map((filter) => {
            return (
                <ButtonFilter 
                    key={filter.label} 
                    filter={filter}
                    showIcon
                    onClick={props.onRemoveFilter}>
                </ButtonFilter>
            )
        });
    }

    return (
        <Grid item xs={12}>
            <div className="ActiveFilters">
                <p className="ActiveFilters__title">Selected Filters</p>
                <div className="ActiveFilters__wrapper">
                    {activeFilters}
                </div>
            </div>
        </Grid>
    );
}

export default ActiveFilters;