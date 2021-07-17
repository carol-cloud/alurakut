import React from 'react';
import { Box } from '../src/components/Box/style.jsx';
import { MainGrid } from '../src/components/MainGrid/style.jsx';
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault, AlurakutMenuProfileSidebar } from '../src/lib/AlurakutCommons.jsx';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations/style.jsx';

function ProfileSideBar(propriedades) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <br />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>

      <br />

      <AlurakutProfileSidebarMenuDefault />
      {/* <AlurakutMenuProfileSidebar githubUser={propriedades.githubUser} /> */}
    </Box>
  )
}

export default function Home() {
  const [communities, setCommunities] = React.useState([{
    id: '155161565',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  const githubUser = 'carol-cloud';
  const favoritePeople = ['maykbrito', 'Onnion', 'glaucia86'];


  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateComunnity(e) {
              e.preventDefault();

              const formData = new FormData(o.target);
              const community = {
                id: new Date().toISOString(),
                title: formData.get('title'),
                image: formData.get('image')
              }

              const communitiesAtt = [...communities, community]
              setCommunities(communitiesAtt);
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos na capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos na capa"
                  type="text"
                />
              </div>
              <button>
                Criar comunidade
              </button>

            </form>

          </Box>

        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({communities.length})
            </h2>

            <ul>
              {communities.map((community) => {
                return (
                  <li key={community.id}>
                    <a href="">
                      <img src={community.image} />
                      <span>{community.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({favoritePeople.length})
            </h2>

            <ul>
              {favoritePeople.map((people) => {
                return (
                  <li key={people}>
                    <a href={`/users/${people}`}>
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
