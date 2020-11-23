import graphql from 'graphql-tag'

export const QUERY_MISSION_LIST = graphql`
query MissionList{
    launches {
      flight_number
      mission_name
      launch_success
      launch_year
      }
  }`; 