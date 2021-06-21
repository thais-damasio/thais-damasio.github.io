import { Avatar as AvatarMUI } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProfilePhoto from '../assets/profile.jpg';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
    large: {
      transform: "translate3d(0,-50%,0)",
      margin: "0 auto",
      width: theme.spacing(26),
      height: theme.spacing(26),
    },
}));

const Avatar = styled(AvatarMUI)`
`

function AvatarComponent() {
    const classes = useStyles();

    return (
        <Avatar src={ProfilePhoto} alt="Profile Photo" className={classes.large}/>
    );
}

export default AvatarComponent;
