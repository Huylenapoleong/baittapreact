import React from "react";

class AddUserInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Age: ''
        }
    }
    handleAddnewUser = (userObject) => {
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();//ngăn việc tải lại trang
        //console.log(this.state)
        this.props.handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1) + "user",
            Name: this.state.Name,
            Age: this.state.Age
        })
        this.setState({
            Name: '',
            Age: ''
        });
    }
    handleOnchangeInputName = (event) => {
        this.setState({
            Name: event.target.value
        });
    };
    handleOnchangeInputAge = (event) => {
        this.setState({
            Age: event.target.value
        });
    };
    render() {
        return (
            <div>
                <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
                        <p>Your name: </p>
                        <input type="text" value={this.state.Name}//gán giá trị mặc định
                          onChange={(event) =>this.handleOnchangeInputName(event)} />
                        <br />
                        <p>Your Age: </p>
                        <input type="number" value={this.state.Age}//gán giá trị mặc định
                          onChange={(event) =>this.handleOnchangeInputAge(event)} />
                        <br />
                        <button>Submit</button>
                    </form>

                    {/* <div>
            	        <span>{this.state.Name}</span>
                        <span>{this.state.Age}</span>
         	        </div> */}
            </div>
        );
    }
}

export default AddUserInfor;