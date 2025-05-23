import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 7H22V12H20V7ZM10 4C5.58 4 2 7.58 2 12C2 16.42 5.58 20 10 20C14.42 20 18 16.42 18 12C18 7.58 14.42 4 10 4ZM10 18C6.69 18 4 15.31 4 12C4 8.69 6.69 6 10 6C13.31 6 16 8.69 16 12C16 15.31 13.31 18 10 18ZM20 14H22V16H20V14ZM10 10C8.9 10 8 10.9 8 12C8 13.1 8.9 14 10 14C11.1 14 12 13.1 12 12C12 10.9 11.1 10 10 10Z" />
    </Svg>
  )
}

Icon.displayName = 'DiscFull'

/**
 * Material Icon: Disc Full
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:disc_full Material Icon Docs}
 */
export const DiscFull = memo(Icon)
