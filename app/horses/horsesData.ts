export interface Horse {
  name: string;
  year: number;
  sex: "Mare" | "Gelding" | "Stallion";
  img: string; // path in /public
  desc: string;
}

export const horses: Horse[] = [
  {
    name: "Cowboy Drift",
    year: 2018,
    sex: "Gelding",
    img: "/horse1.jpg",
    desc: "A strong, cowy gelding with a big heart and a lot of try. Perfect for ranch work and intermediate riders."
  },
  {
    name: "Blondie Rose",
    year: 2020,
    sex: "Mare",
    img: "/horse2.jpg",
    desc: "Flashy palomino mare with foundation bloodlines. Athletic and willing with a bright future in performance work."
  },
  {
    name: "Rio Smokin Gun",
    year: 2017,
    sex: "Stallion",
    img: "/horse3.jpg",
    desc: "A young stallion with bone, disposition, and natural athleticism. Producing foals with great minds and big motors."
  }
];
