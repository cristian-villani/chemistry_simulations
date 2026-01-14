# Dipole interaction Simulation (dipole)

This project is a **modern migration of an old Java applet** that
demonstrates the concept of the **polar bond (polare Bindung)** in chemistry.  

The original Java applet (written in 2007) used `AppletViewer` and
`MouseListener`.  
This version is fully functional in modern web browsers
using **HTML5 and JavaScript**.

## Features

- Interactive simulation of polar bonds  
- Randomized visual elements to illustrate bond behavior  
- Mouse click events trigger updates in the simulation  
- Fully client-side — no Java required  

## Purpose

This project demonstrates the concept of polar chemical bonds using an interactive simulation.
The simulation shows two molecules containing atoms with different
electronegativities (e.g., hydrogen and fluorine) and visualizes how
electrons are more likely to be found around the more electronegative atom.
It is intended as a didactical tool for chemistry students to intuitively understand electron distribution and molecular polarity.

## How to Use

1. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, Safari)  
2. Click anywhere on the canvas to interact with the simulation  
3. Observe the asymmetical electron density and the formation of the intermolecular interaction

## Project Structure

```
dipole/
├── index.html # Main HTML page
├── dipole.js # JavaScript code implementing the simulation
├── README.md # This file
├── LICENSE # MIT License file
```

## License

This project is licensed under the **MIT License** – see [LICENSE](LICENSE) for details.
