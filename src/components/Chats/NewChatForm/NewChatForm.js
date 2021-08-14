import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router'
import { addChat } from '../../../store/actions/chats'
// import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
// import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  formDialog: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const participants = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
 
function NewChatForm () {
  const { chats } = useSelector(state => state.chats);
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');

  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [onAdd, setOnAdd] = React.useState(false)

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChange = (e) => {
    setPersonName(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setTitle('');
    setPersonName([]);
    setOpen(false);
  };

  const handleSave = useCallback((e) => {
    e.preventDefault();
    dispatch(addChat(title));
    setTitle('');
    setPersonName([]);
    handleClose();
    setOnAdd(true);
  }, [dispatch, title]); 
  
  React.useEffect(() => {
    if (onAdd) {
      history.push(`/chats/${chats[chats.length-1].id}`)
    }
    setOnAdd(false);
  }, [chats, history, onAdd])


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        New Chat
      </Button>
      <Dialog
        maxWidth='md'
        open={open}
        onClose={handleClose} 
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Chat</DialogTitle>
        <DialogContent className={classes.formDialog}>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            value={title}
            onChange={handleTitle}
          />
          <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Participants</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {participants.map((participant) => (
            <MenuItem key={participant} value={participant} style={getStyles(participant, personName, theme)}>
              {participant}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} type='submit' color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewChatForm