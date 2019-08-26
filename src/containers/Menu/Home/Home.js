import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { BarChart, Bar, Line, XAxis, YAxis, PieChart, Pie, ResponsiveContainer, Legend, Cell } from 'recharts'
import Banner from '../../../img/baner.png'
import { forEach } from 'lodash'


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


const recipes = [
  {
    id: 'dsfasd',
    label: 'lanch',
    title: 'sfasd'
  },
  {
    id: 'dsfasd',
    label: 'lanch',
    title: 'sfasd'
  },
  {
    id: 'dsfasd',
    label: 'lanch',
    title: 'sfasd'
  },
  {
    id: 'fsdafas',
    label: 'breakfast',
    title: 'fasd'
  }
]

const returnLabelsCount = (recipes) => {

  return recipes && recipes.reduce((counter, recipe) => {
    const { label } = recipe;

    counter[label] = counter[label] ? counter[label] + 1 : 1;
    return counter

  }, {})

}

class Home extends Component {
  state = {
    chartData: [],
    recipes: []
  }

  mapObjectToArray = obj =>
    Object.entries(obj || {}).map(([key, value]) =>
      typeof value === "object" ? { ...value, key } : { key, value }
    );


  loadElements = () => {
    fetch("https://jfddl8-harmonylublin.firebaseio.com/recipes.json")
      .then(result => result.json())
      .then(data => {
        this.setState({
          recipes: this.mapObjectToArray(data)
        })
      }
      )
      .catch((error) => {
        this.setState({
          recipes: []
        })
      }
      )
  };


  componentDidUpdate(prevProps, prevState) {

    if (prevState.recipes !== this.state.recipes) {
      console.warn(this.state.recipes)
      this.countCategory()
    }
  }

  countCategory() {
    console.warn(this.state.recipes)
    const chartData = []
    const countData = returnLabelsCount(this.state.recipes)
    forEach(countData, (value, name) => {
      console.warn(value, name)
      chartData.push({ name, value })
    })

    console.warn(chartData)
    this.setState({ chartData })
  }

  componentDidMount() {
    this.loadElements()


    // this.setState({recipes:})

  }

  render() {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return (
      <Grid container justify="center">
        <Grid item xs={12} md={8} lg={8}>
          <Paper style={styles.paper}>
            <img src={Banner} width="100%" height="100%" alt="" />
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
                  <BarChart data={dataUsers} style={styles.chart}>
                    <Line type="monotone" dataKey="pv" stroke="#222831" />
                    <XAxis dataKey="name" stroke="#222831" />
                    <YAxis />
                    <Bar dataKey="pv" fill="#d65a31" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Paper style={styles.stats}>
                <Typography type="headline" component="h3" style={styles.headline}> Kategorie </Typography>
                <ResponsiveContainer width={'100%'} height={240}>
                  <PieChart style={styles.chart}>
                    <Pie data={this.state.chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40}
                      outerRadius={60}
                      fill="#393e46" label>
                      {
                        data.map((entry, index) => {
                          console.warn(entry)
                          return <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        })
                      }
                    </Pie>

                    <Legend />
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
  { category: 'Śniadania', uv: 5 },
  { category: 'Obiady', uv: 4 },
  { category: 'Kolacje', uv: 7 },
  { category: 'Desery', uv: 9 }

]

const dataUsers = [
  { name: 'Kwiecień', pv: 100 },
  { name: 'Maj', pv: 140 },
  { name: 'Czerwiec', pv: 160 },
  { name: 'Lipiec', pv: 200 }

]

export default Home 
