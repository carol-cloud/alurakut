import { ProfileRelationsBoxWrapper } from './style.jsx';


export function ProfileRelationsBox(properties) {
    return (
        <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
        {properties.title} ({properties.items.length})
        </h2>

        <ul>
        {/* {communities.map((community) => {
            return (
            <li key={community.id}>
                <a href="">
                <img src={community.image} />
                <span>{community.title}</span>
                </a>
            </li>
            )
        })} */}
        </ul>
    </ProfileRelationsBoxWrapper>
    )
}
