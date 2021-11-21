import { Component } from 'react';
import './contact.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default class Contact extends Component {

    render () {

        let info = (
            <div>
                <h2>If you would like to get in touch:</h2>
                <div className='info'>
                    <p><strong>Email:</strong> <br /><br />micoffin91@gmail.com</p>
                    <p><strong>Hours:</strong> <br /><br />Mon-Fri 9:00am-12:30pm EST</p>
                    <p>Sat-Sun 11:00am-8:00pm EST</p>
                </div>
                <h4>I will try to respond outside of available hours if at all possible.</h4>
            </div>
        );

        if (typeof window !== 'undefined') {
            if (window.matchMedia('(min-width:600px)').matches) {
                info = (
                    <div>
                        <h2>If you would like to get in touch:</h2>
                        <div className='info'>
                            <p><strong>Email:</strong> micoffin91@gmail.com</p>
                            <p><strong>Hours:</strong> Mon-Fri 9:00am-12:30pm EST</p>
                            <p className='hours'>Sat-Sun 11:00am-8:00pm EST</p>
                        </div>
                        <h4>I will try to respond outside of available hours if at all possible.</h4>
                    </div>

                );
            }
        }

        return (
            <div>
                <Header />
                <div className='contact'>
                    {info}
                </div >
                <Footer />
            </div>
        );
    }
}