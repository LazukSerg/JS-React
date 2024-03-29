import './Footer.css'
import Info from './Info'
import Map from './Map'
import Name from '../Name'

function Footer() {
    return (
        <div className='footer'>
            <Name name='Contact'/>
            <div className='cards'>
                <Info />
                <Map />
            </div>
        </div>
    )
}

export default Footer;