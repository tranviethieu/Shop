import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { RootState } from '../../../store/store'
import { useEffect } from 'react'

const RequireAuth = () => {
  const { loading } = useSelector((state: RootState) => state.site)
  const { isLogin } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()
  console.log(loading)
  useEffect(() => {
    if (!isLogin && !loading) {
      navigate(`/login`)
    }
  }, [isLogin, loading, navigate])
  if (isLogin && !loading) {
    return <Outlet />
  }

  return <div></div>
}
export default RequireAuth
