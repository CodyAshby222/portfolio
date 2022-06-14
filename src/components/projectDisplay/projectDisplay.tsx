import {
  Typography,
  Box,
  Container,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { boxStyles } from "./projectDisplayStyles";
import { RowCenter } from "../../appStyles";
import Gallery from "react-photo-gallery";
import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Carousel, { Modal, ModalGateway } from "react-images";

const ProjectDisplay = ({ title, desc, img }) => {
  return (
    <>
      <Box sx={boxStyles}>
        <Container maxWidth="md">
          <Typography
            style={{ marginBottom: "1rem", textAlign: "center" }}
            variant="h4"
          >
            WHAT IS {title.toUpperCase()}?
          </Typography>
          <Typography sx={{ mb: 2 }}>{desc}</Typography>
          <ImageGallery img={img} />
        </Container>
      </Box>
    </>
  );
};

const ImageGallery = ({ img }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [photos, setPhotos] = useState(() => {
    return [
      {
        src: require("../../assets/images/bifrost-logo.jpg"),
        width: 4,
        height: 3,
      },
      {
        src: require("../../assets/images/bifrost-logo.jpg"),
        width: 1,
        height: 1,
      },
      {
        src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
        width: 3,
        height: 4,
      },
      {
        src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
        width: 3,
        height: 4,
      },
      {
        src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
        width: 3,
        height: 4,
      },
      {
        src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
        width: 4,
        height: 3,
      },
      {
        src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
        width: 3,
        height: 4,
      },
      {
        src: "https://source.unsplash.com/PpOHJezOalU/800x599",
        width: 4,
        height: 3,
      },
      {
        src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
        width: 4,
        height: 3,
      },
    ];
  });

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      {/* @ts-ignore */}
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              // @ts-ignore
              views={photos.map((x) => ({
                ...x,
                // @ts-ignore
                srcset: x.srcSet,
                // @ts-ignore
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default ProjectDisplay;
