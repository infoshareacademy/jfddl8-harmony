import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { BarChart, Bar, Line, XAxis, YAxis, PieChart, Pie, ResponsiveContainer, } from 'recharts'
import Banner from '../../../img/baner.png'


const styles = {
  paper: {
    marginTop: '5px',
    padding: '10px',
    justify: 'center',
    background: '#393e46'
  },

  typo: {
    marginBottom: 15,
    justify: 'center',
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: '1px',
    color: '#fff',
    textTransform: 'uppercase',

  },

  stats: {
    marginTop: 8,
    padding: 16,
    justify: 'center',

  },
  chart: {
    margin: '0 auto'
  },
  descr: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '14px'
  },
  headline: {
    color: '#393e46',
    textTransform: 'uppercase',
    letterSpacing: '1px'

  }

}

class Home extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12} md={8} lg={8}>
          <Paper style={styles.paper}>
            <img src={Banner} width="100%" height="100%"/>
          </Paper>
          <Grid container justify="center">
            <Grid item xs={12} md={12} lg={12}>

              <Paper style={styles.paper}>
                <Typography type="headline" component="h3" style={styles.typo}>
                  Move Your Fit to wyjątkowa aplikacja, która pomoże Ci osiągnąć sylwetkę, o której marzysz!
                            </Typography>
                <Typography component="p" style={styles.descr}>
                  Ciężko Ci się zmotywować?
                  Masz problem z organizacją? Brak Ci pomysłów na posiłki? Nie widzisz rezultatów?
                  Znaleźliśmy rozwiązanie! Z naszą aplikacją Trzymanie diety to czysta przyjemność! Masz jadłospis od trenera zawsze
                  przy sobie,
                  wybierasz listę ulubionych przepisów i sam tworzysz swój dzień jedzenia, masz możliwość dzielenia się własnymi przepisami,
                  zapisujesz jak przebiega realizacja Twojego planu i sprawdzasz postępy!
                               Z nami osiągniesz sylwetkę z pierwszych stron gazet!</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Paper style={styles.stats}>
                <Typography type="headline" component="h3" style={styles.headline}> Odwiedzający </Typography>
                <ResponsiveContainer width={'100%'} height={240}>
                  <BarChart data={data} style={styles.chart}>
                    <Line type="monotone" dataKey="uv" stroke="#222831" />
                    <XAxis dataKey="name" stroke="#222831" />
                    <YAxis />
                    <Bar dataKey="pv" fill="#d65a31" />
                    <Bar dataKey="uv" fill="#393e46" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Paper style={styles.stats}>
                <Typography type="headline" component="h3" style={styles.headline}> Użytkownicy </Typography>
                <ResponsiveContainer width={'100%'} height={240}>
                  <PieChart style={styles.chart}>
                    <Pie data={dataCustomers} dataKey="uv" nameKey="name" cx="50%" cy="50%" outerRadius={30}
                      fill="#d65a31" />
                    <Pie data={data} dataKey="uv" nameKey="name" cx="50%" cy="50%" innerRadius={40}
                      outerRadius={60}
                      fill="#393e46" label />
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const data = [
  { name: 'Kwiecień', uv: 1000, pv: 1000, amt: 1000 },
  { name: 'Maj', uv: 1000, pv: 1500, amt: 1000 },
  { name: 'Czerwiec', uv: 1500, pv: 1000, amt: 1500 },
  { name: 'Lipiec', uv: 1500, pv: 1500, amt: 1000 },
  { name: 'Sierpień', uv: 1500, pv: 1500, amt: 1000 },

]
const dataCustomers = [
  { name: 'Maj', uv: 2000, pv: 4300, amt: 4400 },
  { name: 'Czerwiec', uv: 1000, pv: 3390, amt: 2500 },
  { name: 'Lipiec', uv: 2181, pv: 1800, amt: 5290 },
  { name: 'Sierpień', uv: 4000, pv: 2000, amt: 2000 },

]

export default Home 