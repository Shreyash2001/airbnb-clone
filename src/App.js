import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPage from './SearchPage';
import Host from './Host';
import LoginPage from './LoginPage';
import Register from './Register';
import HostedPlaceDetails from './HostedPlaceDetails';
import Favorites from './Favorites';
import SearchByDate from './SearchByDate';
import Summary from './Summary';
import Experiences from './Experiences';
import HostOnboarding from './HostOnboarding';
import HostOnline from './HostOnline';
import ExperienceType from './HostExperience/ExperienceType';
import ExperienceLocation from './HostExperience/ExperienceLocation';
import ExperienceTheme from './HostExperience/ExperienceTheme';
import ExperienceLanguage from './HostExperience/ExperienceLanguage';
import ExperienceOverview from './HostExperience/ExperienceOverview';
import ExperienceExpertise from './HostExperience/ExperienceExpertise';
import ExperienceWhatWeWillDo from './HostExperience/ExperienceWhatWeWillDo';
import ExperienceGuestBring from './HostExperience/ExperienceGuestBring';
import ExperienceTitle from './HostExperience/ExperienceTitle';
import ExperiencePrice from './HostExperience/ExperiencePrice';
import ExperienceTime from './HostExperience/ExperienceTime';
import ExperienceAge from './HostExperience/ExperienceAge';
import ExperienceTeamOrSolo from './HostExperience/ExperienceTeamOrSolo';
import ExperienceYourStory from './HostExperience/ExperienceYourStory';
import ExperienceSkill from './HostExperience/ExperienceSkill';
import ExperienceImages from './HostExperience/ExperienceImages';
import ExperiencesFilter from './ExperiencesFilter';
import ExperiencesDetails from './ExperiencesDetails';
import ExperienceAroundWorld from './ExperienceAroundWorld';
import ExperienceAllTopRated from './ExperienceAllTopRated';
import ExperienceTeam from './ExperienceTeam';
import ExperienceFamily from './ExperienceFamily';
import ExperienceAllHaveFun from './ExperienceAllHaveFun';
import ExperienceFavorites from './ExperienceFavorites';
import ExperienceInPerson from './ExperienceInPerson';
import Adventures from './Adventures';
import UniqueStays from './UniqueStays';
import EntireHomes from './EntireHomes';
import Cottages from './Cottages';
import Profile from './Profile';


