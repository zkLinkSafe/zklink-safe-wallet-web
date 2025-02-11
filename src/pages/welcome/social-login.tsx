import type { NextPage } from 'next'
import Head from 'next/head'
import NewSafeSocial from '@/components/welcome/NewSafeSocial'

const SocialLogin: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'zkLink Safe – Welcome'}</title>
      </Head>

      <NewSafeSocial />
    </>
  )
}

export default SocialLogin
