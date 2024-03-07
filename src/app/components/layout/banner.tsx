import React from 'react'

function Banner() {
    return (
        <header className="hidden w-full bg-black py-5 md:block">
            <div className=" m-auto flex w-3/5 justify-between align-middle">
                <img src="/sabay_logo.png" alt="sabay_logo" className="w-28" />
                <img src="/banner_ads.gif" alt="banner_ads" />
            </div>
        </header>
    )
}

export default Banner
