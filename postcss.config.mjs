import { Container } from "lucide-react";

const config = {
  plugins: ["@tailwindcss/postcss"],
  theme:{
    Container:{
      center: true,
      padding:"15px"
    },
    screens:{
      sm:"640px",
      md:"768px",
      lg:"1024px",
      xl:"1310px",
    },
    fontFamily:{

    },
    extends:{
      colors:{
        primary:"#0f1017",
        accent:{
          DEFAULT:"#e14817",
          hover:"#cb4419",
        },
        secondary:{
          DEFAULT:"#1b1c23",
          hover:"#1f212b",
        },
        tertiary:{
          DEFAULT:"#26272e",
          hover:"#24252c",
        },
        grey:"#737373",
      },
      backgroundImage:{
        hero_bg1:"url(/assets/hero/hero-bg1.png)",
        hero_bg2:"url(/assets/hero/hero-bg2.png)",
        pattern:"url(/assets/pattern_bg.png)",
      },

    }
  }
};

export default config;

