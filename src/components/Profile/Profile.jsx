import css from './Profile.module.css';

export const Profile = ({profile: {username, tag, location, avatar, stats: {followers, views, likes} }}) => {
    return(
        <div className="profile">
            <div className="description">
            <img src={avatar} alt={username} width="180" height="180" className="avatar"/>
            <h2 className="name">{username}</h2>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
            </div>
        <div className='listBlock'>
            <ul className="stats">
                <li>
                    
                        <span className="label">Followers</span>
                        <span className="value">{followers}</span>
                    
                    
                </li>
                <li>
                    
                        <span className="label">Views</span>
                        <span className="value">{views}</span>
                    
                    
                </li>
                <li >
                    
                        <span className="label">Likes</span>
                        <span className="value">{likes}</span>
                    
                    
                </li>
            </ul>
            
            </div>
        </div>
    )
    
    
}