import { useParams } from "react-router-dom";

const users = [
  { 
    id: 1, 
    name: "Nguyễn Võ Hiệp", 
    age: 25, 
    email: "a@example.com", 
    img: <img src="/img/th.jpg" alt="user" />, 
    description: "Tôi là một lập trình viên đam mê công nghệ và phát triển phần mềm, luôn tìm kiếm cơ hội học hỏi và cải thiện kỹ năng." 
  },
  { 
    id: 2, 
    name: "Trần Thị B", 
    age: 30, 
    email: "b@example.com", 
    img: <img src="/img/th.jpg" alt="user" />, 
    description: "Với kinh nghiệm làm việc trong ngành marketing, tôi luôn tìm kiếm cơ hội để sáng tạo và phát triển các chiến lược truyền thông." 
  },
  { 
    id: 3, 
    name: "Lê Văn C", 
    age: 28, 
    email: "c@example.com", 
    img: <img src="/img/th.jpg" alt="user" />, 
    description: "Là một nhà thiết kế UI/UX, tôi luôn hướng tới việc tạo ra trải nghiệm người dùng mượt mà và dễ sử dụng." 
  }
];

function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));
  if (!user) {
    return <h2>Người dùng không tồn tại</h2>;
  }
  
  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-img">{user.img}</div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p><strong>Tuổi:</strong> {user.age}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
      <div className="profile-description">
        <h3>Giới thiệu về bản thân:</h3>
        <p>{user.description}</p>
      </div>
    </div>
  );
}

export default UserDetail;
