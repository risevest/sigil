import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1812)">
        <Path
          d="M40 19.9999C40 17.5535 39.5599 15.21 38.756 13.0434L20 12.1738L1.24398 13.0434C0.440078 15.21 0 17.5535 0 19.9999C0 22.4463 0.440078 24.7898 1.24398 26.9564L20 27.826L38.756 26.9565C39.5599 24.7898 40 22.4463 40 19.9999Z"
          fill={color}
        />
        <Path
          d="M20.0002 40.0001C28.5994 40.0001 35.9303 34.5726 38.7562 26.9565H1.24414C4.07 34.5726 11.4009 40.0001 20.0002 40.0001Z"
          fill={color}
        />
        <Path
          d="M1.24414 13.0435H38.7562C35.9303 5.4275 28.5994 0 20.0002 0C11.4009 0 4.07 5.4275 1.24414 13.0435V13.0435Z"
          fill={color}
        />
        <Path
          d="M25.2166 13.9132H21.7383L22.318 9.56531L24.6368 7.82617L26.9556 9.56531V13.0436L25.2166 13.9132Z"
          fill={color}
        />
        <Path
          d="M14.782 13.9132H18.2603L17.6805 9.56531L15.3617 7.82617L13.043 9.56531V13.0436L14.782 13.9132Z"
          fill={color}
        />
        <Path
          d="M22.3185 13.9132H17.6807V9.56531L19.9996 7.82617L22.3185 9.56531V13.9132Z"
          fill={color}
        />
        <Path
          d="M13.043 13.0437V22.6089C13.043 24.8864 14.1431 26.9119 15.84 28.1817L17.0574 27.8771L18.5937 29.4225C19.048 29.5161 19.518 29.5654 19.9995 29.5654C20.4784 29.5654 20.9462 29.5167 21.398 29.4241L23.1517 27.9639L24.1589 28.1789C25.8551 26.9092 26.956 24.8858 26.956 22.6089V13.0437H13.043Z"
          fill={color}
        />
        <Path d="M13.043 13.0435H15.8255V15.826H13.043V13.0435Z" fill={color} />
        <Path d="M18.6084 13.0435H21.391V15.826H18.6084V13.0435Z" fill={color} />
        <Path d="M24.1729 13.0435H26.9554V15.826H24.1729V13.0435Z" fill={color} />
        <Path d="M15.8252 15.8259H18.6078V18.6085H15.8252V15.8259Z" fill={color} />
        <Path d="M21.3906 15.8259H24.1732V18.6085H21.3906V15.8259Z" fill={color} />
        <Path d="M13.043 18.6077H15.8255V21.3902H13.043V18.6077Z" fill={color} />
        <Path d="M15.8252 21.3904H18.6078V24.173H15.8252V21.3904Z" fill={color} />
        <Path d="M18.6084 18.6077H21.391V21.3902H18.6084V18.6077Z" fill={color} />
        <Path d="M24.1729 18.6077H26.9554V21.3902H24.1729V18.6077Z" fill={color} />
        <Path d="M21.3906 21.3904H24.1732V24.173H21.3906V21.3904Z" fill={color} />
        <Path d="M18.6084 24.1731H21.391V26.9557H18.6084V24.1731Z" fill={color} />
        <Path
          d="M15.8257 24.1731H13.2227C13.4614 25.2075 13.9308 26.154 14.5744 26.9557H15.8257V24.1731Z"
          fill={color}
        />
        <Path
          d="M24.1729 26.9559H25.4241C26.0678 26.1542 26.5371 25.2076 26.7758 24.1733H24.1729V26.9559Z"
          fill={color}
        />
        <Path
          d="M15.8252 26.9558V28.1699C16.6345 28.7789 17.5803 29.2156 18.6078 29.4251V26.9558H15.8252Z"
          fill={color}
        />
        <Path
          d="M21.3906 26.9558V29.4251C22.4182 29.2157 23.3639 28.7789 24.1732 28.1699V26.9558H21.3906Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1812">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Croatia'

/**
 * Flags by Deji.Zeal: Croatia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Croatia = memo(Icon)
