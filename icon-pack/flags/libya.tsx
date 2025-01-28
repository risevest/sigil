import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1195)">
        <Path
          d="M1.98453 11.3043C0.713125 13.9337 0 16.8835 0 20C0 23.1164 0.713125 26.0662 1.98453 28.6956L20 30.4347L38.0155 28.6956C39.2869 26.0662 40 23.1164 40 20C40 16.8835 39.2869 13.9337 38.0155 11.3043L20 9.56519L1.98453 11.3043Z"
          fill={color}
        />
        <Path
          d="M1.98535 28.6956C5.2202 35.3855 12.0709 39.9999 20.0001 39.9999C27.9293 39.9999 34.78 35.3855 38.0149 28.6956H1.98535Z"
          fill={color}
        />
        <Path
          d="M1.98535 11.3044H38.0149C34.78 4.61445 27.9293 0 20.0001 0C12.0709 0 5.2202 4.61445 1.98535 11.3044Z"
          fill={color}
        />
        <Path
          d="M24.6546 16.3428L26.2955 18.6041L28.9531 17.7424L27.3095 20.0018L28.9503 22.263L26.2937 21.398L24.6501 23.6574L24.6518 20.8636L21.9951 19.9986L24.6528 19.1368L24.6546 16.3428Z"
          fill={color}
        />
        <Path
          d="M20.1763 25.6522C17.0547 25.6522 14.5241 23.1216 14.5241 20C14.5241 16.8785 17.0547 14.3478 20.1763 14.3478C21.1496 14.3478 22.0654 14.5939 22.865 15.0272C21.6106 13.8006 19.8953 13.0435 18.0024 13.0435C14.1604 13.0435 11.0459 16.158 11.0459 19.9999C11.0459 23.8419 14.1604 26.9564 18.0024 26.9564C19.8954 26.9564 21.6107 26.1993 22.865 24.9727C22.0654 25.4061 21.1496 25.6522 20.1763 25.6522Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1195">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Libya'

/**
 * Flags by Deji.Zeal: Libya
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Libya = memo(Icon)
