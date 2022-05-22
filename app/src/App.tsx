import React from 'react'
import { 
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom'
import CreateParking from './pages/CreatePc/CreatePc'
import DashBoard from './pages/DashBoardAdmin'
import Login from './pages/Login'
import Park from './pages/Pc/Pc'
import ParkingList from './pages/PcList/PcList'
import Registration from './pages/Registration/Registration'
import UserList from './pages/UserList'
import { Styled } from './style/global.style'
import StartDash from './UI/StartDash/StartDash.style'
import Documents from './pages/Documents/Documents'
import DashBoardUser from './pages/DashBoardUsers/DashBoardUser'
import ParkingListUser from './pages/UserPcList/UserPcList'
import ParkUser from './pages/UserPc/UserPc'
import StartPage from './pages/StartPage/StartPage'
import NextStart from './pages/NextStart/NextStart'
import About from './pages/About/About'

const {
  Container,
  Wrapper,
} = Styled

const App = () => {

  return (
    <Wrapper>
      <Container>
        <BrowserRouter>
          <Routes>

            <Route path='/' element = { <DashBoard /> } >
              <Route path='/parking' element = { <ParkingList /> } />
              <Route path='/setParking' element = { <CreateParking /> } />
              <Route path='/park/:id' element = { <Park />  } />
              <Route path='/user_list' element = { <UserList />  } />
              <Route path='/document' element = { <Documents />  } />
            </Route>

            <Route path='/userDashboard' element={<DashBoardUser />}>
              <Route path='/userDashboard' element = { <StartDash /> } />
              <Route path='document' element = { <Documents />  } />
              <Route path='pcList' element = { <ParkingListUser />  } />
              <Route path='park/:id' element = { <ParkUser />  } />
            </Route>
            <Route path='/start' element={<StartPage />} />
            <Route path='/nextStart' element={<NextStart />} />
            <Route path='/about' element={<About />} />

            <Route path='/login' element = { <Login /> } />
            <Route path='/registration' element ={ <Registration /> } />
          </Routes>
        </BrowserRouter>
      </Container>
    </Wrapper>
  )
}

export default App
