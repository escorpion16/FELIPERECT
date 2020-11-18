import React from 'react';
import '../SearchSideBar/style.css'
import './styles.css'
import { FaSistrix } from "react-icons/fa";
import{
    XCircleOutline    
    } from "@graywolfai/react-heroicons";
    

const SearchTrendBar = (props) => {
    return(
        
            <div className="search-style-trends">
            <div className="t-icon"><FaSistrix className="lupa"/></div>
                <input 
                    type="text" 
                    placeholder= "Buscar tendencias"
                    className="input-style-search lupa mt"
                    onChange={props.change}
                    value={props.valueChangeInput}
                   
                />
               { props.showProfilesState ? (<div className="t-icon closeList"><XCircleOutline 
                onClick={props.showProfiles}/></div>):null} 
                
            </div>
            
        
    )
}

export default SearchTrendBar;