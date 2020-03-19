import React, { useState } from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
//class SignIn extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         email: '',
    //         password: ''
    //     }
    // }

    const [ userCredentials, setCredentials ] = useState({ email: '', password: ''});
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        //const { emailSignInStart } = this.props;
        //const { email, password } = this.state;
        emailSignInStart(email, password);
        // try{
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({
        //         email: '',
        //         password: ''
        //     });
        // } catch(err) {
        //     console.log(err);
        // }
        // this.setState({ email: '', password: '' })
    };

    const handleChange = event => {
        const { value, name } = event.target;
        //this.setState({ [name] : value})

        setCredentials({ ...userCredentials, [name]: value });
    };

    //render() {
        //const { googleSignInStart } = this.props;
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput name='email' type='email' value={email} label='Email' handleChange={handleChange} required />
                    <FormInput name='password' type='password' value={password} label='Password' handleChange={handleChange} required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    //}
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);