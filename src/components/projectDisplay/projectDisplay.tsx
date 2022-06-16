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
import React, { useState, useCallback, useEffect } from "react";
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
  const [photos, setPhotos] = useState<any>([]);

  useEffect(() => {
    if (img) {
      setPhotos(() => {
        let tempPhotos: any[] = [];
        img.forEach((image, i) => {
          tempPhotos.push({
            src: require(`../../assets/images/${image.src}`),
            width: image.width,
            height: image.height,
          });
        });

        return tempPhotos;
      });
    }
    console.log(img);
  }, [img]);

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
