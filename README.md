# csg.js

![](https://code4fukui.github.io/CSG.js/tests/images.png)

Constructive Solid Geometry (CSG) is a modeling technique that uses Boolean operations like union and intersection to combine 3D solids. This library implements CSG operations on meshes elegantly and concisely using BSP trees, and is meant to serve as an easily understandable implementation of the algorithm. All edge cases involving overlapping coplanar polygons in both solids are correctly handled.

Example usage:

    import { CSG } from "https://code4fukui.github.io/CSG.js/CSG.js";

    const cube = CSG.cube();
    const sphere = CSG.sphere({ radius: 1.3 });
    const polygons = cube.subtract(sphere).toPolygons();

# Documentation

[Detailed documentation](https://code4fukui.github.io/CSG.js/tests/) can be automatically generated using [Docco](https://github.com/jashkenas/docco/).

# Demos

* [All CSG operations](https://code4fukui.github.io/CSG.js/tests/)
* [Coplanar test cases](https://code4fukui.github.io/CSG.js/tests/coplanar.html)
* [More test cases](https://code4fukui.github.io/CSG.js/tests/more.html)

# Implementation Details

All CSG operations are implemented in terms of two functions, `clipTo()` and `invert()`, which remove parts of a BSP tree inside another BSP tree and swap solid and empty space, respectively. To find the union of `a` and `b`, we want to remove everything in `a` inside `b` and everything in `b` inside `a`, then combine polygons from `a` and `b` into one solid:

    a.clipTo(b);
    b.clipTo(a);
    a.build(b.allPolygons());

The only tricky part is handling overlapping coplanar polygons in both trees. The code above keeps both copies, but we need to keep them in one tree and remove them in the other tree. To remove them from `b` we can clip the inverse of `b` against `a`. The code for union now looks like this:

    a.clipTo(b);
    b.clipTo(a);
    b.invert();
    b.clipTo(a);
    b.invert();
    a.build(b.allPolygons());

Subtraction and intersection naturally follow from set operations. If union is `A | B`, subtraction is `A - B = ~(~A | B)` and intersection is `A & B = ~(~A | ~B)` where `~` is the complement operator.

# License

Copyright (c) 2011 Evan Wallace (http://madebyevan.com/), under the [MIT license](http://www.opensource.org/licenses/mit-license.php).
