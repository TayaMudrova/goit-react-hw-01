import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";
import "modern-normalize";

import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransectionHistory from "../TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransectionHistory items={transactions} />
    </>
  );
}
