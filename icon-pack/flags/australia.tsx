import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2143)">
        <Path
          d="M40 20.0001C40 31.0457 31.0456 40.0001 20 40.0001C8.95438 40.0001 0 31.0457 0 20.0001C0 20.0048 20 0.0023877 20 0.00012207C31.0456 0.00012207 40 8.9545 40 20.0001Z"
          fill={color}
        />
        <Path
          d="M19.9996 0.00012207C19.9985 0.00012207 19.9972 0.000204191 19.9961 0.000204191L19.9996 0.00012207Z"
          fill={color}
        />
        <Path
          d="M19.9463 20H19.9998C19.9998 19.9819 19.9998 19.9646 19.9998 19.9465C19.982 19.9644 19.9642 19.9822 19.9463 20Z"
          fill={color}
        />
        <Path
          d="M20 10.435C20 6.91587 20 4.60985 20 0.000244141H19.9966C8.9525 0.00204102 0 8.95556 0 20.0002H10.4348V14.1242L16.3107 20.0002H19.9466C19.9645 19.9824 19.9823 19.9645 20.0001 19.9466C20.0001 18.5992 20.0001 17.397 20.0001 16.311L14.1241 10.435H20Z"
          fill={color}
        />
        <Path
          d="M10.1181 2.60876C6.99004 4.38994 4.38957 6.99041 2.6084 10.1185V20.0001H7.82582V7.82627V7.82619H19.9997C19.9997 6.18064 19.9997 4.61298 19.9997 2.60876H10.1181Z"
          fill={color}
        />
        <Path
          d="M19.9997 17.5407L12.894 10.4351H10.4346C10.4346 10.435 10.4346 10.4351 10.4346 10.4351L19.9996 20.0002H19.9997C19.9997 20.0002 19.9997 18.3045 19.9997 17.5407Z"
          fill={color}
        />
        <Path
          d="M12.0621 23.4783L13.1598 25.7734L15.6385 25.2005L14.5285 27.4898L16.5218 29.0705L14.04 29.6298L14.0469 32.1739L12.0621 30.5823L10.0775 32.1739L10.0844 29.6298L7.60254 29.0705L9.5959 27.4898L8.48574 25.2005L10.9646 25.7734L12.0621 23.4783Z"
          fill={color}
        />
        <Path
          d="M29.9436 27.8262L30.4925 28.9738L31.7318 28.6873L31.1768 29.8319L32.1735 30.6223L30.9325 30.902L30.936 32.174L29.9436 31.3781L28.9513 32.174L28.9547 30.902L27.7139 30.6223L28.7105 29.8319L28.1555 28.6873L29.3948 28.9738L29.9436 27.8262Z"
          fill={color}
        />
        <Path
          d="M24.8382 15.6522L25.387 16.7999L26.6264 16.5133L26.0714 17.6579L27.068 18.4483L25.8272 18.728L25.8305 20L24.8382 19.2042L23.8459 20L23.8493 18.728L22.6084 18.4483L23.605 17.6579L23.05 16.5133L24.2894 16.7999L24.8382 15.6522Z"
          fill={color}
        />
        <Path
          d="M29.9436 8.69568L30.4925 9.84333L31.7318 9.55685L31.1768 10.7015L32.1734 11.4918L30.9325 11.7715L30.936 13.0436L29.9436 12.2477L28.9513 13.0436L28.9547 11.7715L27.7139 11.4918L28.7104 10.7015L28.1555 9.55685L29.3948 9.84333L29.9436 8.69568Z"
          fill={color}
        />
        <Path
          d="M34.4037 13.9131L34.9524 15.0607L36.1918 14.7742L35.6368 15.9188L36.6334 16.7092L35.3925 16.9889L35.3959 18.2609L34.4037 17.4651L33.4113 18.2609L33.4147 16.9889L32.1738 16.7092L33.1705 15.9188L32.6155 14.7742L33.8548 15.0607L34.4037 13.9131Z"
          fill={color}
        />
        <Path
          d="M31.2144 20L31.6461 21.3286H33.0431L31.9129 22.1498L32.3446 23.4783L31.2144 22.6572L30.0843 23.4783L30.5159 22.1498L29.3857 21.3286H30.7827L31.2144 20Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2143">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Australia'

/**
 * Flags by Deji.Zeal: Australia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Australia = memo(Icon)
