import React, {useEffect, useState} from 'react';
import "./UsersDetails.css";
import {
    fetchUserByName,
    fetchUserRepos,
    filterUserReposAction,
    getUserDetails,
    resetUserDetailsAction
} from "../../../redux/actions/userDetails";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useHistory} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TransitionGroup from "react-transition-group/TransitionGroup";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const UsersDetails = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {name} = useParams();
    const {userDetails} = useSelector(getUserDetails);
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        dispatch(fetchUserByName(name))
            .then(() => dispatch(fetchUserRepos(name)))

        return () => {
            dispatch(resetUserDetailsAction())
        }
    }, []);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        dispatch(filterUserReposAction(value))
    };


    const handleSelectRepo = (repo) => {
        window.open(repo.clone_url, '_blank')
    };


    const handleGoBack = () => {
        history.push('/users');
    };

    return (
        <Box className='content'>
            <IconButton className='button-back' onClick={handleGoBack}>
                <ArrowBackIcon />
            </IconButton>
            <Typography variant={"h5"} align={"center"}>GitHub Searcher</Typography>
            {userDetails &&
            <>
                <Box className='info'>
                    <Box>
                        <img className='avatar' src={userDetails.avatar_url} alt=""/>
                    </Box>
                    <Box>
                        <Typography variant={"h6"}>{userDetails.name}</Typography>
                        <Typography variant={"h6"}>{userDetails.email}</Typography>
                        <Typography variant={"h6"}>{userDetails.location}</Typography>
                        <Typography variant={"h6"}>{userDetails.created_at}</Typography>
                        <Typography variant={"h6"}>{userDetails.followers} Followers</Typography>
                        <Typography variant={"h6"}>Following {userDetails.following}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography className='bio' variant={"subtitle2"} align={"center"}>{userDetails.bio}</Typography>
                </Box>
                <TextField className='repo-search' value={searchValue} onChange={handleSearchChange}
                           placeholder={"Search for User's Repositories"} fullWidth
                           size={"small"} variant={"outlined"}/>
                <List className='repos-list'>
                    <TransitionGroup>
                        {userDetails?.repos?.length > 0 && userDetails.repos.map((repo, index) => (
                            <Collapse key={index}>
                                <ListItem onClick={() => handleSelectRepo(repo)} button alignItems="center">
                                    <ListItemText
                                        primary={repo.name}
                                    />
                                    <Box>
                                        <Typography align={"right"}>Forks {repo.forks}</Typography>
                                        <Typography align={"right"}>Stars {repo.stargazers_count}</Typography>
                                    </Box>
                                </ListItem>
                                <Divider className='divider' component="li"/>
                            </Collapse>
                        ))}
                    </TransitionGroup>
                </List>
            </>
            }
        </Box>
    );
};

export default UsersDetails;