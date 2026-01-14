# Magnesium Atom Simulation (magnesium)

This project is a **modern migration of an old Java applet** that
shows what one would see if one could look into a  **Magnesium Atom**.

The original Java applet (written in 2006) used `AppletViewer` and
`MouseListener`.  
This version is fully functional in modern web browsers
using **HTML5 and JavaScript**.

## Features

- Interactive simulation of the electron movement in a magnesium atom
- Mouse click events trigger updates in the simulation  
- Fully client-side — no Java required  

## Purpose

The simulation uses different colors to illustrate the behavior of electrons in different shells. Each color represents electrons with a specific speed and an average distance from the center of the atom. The simulation is intended as a didactic tool to help chemistry students intuitively understand electron distribution.


## How to Use

1. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, Safari)  
2. Click anywhere on the canvas to get the new position of the 12 electrons

## Project Structure

atom/
├── index.html # Main HTML page
├── magnesium.js # JavaScript code implementing the simulation
├── README.md # This file
├── LICENSE # MIT License file

## License

This project is licensed under the **MIT License** – see [LICENSE](LICENSE) for details.
