import React from "react";

const Footer = () => {
  return (
    <div className="min-h-[439px] bg-[#2B2B2B]">
      <div className="px-16 py-24 flex justify-between text-white ">
        <div className="max-w-[436px]">
          <hr className="border-[#FF0000] border-1 " />
          <p className="font-semibold text-2xl mt-4 leading-8">Yumly</p>
          <p className="text-sm font-normal mt-4 leading-4 text-[#8C8C8C]">
            A cooking platform aimed at those who are confused about finding
            recipes from anywhere in the world, available for web and mobile
            versions, let's cook with cookbuddy!
          </p>
        </div>

        <div className="flex gap-14 pr-7">
          <div>
            <div className="font-semibold text-sm leading-4 cursor-default">About</div>
            <ul className="font-semibold text-sm text-[#8C8C8C] mt-6 space-y-2 cursor-pointer">
              <li className="hover:text-[#bd6969]">About Us</li>
              <li className="hover:text-[#bd6969]">Blog</li>
              <li className="hover:text-[#bd6969]">Careers</li>
              <li className="hover:text-[#bd6969]">Jobs</li>
              <li className="hover:text-[#bd6969]">In Press</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-sm leading-4 cursor-default">Support</div>
            <ul className="font-semibold text-sm text-[#8C8C8C] mt-6 space-y-2 cursor-pointer">
              <li className="hover:text-[#bd6969]">Contact us</li>
              <li className="hover:text-[#bd6969]">Whatsapp</li>
              <li className="hover:text-[#bd6969]">Online chat</li>
              <li className="hover:text-[#bd6969]">Telegram</li>
              <li className="hover:text-[#bd6969]">Instagram</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-sm leading-4 cursor-default">FAQ</div>
            <ul className="font-semibold text-sm text-[#8C8C8C] mt-6 space-y-2 cursor-pointer">
              <li className="hover:text-[#bd6969]">Account</li>
              <li className="hover:text-[#bd6969]">Manage</li>
              <li className="hover:text-[#bd6969]">Order</li>
              <li className="hover:text-[#bd6969]">Payment</li>
              <li className="hover:text-[#bd6969]">Return</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
