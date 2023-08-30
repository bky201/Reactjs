import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {
        props.isLoggedIn ? (
            <div>
                <p>Welcome to the site! please complete the steps below:</p>
                <ol>
                    <li>Complete you email</li>
                    <li>Complete you profile</li>
                    <li>Subscribe to the newsletter</li>
                </ol>
            </div>
        ) : 
        (<p>Please sign in</p>)
        }
    </div>
  )
}

export default UserMessage