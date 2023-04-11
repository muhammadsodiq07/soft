import React from "react";
import "./Statistik.scss";
import CountUp from "react-countup";

export default function Statistik() {
  const info = [
    {
      id: 1,
      count: 20,
      simvol: "+",
      desc: "Years Of Experience",
    },
    {
      id: 2,
      count: 66,
      simvol: "K+",
      desc: "Complete Projects",
    },
    {
      id: 3,
      count: 29,
      simvol: "k",
      desc: "Client Satisfied",
    },
    {
      id: 4,
      count: 150,
      simvol: "+",
      desc: "Global Award Winning",
    },
  ];

  return (
    <div className="statistik">
      <div className="container">
        <div className="statistik__main">
          <ul className="statistik__list">
            {info !== undefined
              ? info.map((item, inx) => (
                  <li className="statistik__item" key={inx + 1}>
                    <CountUp start={0} end={item.count} duration={3} />
                    <span>
                      {/* {item.count} */}
                      {item.simvol}
                    </span>

                    <p>{item.desc}</p>
                  </li>
                ))
              : ""}
            {/* <li className="statistik__item">
              <span className="statistik__span">20+</span> <br />
              <span className="statistik__span2"></span>
            </li>
            <li className="statistik__item">
              <span className="statistik__span">20+</span> <br />
              <span className="statistik__span2">Years Of Experience</span>
            </li>
            <li className="statistik__item">
              <span className="statistik__span">20+</span> <br />
              <span className="statistik__span2">Years Of Experience</span>
            </li>
            <li className="statistik__item">
              <span className="statistik__span">20+</span> <br />
              <span className="statistik__span2">Years Of Experience</span>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
