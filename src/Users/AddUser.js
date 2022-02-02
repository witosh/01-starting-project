import Card from "../UI/Card";
import classes from './AddUser.module.css';

const AddUser = () => {

    return (
        <Card className={classes.input}>
        <form>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"></input>
            <label htmlFor="age">Age (Year)</label>
            <input id="age" type="number"></input>
            <button type="submit">Add User</button>
        </form>
        </Card>
    );
}

export default AddUser;