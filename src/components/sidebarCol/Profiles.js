import React from "react";
import '../trendsMain/styles.css'
class SearchDropdown extends React.Component{
    constructor(){
super()
    }
    render()
    {return(<div className="">
    {this.props.users
      .filter((user) => user.profile.toLowerCase().includes(this.props.searchUser.toLowerCase()))
      .map((user) => {
        return (
            <div className="container-profile">
             <div className="col-1">
              <img
                className="profile-img"
                src={user.profileImg}
                alt="profileImage"
              />
              </div>
              <div className="col-2">
              <span className="text-user">{user.profile}</span>
              <br></br>
              <small classname="text-userm">{user.username}</small>
            </div>
            </div>
        );
      })}
    </div>)

    }
}
export default SearchDropdown;