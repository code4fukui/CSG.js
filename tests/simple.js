import { CSG } from "../CSG.js";

const cube = CSG.cube();
const sphere = CSG.sphere({ radius: 1.3 });
const polygons = cube.subtract(sphere).toPolygons();
console.log(polygons);


