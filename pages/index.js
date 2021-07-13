import { Box } from '../src/components/Box/style.jsx';
import { MainGrid } from '../src/components/MainGrid/style.jsx';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons.jsx';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations/index.jsx';

function ProfileSideBar(propriedades) {
  return (
    <Box>
        <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px'}}/>
      </Box>
  )
}

export default function Home() {
  const githubUser = 'carol-cloud';
  const favoritePeople = ['maykbrito', 'Onnion', 'glaucia86', 'jrmmendes'];

  return (
    <>
    <AlurakutMenu/>
      <MainGrid>
        <div className = "profileArea" style={{ gridArea: 'profileArea'}}>
          <ProfileSideBar githubUser = {githubUser}/>
        </div>
        <div className = "profileArea" style={{ gridArea: 'welcomeArea'}}>
        <Box>
          <h1 className = "title"> 
            Bem vindo(a)
          </h1>

          <OrkutNostalgicIconSet />
        </Box>
        </div>
        <div className = "profileArea" style={{ gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({favoritePeople.length})
            </h2>

            <ul>
              {favoritePeople.map((people) => {
                return (
                  <li>
                    <a href={`/users/${people}`} key={people}>
                    <img src={`https://github.com/${people}.png`} />
                    <span>{people}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
        
      </MainGrid>
  </>
  )
}
