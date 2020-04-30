import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

// Style
import './ButtonFilter.scss';


const ButtonFilter = (props) => {
    const filter = props.filter;
    const onClickCallback = props.onClick;
    return (
        <Grid key={props.filter.entryValue} item xs={12}>
            <Button
                disabled={!!props.isActive}
                classes={{ root: 'Button', label: 'Button__label' }} 
                fullWidth 
                onClick={() => onClickCallback(filter)}
                endIcon={props.showIcon ? <CloseIcon /> : null}
            >
                <span>{filter.label}</span>
                {props.showCount ? <span>({filter.count})</span> : null}
            </Button>
        </Grid>
    );
}

export default ButtonFilter;