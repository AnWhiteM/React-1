import css from'./Profile.module.css';

export const Profile = ({username, tag, location, avatar, stats: {followers, views, likes} }) => {
    return(
        <div className={css.profile}>
            <div className={css.description}>
            <img src={avatar} alt={username} width="180" height="180" className={css.avatar}/>
            <h2 className={css.name}>{username}</h2>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
            </div>
        <div className={css.listBlock}>
            <ul className={css.stats}>
                <li>
                    
                        <span className={css.label}>Followers</span>
                        <span className={css.value}>{followers}</span>
                    
                    
                </li>
                <li>
                    
                        <span className={css.label}>Views</span>
                        <span className={css.value}>{views}</span>
                    
                    
                </li>
                <li >
                    
                        <span className={css.label}>Likes</span>
                        <span className={css.value}>{likes}</span>
                    
                    
                </li>
            </ul>
            
            </div>
        </div>
    )
    
    
}