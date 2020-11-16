import React from 'react';
import './style.css'
import { FaSistrix } from "react-icons/fa";
import{
    XCircleOutline    
    } from "@graywolfai/react-heroicons";
    

const SearchSideBar = (props) => {
    return(
        
            <div className="search-style ">
            <div className="t-icon"><FaSistrix className="lupa"/></div>
                <input 
                    type="text" 
                    placeholder= "Buscar en twitter"
                    className="input-style lupa"
                    onChange={props.writeSearchs}
                    value={props.searchUser}
                    onClick={props.showProfiles}
                />
               { props.showProfilesState ? (<div className="t-icon closeList"><XCircleOutline 
                onClick={props.showProfiles}/></div>):null} 
                
            </div>
            
        
    )
}

export default SearchSideBar;