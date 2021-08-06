import {Layout, Menu} from 'antd';
import "antd/dist/antd.css";
import ListaPessoa from './components/ListaPessoas';

const {Header, Content, Footer} = Layout;

function App() {
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo">
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key='1'>Home</Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content style={{padding: '0 50px'}}>
          <div className="site-layout-content">
              <ListaPessoa />
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>eVaccine FullStackWeek</Footer>
      </Layout>
    </div>
  );
}

export default App;
