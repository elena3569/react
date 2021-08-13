import { Checkbox, FormControlLabel } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { toggleChecked } from '../../store/actions/profile'

function Profile() {

    const { isChecked, label } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const handleChange = useCallback(() => {
        dispatch(toggleChecked(isChecked));
    }, [dispatch, isChecked])

    return <div> 
        <span> Profile </span>
        <FormControlLabel control={<Checkbox checked={isChecked}  onChange = {handleChange} />} label={label} />
        </div>
}
export default Profile