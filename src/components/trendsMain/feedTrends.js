import React from "react";
import TrendsMain from "./trendsMain";
import {Trend} from "../../trend"
import SearchDropdown from "../sidebarCol/Profiles";
import './styles.css'
class FeedTrends extends React.Component {
    constructor(props){
        super();
        this.state = {
            trends: Trend
        }
    }

    render(){
        
        return(
        <div>
            <h2 className="sidebar-title">Qué está pasando</h2>
            {
            this.props.showProfiles ? (<div className="container-users">
            <div className=""><SearchDropdown
                users={this.props.users}
                searchUser={this.props.searchUser}/></div></div>) :  null
            }
               {
                this.state.trends.map(itemtrend => {
                    return(
                        <TrendsMain
                            category={itemtrend.category}
                            title={itemtrend.title}
                            noTweets={itemtrend.noTweets}
                        />
                    )
                })  
               }
           </div> 
        )
    }

}

export default FeedTrends;