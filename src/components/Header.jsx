const Header = ({ isEditMode, toggleEditMode }) => {
    return (
        <header className='bg-slate-800 text-white flex justify-end p-4'>
            <button onClick={toggleEditMode && toggleEditMode()}>Switch to {isEditMode ? 'view' : 'edit'} mode</button>
        </header>
    )
}
export default Header
