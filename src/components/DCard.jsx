
import { useForm } from "react-hook-form";

const DCard = ({ title, value, isEditMode, key, setAccountDetails }) => {
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true })
    const onSubmit = async data => { setAccountDetails(key, data) }

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