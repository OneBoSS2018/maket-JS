import React from 'react';
import prof from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfilInfoe";

const Profile = () => {
    return <div>
        <ProfileInfo/>
        <div>
            <MyPosts/>
        </div>
    </div>

}
export default Profile;

