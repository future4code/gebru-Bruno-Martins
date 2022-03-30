import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

          <Post
          nomeUsuario={'Bruno'}
          fotoUsuario={'https://i.pinimg.com/originals/79/83/09/798309603745e7573a06b831ddb2a9db.png'}
          fotoPost={'https://www.hypeness.com.br/1/2021/09/be90e1bf-sumba-island-trees_v.jpg'}
        />
        <Post
          nomeUsuario={'Gahell'}
          fotoUsuario={'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'}
          fotoPost={'https://static.escolakids.uol.com.br/2019/07/paisagem-natural.jpg'}
        />
      </MainContainer>


    );
  }
}


export default App;
