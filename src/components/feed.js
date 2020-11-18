import React from "react";
import Tweet from "./tweet/tweet";
import {feed} from '../source';
import PostTweet from "./postTweet/post-tweet";
class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: feed,
            newMessage: "",
            
        }
    }
    selectedRetweet = (index) => {
        let tweets2 = JSON.parse(JSON.stringify(this.state.tweets));
        if(tweets2[index].myRetweet===true) {
            tweets2[index].interaction.retweets=tweets2[index].interaction.retweets -1;
            tweets2[index].myRetweet=false;
            tweets2[index].selectedRetweet=false;
        }
        else{
            tweets2[index].interaction.retweets=tweets2[index].interaction.retweets + 1;
            tweets2[index].myRetweet=true;
            tweets2[index].selectedRetweet=true;
        }
        this.setState({tweets: tweets2});
 
    }
    removeTweet = (index) => {
        let tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
        tweetsClone.splice(index, 1);
        this.setState({tweets: tweetsClone});
        
    }
    toggleContextMenu = (index) => {
        let tweetsClone = JSON.parse(JSON.stringify(this.state.tweets));
        tweetsClone[index].showMenu = !tweetsClone[index].showMenu;
        this.setState({tweets: tweetsClone});
    }
    selectedLike = (index) => {
        //Clonar la lista de objetos
        let tweets2 = JSON.parse(JSON.stringify(this.state.tweets));
        //Actualizamos el valor de la propiedad selected
        if(tweets2[index].myLike===true) {
            tweets2[index].interaction.likes=tweets2[index].interaction.likes - 1 ; 
            tweets2[index].myLike=false;
            tweets2[index].selectedLike=false;
         
        }
        else{
            tweets2[index].interaction.likes=tweets2[index].interaction.likes +1;
            tweets2[index].myLike=true;
            tweets2[index].selectedLike=true;
        }
          //Actualizamos el estado
        this.setState({tweets: tweets2});
    }
    
    writeInInput = (evento) => {
        const message = evento.target.value;
        this.setState({ newMessage: message });
        
      };
      sendMessage = () => {
        let tweets2 = JSON.parse(JSON.stringify(this.state.tweets));
        let newTweet = {
            id:"",
            profileImg:"https://www.redwolf.in/image/catalog/stickers/marvel-avengers-logo-sticker.jpg",
            profile: "initSquad",
            username: "@initSquad",
            content: this.state.newMessage,
            date: ""+new Date(),
            interaction: {
                comments: 0,
                retweets: 0,
                likes: 0
            },
            verified: true,
            blocked: true,
            myLike: false,
            myRetweet:false,
            selectedlike:false,
            selectedRetweet:false,
            showMenu:false}
            tweets2.unshift(newTweet)
            this.setState({tweets:tweets2, newMessage:""})
        
        }
    render() {
        const contextFn = {
            toggleContextMenuFn: this.toggleContextMenu,
            removeTweetFn: this.removeTweet,
        }
        return (
    
         
            <div>
                   <PostTweet profileUrl={this.props.profileUrl}
            newMessage={this.state.newMessage}
            writeInInput={this.writeInInput}
            sendMessage={this.sendMessage}
          />,
                { 
                    this.state.tweets.map(( tweet,index) => {
                        return (
                           
                            <Tweet
                            key={tweet.id}
                                profileImg={tweet.profileImg}
                                profile={tweet.profile}
                                username={tweet.username}
                                content={tweet.content}
                                date={tweet.date}
                                comments={tweet.interaction.comments}
                                retweets={tweet.interaction.retweets}
                                likes={tweet.interaction.likes}
                                selectedLike={this.selectedLike}
                                selectedRetweet={this.selectedRetweet}
                                index={index}
                                selectedL={tweet.selectedLike}
                                selectedR={tweet.selectedRetweet}
                                showMenu={tweet.showMenu}
                                contextFn={contextFn}

                                />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;