import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.5 4C14.84 4 15.18 4.02 15.51 4.07C13.6 6.23 12.5 9.05 12.5 12C12.5 14.95 13.6 17.77 15.51 19.93C15.18 19.98 14.84 20 14.5 20C10.09 20 6.5 16.41 6.5 12C6.5 7.59 10.09 4 14.5 4ZM14.5 2C8.98 2 4.5 6.48 4.5 12C4.5 17.52 8.98 22 14.5 22C16.32 22 18.03 21.5 19.5 20.65C16.51 18.92 14.5 15.7 14.5 12C14.5 8.3 16.51 5.08 19.5 3.35C18.03 2.5 16.32 2 14.5 2Z" />
    </Svg>
  )
}

Icon.displayName = 'Nightlight'

/**
 * Material Icon: Nightlight
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:nightlight Material Icon Docs}
 */
export const Nightlight = memo(Icon)
