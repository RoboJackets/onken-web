import React from 'react'
import PropTypes from 'prop-types'
import * as testUser from './test-user.json'

const UserContext = React.createContext()

class UserProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      user: testUser.default,
    }
  }
  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          updateUser: (newUser) =>
            this.setState({
              user: newUser,
            })
        }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

UserProvider.propTypes = {
  children: PropTypes.object,
}

const UserConsumer = UserContext.Consumer

export default UserContext
export { UserProvider, UserConsumer }