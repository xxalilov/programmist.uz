import React from "react";
import { HiChevronDown } from "react-icons/hi";

function Accordion() {
  let array = [
    {
      id: 1,
      title: "Qanday qilib biznesni aftomatlashtirsa bo’ladi?",
      text: "Birinchi navbatda biznesingizni yana bir bor ko’rib chiqing, qaysi qismni odam aralashuvsiz amalga oshirish mumkin? Bunda biz sizga yordam berishimiz mumkin.",
    },
    {
      id: 2,
      title: "Biznesimga web site yasashim kerakmi?",
      text: "Biznesingiz haqida to’liqroq ma’lumot bering biz sizga sifatli va hamyonbop narxda qilib beramiz",
    },
    {
      id: 3,
      title:
        "Play marketdagi dasturimni odamlar yuklasa menga pul tushub turadimi?",
      text: "Yo’q , dasturingiz ichidagi har xil reklamalar orqali daromad ko’rishingiz mumkin. Va shu bilan birga pulli kontentlar quyishingiz orqali daromad ko’rishingiz mumkin.",
    },
    {
      id: 4,
      title: "Dastur o’rtacha qancha vaqtda tayyor bo’ladi?",
      text: "Dasturning murakkabligiga qarab har xil vaqt oladi. O’rtacha 2 haftadan 3 oy atrofida",
    },
  ];

  return (
    <div>
      {" "}
      {array.map((item, index) => {
        return (
          <div
            key={index}
            className="rounded-[18px] mx-2 pt-2 w-[350px] md:w-[500px] bg-white min-h-[50px] my-2 items-center "
          >
            <div className="flex mx-auto w-[350px] md:w-full">
              <button
                onClick={(e) => {
                  e.currentTarget?.parentElement?.parentElement?.lastElementChild?.classList.toggle(
                    "hidden"
                  );
                }}
                className="border bg-[#F2F0FD] text-[#0677E1] px-2 mr-1 w-8 h-8 mx-2 rounded-[40px]"
              >
                <HiChevronDown className="mt-1" />
              </button>
              <h3 className="text-[20px] w-[350px] md:w-auto">{item.title}</h3>
            </div>
            <p className="p-3  ml-10 hidden">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
