import React, {useEffect, useState} from 'react';
import "./UsersList.css";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {fetchUsers, filterUsersAction, getUsers} from "../../../redux/actions/users";
import {useDispatch, useSelector} from 'react-redux';
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Collapse from "@material-ui/core/Collapse";
import { useHistory } from 'react-router-dom';

const UsersList = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const {users} = useSelector(getUsers);

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        dispatch(filterUsersAction(value))
    };

    const handleSelectUser = (user) => {
        history.push(`/users/${user.login}`)
    }

    return (
        <Box className='content'>
            <Typography variant={"h5"} align={"center"}>GitHub Searcher</Typography>
            <TextField className='users-search' value={searchValue} onChange={handleSearchChange} placeholder={'Search for Users'} fullWidth
                       size={"small"} variant={"outlined"}/>
            <List className='users-list'>
                <TransitionGroup>
                    {users.length > 0 && users.map((user, index) => (
                        <Collapse key={index}>
                            <ListItem onClick={() => handleSelectUser(user)} button alignItems="center">
                                <ListItemAvatar>
                                    <Avatar alt={user.login} src={user.avatar_url}/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={user.login}
                                />
                            </ListItem>
                            <Divider className='divider' component="li"/>
                        </Collapse>
                    ))}
                </TransitionGroup>
            </List>
        </Box>
    );
};

export default UsersList;