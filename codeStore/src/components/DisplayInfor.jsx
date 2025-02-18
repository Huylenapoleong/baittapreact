import React from "react";

class DisplayInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false,
        };
    }

    // Hàm toggle danh sách
    onofflistUser = () => {
        this.setState({
            isHidden: !this.state.isHidden
        });
    };

    render() {
        const { listUser, handleDeleteUser } = this.props; // Nhận từ component cha
        const { isHidden } = this.state;

        return (
            <div>
                <button onClick={this.onofflistUser}>
                    {isHidden ? "Show list user" : "Hide list user"}
                </button>

                {!isHidden && (
                    <div>
                        {listUser.map((user) => (
                            <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
                                <div>User name is: {user.Name}</div>
                                <div>User Age: {user.Age}</div>
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                <hr />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default DisplayInfor;
