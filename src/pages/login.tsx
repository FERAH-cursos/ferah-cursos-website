import Head from 'next/head'
import React from 'react'
import SocialLoginButton from '../components/SocialLoginButton'
import styles from '../styles/pages/Login.module.css'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.loginContainer}>
          <img src="logo.png" alt="logo"/>
          <h1>Ferah Cursos</h1>
          <form action="">
            <div className={styles.inputGroup}>
              <input id="inputEmail" required type="text" />
              <label htmlFor="inputEmail">Email</label>
            </div>

            <div className={styles.inputGroup}>
              <input id="inputPassword" required type="password" />
              <label htmlFor="inputPassword">Senha</label>
            </div>


            <button type="submit">Entrar</button>
            <span><div></div>Ou entre com <div></div></span>
          </form>
          <div className={styles.buttonGroup}>
            <SocialLoginButton image="icons/github.svg" />
            <SocialLoginButton image="icons/google.svg" />
            <SocialLoginButton image="icons/twitter.svg" />
            <SocialLoginButton image="icons/linkedin.svg" />
          </div>
        </div>
      </main>


    </>
  )
}
