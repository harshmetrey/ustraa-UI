import React, { useEffect, useState } from 'react'
import { Typography, Button, Menu, MenuItem } from '@material-ui/core'


export const FooterActionBar = (props) => {

    const [showText, setShowText] = useState()
    const [anchorEl, setAnchorEl] = useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (item) => {
        props.handleCatogoryChange(item.category_id, item.category_name)
        setAnchorEl(null);
    }


    useEffect(() => {
        if (props.category) {
            setShowText("[+] show more");
        }
    }, [props.category])


    useEffect(() => {
        props.handleListRender("[+] show more")
        setShowText("[+] show more");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.handleListRender]);


    const showMore = (text) => {
        if (text === "[+] show more") {
            setShowText("[-] show less")
            props.handleListRender("[-] show less")
        } else {
            setShowText("[+] show more")
            props.handleListRender("[+] show more")
        }
    }



    return (
        <div className="footer-container">
            <span className="category-text">Showing for:</span>
            <div className="footer-category-container">{props.category}</div>
            <Typography gutterBottom variant="body2">
                {props.category &&
                    <React.Fragment>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Change
                                </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            variant="selectedMenu"
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            className="menu-width"
                        >
                            {props && props.menuItems.map(item => {
                                return (
                                    <MenuItem key={item.id} 
                                    selected={item.category_name === props.category}
                                    onClick={() => handleSelect(item)}
                                    >
                                    {item.category_name}
                                    </MenuItem>

                                )
                            })}
                        </Menu>
                    </React.Fragment>}
            </Typography>

            <Button variant="text" component="p" onClick={() => showMore(showText)}>
                <Typography gutterBottom variant="caption">
                    {props.category && showText}
                </Typography>
            </Button>

        </div>
    )
}

export default FooterActionBar