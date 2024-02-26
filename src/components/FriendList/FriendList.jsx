import { FriendListItem } from "../FriendListItem/FriendListItem";
import './FriendList.css'

export const FriendList = ({friends}) => {
    return(
        <ul className="friend-list-fl">
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    )
}