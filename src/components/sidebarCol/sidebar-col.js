import React from 'react';
import FeedTrends from '../trendsMain/feedTrends';
import SearchSideBar from '../SearchSideBar/searchSideBar';
import Profile from './Profiles';
import {profiles} from './sourceProfiles'

class SidebarCol extends React.Component{
constructor(){
    super();
    this.state = {
        searchUser: "",
        users:profiles,
        showProfile:""
    }
}
writeSearch = (evento) => {
    const user = evento.target.value;
    this.setState({ searchUser: user });
  };
showProfiles=() =>{
    this.setState({showProfile : !this.state.showProfile});
}
render(){
   
    return (
        <div className="t-sidebar-col">
        <h2 className="sidebar-title">Qué está pasando</h2>
           <SearchSideBar className="lupa"
           showProfiles={this.showProfiles}
           writeSearchs ={this.writeSearch}
           showProfilesState={this.state.showProfile}
           />
           
           <FeedTrends
           users={this.state.users}
           searchUser={this.state.searchUser} 
           showProfiles={this.state.showProfile}
           /> 
          
        </div>
    )
}
}
export default SidebarCol;