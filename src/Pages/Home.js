import React from "react";

const Home = () => {
  return (
    <section className="Content flex mt-32 block justify-center items-center">
      <div>
        <img
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/312204639_839627587242038_1887363763154290271_n.png?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=wvQOYYRUgUwAX-Iyy9A&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSmiBNAKj_ZuohEysdDRuKtJARQTSWLntcHtvC-eIG03g&oe=639DC84D"
          alt=""
        />
      </div>

      <div className="Text text-2xl items-center mt-15">
        <div className="mb-10">
          <span className="">Loa loa loa ...</span>
        </div>
        <br />
        <div className="content bg-purple-400 p-10 rounded-2xl">
          <div className="">
            <span className="text">Trang web này chỉ dành cho Trà Giang</span>{" "}
          </div>
          <br />
          <div>
            <span className="text">
              Chỉ có Giang và người thân của Giang mới được xem{" "}
            </span>
          </div>
          <br />
          <span className="text">Ai muốn xem thì bảo Giang gửi cho nhé</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
