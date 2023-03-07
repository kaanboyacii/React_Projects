import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext)
  const {data} = useContext(ChatContext)

  return (
    <div className='message owner'>
      {/* <div className="messageInfo">
        <img src="https://images.pexels.com/photos/4519122/pexels-photo-4519122.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div> */}
    </div>
  )
}

export default Message