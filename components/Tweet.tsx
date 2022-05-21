import React from 'react'
import { Tweet } from '../typings'

interface Props{
    tweet: Tweet
}

function Tweet({tweet}: Props) {
  return (
    <div>
        <div>
            <img src={tweet.profileImage} alt=""/>
            <div>
                <div>
                    <p>{tweet.username}</p>
                    <p>@{tweet.username.replace(/\s+/g,'').toLocaleLowerCase}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tweet