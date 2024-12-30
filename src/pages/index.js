import * as React from "react"
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { RowsPhotoAlbum } from "react-photo-album";

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
  flexWrap: "wrap"
}

const imgStyles = {
  margin: 10,
  maxWidth: "100%",
  height: "auto"
}

const photos = [
  {
    text: "Rosas",
    key: "1KgkOz6igYYHBm2z4jNBxJGq6fjGmV4Ne",
    src: "https://drive.google.com/thumbnail?id=1KgkOz6igYYHBm2z4jNBxJGq6fjGmV4Ne&sz=w1200",
    description:
      "Nikon FM2",
    color: "#E95800",
    width: 600,
  },
  {
    text: "Rosas 2",
    key: "1OCSmQWsgDzXuN_cXA-Gvd2X9CNBtBTfR",
    src: "https://drive.google.com/thumbnail?id=1OCSmQWsgDzXuN_cXA-Gvd2X9CNBtBTfR&sz=w1200",
    description: "Nikon FM2",
    color: "#E95800",
    width: 600,
  },
  {
    text: "Rosas 3",
    key: "1-R_PQ5HD1vE9q_Jx9iqJTiYgS1quDFdk",
    src: "https://drive.google.com/thumbnail?id=1-R_PQ5HD1vE9q_Jx9iqJTiYgS1quDFdk&sz=w1200",
    description: "Nikon FM2",
    color: "#E95800",
    width: 600,
  },
  {
    text: "Summer vibes",
    key: "1yDqTNblnfYXnuYgPEq_F9HXzhKMoAm42",
    src: "https://drive.google.com/thumbnail?id=1yDqTNblnfYXnuYgPEq_F9HXzhKMoAm42&sz=w1200",
    description: "Nikon FM2",
    color: "#E95800",
    width: 600,
  },
  {
    text: "Palmeras",
    key: "1uEgi8wz-V1tMzKjuO2_SzP-4z1CQO7i5",
    src: "https://drive.google.com/thumbnail?id=1uEgi8wz-V1tMzKjuO2_SzP-4z1CQO7i5&sz=w1200",
    description: "Nikon FM2",
    color: "#E95800",
    width: 600,
  },

  {
    text: "Rincon",
    key: "1-Zti7lLKnswVkcSmDXlt7ZG7wDCwP3Nt",
    src: "https://drive.google.com/thumbnail?id=1-Zti7lLKnswVkcSmDXlt7ZG7wDCwP3Nt&sz=w1200",
    description: "Voigtlander Bessa R",
    color: "#E95800",
    width: 600,
  },
  {
    text: "Rincon 2",
    key: "1-aCtFAaxOryQwLUAyWakrcttEpV5tjzf",
    src: "https://drive.google.com/thumbnail?id=1-aCtFAaxOryQwLUAyWakrcttEpV5tjzf&sz=w1200",
    description: "Voigtlander Bessa R",
    color: "#E95800",
    width: 600,
  },
  {
    text: "Rincon 3",
    key: "1-aYLy72CzvM149H1p_JuZSw0tL1Ie8_k",
    src: "https://drive.google.com/thumbnail?id=1-aYLy72CzvM149H1p_JuZSw0tL1Ie8_k&sz=w1200",
    description: "Voigtlander Bessa R",
    color: "#E95800",
    width: 600,
  },
]

const slides = photos.map(({ src, width, height }) => ({
  src: src,
  width,
  height,
}));


const IndexPage = () => {
  const [index, setIndex] = useState(-1);
  const handleClick = (index, item) => {
    console.log(index)
    return setIndex(index)
  };

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        OliFerFilm Portfolio
        <br />
        <span style={headingAccentStyles}>— through the lens</span>
      </h1>
      <div style={galleryStyles}>
        {photos.map(p => (
          <img key={p.key} src={p.src} width={p.width} style={imgStyles} onClick={handleClick}/>
        ))}
      </div>
      {/* {<Gallery
        images={photos}
        margin={10}
        rowHeight={400}
        onClick={handleClick}
        enableImageSelection={false}/>} */}
      {/* <RowsPhotoAlbum 
        photos={photos}
        spacing={10}
        targetRowHeight={150}
        onClick={handleClick}
        componentsProps={{ imageProps: { style: { objectFit: "cover" } } }}
        rowConstraints={{ singleRowMaxHeight: 200 }}/> */}
      
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
