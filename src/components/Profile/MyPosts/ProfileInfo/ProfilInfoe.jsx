import React from 'react';
import prof from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={prof.img}
                    src="https://i.pinimg.com/originals/09/14/51/091451e0d90bd7c37a2248ba5474a71d.jpg"/>
            </div>
        </div>
    )
}
export default ProfileInfo;

