
import { useForm } from "react-hook-form"
import { AppContext } from '../utils/app.context'
import { useContext } from 'react'
import { DashboardContext } from '../utils/dashboard.context'

const DCard = ({ title, value, index }) => {
    const { setAccountDetails } = useContext(DashboardContext);
    const { isEditMode } = useContext(AppContext);
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true })
    const onSubmit = async data => { setAccountDetails(index, data) }

    return isEditMode ? (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('value')}/>
            <input type="submit" value="Update" />
        </form>
    </>) : (<div className='card w-80'>
        <div className='border-b-2 mb-5'>{title}</div>
        {value}
    </div>)
}
export default DCard