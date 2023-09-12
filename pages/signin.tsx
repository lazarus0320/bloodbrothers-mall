import Layout from '@/components/layout'
import styles from '../styles/styles.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function SignIn() {
  const router = useRouter()

  const [state, setState] = useState<any>({
    username: '',
    password: '',
  })

  function handleChange(e: any) {
    const copy = { ...state }
    copy[e.target.name] = e.target.value
    setState(copy)
  }

  async function handleSubmit() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signin`, {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (res.ok) {
      const json = await res.json()
      localStorage.setItem('token', json.token)
      router.push('/user')
    } else {
      alert('Bad credentials')
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Sign In</h1>
        <div className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="username"
            placeholder="username"
            value={state.username}
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="password"
            value={state.password}
            onChange={handleChange}
          />
          <button className={styles.btn} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </Layout>
  )
}
