import { type Config, transform } from "@svgr/core";
import path from "path";
import uppercamelcase from "uppercamelcase";

type AssetFile = {
  id: string;
  attr?: (name: string) => string;
  prefix?: string;
  index?: string;
  preProcess?: (content: { svg: string; name: string; native: boolean }) => string;
};

const fillRewriterWeb = new HTMLRewriter().on("*[fill]:not([fill='none'])", {
  element(element) {
    element.setAttribute("fill", "currentColor");
  },
});

const fillRewriterNative = new HTMLRewriter().on("*[fill]:not([fill='none'])", {
  element(element) {
    element.setAttribute("fill", "{color}");
  },
});

const getFillRewriter = (native: boolean) => (native ? fillRewriterNative : fillRewriterWeb);

const assetsFiles: AssetFile[] = [
  {
    attr: (name: string) => `/**
* Remix Icon: ${toTitleCase(name)}
* @see {@link https://remixicon.com/icon/${name} Remix Icon Docs}
*/`,
    id: "remix",
    prefix: "Ri",
    index: "index.ts",
    preProcess({ svg, native }) {
      return getFillRewriter(native).transform(svg);
    },
  },
  {
    attr: (name: string) => `/**
* Flags by \`Deji.Zeal\`: ${toTitleCase(name)}
* @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
*/`,
    id: "flags",
  },
  {
    id: "rds",
    preProcess: ({ svg, name, native }) => {
      if (name.includes("logo")) {
        return svg;
      }
      return getFillRewriter(native).transform(svg);
    },
  },
  {
    attr: (name: string) => `/**
* MingCute Icon: ${toTitleCase(name)}
* @see {@link https://www.mingcute.com MingCute Icon Docs}
*/`,
    id: "mgc",
    prefix: "Mg",
    preProcess({ svg, native }) {
      return getFillRewriter(native).transform(svg);
    },
  },
  {
    attr: (name: string) => `/**
* Lucide Icon: ${toTitleCase(name)}
* @see {@link https://lucide.dev/icons/${name} Lucide Icon Docs}
*/`,
    id: "lucide",
    prefix: "Lc",
    preProcess({ svg, native }) {
      // Get all elements with stroke attribute and change it to {color} or currentColor
      const process = new HTMLRewriter().on("*[stroke]", {
        element(element) {
          element.setAttribute("stroke", native ? "{color}" : "currentColor");
        },
      });

      return process.transform(svg);
    },
  },
];

const glob = new Bun.Glob("**/*.svg");

const options = {
  replaceAttrValues: {
    "{color}": "{color}",
  },
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
  icon: true,
  exportType: "named",
  typescript: true,
  index: true,
  jsxRuntime: "automatic",
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      {
        name: "removeXMLNS",
      },
      {
        name: "removeXlink",
      },
      {
        name: "removeDimensions",
      },
    ],
  },
} satisfies Config;

async function generate(platform: "sigil" | "sicily", file: AssetFile) {
  const { attr, prefix, index, preProcess, id } = file;

  const isNative = platform === "sigil";

  const exportFile = index || `${id}.ts`;

  const fileRef = Bun.file(`./packages/${platform}/${exportFile}`);
  const writer = fileRef.writer();

  for await (const svgFile of glob.scan(`./icons/${id}/`)) {
    const name = path.basename(svgFile, ".svg");

    let componentName = uppercamelcase(name);
    if (!isNaN(componentName.charAt(0))) {
      componentName = `${prefix ?? toTitleCase(id)}${componentName}`;
    }
    writer.write(`export { ${componentName} } from './icon-pack/${id}/${name}';\n`);

    let svgCode = await Bun.file(`./icons/${id}/${svgFile}`).text();
    if (preProcess) {
      svgCode = preProcess({
        svg: svgCode,
        name,
        native: isNative,
      });
    }

    const transformation = await transform(
      svgCode,
      {
        ...options,
        namedExport: componentName as string,
        svgProps: isNative
          ? {
              height: "{size}",
              width: "{size}",
            }
          : undefined,
        native: isNative,
        template: (variables, { tpl }) => {
          return tpl`import {memo} from 'react'
${variables.imports}
import type { IconProps } from '../../types'

${variables.interfaces}

const Icon = memo((_props: IconProps) => {
${isNative ? `  const { color = "black", size = 24, ...props } = _props` : `  const props = _props`}
  return ${variables.jsx};
});

Icon.displayName = "${componentName}";

${attr ? attr(name) : ""}
export const ${componentName} = Icon;
  `;
        },
      },
      { componentName }
    );

    Bun.file(`./packages/${platform}/icon-pack/${id}/${name}.tsx`).write(transformation);
  }

  writer.end();
}

for (const file of assetsFiles) {
  generate("sigil", file).catch(console.error);
  generate("sicily", file).catch(console.error);
}

function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
