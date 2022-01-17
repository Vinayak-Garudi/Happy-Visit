import React from 'react'

export const BasicForm = () => {
    return (
        <>
            <center>
                <form action="">
                    <div>
                        <label htmlFor="email">Enter Email Id</label>
                        <input type="text" name="email" id="email" autoComplete='off' autoCapitalize='off' autoCorrect='off' />
                    </div>

                    <div>
                        <label htmlFor="password">Enter Password</label>
                        <input type="text" name="password" id="password" />
                    </div>

                    <button type='submit'>Sign In</button>
                </form>
            </center>
        </>
    )
}
