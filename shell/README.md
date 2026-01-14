# Electron shells Simulation (shell)

This project is a **modern migration of an old Java applet** that
demonstrates the **Electron shells** of an atom.

The original Java applet (written in 2006) used `AppletViewer` and
`MouseListener`.  
This version is fully functional in modern web browsers
using **HTML5 and JavaScript**.

## Features

- Interactive simulation of the electron shells of a lithium atom
- Mouse click events trigger updates in the simulation  
- Fully client-side — no Java required  

## Purpose

The simulation illustrates how space around the lithium nucleus can be divided into spherical regions, each associated with a different probability of finding an electron and representing a specific electron shell. It serves as a didactic tool to help chemistry students develop an intuitive understanding of electron distribution.

## How to Use

1. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, Safari)  
2. Click anywhere on the canvas to get the new position of the three electrons

## Project Structure

atom/
├── index.html # Main HTML page
├── shell.js # JavaScript code implementing the simulation
├── README.md # This file
├── LICENSE # MIT License file

## License

This project is licensed under the **MIT License** – see [LICENSE](LICENSE) for details.
