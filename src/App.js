import logo from './logo.svg';
import './App.css';
import { Frontpage } from './components/fronpage/frontpage.component';
import { RestuarentComponent } from './components/restuarent/restuarent.component';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/app.router';
import { EducationComponent } from './components/education/education.component';
import { ExampleComponent } from './components/example/example.component';
import { LoginComponent } from './components/login/login.component';
import { LogoComponent } from './components/logo/logo.compoent';
import { RestarentService } from './components/restarentService/restarentService.component';


function App() {
  return (
    <div className="App">


      {/* <Frontpage></Frontpage> */}
      {/* <RestuarentComponent></RestuarentComponent> */}
{/* <EducationComponent></EducationComponent> */}

{/* <ExampleComponent></ExampleComponent> */}

        <BrowserRouter>
          <AppRouter></AppRouter>
        </BrowserRouter>

    {/* <LoginComponent></LoginComponent> */}

    {/* <LogoComponent></LogoComponent> */}

    {/* <RestarentService></RestarentService> */}
    </div>
  );
}

export default App;
