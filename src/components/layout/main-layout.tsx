import { Footer } from './footer'
import { Header } from './header'
import { Chatbot } from '../chatbot/chatbot'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export { MainLayout }