function App() {
  return (
    
    <div className="app">
    <Router>
    
    <Switch>
      
      <Route path="/register">
      <Register />
      </Route>

      <Route path="/login">
      <LoginPage />
      </Route>

      <Route path="/profile">
      <Profile />
      <Footer />
      </Route>

      <Route path="/experiences/about-me/images">
      <ExperienceImages />
      </Route>

      <Route path="/experiences/about-me/skills">
      <ExperienceSkill />
      </Route>

      <Route path="/experiences/about-me/your-story">
      <ExperienceYourStory />
      </Route>

      <Route path="/experiences/experience-page/team-or-solo">
      <ExperienceTeamOrSolo />
      </Route>

      <Route path="/experiences/experience-page/age">
      <ExperienceAge />
      </Route>

      <Route path="/experiences/experience-page/time">
      <ExperienceTime />
      </Route>

      <Route path="/experiences/experience-page/price">
      <ExperiencePrice />
      </Route>

      <Route path="/experiences/experience-page/title">
      <ExperienceTitle />
      </Route>

      <Route path="/experiences/experience-page/guests-bring">
      <ExperienceGuestBring />
      </Route>

      <Route path="/experiences/experience-page/what-you-will-do">
      <ExperienceWhatWeWillDo />
      </Route>

      <Route path="/experiences/experience-page/expertise">
      <ExperienceExpertise />
      </Route>

      <Route path="/experiences/experience-page/overview">
      <ExperienceOverview />
      </Route>

      <Route path="/experiences/language">
      <ExperienceLanguage />
      </Route>

      <Route path="/experiences/themes">
      <ExperienceTheme />
      </Route>

      <Route path="/experiences/location">
      <ExperienceLocation />
      </Route>

      <Route path="/experiences/experience-type">
      <ExperienceType />
      </Route>

      <Route path="/experiences/host-onboarding">
      <Header />
      <HostOnboarding />
      </Route>

      <Route path="/experiences/hostonline">
      <HostOnline />
      <Footer />
      </Route>

      <Route path="/experiences/online/team">
      <ExperienceTeam />
      <Footer />
      </Route>

      <Route path="/experiences/online/all-have-fun">
      <ExperienceAllHaveFun />
      <Footer />
      </Route>

      <Route path="/experiences/online/all-family-friendly">
      <ExperienceFamily />
      <Footer />
      </Route>

      <Route path="/experiences/online/all-top-rated">
      <ExperienceAllTopRated />
      <Footer />
      </Route>

      <Route path="/experiences/online/around-world">
      <ExperienceAroundWorld />
      <Footer />
      </Route>

      <Route path="/experiences/adventures">
      <Header />
      <Adventures />
      <Footer />
      </Route>

      <Route path="/experiences/in-person">
      <Header />
      <ExperienceInPerson />
      <Footer />
      </Route>

      <Route path="/experiences/online/mainfilter">
      <Header />
      <ExperiencesFilter />
      <Footer />
      </Route>

      <Route path="/experiences/online/art">
      <Header />
      <ExperiencesFilter />
      <Footer />
      </Route>

      <Route path="/experiences/online/fireworks">
      <Header />
      <ExperiencesFilter />
      <Footer />
      </Route>

      <Route path="/experiences/online/culture">
      <Header />
      <ExperiencesFilter />
      <Footer />
      </Route>

      <Route path="/experiences/online/cultural-festival">
      <Header />
      <ExperiencesFilter />
      <Footer />
      </Route>

      <Route path="/experiences/online/food">
      <Header />
      <ExperiencesFilter />
      <Footer />
      </Route>

      <Route path="/experiences/online/movies">
      <Header />
      <ExperiencesFilter />
      <Footer />
      </Route>

      <Route path="/experiences/online/dance">
      <Header />
      <ExperiencesFilter />
      <Footer />
      </Route>

      <Route path="/experiences/online/photoshoot">
      <Header />
      <ExperiencesFilter />
      <Footer />
      </Route>
      <Route path="/experiences/online/nightlife">
      <Header />
      <ExperiencesFilter />
      <Footer />
      </Route>

      <Route path="/experiences/online/family-friendly">
      <Header />
      <ExperiencesFilter />
      <Footer />
      </Route>

      <Route path="/experiences/online/:id">
      <Header />
      <ExperiencesDetails />
      <Footer />
      </Route>

      <Route path="/experiences/online">
      <Header />
      <Experiences />
      <Footer />
      </Route>

      <Route path="/date/search">
      <Header />
      <SearchByDate />
      <Footer />
      </Route>

      <Route path="/experiences/favorites">
      <Header />
      <ExperienceFavorites />
      <Footer />
      </Route>

      <Route path="/favorites">
      <Header />
      <Favorites />
      <Footer />
      </Route>

      <Route path="/entire-homes">
      <Header />
      <EntireHomes />
      <Footer />
      </Route>

      <Route path="/unique-stays">
      <Header />
      <UniqueStays />
      <Footer />
      </Route>

      <Route path="/cottages">
      <Header />
      <Cottages />
      <Footer />
      </Route>

      <Route path="/host/summary/:id">
      <Header />
      <Summary />
      <Footer />
      </Route>

      <Route path="/host/:id">
      <Header />
      <HostedPlaceDetails />
      <Footer />
      </Route>

      <Route path="/host">
      <Header />
      <Host />
      <Footer />
      </Route>
      
      <Route path="/search">
      <Header />
      <SearchPage />
      <Footer />
      </Route>

      <Route path="/">
      <Header />
      <Home />
      <Footer />
      </Route>
      
      </Switch>
      </Router>
    </div>
    
  );
}

export default App;
