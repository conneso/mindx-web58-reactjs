import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import Table from "./Table";
import Navigation from "./Navigation";
import ArtistListComponent from './components/artists/artists-list.component'
import ArtistDetailComponent from "./components/artists/artist-detail.component";
import ContactListComponent from "./components/contacts/contact-list.component";
import NoLink from './components/twowaybinding/nolink.component'
import WithLink from "./components/twowaybinding/withlink.component";
const users = [
    {
        email: "gowtham@outlook.com",
        firstname: "gowtham",
        lastname: "ss",
        password: "outlook010"
    },
    {
        email: "ss@ss.com",
        firstname: "ss",
        lastname: "ss",
        password: "ss"
    },
    {
        email: "gow@gow.com",
        firstname: "gow",
        lastname: "gow",
        password: "gow"
    },
    {
        email: "thanhhh@wow.com",
        firstname: "Ho Huu",
        lastname: "Thanh",
        password: "wow"
    }
];

// const App = () => <Table data={users} />;
// const App = () => <ArtistListComponent data={users} />;

//Two-way bidning components
// const App = () => {
//     return (
//         <div>
//             <NoLink></NoLink><WithLink></WithLink>
//         </div>)
// }

//Routing
const App = () => {
    return (
        <><BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route path="artists" element={<ArtistListComponent />}>
                    </Route>
                    <Route path="artists/details/:_id/:_year_born" element={<ArtistDetailComponent />} />
                    <Route path="contacts" element={<ContactListComponent />} />
                </Route>

            </Routes>
        </BrowserRouter></>
    );

}
export default App;
