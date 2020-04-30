import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import GroupFilters from './GroupFilters/GroupFilters';
import ActiveFilters from './ActiveFilters/ActiveFilters';

// Style
import './Filters.scss';

const renderActiveFilters = (props) => {
    return (
        <Grid item xs={12}>
            <ActiveFilters 
                filters={props.activeFilters}
                onRemoveFilter={props.onRemoveFilter}
            />
        </Grid>
    );
}

const renderGroupFilters = (item, onClickHandler, activeFilters) => {
    return (
        <Grid key={item.name} item xs={12}>
            <GroupFilters
                activeFilters={activeFilters}
                key={item.name} 
                item={item} 
                onClick={onClickHandler} 
            />
        </Grid>
    );
}

const renderMobileFilterButton = (props) => {
    return (
        <Hidden smUp>
            <Grid item xs={12} style={{margin: 12}}>
                <Button color="primary" variant="contained" onClick={props.onToggleFilter} fullWidth>
                    { props.showFilter ? 'HIDE FILTERS' : 'FILTERS' }
                </Button>
            </Grid>
        </Hidden>
    );
}

const Filters = (props) => {
    const filterWrapperClassName = `Filters__wrapper ${props.showFilter ? 'show-filter' : 'hide-filter'}`;
    const groupFilters = props.filters.map((item) => renderGroupFilters(item, props.onClickFilter, props.activeFilters));
    const activeFilters = props.activeFilters.length ? renderActiveFilters(props) : null;
    const mobileFilterButton = renderMobileFilterButton(props);

    return (
        <aside className="Filters">
            <Grid container spacing={3}>
                {mobileFilterButton}
            </Grid>
            <div className={filterWrapperClassName}>
                <Grid container spacing={3}>
                    {activeFilters}
                    {groupFilters}
                </Grid>
            </div>
        </aside>
    )
}

export default Filters;