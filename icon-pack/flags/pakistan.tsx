import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_829)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M0 20.0001C0 27.5809 4.21789 34.1762 10.4348 37.5683V2.43188C4.21789 5.82399 0 12.4192 0 20.0001Z"
          fill="#F0F0F0"
        />
        <Path
          d="M19.9998 0C16.535 0 13.2761 0.881485 10.4346 2.4318V37.5681C13.2761 39.1185 16.535 40 19.9998 40C31.0454 40 39.9998 31.0456 39.9998 20C39.9998 8.95438 31.0454 0 19.9998 0Z"
          fill="#496E2D"
        />
        <Path
          d="M28.5508 23.3075C26.0206 25.1357 22.4873 24.5667 20.6592 22.0365C18.8309 19.5062 19.4 15.973 21.9303 14.1449C22.7192 13.5749 23.6056 13.2379 24.5074 13.1208C22.7725 12.8613 20.9385 13.2523 19.4043 14.3608C16.2903 16.611 15.5897 20.9595 17.8398 24.0737C20.0899 27.1877 24.4385 27.8883 27.5527 25.638C29.087 24.5295 30.034 22.9113 30.3322 21.1824C29.938 22.0017 29.3398 22.7374 28.5508 23.3075V23.3075Z"
          fill="#F0F0F0"
        />
        <Path
          d="M28.4422 13.0437L29.8675 14.5797L31.7687 13.6991L30.7482 15.5291L32.1734 17.0653L30.1175 16.6602L29.097 18.4903L28.847 16.4099L26.791 16.0048L28.6923 15.1242L28.4422 13.0437Z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_829">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Pakistan'

/**
 * Flags by `Deji.Zeal`: Pakistan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Pakistan = memo(Icon)
