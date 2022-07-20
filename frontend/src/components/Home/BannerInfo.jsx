import React from 'react'

// MUI
import MapsHomeWorkRoundedIcon from '@mui/icons-material/MapsHomeWorkRounded';
import AddCardRoundedIcon from '@mui/icons-material/AddCardRounded';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';

//STYLES
import '../../styles/bannerInfo.css'

function BannerInfo () {
    return(
        <div className='containterBannerInfo_F'>
            <div className='infoItem_F'>
                <MapsHomeWorkRoundedIcon className='bannerInfoIcon_F'/>
                <h3 className='infoItemTitle_F'>Shipping to all CABA and GBA</h3>
                <p className='marginNone'>Your Shipt shopper will leave your order right at your doorstep.</p>
            </div>
            <div className='infoItem_F'>
                <AddCardRoundedIcon  className='bannerInfoIcon_F' />
                <h3 className='infoItemTitle_F'>All accepted payment options</h3>
                <p className='marginNone'>Choose the option that suits you best!</p>
            </div>
            <div className='infoItem_F'>
                <WhatsappRoundedIcon  className='bannerInfoIcon_F'/>
                <h3 className='infoItemTitle_F'>Need help?</h3>
                <p className='marginNone'>Write us from 9 to 18 and let us help you</p>
            </div>
            <div className='infoItem_F'>
                <VolunteerActivismRoundedIcon  className='bannerInfoIcon_F' />
                <h3 className='infoItemTitle_F'>¡Pay in cash!</h3>
                <p className='marginNone'>Add a 5% discount by paying in cash at the time of delivery</p>
            </div>
        </div>
    )
}

export default BannerInfo