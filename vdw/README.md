# Van der Waals Interaction Simulation (vdw)

This project is a **modern migration of an old Java applet** that
demonstrates the concept of the **polar bond (polare Bindung)** in chemistry.  

The original Java applet (written in 2007) used `AppletViewer` and
`MouseListener`.  
This version is fully functional in modern web browsers
using **HTML5 and JavaScript**.

## Features

- Interactive simulation of van der Waals interaction
- Randomized visual elements to illustrate bond behavior  
- Mouse click events trigger updates in the simulation  
- Fully client-side — no Java required  

## Purpose

This simulation illustrates the van der Waals interaction between
non polar molecules

- Red dots represent electrons  
- The model explains the molecular attraction as a result of the correlation
- Intended as a didactic tool for students learning chemistry

## How to Use

1. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, Safari)  
2. Click anywhere on the canvas to interact with the simulation  
3. Observe changes in the position of the red dots, representing the concept

## Project Structure

```
vdw/
├── index.html # Main HTML page
├── vdw.js # JavaScript code implementing the simulation
├── README.md # This file
├── LICENSE # MIT License file
```

## License

This project is licensed under the **MIT License** – see [LICENSE](LICENSE) for details.
