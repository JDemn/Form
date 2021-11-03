import React from 'react'
import { Input } from './components/input/Input'
import { UserContex } from './Usecontex/UserContex'

export const AppForm = () => {  
    const data = {
        saludo : 'hola'
    }
    return (
        <div>
            <UserContex.Provider value = {data}>
                <Input />
            </UserContex.Provider>
        </div>
    )
}
