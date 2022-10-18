import { createContext, useMemo, useState } from 'react';

export const DashboardContext = createContext()

const DashboardProvider = ({ children }) => {
    const [accountDetails, setAccountDetails] = useState([{
        title: 'Account Balance',
        value: '$30,211.28'
    }, {
        title: 'Pending',
        value: '-$19,500.00'
    }, {
        title: 'Processed',
        value: '$12,000.00'
    }, {
        title: 'Net Worth',
        value: '$52,568.22'
    }, {
        title: 'Investments',
        value: '$22,568.22'
    }, {
        title: 'Cash',
        value: '$30,000.00'
    }])

    const value = useMemo(() => ({
        accountDetails,
        setAccountDetails: (cardValue, arrIndex) => {
            let accClone = [...accountDetails]
            accClone[arrIndex] = {
                title: accClone[arrIndex].title,
                value: cardValue
            }
            return [...accClone]
        }
    }), [accountDetails])

    return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}

export default DashboardProvider