import { SearchCircleIcon, SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='col-span-2 mt-2 hidden px-2 lg:inline'>
        <div className='mt-2 flex items-center space-x-2
        rounded-full bg-gray-100 p-3'>
            <SearchIcon className='h-5 w-5 text-gray-400'/>
            <input 
            className='bg-transparent flex-1 outline-none' 
            type="text" 
            placeholder='Search Twitter'/>
        </div>
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="RebelutionMusic"
         options={{height: 1000}}
        />
    </div>
  )
}

export default Widgets