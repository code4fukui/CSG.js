# CSG.js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Constructive Solid Geometry (CSG) is a modeling technique that uses Boolean operations like union and intersection to combine 3D solids. This library implements CSG operations on meshes elegantly and concisely using BSP trees, and is meant to serve as an easily understandable implementation of the algorithm. All edge cases involving overlapping coplanar polygons in both solids are correctly handled.

## Demo

[All CSG operations](https://code4fukui.github.io/CSG.js/tests/)

## Features

- Implement CSG operations using BSP trees
- Handle edge cases with coplanar polygons
- Provide basic shape primitives like cube, sphere, and cylinder

## Requirements

None.

## Usage

```javascript
import { CSG } from "https://code4fukui.github.io/CSG.js/CSG.js";

const cube = CSG.cube();
const sphere = CSG.sphere({ radius: 1.3 });
const polygons = cube.subtract(sphere).toPolygons();
```

## License

MIT License — see [LICENSE](LICENSE).