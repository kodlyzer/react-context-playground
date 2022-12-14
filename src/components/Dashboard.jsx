import DashboardProvider, { DashboardContext } from '../utils/dashboard.context'
import DCard from './DCard'
import { useContext } from 'react'

const Dashboard = () => {
    const { accountDetails } = useContext(DashboardContext)
    return (
        <div className='grid grid-cols-3 auto-rows-auto gap-8 px-4'>
            {accountDetails?.map((item, index) => <DCard title={item.title} value={item.value} index={index} key={index} />)}
        </div>
    )
}

export default () => <DashboardProvider><Dashboard /></DashboardProvider>