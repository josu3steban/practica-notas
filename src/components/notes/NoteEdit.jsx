import React from 'react'
import { NoteForm } from './NoteForm'

export const NoteEdit = () => {
  return (
    <div className='flex flex-col items-center justify-center max-h-screen p-5'>

        <h3 className="uppercase text-my-color-two text-5xl text-center font-extrabold mb-5">Edita tu nota</h3>

        <div className="w-3/4 mt-10">
          <NoteForm />
        </div>
        
    </div>
  )
}
