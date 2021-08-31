import { Checkbox, FormControlLabel } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { toggleChecked } from '../../store/actions/profile'
import firebase from 'firebase'
import React from 'react'

function Profile() {


    const { isChecked, label, name, age } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const handleChange = useCallback(() => {
        dispatch(toggleChecked(isChecked));
    }, [dispatch, isChecked])

    return <div> 
        <span> Profile </span>
        <p>Name: {name} </p>
        <p>Age: {age} </p>
        <FormControlLabel control={<Checkbox checked={isChecked}  onChange = {handleChange} />} label={label} />
        </div>
}
export default Profile