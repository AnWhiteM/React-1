import './FriendListItem.css'

export const FriendListItem = ({avatar, name, isOnline }) => {
    return (
        <div className="item-FLI">
            <img className="avatar-FLI" src={avatar} alt={name} width="48" />
            <p className="name-FLI">{name}</p>
            <p className={`status-FLI ${isOnline ? 'online-FLI' : 'offline-FLI'}`}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
}