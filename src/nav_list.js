'use strict';
import { NavItem, NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'

class NavList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list =['Arsenal', 'Aston Villa', 'Brighton & Hove Albion', 'Burnley', 'Chelsea',
                'Crystal Palace', 'Everton', 'Fulham', 'Leicster', 'Leeds United',
                'Liverpool', 'Manchester City', 'Manchester United', 'Newcastle United', 'Southhampton',
                'Sheffield United', 'Tottenham Hotspur', 'West Bromwich Albion', 'West Ham United',
                'Wolverhampton Wanderers']
        };
        // create clickme function() to refrence parent handleclick()
    }

    render() {

        return (
            <Nav id="teamList">
                {this.state.list.map(team, index => {
                    <NavItem key={index}>
                        <NavLink id={team} onClick={() => this.team_click(this.id.replace(/\s/g, ''))}>
                            <div className="row m-0 justify-content-center">
                                <img className='logo' src={'assets/logos/' + team.replace(/\s/g, '') + '.png'}></img>
                                <p>{team}</p>
                            </div>
                        </NavLink>
                    </NavItem>
                })}
            </Nav>
        );
    }
}

let domContainer = document.querySelector('#team-selector');
ReactDOM.render(<NavList />, domContainer);