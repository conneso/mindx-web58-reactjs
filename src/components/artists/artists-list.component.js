import { Component } from "react";

class ArtistListComponent extends Component {
    constructor(props) {
        super(props)

        this.artists = [{
            "_id": {
                "$oid": "6290e1575935aeaf9db386a2"
            },
            "last_name": "Rippl-Ronai",
            "first_name": "Joszef",
            "year_born": 1861,
            "year_died": 1927,
            "nationality": "Hungary"
        }, {
            "_id": {
                "$oid": "6290e1575935aeaf9db386a3"
            },
            "last_name": "Ostroumova",
            "first_name": "Anna",
            "year_born": 1871,
            "year_died": 1955,
            "nationality": "Russia"
        }, {
            "_id": {
                "$oid": "6290e1575935aeaf9db386a4"
            },
            "last_name": "Van Gogh",
            "first_name": "Vincent",
            "year_born": 1853,
            "year_died": 1890,
            "nationality": "Holland"
        }, {
            "_id": {
                "$oid": "6290e1575935aeaf9db386a5"
            },
            "last_name": "Maurer",
            "first_name": "Alfred",
            "year_born": 1868,
            "year_died": 1932,
            "nationality": "USA"
        }, {
            "_id": {
                "$oid": "6290e1575935aeaf9db386a6"
            },
            "last_name": "Munch",
            "first_name": "Edvard",
            "year_born": 1863,
            "year_died": 1944,
            "nationality": "Norway"
        }, {
            "_id": {
                "$oid": "6290e1575935aeaf9db386a7"
            },
            "last_name": "Redon",
            "first_name": "Odilon",
            "year_born": 1840,
            "year_died": 1916,
            "nationality": "France"
        }, {
            "_id": {
                "$oid": "6290e1575935aeaf9db386a8"
            },
            "last_name": "Diriks",
            "first_name": "Edvard",
            "year_born": 1855,
            "year_died": 1930,
            "nationality": "Norway"
        }, {
            "_id": {
                "$oid": "629a0bd9d71601671be2e279"
            },
            "first_name": "Hồ",
            "last_name": "Chí Minh",
            "nationality": "Vietnam",
            "year_born": 1890,
            "year_died": 1969,
            "works": []
        }]

        this.selectedRows = []
        this.sate = { xRows: [] }
    }
    onSelectedRow = (rows) => {
        console.log("console from parent component", rows)
    }
    render() {
        return (
            <div>
                <h1>Danh sách artists</h1>
                <table>
                    <thead>
                        <tr><th>#</th><th></th><th>First Name</th><th>Last Name</th><th>Nationality</th><th>Born</th></tr>
                    </thead>
                    <tbody>
                        <TableRow data={this.artists} onSelectedRow={(rows) => {
                            console.log(`console from property${new Date()}`)
                            this.onSelectedRow(rows)
                        }}/>
                    </tbody>
                </table>
            </div>
        )
    }
}

class TableRow extends Component {
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
            <tr>
                <td>{this.data.indexOf(row) + 1}</td><td><input type="checkbox" onChange={(e) => {
                    this.selectRow(row);
                }}></input></td><td>{row.first_name}</td><td>{row.last_name}</td><td>{row.nationality}</td><td>{row.year_born}</td>
            </tr>
        );
    }
}
export default ArtistListComponent