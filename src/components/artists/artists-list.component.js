import { Component } from "react";
import { Link } from "react-router-dom";
import artists from "./artist.data";
import ArtistService from '../../services/artists.service'
export default class ArtistListComponent extends Component {
    constructor(props) {
        super(props);
        this.service = new ArtistService()
        this.artists = artists;
        this.selectedRows = []
        this.state = {
            loading: false,
            _length: 0,
            _artists: []
        }
    }

    componentDidMount() {
        this.service.GetAllArtist({ skip: 0, take: 5, orderBy:'-year_born' }).then(res => {
            console.log(res.data)
            //setState data
            this.setState({
                loading: true,
                _length: res.data.length,
                _artists: res.data.data
            })
        });
    }

    getData(params) {
        // this.setState({
        //     loading: false,
        //     _length: 0,
        //     _artists: []
        // })
        this.service.GetAllArtist({ skip: params.skip, take: params.take, orderBy:'-year_born' }).then(res => {
            console.log(res.data)
            //setState data
            this.setState({
                loading: true,
                _length: res.data.length,
                _artists: res.data.data
            })
        });
    }
    onSelectedRow = (rows) => {
        console.log("console from parent component", rows)
    }
    render() {
        const { loading, _length, _artists } = this.state;
        if (!loading) {
            return (
                <h1>Loading...</h1>
            )
        }

        return (
            <div>
                <h1>Danh sách artists</h1>
                <table>
                    <thead>
                        <tr><th>#</th><th></th><th>First Name</th><th>Last Name</th><th>Nationality</th><th>Born</th><th>Died</th><th>Age</th></tr>
                    </thead>
                    <tbody>
                        <ArtistRow data={_artists} onSelectedRow={(rows) => {
                            console.log(`console from property${new Date()}`)
                            this.onSelectedRow(rows)
                        }} />
                    </tbody>
                    <tfoot><tr>
                        <th colSpan={2}><h4>Tổng số: {_length}</h4></th>
                        <th colSpan={6}>
                            <input type={'button'} onClick={(e) => this.getData({ skip: 0, take: 5 })} value="1" />
                            <input type={'button'} onClick={(e) => this.getData({ skip: 5, take: 5 })} value="2" />
                        </th>
                    </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

class ArtistRow extends Component {
    constructor(props) {
        super(props)
        this.data = props.data;
        this.selectedRows = []
        this.onSelectedRow = props.onSelectedRow
    }
    selectRow = (r) => {
        if (this.selectedRows.indexOf(r) >= 0) this.selectedRows = this.selectedRows.filter(t => t !== r)
        else this.selectedRows.push(r)
        console.log("console from children component", this.selectedRows)
        this.onSelectedRow(this.selectedRows)
    }
    render() {
        return this.data.map((row) =>
            <tr key={`${row._id}`}>
                <td><Link to={`/artists/details/${row._id}/${row.year_born}`} id={`${row._id}`}>{this.data.indexOf(row) + 1}</Link></td><td><input type="checkbox" onChange={(e) => {
                    this.selectRow(row);
                }}></input></td><td>{row.first_name}</td><td>{row.last_name}</td><td>{row.nationality}</td><td>{row.year_born}</td><td>{row.year_died}</td><td>{row.year_died - row.year_born}</td>
            </tr>
        );
    }
}