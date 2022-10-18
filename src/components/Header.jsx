import { AppContext } from '../utils/app.context'
import { useContext } from 'react'

const Header = () => {
    const { isEditMode, toggleEditMode } = useContext(AppContext);
    return (
        <header className='bg-slate-800 text-white flex justify-end p-4'>
            <button onClick={toggleEditMode}>Switch to {isEditMode ? 'view' : 'edit'} mode</button>
        </header>
    )
}
export default Header
