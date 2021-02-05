import React, {useContext, Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles/FormStyle';
import {LanguageContext} from "./context/LanguageContext";

const words = {
    azerbaijan: {
        email: "E-mail unvani",
        password: "Shifre",
        rememberMe: "Yadda saxla",
        signIn: "Daxil ol"
    },
    english: {
        email: "Email address",
        password: "Password",
        rememberMe: "Remember me",
        signIn: "Sign in"
    }
};

class Form extends Component  {
    static contextType = LanguageContext;

    render() {
        const {classes} = this.props;
        const {language, changeLanguage} = this.context;
        const {email, password, rememberMe, signIn} = words[language];

        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant="h5">{signIn}</Typography>
                    <Select value={language} onChange={changeLanguage} >
                        <MenuItem value="azerbaijan">Azerbaijan</MenuItem>
                        <MenuItem value="english">English</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">{email}</InputLabel>
                            <Input id="email" name="email" autoFocus/>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">{password}</InputLabel>
                            <Input id="password" name="password" autoFocus/>
                        </FormControl>
                        <FormControlLabel control={<Checkbox color="primary"/>} label={rememberMe}/>
                        <Button type="submit" variant="contained" fullWidth color="primary"
                                className={classes.submit}>{signIn}</Button>
                    </form>
                </Paper>
            </main>
        )
    }
}

export default withStyles(styles)(Form);