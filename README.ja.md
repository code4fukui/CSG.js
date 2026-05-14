# CSG.js

Constructive Solid Geometry (CSG) は、和（union）や積（intersection）などのブーリアン演算を使用して3Dソリッドを組み合わせるモデリング技術です。このライブラリは、BSPツリーを用いてメッシュに対するCSG演算をエレガントかつ簡潔に実装しており、アルゴリズムを理解しやすい形で提供することを目的としています。両方のソリッドにおいて同一平面上で重なり合うポリゴンに関するすべてのエッジケースを正しく処理します。

## デモ

[すべてのCSG演算](https://code4fukui.github.io/CSG.js/tests/)

## 機能

- BSPツリーを用いたCSG演算の実装
- 同一平面上のポリゴンに関するエッジケースの処理
- 立方体、球体、円柱などの基本形状プリミティブの提供

## 必要条件

なし。

## 使い方

```javascript
import { CSG } from "https://code4fukui.github.io/CSG.js/CSG.js";

const cube = CSG.cube();
const sphere = CSG.sphere({ radius: 1.3 });
const polygons = cube.subtract(sphere).toPolygons();
```

## ライセンス

MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
