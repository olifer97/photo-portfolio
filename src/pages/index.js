import * as React from "react"
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./page.css"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

const galleryStyles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  alignContent: "space-around"
}

const imgStyles = {
  flex: "1 1 30%",
  margin: 10,
  minWidth: 0,
  maxWidth: "100%",
  height: "auto",
}

const photos = [
  {
    text: "Rosas",
    key: "1KgkOz6igYYHBm2z4jNBxJGq6fjGmV4Ne",
    src: "https://drive.google.com/thumbnail?id=1KgkOz6igYYHBm2z4jNBxJGq6fjGmV4Ne&sz=w1200",
    description:
      "Nikon FM2",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Rosas 2",
    key: "1OCSmQWsgDzXuN_cXA-Gvd2X9CNBtBTfR",
    src: "https://drive.google.com/thumbnail?id=1OCSmQWsgDzXuN_cXA-Gvd2X9CNBtBTfR&sz=w1200",
    description: "Nikon FM2",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Rosas 3",
    key: "1-R_PQ5HD1vE9q_Jx9iqJTiYgS1quDFdk",
    src: "https://drive.google.com/thumbnail?id=1-R_PQ5HD1vE9q_Jx9iqJTiYgS1quDFdk&sz=w1200",
    description: "Nikon FM2",
    color: "#E95800",
    width: 460,
    originalWidth: 1200,
  },
  {
    text: "Summer vibes",
    key: "1yDqTNblnfYXnuYgPEq_F9HXzhKMoAm42",
    src: "https://drive.google.com/thumbnail?id=1yDqTNblnfYXnuYgPEq_F9HXzhKMoAm42&sz=w1200",
    description: "Nikon FM2",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Palmeras",
    key: "1uEgi8wz-V1tMzKjuO2_SzP-4z1CQO7i5",
    src: "https://drive.google.com/thumbnail?id=1uEgi8wz-V1tMzKjuO2_SzP-4z1CQO7i5&sz=w1200",
    description: "Nikon FM2",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Escaleras",
    key: "1-s82ohTuBMrmvbVHkR_P9u44kW9j_qIl",
    src: "https://drive.google.com/thumbnail?id=1-s82ohTuBMrmvbVHkR_P9u44kW9j_qIl&sz=w1200",
    description: "Nikon FM2",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Purple 2",
    key: "13Dpem2HPsNu_UBPsMpCsxcqOSuyRLl_W",
    src: "https://drive.google.com/thumbnail?id=13Dpem2HPsNu_UBPsMpCsxcqOSuyRLl_W&sz=w1200",
    description: "Nikon FM2",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Rincon",
    key: "1-Zti7lLKnswVkcSmDXlt7ZG7wDCwP3Nt",
    src: "https://drive.google.com/thumbnail?id=1-Zti7lLKnswVkcSmDXlt7ZG7wDCwP3Nt&sz=w1200",
    description: "Voigtlander Bessa R",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Rincon 2",
    key: "1-aCtFAaxOryQwLUAyWakrcttEpV5tjzf",
    src: "https://drive.google.com/thumbnail?id=1-aCtFAaxOryQwLUAyWakrcttEpV5tjzf&sz=w1200",
    description: "Voigtlander Bessa R",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Rincon 3",
    key: "1-aYLy72CzvM149H1p_JuZSw0tL1Ie8_k",
    src: "https://drive.google.com/thumbnail?id=1-aYLy72CzvM149H1p_JuZSw0tL1Ie8_k&sz=w1200",
    description: "Voigtlander Bessa R",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Paseo 1",
    key: "1-gAzBZmRoW2mVOXfTigxyPmDaemCNkBM",
    src: "https://drive.google.com/thumbnail?id=1-gAzBZmRoW2mVOXfTigxyPmDaemCNkBM&sz=w1200",
    description: "Voigtlander Bessa R",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Paseo 2",
    key: "13yuQ6HPqikBEXlznSn3q8SekjkAm80rH",
    src: "https://drive.google.com/thumbnail?id=13yuQ6HPqikBEXlznSn3q8SekjkAm80rH&sz=w1200",
    description: "Voigtlander Bessa R",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Blanco y negro 1",
    key: "13Op17xCWn8DRHywsND20tEqHXoaMmk4i",
    src: "https://drive.google.com/thumbnail?id=13Op17xCWn8DRHywsND20tEqHXoaMmk4i&sz=w1200",
    description: "Voigtlander Bessa R",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Night 1",
    key: "13EqC-t-B8jUFQ2oytHbVXNeDHw76Ut53",
    src: "https://drive.google.com/thumbnail?id=13EqC-t-B8jUFQ2oytHbVXNeDHw76Ut53&sz=w1200",
    description: "Voigtlander Bessa R",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Night 2",
    key: "13ez6zQpLfJ6B4zF5Hu-4AL_B1kAIv69V",
    src: "https://drive.google.com/thumbnail?id=13ez6zQpLfJ6B4zF5Hu-4AL_B1kAIv69V&sz=w1200",
    description: "Voigtlander Bessa R",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Night 3",
    key: "13bJHQMb7JAGis7NZ2QVxXHICKkSTdkFt",
    src: "https://drive.google.com/thumbnail?id=13bJHQMb7JAGis7NZ2QVxXHICKkSTdkFt&sz=w1200",
    description: "Voigtlander Bessa R",
    color: "#E95800",
    originalWidth: 1200,
  },
  {
    text: "Purple 1",
    key: "13jAsuqmRE5Q-wfJyU_NPS0R3S9741O42",
    src: "https://drive.google.com/thumbnail?id=13jAsuqmRE5Q-wfJyU_NPS0R3S9741O42&sz=w1200",
    description: "Nikon FM2",
    color: "#E95800",
    originalWidth: 1200,
  },
]

const slides = photos.map(({ src, originalWidth }) => ({
  src: src,
  width: originalWidth,
}));


const IndexPage = () => {
  const [index, setIndex] = useState(-1);
  const handleClick = (index, item) => {
    console.log(index)
    return setIndex(index)
  };

  return (
    <main className="page">
      <h1 style={headingStyles}>
        OliFerFilm Portfolio
        <br />
        <span style={headingAccentStyles}>— through the lens</span>
      </h1>
      <div style={galleryStyles}>
        {photos.map((p, i) => (
          <img
            key={i}
            src={p.src}
            //width={p.width}
            style={imgStyles}
            onClick={() => handleClick(i)}
            onTouchStart={() => handleClick(i)}/>
        ))}
      </div>
      
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
      
      <ul>
        {/* {links.map(link => (
          <li key={link.id} display="flex">
             <img src={`static/rosas1.jpg`} width={1000}/>
          </li>
        ))} */}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
