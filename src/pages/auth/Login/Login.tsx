import { useMutation } from '@tanstack/react-query'
import { delay } from '../../../common/func/delay'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState, store } from '../../../store/store'
import { useState } from 'react'
import { toastSuccess, toastWarn } from '../../../common/func/toast'
import { setStateLogin, setToken } from '../../../store/reducers/auth'
import { useNavigate } from 'react-router-dom'
function Login() {
  const { variableEnv } = useSelector((state: RootState) => state.site)
  const { isLogin } = useSelector((state: RootState) => state.auth)
  const [form, setForm] = useState<{
    username: string
    password: string
  }>({
    username: '',
    password: ''
  })
  const handleUserInput = (e: any) => setForm({ ...form, username: e.target.value })
  const navigate = useNavigate()
  const handlePwdInput = (e: any) => setForm({ ...form, password: e.target.value })
  const login = useMutation({
    mutationFn: async () => {
      await delay(500)
      const response = await axios.post(
        `https://api-meapp.benhvien.tech/identity/connect/token`,
        {
          client_id: 'htss.client',
          client_secret: 'meapp-htss-elsaga2023',
          grant_type: 'password',
          username: form.username,
          password: form.password
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json, text/plain, */*'
          }
        }
      )

      return response?.data
    },
    onSuccess(data) {
      if (data) {
        toastSuccess({ msg: 'Đăng nhập thành công!' })
        store.dispatch(setStateLogin(true))
        store.dispatch(setToken(data.access_token))
        navigate('/')
      }
    },
    onError(error: any) {
      if (error?.response?.data) {
        const { data } = error?.response

        return toastWarn({
          msg: data?.error_description || 'Có lỗi xảy ra!'
        })
      }
    }
  })
  const handleSubmit = (e: any) => {
    e.preventDefault()

    //store.dispatch(setStateLogin(true))

    login.mutate()
  }

  return (
    <>
      <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          {/* <img
            className='mx-auto h-10 w-auto'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
            alt='Your Company'
          /> */}
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900 text-start'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  onChange={handleUserInput}
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
                <div className='text-sm'>
                  <a href='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  onChange={handlePwdInput}
                  autoComplete='current-password'
                  required
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign in
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Not a member?
            <a href='#' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
function setInfoHospital(arg0: any): any {
  throw new Error('Function not implemented.')
}
