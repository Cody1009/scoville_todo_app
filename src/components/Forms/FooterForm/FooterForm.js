import React, {Component} from 'react';
import './FooterForm.css';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        backgroundColor: '#33adff',
        boxShadow: '0 0 2px #e6e6e6;',
        color: 'white',
        textTransform: 'none'
    }
});

const FooterForm = (props)=>{
        const {classes} = props;
        return (
            <div className="footer">


                <Link
                    to={{pathname: "/",}}
                >
                    <Button
                        variant="raised"
                        className={classes.button}
                    >
                        All
                    </Button>

                </Link>

                <Link to={{
                    pathname: "/completed-todos",
                }}
                >
                    <Button
                        variant="raised"
                        className={classes.button}
                    >
                        Completed
                    </Button>

                </Link>

                <Link to={{
                    pathname: "/not-completed-todos",

                }}
                >

                    <Button
                        variant="raised"
                        className={classes.button}
                    >
                        Active
                    </Button>

                </Link>

            </div>
        )


}


export default withStyles(styles)(FooterForm);