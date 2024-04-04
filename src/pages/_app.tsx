import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { AppProps, type AppType } from 'next/app'

import { api } from '@/utils/api'

import '@/styles/globals.css'
import '@/styles/radix.css'
import 'react-toastify/dist/ReactToastify.css'

import Sidebar from '@/components/layout/Sidebar'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { ToastContainer } from 'react-toastify'

import { NextPage } from 'next'

export type NextPageWithSidebar<P = {}, IP = P> = NextPage<P, IP> & {
  showSidebar?: boolean
}
type AppPropsWithSidebar = AppProps & {
  Component: NextPageWithSidebar
}

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithSidebar) => {
  // This is important for charjs to work
  ChartJS.defaults.set('plugins.datalabels', {
    color: 'white',
  })
  ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

  const hasSidbar = Component.showSidebar !== undefined ? Component.showSidebar : true

  return (
    <SessionProvider session={session}>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      {hasSidbar && <Sidebar />}
      <main className={hasSidbar ? 'ml-48 p-5 h-screen overflow-y-scroll' : ''}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}
export default api.withTRPC(MyApp)
