import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.5 16V18C6.26 18 8.5 20.24 8.5 23H10.5C10.5 19.13 7.37 16 3.5 16ZM3.5 20V23H6.5C6.5 21.34 5.16 20 3.5 20ZM3.5 12V14C8.47 14 12.5 18.03 12.5 23H14.5C14.5 16.92 9.58 12 3.5 12ZM18.5 1.01L8.5 1C7.4 1 6.5 1.9 6.5 3V10.37C7.19 10.53 7.86 10.74 8.5 11.01V5H18.5V18H15.47C15.99 19.25 16.31 20.59 16.42 22H18.5C19.6 22 20.5 21.1 20.5 20V3C20.5 1.9 19.6 1.01 18.5 1.01Z" />
    </Svg>
  )
}

Icon.displayName = 'TapAndPlay'

/**
 * Material Icon: Tap And Play
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:tap_and_play Material Icon Docs}
 */
export const TapAndPlay = memo(Icon)
