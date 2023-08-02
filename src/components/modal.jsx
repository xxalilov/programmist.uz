import React, { useState } from "react";
import { useGlobalContext } from "../context";
import Image from "next/image";
import feedback from "../pages/images/feedback-message.png";

function Modal() {
  const { setShowModal } = useGlobalContext();
  const [sendForm, setSendFrom] = useState(false);
  return (
    <div className="w-full z-[5] fixed top-0 right-0 left-0 bottom-0 bg-[#8294A5] h-[100vh]">
      {!sendForm ? (
        <div className="bg-white w-[400px] mt-[50px] rounded-[24px] p-10 mx-auto h-[500px]">
          <div className="flex justify-between">
            <h2 className="text-[30px] ">
              Bepul{" "}
              <span className="bg-gradient-to-r from-[#0677E1] to-[#8C1FE2] font-[700] bg-clip-text text-transparent">
                konsultatsiya
              </span>{" "}
            </h2>
            <button
              onClick={() => setShowModal(false)}
              className="w-10 h-10 rounded-[40px] bg-[#F3EFFD] pb-1 mb-2"
            >
              🗙
            </button>
          </div>
          <form action="" className="text-left">
            <label htmlFor="name" className="">
              Ism
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Ismingizni kiriting"
              className="rounded-xl border my-2 border-[#D7E0E8] outline-none w-full bg-[#F6F8FC] px-3 py-2"
            />
            <label htmlFor="phone">Telefon raqamingiz</label>
            <div className=" my-2 flex rounded-xl border outline-none border-[#D7E0E8] w-full bg-[#F6F8FC] px-3 py-2">
              <p>+998</p>
              <input
                type="number"
                name="phone"
                id="phone"
                className="bg-transparent outline-none  w-full"
              />
            </div>
            <label htmlFor="desc">Habaringiz</label>
            <textarea
              name="description"
              id="desc"
              placeholder="Habaringizni kiriting"
              className="my-2 rounded-xl h-[120px] border outline-none border-[#D7E0E8] w-full bg-[#F6F8FC] px-3 py-2"
            ></textarea>
            <button
              className="rounded-xl text-white py-[10px] px-[40px] ml-[180px] bg-gradient-to-r from-[#0677E1] to-[#8C1FE2]"
              onClick={() => setSendFrom(true)}
            >
              Yuborish
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white w-[400px] text-center mt-[70px] rounded-[24px] p-10 mx-auto h-[430px]">
          <Image src={feedback} alt="feed back " className="mx-auto" />
          <h2 className="text-[30px] font-[700]">
            Muvaffaqiyatli{" "}
            <span className="bg-gradient-to-r from-[#0677E1] to-[#8C1FE2] font-[700] bg-clip-text text-transparent">
              yuborildi!
            </span>{" "}
          </h2>
          <p className="my-5">
            Operatorlar tez orada siz bilan aloqaga chiqishadi!
          </p>
          <button
            className="rounded-xl text-white py-[10px] px-[40px]  bg-gradient-to-r from-[#0677E1] to-[#8C1FE2]"
            onClick={() => setShowModal(false)}
          >
            Tushunarli
          </button>
        </div>
      )}
    </div>
  );
}

export default Modal;
