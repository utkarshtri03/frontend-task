import React from 'react'
import Searchbar from './Searchbar'
import QueriesHistory from './QueriesHistory'
import SavedQueries from './SavedQueries'

const LeftDash = () => {
  return (
    <div className='h-screen w-72 bg-slate-400 ml-14 my-4'>
    <QueriesHistory/>
    <SavedQueries/>
    </div>
  )
}

export default LeftDash