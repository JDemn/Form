import React from 'react'
import { Input } from './components/input/Input'
import { UserContex } from './Usecontex/UserContex'

export const AppForm = () => {  
    return (
        <div>
            <UserContex.Provider >
                <Input />
            </UserContex.Provider>
        </div>
    )
}
