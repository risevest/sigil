const fs = require("node:fs");
const glob = require("glob");
const camelcase = require("camelcase");
const uppercamelcase = require("uppercamelcase");
const path = require("node:path");
const cheerio = require("cheerio");

const rootDir = path.join(__dirname, "..");

const assetsFiles = [
  {
    attr: (name) => `/**
         * Remix Icon: ${toTitleCase(name)}
         * @see {@link https://remixicon.com/icon/${name} Remix Icon Docs}
         */`,
    dir: path.join(rootDir, "icons", "remix"),
    id: "remix",
    prefix: "Ri",
    index: path.join(rootDir, "index.ts"),
    out: ["icon-pack", "remix"],
  },
  {
    attr: (name) => `/**
    * Lucide Icon: ${toTitleCase(name)}
    * @see {@link https://lucide.dev/icons/${name} Lucide Icon Docs}
    */`,
    dir: path.join(rootDir, "icons", "lucide"),
    id: "lucide",
    index: path.join(rootDir, "lucide.ts"),
    isStrokeIcon: true,
    out: ["icon-pack", "lucide"],
  },
  {
    attr: (name) => `/**
    * Material Icon: ${toTitleCase(name)}
    * @see {@link https://fonts.google.com/icons?selected=Material+Icons:${toSnakeCase(
      name
    )} Material Icon Docs}
    */`,
    dir: path.join(rootDir, "icons", "material"),
    id: "material",
    prefix: "Mi",
    index: path.join(rootDir, "material.ts"),
    out: ["icon-pack", "material"],
  },
  {
    attr: (name) => `/**
               * Flags by \`Deji.Zeal\`: ${toTitleCase(name)}
               * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
               */`,
    dir: path.join(rootDir, "icons", "flags"),
    id: "deji.zeal",
    index: path.join(rootDir, "flags.ts"),
    out: ["icon-pack", "flags"],
    keepColor: true,
  },
  {
    dir: path.join(rootDir, "icons", "rds"),
    id: "rise.design",
    index: path.join(rootDir, "rds.ts"),
    out: ["icon-pack", "rds"],
    keepColor: (name) => name.includes("logo"),
  },
  {
    attr: (name) => `/**
         * MingCute Icon: ${toTitleCase(name)}
         * @see {@link https://www.mingcute.com MingCute Icon Docs}
         */`,
    dir: path.join(rootDir, "icons", "mgc"),
    id: "mgc",
    prefix: "Mg",
    index: path.join(rootDir, "mgc.ts"),
    out: ["icon-pack", "mgc"],
  },
];

