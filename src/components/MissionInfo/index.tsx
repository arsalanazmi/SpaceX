import React,{useEffect} from 'react'
import { useLaunchMissionInfoQuery } from './../../generated/graphql'
import MissionInfo from './MissionInfo'
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    fetching: {
        padding: '50px',
        fontWeight: 'bold',
        marginTop: '10px'
    }
}));

interface OwnProps {
    id: number;
}

const MissionInfoContainer = ({ id }: OwnProps) => {
    const classes = useStyles();

    const { data, loading, error, refetch } = useLaunchMissionInfoQuery({
        variables: { id: String(id) },
    });
    useEffect(() => {
        refetch();
    }, [id])

    if (loading)
        return <Typography variant="h5" className={classes.fetching}> Loading... </Typography>

    if (error)
        return <Typography variant="h5" className={classes.fetching}> Error </Typography>

    if (!data)
        return <h3>Select a flight from the panel</h3>

    return (
        <div>
            <MissionInfo data={data} />
        </div>
    )
}

export default MissionInfoContainer