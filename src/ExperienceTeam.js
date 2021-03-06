import React, { useEffect } from 'react'
import "./ExperienceTeam.css"
import ExperienceContainedCard from './ExperienceContainedCard'
import { useDispatch, useSelector } from 'react-redux'
import { getTeamExperience } from './actions/experienceActions'
import { CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'

function ExperienceTeam() {

    const {teamExperience, loading, error} = useSelector(state => state.getTeamExperience)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTeamExperience())
    }, [dispatch])

    return (
        <div>
            <div className="experienceTeam">
            <div className="experienceTeam__image">
            <div style={{paddingLeft:"80px"}}>
               <Link to="/"><img style={{width:"140px", paddingBottom:"80px", paddingTop:"10px"}} src="https://www.heroes.liftoff.io/wp-content/uploads/2018/01/airbnb-logo-white.png" alt="logo" /></Link>
            </div>
                <div className="experienceTeam__imageSideInfo">
                    <h1>The perfect pairing for your team event</h1>
                </div>
            </div>
            <div style={{paddingLeft:"80px", paddingTop:"50px"}}>
            <h2 style={{fontSize:"33px", fontWeight:"400"}}>Team Experiences</h2>
            </div>
            {loading ? <CircularProgress style={{width:"10%", height:"15%", margin:"10% 35% 10% 40%", color:"#ff7779"}} /> :
            
            <div className="experienceTeam__container">
            {error && <h2 style={{color:"red"}}>{error}</h2>}
            {teamExperience?.map(experience => (
                <ExperienceContainedCard
                  key={experience._id}
                  id={experience._id}
                  image={experience.image[0]}
                  location={experience.location}
                  theme={experience.theme}
                  typeOfExperience={experience.typeOfExperience}
                  title={experience.title}
                  price={experience.price}
                  value={experience.rating}
                  />
            ))}
            </div>
            }
        </div>
        </div>
    )
}

export default ExperienceTeam
