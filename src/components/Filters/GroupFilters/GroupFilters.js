import React from 'react';
import ButtonFilter from '../ButtonFilter/ButtonFilter';

const GroupFilters = (props) => {

    const {entry, Entry} = props.item; 
            
    const filterBlockEl = (entry || Entry)
        .filter((filter) => filter.count !== 0 && filter.count !== '0')
        .map((filter) => {
            const isActive = props.activeFilters.find((el) => el.label === filter.label)
            return (
                <ButtonFilter 
                    key={filter.label} 
                    filter={filter} 
                    onClick={props.onClick}
                    showCount
                    isActive={isActive}
                >
                </ButtonFilter>
            )
        });

    return (
        <div key={props.item.name} className="GroupFilters">
            <p className="GroupFilters__title">{props.item.name}</p>
            <div className="GroupFilters__wrapper">
                {filterBlockEl}
            </div>
        </div>
    );
}

export default GroupFilters;