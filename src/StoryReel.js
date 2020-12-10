import React from 'react';
import Story from "./Story";
import "./StoryReel.css"
import { useStateValue } from './StateProvider';

function StoryReel() {

    const [{ user }, dispatch ] = useStateValue();

    return (
        <div className='storyReel'>
            <Story 
            image = "https://i.ibb.co/478DxKj/IMG-5348.png"
            profileSrc = {user.photoURL}
            title = {user.displayName}
            />
            <Story 
            image = "https://i.ibb.co/1QdHPj9/IMG-5340.jpg"
            profileSrc = {user.photoURL}
            title = {user.displayName}
            />
            <Story
            image = "https://i.ibb.co/rQLzt8D/IMG-2495.jpg"
            profileSrc = {user.photoURL}
            title = {user.displayName}
             />
             <Story
            image = "https://i.ibb.co/dp16Pq7/IMG-5182.jpg"
            profileSrc = {user.photoURL}
            title = {user.displayName}
             />
             <Story
            image = "https://i.ibb.co/njnSMVV/IMG-2469.jpg"
            profileSrc = {user.photoURL}
            title = {user.displayName}
             />
        </div>
    )
}

export default StoryReel
