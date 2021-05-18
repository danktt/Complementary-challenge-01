import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';


import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

export function App() {
 
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
    </div>
  )
}