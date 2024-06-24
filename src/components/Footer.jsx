import React from "react";

const Footer = () => {
  return (
    <div className="min-h-[439px] bg-[#2B2B2B]">
      <div className="px-16 py-24 flex justify-between text-white ">
        <div className="max-w-[436px]">
          <hr className="border-[#FF0000] border-1 " />
          <p className="font-semibold text-2xl mt-4 leading-8">Cookbuddy</p>
          <p className="text-sm font-normal mt-4 leading-4 text-[#8C8C8C]">
            A cooking platform aimed at those who are confused about finding
            recipes from anywhere in the world, available for web and mobile
            versions, let's cook with cookbuddy!
          </p>
        </div>

        <div className="flex gap-14 pr-7">
          <div>
            <div className="font-semibold text-sm leading-4">About</div>
            <ul className="font-semibold text-sm text-[#6D6D6D] mt-6 space-y-2 cursor-pointer">
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Jobs</li>
              <li>In Press</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-sm leading-4">Support</div>
            <ul className="font-semibold text-sm text-[#6D6D6D] mt-6 space-y-2 cursor-pointer">
              <li>Contact us</li>
              <li>Whatsapp</li>
              <li>Online chat</li>
              <li>Telegram</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-sm leading-4">FAQ</div>
            <ul className="font-semibold text-sm text-[#6D6D6D] mt-6 space-y-2">
              <li>Account</li>
              <li>Manage</li>
              <li>Order</li>
              <li>Payment</li>
              <li>Return</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
