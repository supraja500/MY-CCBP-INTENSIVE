// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {cricketData: {}, isLoading: true}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl`)
    const data = await response.json()

    const dataTeam = data.teams

    const formattedData = dataTeam.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({cricketData: formattedData, isLoading: false})
  }

  render() {
    const {cricketData, isLoading} = this.state
    return (
      <div className="home-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div>
            {cricketData.map(item => (
              <TeamCard cricketItem={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    )
  }
}
export default Home
