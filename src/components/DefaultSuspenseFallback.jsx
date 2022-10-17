import { Suspense } from 'react'

const DefaultSuspenseFallback = ({ children }) => (<Suspense fallback={<div>Loading...</div>}>
    { children }
</Suspense>)

export default DefaultSuspenseFallback