import { useState } from "react";

// "children nos va a devolver lo que esté envuelto en el llamdo al componente"
export function TwitterFollowCard({ formatUserName, name, userName = 'unknown', children, initialIsFollowing = false }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const avatarSource = `https://unavatar.io/${userName}`;
    const followButtonText = isFollowing
        ? 'Following'
        : 'Follow';
    const buttonClassName = isFollowing
        ? 'tw-followCard-followButton is-following'
        : 'tw-followCard-followButton follow';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    return (
        <article className='tw-followCard' title={children}>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-image'
                    src={avatarSource}
                    alt="El avatar de react" />

                <div className='tw-followCard-user'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-userName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-follow">{followButtonText}</span>

                    <span className="tw-followCard-stopFollow">Stop follow</span>
                </button>
            </aside>
        </article>
    );
}