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
                </div>
            </div>
        );

        if (typeof window !== 'undefined') {
            if (window.matchMedia('(min-width:600px)').matches) {
                info = (
                    <div>
                        <h2>If you would like to get in touch:</h2>
                        <div className='info'>
                            <p><strong>Email:</strong> micoffin91@gmail.com</p>
                        </div>
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