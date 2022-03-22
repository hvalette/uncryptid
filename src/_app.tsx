import { Suspense } from 'react'
import './styles/global.css'
import { useRoutes } from 'react-router-dom'
import routes from '~pages'
import { registerSW } from 'virtual:pwa-register'
import NavBar from './components/NavBar'

export default function App() {
    registerSW({ immediate: true })
    return (
        <Suspense
            fallback={
                <>
                    <NavBar></NavBar>
                    <p>Loading...</p>
                </>
            }
        >
            <NavBar></NavBar>
            <main className="h-1 min-h-[calc(100vh-4rem)] pt-16">
                {useRoutes(routes)}
            </main>
        </Suspense>
    )
}
