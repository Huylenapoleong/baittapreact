import { Link } from "react-router-dom";
const users = [
{ id: 1, name: "Nguyễn Võ Hiệp" },
{ id: 2, name: "Trần Thị B" },
{ id: 3, name: "Lê Văn C" }
];
function UserList() {
return (
<ul>
{users.map((user) => (
<li key={user.id}>
<Link to={`/user/${user.id}`}>{user.name}</Link>
</li>
))}
</ul>
);
}
export default UserList;