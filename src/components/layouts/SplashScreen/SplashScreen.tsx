import { Fragment } from 'react/jsx-runtime'
import styles from './SplashScreen.module.scss'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { RootState, store } from '../../../store/store'
import { useEffect } from 'react'
import { getItemStorage, setItemStorage } from '../../../common/func/localStorage'
import { KEY_STORE } from '../../../constants/configs'
import { setStateLogin, setToken } from '../../../store/reducers/auth'
import { setLoading } from '../../../store/reducers/site'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
function SplashScreen() {
  const navigate = useNavigate()
  const { token, isLogin } = useSelector((state: RootState) => state.auth)
  const { loading, fontSize, bgColor, variableEnv, routerActive } = useSelector((state: RootState) => state.site)
  // Set data vào redux từ localStorage
  useEffect(() => {
    ;(async () => {
      const state = await getItemStorage(KEY_STORE)
      if (!!state) {
        store.dispatch(setToken(state.token))
        store.dispatch(setStateLogin(state.isLogin))
      }
      store.dispatch(setLoading(false))
    })()
  }, [])

  // Lưu vào localStorage
  useEffect(() => {
    if (!loading) {
      setItemStorage(KEY_STORE, {
        token: token,
        isLogin: isLogin
      })
    }
  }, [token, isLogin, loading])
  console.log(navigate)
  return (
    <Fragment>
      <div className={clsx(styles.container, { [styles.close]: !loading })}>
        <div className='relative flex justify-center items-center'>
          <div className='absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500'></div>
          <img src='https://www.svgrepo.com/show/509001/avatar-thinking-9.svg' className='rounded-full h-28 w-28' />
        </div>
      </div>
    </Fragment>
  )
}

export default SplashScreen
