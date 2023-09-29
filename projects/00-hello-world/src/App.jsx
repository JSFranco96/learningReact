import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        name: 'Javier Steven Franco Ospina',
        userName: 'jsfranco96',
        isFollowing: true,
        title: 'Fullstack developer'
    },
    {
        name: 'Miguel Ángel Durán',
        userName: 'midudev',
        isFollowing: false,
        title: 'Fullstack developer and best teacher ever'
    },
    {
        name: 'Laura Sosa García',
        userName: 'LAURASOSAGARCI1',
        isFollowing: true,
        title: 'Wife'
    },
    {
        name: 'Diana Franco',
        userName: '18_nanitha',
        isFollowing: true,
        title: 'Sister'
    },
    {
        name: 'Aider Alexis Agudelo García',
        userName: 'alexis9706',
        isFollowing: false,
        title: 'Friend'
    }
];

export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
            {
                users.map(({ userName, name, title, isFollowing }) => {
                    return (

                        <TwitterFollowCard
                            formatUserName={formatUserName}
                            name={name}
                            initialIsFollowing={isFollowing}
                            userName={userName}
                            key={userName}>

                            {title}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}