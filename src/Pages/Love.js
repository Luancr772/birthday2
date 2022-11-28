import React from "react";
import Lovedays from "../Components/Lovedays";

const Love = () => {
  return (
    <section className="block justify-center items-center ">
      <h3 className="title text-center mt-32 text-3xl text-pink-500 mb-11 mb-20">
        LOVE DAYS
      </h3>

      <Lovedays></Lovedays>

      <div className="main flex mt-16 justify-center items-center block">
        <div className="user">
          <img
            className="w-36 h-36 rounded-full border border-pink-300"
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/314367480_1398361134033012_5375716553750980530_n.png?stp=dst-png_s403x403&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Q0CiFwBlJHUAX82ivSN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT-qxagiqMB_TJiSFEVToi2TELN_xb9k4Mr58HTAdx3ww&oe=639DF08B"
            alt=""
          />
        </div>

        <div className="days flex items-center mx-11 w-32 h-32 text-pink-500 text-2xl">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/315084158_480444344179450_6135088162643592463_n.png?stp=dst-png_p403x403&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=jofAVumgBpYAX-xAzUW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRHd2qOsZnnf1x9_FXRl6n17ngrqio4Td-5Aoc0Pw7AYA&oe=63A17D33"
            alt=""
          />
        </div>

        <div className="user w-36 h-36 rounded-full border border-pink-300">
          <img
            className="text pl-7 pt-2"
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/314371638_431986412423847_6201749213481694252_n.png?stp=dst-png_p403x403&_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=-9pqgZFUXX0AX_6dips&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSAenpHb_NmfuQURklL_4wrj_HqI-WVC1AEzlQJSOmAVQ&oe=639DCEE3"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
<h3 className=""></h3>;

export default Love;
