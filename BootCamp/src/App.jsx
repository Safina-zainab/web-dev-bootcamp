import React from 'react';
import { Container, CssBaseline, Typography, Accordion, AccordionSummary, AccordionDetails, Link, Box, AppBar, Toolbar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './App.css';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Safina's CodeCraft Academy
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

function HeroSection() {
  return (
    <Box className="hero-section">
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Safina's CodeCraft Academy
      </Typography>
      <Typography variant="h6" component="p">
        Learn Web Development with our comprehensive bootcamp.
      </Typography>
    </Box>
  );
}

function CourseAccordion() {
  return (
    <Box className='accordion'>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">HTML</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>How Internet works and understanding web</li>
              <li>Introduction to HTML
                <ul>
                  <li>SEO and core web vitals</li>
                  <li>Basic structure</li>
                  <li>HTML elements</li>
                </ul>
              </li>
              <li>Images, List, and Table in HTML</li>
              <li>Forms and all form elements</li>
              <li>Semantic HTML
                <ul>
                  <li>Inline and Block Element</li>
                  <li>ID and classes</li>
                  <li>Navigation</li>
                  <li>Video and Audio in HTML</li>
                </ul>
              </li>
              <li>Creation of GitHub repository and Assignment [HTML Project]</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">CSS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Introduction to CSS
                <ul>
                  <li>Ways to include CSS in HTML</li>
                  <li>Selectors in CSS</li>
                </ul>
              </li>
              <li>CSS Box Model and Fonts and color properties</li>
              <li>CSS Sizing units, Specificity, and Display property</li>
              <li>CSS position property and float and clear</li>
              <li>CSS Flexbox</li>
              <li>CSS Grid</li>
              <li>CSS animation and transitions</li>
              <li>CSS media query and assignment</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5">JavaScript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Introduction to JavaScript
                <ul>
                  <li>How JavaScript works</li>
                  <li>How JavaScript code is executed</li>
                </ul>
              </li>
              <li>Variables in JavaScript and hoisting</li>
              <li>Data types in JavaScript</li>
              <li>Introduction to Functions
                <ul>
                  <li>How functions work in JavaScript</li>
                  <li>Scope chaining and closure</li>
                  <li>ES6 Syntax</li>
                </ul>
              </li>
              <li>Introduction to Arrays in JavaScript</li>
              <li>Array problem practice</li>
              <li>Introduction to Objects</li>
              <li>Introduction to DOM
                <ul>
                  <li>What is DOM</li>
                  <li>All DOM selectors</li>
                </ul>
              </li>
              <li>CRUD Operation using DOM</li>
              <li>Events in JavaScript Assignment</li>
              <li>Asynchronous JavaScript and Event loop</li>
              <li>Fetch API</li>
              <li>This keyword and Assignment</li>
              <li>Promises</li>
              <li>Async and await keyword</li>
              <li>Project 1, 2, 3 and Deployment</li>
              <li>Professional resume making and Best Coding Platform</li>
              <li>AI in Web Development</li>
              <li>Mock Interview</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

function Footer() {
  return (
    <Box className="footer">
      <Typography variant="body1">
        © 2024 Safina's CodeCraft Academy. Designed and developed by Safina.
      </Typography>
      <Box className="social-icons">
        <Link href="https://www.linkedin.com/in/safina-zainab-a860b0225/" target="_blank">
          <LinkedInIcon />
        </Link>
        <Link href="https://github.com/Safina-zainab" target="_blank">
          <GitHubIcon />
        </Link>
        <Link href="mailto:reachsafina@gmail.com" target="_blank">
          <EmailIcon />
        </Link>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <CourseAccordion />
      <Footer />
    </>
  );
}

export default App;