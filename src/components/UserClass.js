import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, count2: 2 };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/pewpew695");
    const json = await data.json();
    console.log(json);
    console.log(json.avatar_url);
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increment
        </button>
        <h2>Name: {name}</h2>
        <h3>location: {location}</h3>
        <h4>Contact Info:</h4>
      </div>
    );
  }
}

export default UserClass;
