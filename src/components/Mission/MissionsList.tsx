import React from 'react'
import { MissionListQuery } from '../../generated/graphql'
import Typography from '@material-ui/core/Typography';
import './style.css'

export interface OwnProps {
    handleIdChange: (newId: number) => void
}

interface Props extends OwnProps {
    data: MissionListQuery
}

const MissionList: React.FC<Props> = ({ data, handleIdChange }) => {
    return (
        <div className="Missions">
            <Typography variant="h5" className='Heading'>Mission List</Typography>
            <ol className="Missions_List">
                {!!data.launches &&
                    data.launches.map(
                        (launch, i) =>
                            !!launch && (
                                <li
                                    key={i}
                                    className="Missions_List_Name"
                                    onClick={() => handleIdChange(launch.flight_number!)}
                                >
                                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>{launch.mission_name} ({launch.launch_year}) {launch.launch_success ? <span className="Success">SUCCESS</span> : <span className="Failure">FAILURE</span>} </Typography>
                                </li>
                            ),
                    )}
            </ol>
        </div >
    )
}
export default MissionList