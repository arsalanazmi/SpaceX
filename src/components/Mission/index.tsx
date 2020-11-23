import React from 'react'
import { useMissionListQuery } from './../../generated/graphql'
import MissionList, { OwnProps } from './MissionsList'
import Typography from '@material-ui/core/Typography';

const MissionListContainer = (props: OwnProps) => {

    const { data, error, loading } = useMissionListQuery();

    if (loading)
        return <Typography variant="h5" style={{ fontWeight: "bold" }}>Loading...</Typography>

    if (error || !data)
        return <Typography variant="h5" style={{ fontWeight: "bold" }}>Error</Typography>

    return (
        <div>
            <MissionList data={data} {...props} />
        </div>
    )
}

export default MissionListContainer