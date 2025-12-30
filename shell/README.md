# Electron shells Simulation (shell)

This project is a **modern migration of an old Java applet** that
demonstrates the **Electron shells** of an atom.

The original Java applet (written in 2007) used `AppletViewer` and
`MouseListener`.  
This version is fully functional in modern web browsers
using **HTML5 and JavaScript**.

## Features

- Interactive simulation of the electon shells of a lithium atom
- Randomized visual elements to illustrate bond behavior  
- Mouse click events trigger updates in the simulation  
- Fully client-side — no Java required  

## Purpose

The simulation shows how different spherical regions can be defined around the lithium nucleus, with each region having a different probability of being populated and representing a different electron shell.
It is intended as a didactical tool for chemistry students to intuitively
understand electron distribution.

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
