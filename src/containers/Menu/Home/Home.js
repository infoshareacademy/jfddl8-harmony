import React from 'react'

import Paper from '@material-ui/core/Paper'
import BarGraph from '../../../img/bargraph.png'
import PieChart from '../../../img/piechart.png'


const Home = (props) => {

    return (

        <Paper style={{ height: '100vh' }}>
            <div style={{ width: '50%', height: '100%', display: 'inline-block' }}>
            <div>Z Move your Fit zapomnisz co to dieta!</div>
            <div>
                <ul>
                    <li>dckd</li>
                    <li>dcsd</li>
                    <li>cscdc</li>
                    <li>dcsds</li>
                </ul>
                </div>
            </div>
            <div style={{ width: '50%', display: 'inline-block', overflow: 'hidden' }}>
                <div>
                    <img src={BarGraph} />
                </div>
                <div>
                    <img src={PieChart} />
                </div>
            </div>
        </Paper>

    )
}

export default Home 