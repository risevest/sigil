import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_604)">
        <Path
          d="M20 39.9998C31.0457 39.9998 40 31.0454 40 19.9998C40 8.95406 31.0457 -0.000244141 20 -0.000244141C8.95431 -0.000244141 0 8.95406 0 19.9998C0 31.0454 8.95431 39.9998 20 39.9998Z"
          fill="#F0F0F0"
        />
        <Path
          d="M20 -0.000244141C8.95438 -0.000244141 0 8.95413 0 19.9998C0 22.4462 0.440078 24.7897 1.24398 26.9562H38.7561C39.56 24.7897 40 22.4462 40 19.9998C40 8.95413 31.0456 -0.000244141 20 -0.000244141Z"
          fill="#0052B4"
        />
        <Path
          d="M20.0002 0C11.4009 0 4.07 5.4275 1.24414 13.0435H38.7562C35.9303 5.4275 28.5995 0 20.0002 0V0Z"
          fill="#D80027"
        />
        <Path
          d="M5.17188 11.3044V21.2815C5.17188 26.9568 12.586 28.6958 12.586 28.6958C12.586 28.6958 20.0001 26.9568 20.0001 21.2815V11.3044H5.17188Z"
          fill="#D80027"
        />
        <Path
          d="M8.23828 13.0433H16.934V9.56507L15.1948 10.4346L12.5862 7.82593L9.97742 10.4346L8.23828 9.56507V13.0433Z"
          fill="#FFDA44"
        />
        <Path
          d="M18.2614 22.6703L12.6092 17.0181L6.95703 22.6703L8.80164 24.5149L12.6092 20.7073L16.4168 24.5149L18.2614 22.6703Z"
          fill="#FFDA44"
        />
        <Path
          d="M18.2614 17.3912H15.6242C15.7725 17.1353 15.8588 16.8389 15.8588 16.5219C15.8588 15.5612 15.0801 14.7827 14.1196 14.7827C13.4559 14.7827 12.8796 15.1544 12.5864 15.7009C12.2932 15.1545 11.7169 14.7827 11.0532 14.7827C10.0927 14.7827 9.31406 15.5612 9.31406 16.5219C9.31406 16.8389 9.40031 17.1354 9.54859 17.3912H6.95703C6.95703 18.3518 7.79367 19.1304 8.75406 19.1304H8.69617C8.69617 20.0909 9.47477 20.8695 10.4353 20.8695C10.4353 21.72 11.0461 22.4265 11.8527 22.5778L10.4824 25.6717C11.1391 25.9387 11.8568 26.0869 12.6093 26.0869C13.3618 26.0869 14.0795 25.9387 14.7362 25.6717L13.3659 22.5778C14.1725 22.4267 14.7833 21.7201 14.7833 20.8695C15.7438 20.8695 16.5224 20.0909 16.5224 19.1304H16.4645C17.4248 19.1304 18.2614 18.3517 18.2614 17.3912V17.3912Z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_604">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Serbia'

/**
 * Flags by `Deji.Zeal`: Serbia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Serbia = memo(Icon)
