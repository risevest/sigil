import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_432)">
        <Path
          d="M38.0155 28.6957C39.2869 26.0664 40 23.1165 40 20C40 16.8836 39.2869 13.9337 38.0155 11.3044L20 10.4348L1.98453 11.3043C0.713125 13.9337 0 16.8836 0 20C0 23.1165 0.713125 26.0664 1.98453 28.6957L20 29.5653L38.0155 28.6957Z"
          fill={color}
        />
        <Path
          d="M19.9998 0C12.0706 0 5.21937 4.61445 1.98438 11.3044H38.0152C34.7803 4.61445 27.929 0 19.9998 0V0Z"
          fill={color}
        />
        <Path
          d="M19.9998 39.9999C12.0706 39.9999 5.21937 35.3855 1.98438 28.6956H38.0152C34.7803 35.3855 27.929 39.9999 19.9998 39.9999V39.9999Z"
          fill={color}
        />
        <Path
          d="M39.0555 13.9128H0.944453C0.331797 15.8323 0 17.8772 0 19.9998C0 22.1224 0.331797 24.1673 0.944453 26.0867H39.0555C39.6682 24.1673 40 22.1224 40 19.9998C40 17.8772 39.6682 15.8323 39.0555 13.9128Z"
          fill={color}
        />
        <Path d="M6.95703 19.1304H33.044V20.8695H6.95703V19.1304Z" fill={color} />
        <Path d="M10.4355 15.6521H29.566V17.3912H10.4355V15.6521Z" fill={color} />
        <Path
          d="M29.6901 19.9999C29.6901 19.9999 25.218 25.2173 20.0006 25.2173C14.7833 25.2173 14.7832 19.9999 14.7832 19.9999C14.7832 19.9999 14.7832 14.7825 20.0006 14.7825C25.218 14.7825 29.6901 19.9999 29.6901 19.9999Z"
          fill={color}
        />
        <Path
          d="M20 25.2173C14.7826 25.2173 10.3105 19.9999 10.3105 19.9999C10.3105 19.9999 14.7826 14.7825 20 14.7825"
          fill={color}
        />
        <Path d="M16.5215 18.2607H18.2606V21.739H16.5215V18.2607Z" fill={color} />
        <Path d="M21.7383 18.2607H23.4774V21.739H21.7383V18.2607Z" fill={color} />
        <Path
          d="M6.95594 21.739C7.91644 21.739 8.69508 20.9604 8.69508 19.9999C8.69508 19.0394 7.91644 18.2607 6.95594 18.2607C5.99544 18.2607 5.2168 19.0394 5.2168 19.9999C5.2168 20.9604 5.99544 21.739 6.95594 21.739Z"
          fill={color}
        />
        <Path
          d="M33.0438 21.739C34.0043 21.739 34.783 20.9604 34.783 19.9999C34.783 19.0394 34.0043 18.2607 33.0438 18.2607C32.0833 18.2607 31.3047 19.0394 31.3047 19.9999C31.3047 20.9604 32.0833 21.739 33.0438 21.739Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_432">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Swaziland'

/**
 * Flags by `Deji.Zeal`: Swaziland
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Swaziland = memo(Icon)
