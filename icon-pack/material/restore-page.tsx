import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13.17L18 8.83V20ZM8.45 10.57L7.28 9.4V13H10.88L9.44 11.56C9.96 10.55 11.02 9.85 12.23 9.85C13.97 9.85 15.38 11.26 15.38 13C15.38 14.74 13.97 16.15 12.23 16.15C11.16 16.15 10.21 15.61 9.65 14.8H8.1C8.79 16.38 10.38 17.5 12.22 17.5C14.7 17.5 16.72 15.48 16.72 13C16.72 10.52 14.7 8.5 12.22 8.5C10.63 8.5 9.25 9.33 8.45 10.57Z" />
    </Svg>
  )
}

Icon.displayName = 'RestorePage'

/**
 * Material Icon: Restore Page
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:restore_page Material Icon Docs}
 */
export const RestorePage = memo(Icon)
