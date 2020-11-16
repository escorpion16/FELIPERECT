import React from "react";
import TrendsMain from "./trendsMain";
import {Trend} from "../../trend"
import SearchDropdown from "../sidebarCol/Profiles";
import './styles.css'
import SearchTrendBar from "./searchTrend";
class FeedTrends extends React.Component {
    constructor(props){
        super();
        this.state = {
            trends: Trend,
            searchtrends:"",

        }
    }
 handleSearch = (event) => {
        //capturara al escribir en input
        const trend = event.target.value;
        this.setState({ searchtrends: trend });
    };
    render(){
        
        return(
        <div>
            
            {
            this.props.showProfiles ? (<div className="container-users">
            <div className=""><SearchDropdown
                users={this.props.users}
                searchUser={this.props.searchUser}/></div></div>) :  null
            }
            <h2 className="sidebar-title">Qué está pasando</h2>
            <SearchTrendBar
                   change={this.handleSearch}
                   valueChangeInput={this.state.searchtrends}
                   className="lupa"
               />
               {
                this.state.trends
                    .filter((trend)=>
                    trend.title
                        .toLowerCase()
                        .includes(this.state.searchtrends.toLowerCase())
                    )
                    .map((trend)=>{
                        return(
                            <>
                                <TrendsMain 
                                    category={trend.category}
                                    title={trend.title}
                                    noTweets={trend.noTweets}
                                /> 
                           </>
                        )
                    })
               }
           </div> 
        )
    }

}

export default FeedTrends;