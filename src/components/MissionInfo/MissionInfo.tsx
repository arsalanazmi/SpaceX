import React from 'react'
import { LaunchMissionInfoQuery } from './../../generated/graphql'
import {Typography} from '@material-ui/core';
import './style.css'
import { format } from 'date-fns';

interface Props {
    data: LaunchMissionInfoQuery
}

const MissionInfo: React.FC<Props> = ({ data }) => {
    if (!data.launch)
        return <Typography variant="h5">No Launch Available</Typography>

    return (
        <div className="Mission_Details">
            <Typography variant="h2" className="heading">Mission Details</Typography>
            <div className="Misson_Info">
                <div className="Mission">
                    <Typography variant="h5" className="Mission_Heading">Mission Name: </Typography>&nbsp;
                    <Typography variant="h6" className="Mission_Name">
                        {data.launch.mission_name}
                        {data.launch.rocket && ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
                    </Typography>
                </div>

                <div className="Mission">
                    <Typography variant="h5" className="Mission_Heading">Status: </Typography>&nbsp;
                    {data.launch.launch_success ?
                        (<Typography variant="h6" className="Mission_Status_Succeess">Success</Typography>)
                        : (<Typography variant="h6" className="Mission_Status_Failure">Failure</Typography>)}
                </div>

                <div className="Mission">
                    <Typography variant="h5" className="Mission_Heading">Launch Date:  </Typography>&nbsp;
                    <Typography variant="h6">
                        {!!data.launch.launch_date_utc
                            ? <span>{format(new Date(data.launch.launch_date_utc), 'PPPPp')}</span>
                            : null}
                    </Typography>&nbsp;
                </div>

                <div className="Mission">
                    <Typography variant="h5" className="Mission_Heading">Launch Site:  </Typography>&nbsp;
                    <Typography variant="h6">{data.launch.launch_site?.site_name} which is commonly known as "{data.launch?.launch_site?.site_name_long}"</Typography>&nbsp;
                </div>

                <div className="Mission">
                    <Typography variant="h5" className="Mission_Heading">Flight Number:  </Typography>&nbsp;
                    <Typography variant="h6">{data.launch.flight_number}</Typography>&nbsp;
                </div>

                {!!data.launch.details ? (
                    <span>
                        <Typography variant="h5" className="Mission_Heading">Mission Details:</Typography>
                        <Typography variant="h6" className="Mission_Descriptions">{data.launch.details}</Typography>
                    </span>
                ) : null}

                {!!data.launch.links && !!data.launch.links.flickr_images && (
                    <div className="Mission_Image_List">
                        {data.launch.links.flickr_images.map((image, i) =>
                            image ? <img src={image} alt="Mission_Image" className="Mission_Image" key={i} />
                            : null)
                        }
                    </div>
                )}
            </div>
        </div>
    )
}

export default MissionInfo