import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Magic } from 'magic-sdk'
import { MAGIC_PUBLIC_KEY } from '../utils/constants'

import { HOME_URL } from '../utils/constants'

let magic
const AuthContext = createContext()

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  const loginUser = async (email) => {
    try {
      await magic.auth.loginWithMagicLink({ email })
      setUser({ email })
      router.push(HOME_URL)
    } catch (err) {
      setUser(null)
      console.warn("Can't login user", err)
    }
  }

  const logoutUser = async ({ email }) => {
    try {
      await magic.user.logout()
      setUser(null)
      router.push(HOME_URL)
    } catch (err) {
      console.warn("Can't logout user", err)
    }
  }

  // save auth after reloading page
  const checkUserLoggedIn = async () => {
    try {
      const isLoggedIn = await magic.user.isLoggedIn()

      if (isLoggedIn) {
        const { email } = await magic.user.getMetadata()
        setUser({ email })
      }
    } catch (err) {
      console.warn('User is not loggin anymore', err)
    }
  }

  // connect magic-sdk for auth
  useEffect(() => {
    magic = new Magic(MAGIC_PUBLIC_KEY)

    checkUserLoggedIn()
  }, [])

  const values = {
    user,
    logoutUser,
    loginUser,
  }
  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  )
}
export default AuthContext
