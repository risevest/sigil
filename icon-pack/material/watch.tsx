import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.31 2L14.72 4.48C13.87 4.17 12.96 4 12 4C11.05 4 10.13 4.17 9.29 4.47L9.7 2H14.31ZM14.72 19.52L14.31 22H9.7L9.29 19.53C10.13 19.83 11.05 20 12 20C12.96 20 13.87 19.83 14.72 19.52ZM16 0H8L7.05 5.73C5.19 7.19 4 9.45 4 12C4 14.55 5.19 16.81 7.05 18.27L8 24H16L16.96 18.27C18.81 16.81 20 14.54 20 12C20 9.46 18.81 7.19 16.96 5.73L16 0ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z" />
    </Svg>
  )
}

Icon.displayName = 'Watch'

/**
 * Material Icon: Watch
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:watch Material Icon Docs}
 */
export const Watch = memo(Icon)
