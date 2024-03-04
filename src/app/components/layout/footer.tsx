import React from 'react'

function Footer() {
  return (
    <footer className='bg-black py-5'>
        <div className='text-white md:w-3/5 m-auto flex justify-between flex-wrap text-center md:text-start'>
            <div className='w-full md:w-[25%] mb-5'>
                <div className='w-full flex justify-center md:justify-start align-middle'>
                    <img src="/footer-logo.png" alt="" />
                </div>
                <p className='text-md text-gray-400 mt-2'>​© រក្សា​សិទ្ធិ​គ្រប់​យ៉ាង​ដោយ​ Sabay ឆ្នាំ​២០២៤</p>
                <p className='text-md text-gray-300 font-bold mt-2'>គោលការណ៍​ភាព​ឯកជន | Privacy Policy</p>

                <div className='mt-3'>
                    <h1 className='text-md font-bold text-gray-200'>អាសយដ្ឋាន</h1>
                    <p className='text-md text-gray-400'>អគារ​លេខ ៣០៨ មហាវិថីព្រះមុន្នីវង្ស សង្កាត់បឹងរាំង ខណ្ឌដូនពេញ</p>
                </div>
            </div>
            <div className='w-full md:w-[25%] mb-5'>
                <h1 className=' text-2xl font-bold text-gray-200'>អំពីយើង</h1>
                <p className='text-md text-gray-300 mt-5'>Sabay Digital Corporation ជា​ក្រុមហ៊ុន​ព័ត៌មាន​ឌីជីថល និង​កម្សាន្ត​ឈាន​មុខ​គេ​នៅ​កម្ពុជា។ ព័ត៌មាន​បន្ថែម</p>

                <div className='mt-3'>
                    <p className='text-md text-gray-300 font-medium'>ផលិត​ផល​ និង​ សេវាកម្ម របស់ Sabay</p>
                    <div className='mt-2 flex justify-center'>
                        <img src="/sabay_logo.png" alt="" className='w-10' />
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[25%] mb-5'>
                <div>
                    <h1 className='text-2xl font-bold text-gray-200'>ជួបគ្នានៅបណ្តាញសង្គម</h1>
                </div>
                <div className='mt-3'>
                    <h2 className='text-md text-gray-200'>ទំនាក់ទំនង</h2>
                    <p className='text-gray-400'>info@sabay.com</p>
                    <p className='text-gray-400'>023 228 000</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;