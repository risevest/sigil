import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.5 12.59L15.4 16.47L12 14.42L8.6 16.47L9.5 12.6L6.5 10.01L10.46 9.67L12 6.02L13.54 9.66L17.5 10L14.5 12.59ZM12 3.19L19 6.3V11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19ZM12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalPolice'

/**
 * Material Icon: Local Police
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_police Material Icon Docs}
 */
export const LocalPolice = memo(Icon)
