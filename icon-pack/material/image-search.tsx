import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.79 13V20H3.78998V6H8.80998C8.85998 5.29 9.02998 4.62 9.28998 4H3.78998C2.68998 4 1.78998 4.9 1.78998 6V20C1.78998 21.1 2.68998 22 3.78998 22H17.79C18.89 22 19.79 21.1 19.79 20V15L17.79 13ZM16.29 18H5.28998L8.03998 14.47L9.99998 16.83L12.75 13.29L16.29 18ZM19.09 8.89C19.53 8.19 19.79 7.38 19.79 6.5C19.79 4.01 17.78 2 15.29 2C12.8 2 10.79 4.01 10.79 6.5C10.79 8.99 12.8 11 15.28 11C16.16 11 16.98 10.74 17.67 10.3L20.79 13.42L22.21 12L19.09 8.89ZM15.29 9C13.91 9 12.79 7.88 12.79 6.5C12.79 5.12 13.91 4 15.29 4C16.67 4 17.79 5.12 17.79 6.5C17.79 7.88 16.67 9 15.29 9Z" />
    </Svg>
  )
}

Icon.displayName = 'ImageSearch'

/**
 * Material Icon: Image Search
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:image_search Material Icon Docs}
 */
export const ImageSearch = memo(Icon)
