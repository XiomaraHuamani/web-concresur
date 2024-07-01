import { useLayoutEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import UAParser from 'ua-parser-js'
import { Error404 } from './pages/Error404'
import Home from './pages/Home'
import { routes } from './resources/pageRoutes'

function App() {
  const [deviceType, setDeviceType] = useState('desktop')

  useLayoutEffect(() => {
    const parser = new UAParser()
    parser.setUA(navigator.userAgent)
    const result = parser.getResult()
    const deviceType = result.device?.type
    setDeviceType(deviceType)
  }, [])

  return (
    <>
      <Routes>
        <Route index path={routes.home} element={<Home deviceType={deviceType} />} />
        <Route path={routes.error} element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
