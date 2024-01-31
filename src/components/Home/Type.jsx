import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Développeur web fullstack",
              "Intéressé par la cybersécurité",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 80,
          }}
        />
      )
}

export default Type