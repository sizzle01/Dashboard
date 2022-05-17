import './chart.scss'
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import Moment from 'moment'
import { formatDiagnostic } from 'typescript'

// let myDate
// myDate = moment().format('MMM Do YY')
const current = new Date()
const date = `${current.getDate()}, ${
  current.getMonth() + 1
} ${current.getFullYear()}`

const data = [
  { name: 'January', Total: 1200 },
  { name: 'February', Total: 2100 },
  { name: 'March', Total: 800 },
  { name: 'April', Total: 1600 },
  { name: 'May', Total: 900 },
  { name: 'June', Total: 1700 },
  { name: 'July', Total: 1700 },
  { name: 'august', Total: 1700 },
]

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <div className="date">
        <p>Today: {date} </p>
      </div>
      <XAxis dataKey="name" stroke="gray" />
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0294FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#0294FF"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
