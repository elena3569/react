import React from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { formatDistance } from 'date-fns'
import firebase from 'firebase'
import { Box, Tabs, Typography, AppBar, Tab, TextField, Button } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
// import { setName, setAge } from '../../store/actions/profile'
// import { changeIsAuthed } from '../../store/actions/profile';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '500px',
      margin: '0 calc(50% - 250px)',
      backgroundColor: theme.palette.background.paper,
    },
    tabsItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    input: {
        width: '250px'
    }
}));

function TabPanel(props) {
    const classes = useStyles()
    const { children, value, index, ...other } = props;

    return <> 
    <div 
        role='tabpanel'
        hidden={value !== index}
        id = {`tab-${index}`}
        aria-labelledby = {`tabpanel-${index}`}
        {...other}
    >
        {value === index && (
            <Box>
                <Typography className={classes.tabsItem}> {children} </Typography>
            </Box>
        )}
    </div>
    </>
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
}

export default function Login() {
    const classes = useStyles()
    // const dispatch = useDispatch()
    const { isAuthed } = useSelector(state => state.profile)
    const [value, setValue] = React.useState(0)
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [error, setError] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [age, setAge] = React.useState(0);
    // var uid = ''
    
    const handleChangeTab = (newValue) => setValue(newValue)
    const handleChangeName = (e) => setName(e.target.value)
    const handleChangeEmail = (e) => setEmail(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)
    const handleChangeAge = (date) => {
        setSelectedDate(date)
        setAge(`${formatDistance(new Date(), date)}`);
    }
    const handleSubmitSignIn = async () => {
        if (!email || !password) {
            setError('Заполните поля')
            return
        }
        
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            setPassword('')
            setEmail('')
        } catch (error) {
            setError(error.message)
        }
    }

    const handleSubmit = () => {

        if (Boolean(email) & Boolean(password) & Boolean(selectedDate) & Boolean(name)) {
            handleSignUp()
            return
        } 
        setError('Заполните поля')
            
    }
    
    // const addUserToDB = (uid) => {
    //     console.log(uid);
    //     firebase.database().ref('uid').child(uid).set({
    //                 email: email,
    //                 name: name,
    //                 age: age
    //             })
    // }
        
    const handleSignUp = async () => {
        try{
            await firebase.auth().createUserWithEmailAndPassword(email, password)
            // firebase.auth().onAuthStateChanged((user) => {
            //     dispatch(changeIsAuthed(Boolean(user)))
            //     // if (user) {
            //     //     addUserToDB(user.uid)
            //     // }
            // })
        } catch (error) {
            setName('')
            // setAge('')
            setError(error.message)
        }
        setPassword('')
        setEmail('')
    }

    return <>
        {isAuthed ?  <Redirect to='/' /> : <>
         <h2>login</h2>
        <div className={classes.root}> 
            <AppBar position='static'>
                <Tabs  value={value} onChange={handleChangeTab} >
                    <Tab label='Sign In' {...a11yProps(0)} />
                    <Tab label='Sign Up' {...a11yProps(1)} />
                </Tabs>
              
            </AppBar>
            <TabPanel className={classes.tabsItem} value={value} index={0}>
                <TextField
                    className={classes.input} 
                    margin="dense"
                    id="email"
                    label="Email"
                    value={email}
                    onChange={handleChangeEmail}>
                </TextField>
                <TextField
                    className={classes.input} 
                    margin="dense"
                    id="password"
                    label="Password"
                    value={password}
                    onChange={handleChangePassword}>
                </TextField>
                <Button onClick={handleSubmitSignIn}>Sign In</Button>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <TextField
                    className={classes.input} 
                    margin="dense"
                    id="name"
                    label="Name"
                    value={name}
                    onChange={handleChangeName}>
                </TextField>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        className={classes.input} 
                        margin='dense'
                        id='date-picker-dialog'
                        label='Date of Birthday'
                        format = 'dd/MM/yyyy'
                        value={selectedDate}
                        onChange={handleChangeAge}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }} 
                    />
                </MuiPickersUtilsProvider>
                <TextField
                    className={classes.input} 
                    margin="dense"
                    id="email"
                    label="Email"
                    value={email}
                    onChange={handleChangeEmail}>
                </TextField>
                <TextField
                    className={classes.input} 
                    margin="dense"
                    id="password"
                    label="Password"
                    value={password}
                    onChange={handleChangePassword}>
                </TextField>
                <Button onClick={handleSubmit}>Sign Up</Button>
            </TabPanel>
            <p>{error}</p>
        </div>
        </>}
    </>
}