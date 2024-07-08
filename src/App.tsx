import { Route, Routes } from 'react-router-dom';

import { CreateLink, Header, LinkList, SearchLink } from './components';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="ph3 pv1 background-gray">
                <Routes>
                    <Route path="/" element={<LinkList />} />
                    <Route path="/create" element={<CreateLink />} />
                    <Route path="/search" element={<SearchLink />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
