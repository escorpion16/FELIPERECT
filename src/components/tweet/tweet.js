import React from 'react';
import './styles.css';
import ContextMenu from '../context-menu';
import{
MenuAlt1Outline,
HomeSolid,
ChatSolid,
RefreshSolid,
HeartSolid

} from "@graywolfai/react-heroicons";


class Tweet extends React.Component{
    constructor(){
        super();
    }
    writeArray=()=>{
if(this.props.comments>1000){
    let commentsk=this.props.comments/1000+"k"
}
if(this.props.likes>1000){
    let likesk=this.props.likes/1000+"k"
}
if(this.props.retweets>1000){
    let retweetsk=this.props.retweets/1000+"k"
}
    }
    render(){
        return (
            <div className="tweet-container borderBottom">
                <div className="row1">
                    <div className="c1">
                        <img src={this.props.profileImg} alt="profile" />
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                        
                    </div>
                    <div className="contextual-container">
                    <div className=" menu"onClick={() => this.props.contextFn.toggleContextMenuFn(this.props.index)}> {<MenuAlt1Outline/>}
                    </div>
                    
                    {
                        
                    this.props.showMenu ? (<ContextMenu removeFn={this.props.contextFn.removeTweetFn} index={this.props.index} />) :  null
                    }
                    </div>
                    <div className="c3"></div>
                </div>
                <div className="row">
                    <div className="content">                
                        {this.props.content}
                      <div className="fecha">{this.props.date}</div>  </div>
                    
                </div>
                <div className="row1 marginBottom"> 
                    <div className={`t-icon col ${this.props.selected && 'selected'}`}>
                    {<ChatSolid/>}{this.props.comments >1000 ?((this.props.comments/1000).toFixed(1)+"k"):this.props.comments}
                    </div>
                    <div className={`t-icon col ${this.props.selectedR && 'selected'}`}
                    onClick={() => this.props.selectedRetweet(this.props.index)}>
                    <RefreshSolid className={`${this.props.selectedR && 'selected'}`}/>
                    {this.props.retweets >1000 ?((this.props.retweets/1000).toFixed(1) +"k"):this.props.retweets}
                    </div>
                    <div className={`t-icon col ${this.props.selectedL && 'selected'}`}
                    onClick={() => this.props.selectedLike(this.props.index)}>
                    {<HeartSolid/>}{this.props.likes >1000 ?((this.props.likes/1000).toFixed(1) +"k"):this.props.likes}
                    </div>
                    <p></p>
                </div>
                
        
                 
                <hr></hr>
            </div>
            
        )
    }
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.