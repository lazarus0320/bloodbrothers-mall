import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../styles/styles.module.css'

export default function LayoutAuthenticated(props: any) {
  // 토큰 정보 불러오기. 실패하면 로그인 페이지로 이동.
  const [profile, setProfile] = useState<any>()
  const router = useRouter()

  useEffect(() => {
    fetchProfile()
  }, [])

  async function fetchProfile() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/test/profile`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    if (res.ok) {
      const json = await res.json()
      setProfile(json)
    } else {
      router.push('/signin')
    }
  }

  function logout() {
    localStorage.removeItem('token')
    router.push('/')
  }

  return (
    <div className={styles.layout}>
      <div className={styles.nav}>
        <p>Signed in as: {profile && profile.username}</p>
        <p>
          <button onClick={logout}></button>
        </p>
      </div>
      {props.children}
    </div>
  )
}
