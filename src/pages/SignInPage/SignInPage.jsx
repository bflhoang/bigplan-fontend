import React, { useEffect } from 'react'
import { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import ImageLogo from '../../assets/images/logologin.webp'
import { Image } from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import * as message from '../../components/Message/Message'
import { jwtDecode } from 'jwt-decode';
import Loading from '../../components/LoadingComponent/Loading'
import { updateUser } from '../../redux/slides/userSlide'
import { useDispatch } from 'react-redux';

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const handleNavigateSignUp = () => {
    navigate('/sign-up')
  }
  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }

  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleSignIn = () => {
    console.log('logingloin')
    mutation.mutate({
      email,
      password
    })
  }

  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )

  const { data, isPending, isSuccess } = mutation

  useEffect(() => {
    if (isSuccess) {
      if(location?.state) {
        navigate(location?.state)
      }else {
        navigate('/')
      }
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token))
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token)
        console.log('decode', decoded)
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token)
        }
      }
    }
  }, [isSuccess])

  const handleGetDetailsUser = async (id, token) => {
    const storage = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storage)
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token,refreshToken }))
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgb(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', backgroundColor: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập và tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '10px',
                right: '8px',
              }}
            >{
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
          <InputForm
            placeholder="password"
            type={isShowPassword ? "text" : "password"}
            value={password}
            onChange={handleOnchangePassword} 
          />
          </div>
          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
          <Loading isPending={isPending}>
          <ButtonComponent
            disabled={!email.length || !password.length}
            onClick={handleSignIn}
            size={40}
            styleButton={{
              backgroundColor: 'rgb(255, 57, 69)',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={'Đăng nhập'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          ></ButtonComponent>
          </Loading>
          <p><WrapperTextLight>Quên mật khẩu? </WrapperTextLight></p>
          <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}> Tạo tài khoản</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={ImageLogo} preview={false} alt="image-logo" height="203px" width="203px" />
          <h4>Mua sắm tại</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignInPage
