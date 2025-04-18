import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 11V8C18.56 7.42 22 4.9 22 2H2C2 4.9 5.44 7.42 10 8V11C6.32 11.73 2 14.61 2 22H8V20H4.13C5.06 13.17 10.78 12.8 12 12.8C13.22 12.8 18.94 13.17 19.87 20H16V22H22C22 14.61 17.68 11.73 14 11ZM18.87 4C17.5 5.19 15 6.12 12 6.12C9 6.12 6.5 5.19 5.13 4H18.87ZM12 22C10.9 22 10 21.1 10 20C10 19.45 10.22 18.95 10.59 18.59C11.39 17.79 16 16 16 16C16 16 14.21 20.61 13.41 21.41C13.05 21.78 12.55 22 12 22Z" />
    </Svg>
  )
}

Icon.displayName = 'Scale'

/**
 * Material Icon: Scale
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:scale Material Icon Docs}
 */
export const Scale = memo(Icon)
