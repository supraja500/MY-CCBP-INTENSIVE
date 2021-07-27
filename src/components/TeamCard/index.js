import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {cricketItem} = props

  const {name, teamImageUrl, id} = cricketItem

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <div className="team-card">
        <img src={teamImageUrl} alt={id} className="image2" />
        <h1>{name}</h1>
      </div>
    </Link>
  )
}
export default TeamCard
