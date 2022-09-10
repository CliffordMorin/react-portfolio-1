import React from 'react';
// import ReactDOM from 'react-dom';
import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import Modal from 'react-modal';
import MUIProjectCard from '../ProjectCard/MUIProjectCard';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AiFillGithub } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
// import { AiFillYoutube } from "react-icons/ai";
import {AiFillCloseCircle} from "react-icons/ai";
import america from "../../../images/america.webp";
import japan from "../../../images/japan.webp";
import styled from "styled-components";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "var(--primary-color)",
    width : "fit-content",
    border : "solid 10px var(--secondary-color)",
   
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

function ProjectModal({project}) {

    const TagButton = styled(Button)(({ theme }) => ({
		color: "var(--secondary-color)",
		backgroundColor: "white",
		disabled: true,
		":hover": {},
	}));

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
 

  <div>
     <div  onClick={openModal} >
       <MUIProjectCard
             
             cardWidth="405px"
             index = {project?.index}
             title={project?.title}
            //  description={project?.description}
            //  tech_description={project?.tech_description}
             image={project?.image}
            //  link={project?.link}
            //  linkText={project?.linkText}
             github={project?.github}
            //  tags={project?.tags}
            //  tech={project?.tech}
            //  callToAction={project?.callToAction}
            //  youtube={project?.youtube}
             english={project?.english}
             japanese={project?.japanese}
           />
        </div>
      
             
   
          <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
            <div>
            <Card
		
        id="MUI-Card"
        // slice the github to link to only have the github project name
        className={project.github.slice(project.github.lastIndexOf("/") + 1)}
        
    >
   

        <div className="card-content" style={{
            position: "relative",
        }}>
            
               
            
                {project.youtube ? (
               
  <iframe          id="card-media" width="100%" height="fit-content" src={project.youtube}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{
     hover: "none" ,

  }}></iframe>
                
                ) : (
                <CardMedia
                    component={"img"}
                    id="card-media"
                    image={project.image}
                    alt={project.title}
                    loading="lazy"
                    object-fit="contain"
                    style={{
                        //darken
                        filter: "brightness(0.85)",
                        // rounded corners
                        borderRadius: "20px",
                    }}
                />
                )}
                
         
     		<CardContent  className="card-content-text">
			
            <Typography
                variant="body2"
                color="var(--off-white)"
                id="MUI-description"
            >
                <span className="project-description">{project.description}</span>
            </Typography>
            <CardActions disableSpacing className="icon-div">
            <div>
                <IconButton aria-label="github link" >
             
                        <a href={project.github} target="_blank" rel="noreferrer">
                            
                            <AiFillGithub
                                className="MUI-icon"
                                style={{
                                    color: "white",
                                }}
                                
                           />
                             </a>
                       


                           
                      
               
                </IconButton>
                <h5 className="icon-button-text">Code</h5>
                </div>
                <div>
                <IconButton aria-label="live-demo">
               
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <RiComputerLine
                                className="MUI-icon"
                                style={{
                                    color: "white",
                                }}
                            />
                            </a>

                        
                
                </IconButton>
                <h5 className="icon-button-text">Site</h5>
                </div>
               
                        
                      
                  
                    
              
            </CardActions>
            <Typography paragraph align="left" minHeight="90px">
                <div
                    style={{
                        minHeight: "90px",
                    }}
                >
                    {project.tags.map((tag) => (
                        <TagButton
                            disabled={true}
                            key={tag}
                            style={{
                                background: "var(--primary-color)",
                                cursor: "default",
                                color: "var(--off-white)",
                                marginRight: "10px",
                                marginBottom: "10px",
                            }}
                        >
                            {tag}
                        </TagButton>
                    ))}
                </div>
                <div
                    className="flag-div"
                    style={{
                        display: "flex",
                        justifyContent: "initial",
                    }}
                >
                    {project.japanese ? (
                        <div>
                            <img
                                className="flag"
                                src={japan}
                                alt="Japan Flag"
                                style={{
                                    filter: "brightness(0.85)",
                                    marginRight: "10px",
                                    marginTop: "10px",
                                }}
                            ></img>
                        </div>
                    ) : null}
                    {project.english ? (
                        <div>
                            <img
                                className="flag"
                                src={america}
                                alt="America Flag"
                                style={{
                                    filter: "brightness(0.85)",
                                    marginRight: "10px",
                                    marginTop: "10px",
                                }}
                            ></img>
                        </div>
                    ) : null}
                </div>
            </Typography>


     
            
    
    </CardContent>
    </div>
    
    </Card>

    </div>

    <IconButton aria-label="close modal" style={{
                                position: "absolute",
                                bottom: "30px",
                               right: "15px",
                            }}>
                                <div>
                                  
                                        <AiFillCloseCircle
                                            color="var(--secondary-color)"
                                            size={50}
                                            onClick={closeModal}
                                        />
                                 
                                </div>
                            </IconButton>
    </Modal>
    </div>

   
  );
}


export default ProjectModal;