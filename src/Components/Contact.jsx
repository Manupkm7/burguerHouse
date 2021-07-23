import React from 'react'

export const Contact = () => {
    return (
        <div id='contact'>
            <h1>RESERVA TU MESA</h1>
            <form>
                <input type='text' placeholder='Nombre completo' />
                <input type='email' placeholder='Escriba su Email' />
                <textarea placeholder='Escriba aqui...'></textarea>
                <input type='submit' value='RESERVA' />

            </form>
        </div>
    )
}
