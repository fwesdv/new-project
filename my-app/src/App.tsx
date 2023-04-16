import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'
import { UserContextProvider } from './components/context/UserContext'
import { User } from './components/context/User'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'
import { List } from './components/generics/List'
import { RandomNumber } from './components/restriction/RandomNumber'
import { Toast } from './components/templateLiterals/Toast'
import { CustomButton } from './components/html/Button'
import { Text } from './components/polymorphic/Text'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import Component from './components/redux/component'
function App() {
  const persionName = {
    first: 'Nguyễn',
    last: 'MeoMeo',
  }

  const ListName =[
    {
      first: 'Nguyễn',
      last: 'MeoMeo',
    },
    {
      first: 'Brave',
      last: 'Ahri',
    },
    {
      first: 'Eric',
      last: 'Blitzcrank',
    },
    {
      first: 'Flynn',
      last: 'Cassiopeia',
    },
  ] 
  return(
    <div className="App">

      <Greet name='thế giới!' messageCount={2024} isLonggedIn={true}></Greet>

      <Person name ={persionName}></Person>
      <PersonList names={ListName}></PersonList>
      
      <Status status={'success'}></Status>

      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Giải thưởng Viện Hàn lâm đầu tiên được trao vào ngày 16 tháng 5 năm 1929</Heading>
      </Oscar>

      <Button 
      handleClick={(event,id)=>{
        console.log('đã nhấn', event, id)
      }}></Button>
      <Input value='' handleChange={event=>console.log(event)}></Input>

      <Container style={{border: '1px solid red', padding:'1rem'}}></Container>

      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>

      <UserContextProvider>
        <User></User>
      </UserContextProvider>

      <Private isLoggedIn={true} component={Profile}></Private>

      {/* <List items={['Ahri','Cassiopeia','Blitzcrank']} onClick={(item)=> console.log(item)}></List>
      <List items={[1,2,3]} onClick={(item)=> console.log(item)}></List> */}
      <List items={[
            {
              id: 1,
              first: 'Nguyễn',
              last: 'MeoMeo',
            },
            {
              id: 2,
              first: 'Brave',
              last: 'Ahri',
            },
            {
              id: 3,
              first: 'Eric',
              last: 'Blitzcrank',
            },
            {
              id: 4,
              first: 'Flynn',
              last: 'Cassiopeia',
            },
        ]} onClick={(item)=> console.log(item)}></List>

        <RandomNumber value={10}isPositive></RandomNumber>

        <Toast position='center'/>

        <CustomButton variant='primary'onClick={()=>console.log('Clicked')}>
           private button
        </CustomButton>

        <Text as='h1' size='lg'>Heading</Text>
        <Text as='p'size='md'>paragraph</Text>
        <Text as='label' size='md' color='secondary'>label </Text>

        {/* ReactDOM.render(
          <Provider store={store}>
            <Component />
          </Provider>,
          document.getElementById('root')
        ); */}
    </div>
  ) 
}
export default App;
