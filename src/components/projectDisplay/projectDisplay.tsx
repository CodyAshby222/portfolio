import { Typography, Box, Container } from "@mui/material";
import { boxStyles, ProjectSection } from "./projectDisplayStyles";
import Gallery from "react-photo-gallery";
import React, { useState, useCallback, useEffect } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectDisplay = ({ title, desc, img }) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 300,
      easing: "ease-in-sine",
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Box sx={boxStyles}>
        <Container data-aos="fade-up" maxWidth="md">
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
        img.forEach((image: any) => {
          tempPhotos.push({
            src: require(`../../assets/images/${image.src}`),
            width: image.width,
            height: image.height,
          });
        });

        return tempPhotos;
      });
    }
  }, [img]);

  const openLightbox = useCallback((e, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <ProjectSection>
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
    </ProjectSection>
  );
};

export default ProjectDisplay;
