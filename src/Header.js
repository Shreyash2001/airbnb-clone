import React, { useState } from 'react'
import "./Header.css"
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search'
import { Link, useHistory } from 'react-router-dom'
import { Button, ClickAwayListener, IconButton, makeStyles, Popover, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './actions/userActions'
import { FavoriteBorderOutlined } from '@material-ui/icons'
function Header() {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
    },
    dropdown: {
      position: 'absolute',
      top: 45,
      right: 0,
      left: 0,
      zIndex: 1,
      border: '1px solid lightgray',
      width: '120px',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
  }));

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openExpandMore, setOpenExpandMore] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    const handleClose = () => {
        setAnchorEl(null);
      }
      const handleClickAway = () => {
        setOpenExpandMore(false);
      };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      }

    const handleExpandMoreClick = () => {
      setOpenExpandMore((prev) => !prev);
    }

    const handleFavoriteClick = () => {
      history.push("/favorites")
      setOpenExpandMore(false)
    }
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
      

    return (
        <div className="header">
           <Link to="/"> <img className="header__logo" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="header logo" /></Link>

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>
            
            <div className="header__right">
               {userInfo &&  <Button className="header__rightButton" onClick={() => history.push("/host")}>Host</Button>}
                <LanguageIcon />
                <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        
        <IconButton onClick={handleExpandMoreClick}><ExpandMoreIcon /></IconButton>
        {openExpandMore ? (
          <div className={classes.dropdown}>
          
           <Button className="header__rightButtonExpand" onClick={handleFavoriteClick}><FavoriteBorderOutlined /> Favorites</Button>
            
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
             {userInfo ?  
             <>
             <Button aria-describedby={id} onClick={handleClick}>
             <div style={{alignItems:"center", display:"flex"}}>
             <PersonIcon style={{color: "#ff7779"}} />
             <p style={{textTransform:"capitalize", fontSize:"21px", color:"#ff7779"}}>{userInfo.name}</p>
             </div>
             </Button>
             <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography>
            <div style={{padding: "20px"}}>
                <Button style={{textTransform: "inherit"}} onClick={logoutHandler}>SignOut</Button>
            </div>
        </Typography>
      </Popover>
      </>
              :  <IconButton>
              <Link to="/login" style={{color:"inherit"}}>
              <AccountCircleIcon />
              </Link>
              </IconButton>}
            </div>
        </div>
    )
}

export default Header
