import Table from "./Table";
import ArtistListComponent from './components/artists/artists-list.component'
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
        email: "thanhhh@gow.com",
        firstname: "Ho Huu",
        lastname: "Thanh",
        password: "wow"
    }
];

// const App = () => <Table data={users} />;
const App = () => <ArtistListComponent data={users} />;
export default App;
