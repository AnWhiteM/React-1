import './Profile.css';

export const Profile = ({profile: {username, tag, location, avatar, stats: {followers, views, likes} }}) => {
    return(
        <div className="profile-pf">
            <div className="description-pf">
            <img src={avatar} alt={username} width="180" height="180" className="avatar-pf"/>
            <h2 className="name-pf">{username}</h2>
            <p className="tag-pf">@{tag}</p>
            <p className="location-pf">{location}</p>
            </div>
        <div className='listBlock-pf'>
            <ul className="stats-pf">
                <li>
                    
                        <span className="label-pf">Followers</span>
                        <span className="value-pf">{followers}</span>
                    
                    
                </li>
                <li>
                    
                        <span className="label-pf">Views</span>
                        <span className="value-pf">{views}</span>
                    
                    
                </li>
                <li >
                    
                        <span className="label-pf">Likes</span>
                        <span className="value-pf">{likes}</span>
                    
                    
                </li>
            </ul>
            
            </div>
        </div>
    )
    
    
}