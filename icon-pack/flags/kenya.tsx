import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1303)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.9543 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999Z"
          fill="#F0F0F0"
        />
        <Path
          d="M19.9998 -0.00012207C12.0706 -0.00012207 5.21937 4.61433 1.98438 11.3043H38.0152C34.7803 4.61433 27.929 -0.00012207 19.9998 -0.00012207V-0.00012207Z"
          fill="black"
        />
        <Path
          d="M19.9998 39.9999C12.0706 39.9999 5.21937 35.3855 1.98438 28.6956H38.0152C34.7803 35.3855 27.929 39.9999 19.9998 39.9999V39.9999Z"
          fill="#496E2D"
        />
        <Path
          d="M39.0555 13.9128H0.944453C0.331797 15.8323 0 17.8772 0 19.9998C0 22.1224 0.331797 24.1673 0.944453 26.0867H39.0555C39.6682 24.1673 40 22.1224 40 19.9998C40 17.8772 39.6682 15.8323 39.0555 13.9128Z"
          fill="#A2001D"
        />
        <Path
          d="M26.2279 9.24213L23.8594 8.14893L20.0002 16.8873L16.141 8.14893L13.7725 9.24213L18.5637 19.9999L13.7725 30.7576L16.141 31.8508L20.0002 23.1124L23.8594 31.8508L26.2279 30.7576L21.4367 19.9999L26.2279 9.24213Z"
          fill="#F0F0F0"
        />
        <Path
          d="M21.6089 10.2724C20.6921 9.27106 20.0003 8.69543 20.0003 8.69543C20.0003 8.69543 19.3085 9.27098 18.3916 10.2724V29.7271C19.3085 30.7286 20.0003 31.3042 20.0003 31.3042C20.0003 31.3042 20.6921 30.7286 21.6089 29.7271V10.2724Z"
          fill="#F0F0F0"
        />
        <Path
          d="M15.6523 14.0032V25.9963C16.6213 27.7131 17.8071 29.1203 18.6959 30.0532V9.94629C17.8071 10.8792 16.6212 12.2864 15.6523 14.0032V14.0032Z"
          fill="#A2001D"
        />
        <Path
          d="M24.3482 14.0032C23.3792 12.2864 22.1934 10.8792 21.3047 9.94629V30.0532C22.1934 29.1203 23.3792 27.7131 24.3482 25.9963V14.0032Z"
          fill="#A2001D"
        />
        <Path
          d="M24.3477 14.0033V25.9964C25.3285 24.2582 26.0868 22.2028 26.0868 19.9999C26.0868 17.797 25.3285 15.7416 24.3477 14.0033Z"
          fill="black"
        />
        <Path
          d="M15.6522 14.0033V25.9964C14.6714 24.2582 13.9131 22.2028 13.9131 19.9999C13.9131 17.797 14.6714 15.7416 15.6522 14.0033Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1303">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Kenya'

/**
 * Flags by `Deji.Zeal`: Kenya
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Kenya = memo(Icon)
