import AddUser from "./AddUser";
import Navbar from "./Navbar";
import Status from "./Status";
import User from "./User";
import UserDisplay from "./UserDisplay";

export default function Home() {
  return <div>
    <Navbar /><br/>
    <Status></Status><br/>
    {/* <User />
    <UserDisplay /> */}
  </div>;
}