function isNumber(str) {
  return !Number.isNaN(Number(str));
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function toSnakeCase(str) {
  return str.toLowerCase().split("-").join("_");
}

assetsFiles.forEach(
  ({ attr, dir, id, index, prefix, isStrokeIcon, out, ...rest }) => {
    glob(`${dir}/**/*.svg`, (_, icons) => {
      fs.writeFileSync(index, "", "utf-8");
      const outDir = path.join(rootDir, ...out);

      icons.forEach(async (i) => {
        const svg = fs.readFileSync(i, "utf-8");
        const name = path.basename(i, ".svg");
        const $ = cheerio.load(svg, {
          xmlMode: true,
        });
        const fileName = path.basename(i).replace(".svg", ".tsx");
        const location = path.join(outDir, fileName);
        const keepColor =
          typeof rest.keepColor === "function"
            ? rest.keepColor(name)
            : rest.keepColor;

        // Because CSS does not exist on Native platforms
        // We need to duplicate the styles applied to the
        // SVG to its children
        const svgAttribs = $("svg")[0].attribs;
        if (!svgAttribs["viewBox"]) {
          svgAttribs["viewBox"] = "0 0 24 24";
        }
        delete svgAttribs["xmlns"];
        delete svgAttribs["xmlns:xlink"];
        const attribsOfInterest = {};
        Object.keys(svgAttribs).forEach((key) => {
          if (
            ![
              "height",
              "width",
              "viewBox",
              "fill",
              "stroke-width",
              "stroke-linecap",
              "stroke-linejoin",
            ].includes(key)
          ) {
            attribsOfInterest[key] = svgAttribs[key];
          }
        });

        $("*").each((index, el) => {
          if (id === "mgc" && el.name === "g") {
            return;
          }

          Object.keys(el.attribs).forEach((x) => {
            if (x.includes("-")) {
              $(el).attr(camelcase(x), el.attribs[x]).removeAttr(x);
            }
            if (keepColor) return;
            if (x === "fill") {
              const preserveNone =
                isStrokeIcon || (el.name === "svg" && el.attribs[x] === "none");
              $(el).attr(x, preserveNone ? "none" : "currentColor");
            }
            if (isStrokeIcon && x === "stroke") {
              $(el).attr(x, "currentColor");
            }
          });

          // For every element that is NOT svg ...
          if (el.name !== "svg") {
            Object.keys(attribsOfInterest).forEach((key) => {
              $(el).attr(camelcase(key), attribsOfInterest[key]);
            });
          }

          if (el.name === "svg") {
            $(el).attr("otherProps", "...");
          }
        });

        let cname = uppercamelcase(name);
        if (isNumber(cname[0])) {
          cname = prefix + cname;
        }

        const element = `
        import React, { memo } from 'react'
        import type { IconProps } from '../../types'
        import {
          Svg,
          Circle as _Circle,
          Ellipse,
          G,
          LinearGradient,
          RadialGradient, 
          Line,
          Mask,
          Path,
          Polygon,
          Polyline,
          Rect,
          Symbol,
          Text as _Text,
          Use,
          Defs,
          Stop,
          ClipPath,
          FeBlend,
          FeColorMatrix,
          FeComposite,
          FeFlood,
          FeGaussianBlur,
          Filter,
          FeOffset,
          Pattern,
          Image
        } from 'react-native-svg'
  
        const Icon = (props: IconProps) => {
          const { color = 'black', size = 24, ...otherProps } = props
          return (
            ${$("svg")
              .toString()
              .replace(/ class=\"[^\"]+\"/g, "")
              .replace(/xlink:href/g, "xlinkHref")
              .replace(/fill-rule/g, "fillRule")
              .replace(/ version=\"[^\"]+\"/g, "")
              .replace(/style="([^:]+):([^"]+)"/g, (_, key, value) => {
                return `style={{
                        ${camelcase(key)}: '${value}'
                      }}`;
              })
              .replace(
                keepColor
                  ? ""
                  : isStrokeIcon
                  ? /stroke="currentColor"/g
                  : /fill="currentColor"/g,
                keepColor
                  ? ""
                  : isStrokeIcon
                  ? "stroke={color}"
                  : "fill={color}"
              )
              .replace(/width="\d+"/, "")
              .replace(/height="\d+"/, "")
              .replace(
                'otherProps="..."',
                "height={size} width={size}  {...otherProps}"
              )
              .replace("<svg", "<Svg")
              .replace("</svg", "</Svg")
              .replace(/<circle/g, "<_Circle")
              .replace(/<\/circle/g, "</_Circle")
              .replace(/<clipPath/g, "<ClipPath")
              .replace(/<\/clipPath/g, "</ClipPath")
              .replace(/<ellipse/g, "<Ellipse")
              .replace(/<\/ellipse/g, "</Ellipse")
              .replace(/<g/g, "<G")
              .replace(/<\/g/g, "</G")
              .replace(/<linear-gradient/g, "<LinearGradient")
              .replace(/<\/linear-gradient/g, "</LinearGradient")
              .replace(/<mask/g, "<Mask")
              .replace(/<\/mask/g, "</Mask")
              .replace(/<radial-gradient/g, "<RadialGradient")
              .replace(/<\/radial-gradient/g, "</RadialGradient")
              .replace(/<path/g, "<Path")
              .replace(/<\/path/g, "</Path")
              .replace(/<line/g, "<Line")
              .replace(/<\/line/g, "</Line")
              .replace(/<polygon/g, "<Polygon")
              .replace(/<\/polygon/g, "</Polygon")
              .replace(/<polyline/g, "<Polyline")
              .replace(/<\/polyline/g, "</Polyline")
              .replace(/<rect/g, "<Rect")
              .replace(/<\/rect/g, "</Rect")
              .replace(/<symbol/g, "<Symbol")
              .replace(/<\/symbol/g, "</Symbol")
              .replace(/<text/g, "<_Text")
              .replace(/<\/text/g, "</_Text")
              .replace(/<use/g, "<Use")
              .replace(/<\/use/g, "</Use")
              .replace(/<pattern/g, "<Pattern")
              .replace(/<\/pattern/g, "</Pattern")
              .replace(/<image/g, "<Image")
              .replace(/<\/image/g, "</Image")
              .replace(/<defs/g, "<Defs")
              .replace(/<\/defs/g, "</Defs")
              .replace(/<stop/g, "<Stop")
              .replace(/<\/stop/g, "</Stop")
              .replace(/px/g, "")
              .replace(/<feBlend/g, "<FeBlend")
              .replace(/<\/feBlend/g, "</FeBlend")
              .replace(/<feColorMatrix/g, "<FeColorMatrix")
              .replace(/<\/feColorMatrix/g, "</FeColorMatrix")
              .replace(/<feComposite/g, "<FeComposite")
              .replace(/<\/feComposite/g, "</FeComposite")
              .replace(/<feFlood/g, "<FeFlood")
              .replace(/<\/feFlood/g, "</FeFlood")
              .replace(/<feGaussianBlur/g, "<FeGaussianBlur")
              .replace(/<\/feGaussianBlur/g, "</FeGaussianBlur")
              .replace(/<filter/g, "<Filter")
              .replace(/<\/filter/g, "</Filter")
              .replace(/colorInterpolationFilters=\"[^\"]+\"/g, "")
              .replace(/<feOffset/g, "<FeOffset")
              .replace(/<\/feOffset/g, "</FeOffset")}
            )
          }
  
        Icon.displayName = '${cname}'
  
        ${attr?.(name) ?? ""}
        export const ${cname} = memo(Icon)
      `;

        fs.writeFileSync(location, element, "utf-8");

        const exportString = `export { ${cname} } from './${out.join(
          "/"
        )}/${name}'\n`;

        fs.appendFileSync(index, exportString, "utf-8");
      });

      // run biome:
      require("node:child_process").execSync(
        `bunx biome check --write ${outDir} ${index}`,
        {
          stdio: "inherit",
        }
      );
    });
  }
);
