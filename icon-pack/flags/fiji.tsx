import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1622)">
        <Path
          d="M40 20.0001C40 31.0457 31.0456 40.0001 20 40.0001C8.95437 40.0001 0 31.0457 0 20.0001C0 20.0049 20 0.00230957 20 0.00012207C31.0456 0.00012207 40 8.9545 40 20.0001Z"
          fill={color}
        />
        <Path d="M20.0004 9.56543V16.311L13.0439 9.56543H20.0004Z" fill={color} />
        <Path
          d="M10.435 20.0003H16.3109L10.435 12.1742L9.56543 18.2611L10.435 20.0003Z"
          fill={color}
        />
        <Path
          d="M19.9463 20.0002H19.9998C19.9998 19.9822 19.9998 19.9647 19.9998 19.9467C19.982 19.9645 19.9642 19.9824 19.9463 20.0002Z"
          fill={color}
        />
        <Path
          d="M20 10.4349C20 6.91575 20 4.60989 20 0.00012207H19.9966C8.9525 0.00199707 0 8.95551 0 20.0001H10.4348V14.1243L16.3107 20.0001H19.9466C19.9645 19.9823 19.9823 19.9645 20.0002 19.9466C20.0002 18.5992 20.0002 17.3969 20.0002 16.3109L14.1241 10.4349H20Z"
          fill={color}
        />
        <Path
          d="M10.1181 2.60864C6.99004 4.38981 4.38957 6.99028 2.6084 10.1183V20H7.82582V7.82622V7.82606H19.9997C19.9997 6.18052 19.9997 4.61286 19.9997 2.60864H10.1181Z"
          fill={color}
        />
        <Path
          d="M19.9997 17.5405L12.894 10.4348H10.4346V10.435L19.9996 20H19.9997C19.9997 20 19.9997 18.3041 19.9997 17.5405Z"
          fill={color}
        />
        <Path
          d="M22.6084 13.0436V20C22.6084 24.6594 28.6954 26.087 28.6954 26.087C28.6954 26.087 34.7823 24.6594 34.7823 20V13.0436L28.6954 11.3044L22.6084 13.0436Z"
          fill={color}
        />
        <Path
          d="M34.7823 13.0436V10.4349H22.6084V13.0436H27.8257V18.2611H22.6084V20.0001V20.0003L27.8257 20.0003V25.8204C28.3505 26.006 28.6954 26.0871 28.6954 26.0871C28.6954 26.0871 29.04 26.0062 29.5648 25.8204V20.0003H34.7823V20.0001V18.261H29.5648V13.0435H34.7823V13.0436Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1622">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Fiji'

/**
 * Flags by Deji.Zeal: Fiji
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Fiji = memo(Icon)
