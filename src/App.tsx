import { Route, Routes } from 'react-router-dom';

import { CreateLink, Header, LinkList, Login, SearchLink } from './components';
import { AppDiv } from './styled/StyledApp';

function App() {
    return (
        <AppDiv>
            <Header />
            <AppDiv>
                <Routes>
                    <Route path="/" element={<LinkList />} />
                    <Route path="/create" element={<CreateLink />} />
                    <Route path="/search" element={<SearchLink />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </AppDiv>
        </AppDiv>
    );
}

export default App;
