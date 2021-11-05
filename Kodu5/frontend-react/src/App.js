import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
import Cart from './pages/Cart';
import {Route} from 'react-router-dom';
import AddCategory from './pages/AddCategory';
import Categories from './pages/Categories';
import AdminHome from "./pages/AdminHome";

function App() {

    return (
      <BrowserRouter>
        <Layout>
          <Header>
            <Route path="/" component={Navbar}/>
          </Header>
          
          <Content>
  
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/addposts" component={AddPosts} />
            <Route exact path="/showposts" component={ShowPosts} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
  
          <Footer>
            <Route path="/" component={Info}/>
          </Footer>
          
          </Content>
          
        </Layout>
      </BrowserRouter>
    )
  }
  
  export default App