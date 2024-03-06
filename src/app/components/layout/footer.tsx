import React from "react";

function Footer() {
  return (
    <footer className="bg-black py-5">
      <div className="m-auto flex w-full flex-wrap justify-between text-center text-white md:w-5/6 md:text-start xl:w-3/5">
        <div className="mb-5 w-full md:w-[25%]">
          <div className="flex w-full justify-center md:justify-start">
            <img src="/footer-logo.png" alt="" />
          </div>
          <p className="text-md mt-2 text-gray-400">
            ​© រក្សា​សិទ្ធិ​គ្រប់​យ៉ាង​ដោយ​ Sabay ឆ្នាំ​២០២៤
          </p>
          <p className="text-md mt-2 font-bold text-gray-300">
            គោលការណ៍​ភាព​ឯកជន | Privacy Policy
          </p>

          <div className="mt-3">
            <h1 className="text-md font-bold text-gray-200">អាសយដ្ឋាន</h1>
            <p className="text-md text-gray-400">
              អគារ​លេខ ៣០៨ មហាវិថីព្រះមុន្នីវង្ស សង្កាត់បឹងរាំង ខណ្ឌដូនពេញ
            </p>
          </div>
        </div>
        <div className="mb-5 w-full md:w-[25%]">
          <h1 className=" text-2xl font-bold text-gray-200">អំពីយើង</h1>
          <p className="text-md mt-5 text-gray-300">
            Sabay Digital Corporation ជា​ក្រុមហ៊ុន​ព័ត៌មាន​ឌីជីថល
            និង​កម្សាន្ត​ឈាន​មុខ​គេ​នៅ​កម្ពុជា។ ព័ត៌មាន​បន្ថែម
          </p>

          <div className="mt-3">
            <p className="text-md font-medium text-gray-300">
              ផលិត​ផល​ និង​ សេវាកម្ម របស់ Sabay
            </p>
            <div className="mt-2 flex justify-center md:justify-start">
              <img src="/sabay_logo.png" alt="" className="w-10" />
            </div>
          </div>
        </div>
        <div className="mb-5 w-full md:w-[25%]">
          <div>
            <h1 className="text-2xl font-bold text-gray-200">
              ជួបគ្នានៅបណ្តាញសង្គម
            </h1>
          </div>
          <div className="mt-3">
            <h2 className="text-md text-gray-200">ទំនាក់ទំនង</h2>
            <p className="text-gray-400">info@sabay.com</p>
            <p className="text-gray-400">023 228 000</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
