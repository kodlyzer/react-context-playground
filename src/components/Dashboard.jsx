import DashboardProvider from '../utils/dashboard.context'
import DCard from './DCard'

const Dashboard = ({ accountDetails, setAccountDetails }) => {
    debugger;
    return (

        <div className='grid grid-cols-3 auto-rows-auto gap-8 px-4'>
            {accountDetails?.map((item, index) => <DCard title={item.title} value={item.value} key={index} />)}
        </div>
    )
}

const DashboardWired = () => <DashboardProvider><Dashboard /></DashboardProvider>

export default DashboardWired