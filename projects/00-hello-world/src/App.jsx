import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard
                formatUserName={formatUserName}
                name='Javier Steven Franco Ospina'
                userName='jsfranco96'>
                firstElementChildren
            </TwitterFollowCard>

            <TwitterFollowCard
                formatUserName={formatUserName}
                name='Miguel Ángel Durán'
                userName='midudev'>
                secondElementChildren
            </TwitterFollowCard>
        </section>
    )
}