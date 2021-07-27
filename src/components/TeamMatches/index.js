// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchData: {}}

  componentDidMount() {
    this.getTeamMatchData()
  }

  getTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamMatchData: updatedData})
  }

  render() {
    const {teamMatchData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchData
    console.log(latestMatchDetails)
    const {
      umpires,
      result,
      manOfTheMatch,
      id,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      matchStatus,
    } = latestMatchDetails

    return (
      <div>
        <img src={teamBannerUrl} alt="a" className="imag1" />
      </div>
    )
  }
}
export default TeamMatches
