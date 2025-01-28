import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1641)">
        <Path
          d="M0 20.0001C0 22.4466 0.440078 24.7901 1.24406 26.9568L20 28.6957L38.7559 26.9567C39.56 24.7901 40 22.4466 40 20.0001C40 17.5872 39.5726 15.2741 38.7895 13.1325L20 11.3044L1.21047 13.1326C0.427422 15.2741 0 17.5872 0 20.0001H0Z"
          fill={color}
        />
        <Path
          d="M20.0002 40C28.5995 40 35.9303 34.5725 38.7562 26.9565H1.24414C4.07 34.5725 11.4009 40 20.0002 40Z"
          fill={color}
        />
        <Path
          d="M20.0002 6.10352e-05C11.4009 6.10352e-05 4.07 5.42756 1.24414 13.0436H38.7562C35.9303 5.42756 28.5995 6.10352e-05 20.0002 6.10352e-05V6.10352e-05Z"
          fill={color}
        />
        <Path
          d="M19.9998 29.5653C25.2825 29.5653 29.565 25.2828 29.565 20C29.565 14.7173 25.2825 10.4348 19.9998 10.4348C14.7171 10.4348 10.4346 14.7173 10.4346 20C10.4346 25.2828 14.7171 29.5653 19.9998 29.5653Z"
          fill={color}
        />
        <Path
          d="M19.998 12.593L21.7247 17.9072H27.3214L22.7918 21.1916L24.5321 26.5216L19.998 23.2215L15.4708 26.5155L17.2041 21.1916L12.6787 17.9072H18.2713L19.998 12.593Z"
          fill={color}
        />
        <Path
          d="M26.8846 21.3226L21.4068 19.5426L24.7922 14.8832L23.3853 13.8609L19.9998 18.5206L16.6145 13.861L15.2075 14.8832L18.5928 19.5429L13.1152 21.3225L13.6526 22.9767L19.1304 21.1969V26.9564H20.8695V21.1968L26.347 22.9767L26.8846 21.3226Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1641">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Ethiopia'

/**
 * Flags by `Deji.Zeal`: Ethiopia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Ethiopia = memo(Icon)
