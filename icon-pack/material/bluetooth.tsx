import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.355 7.71L12.645 2H11.645V9.59L7.055 5L5.645 6.41L11.235 12L5.645 17.59L7.055 19L11.645 14.41V22H12.645L18.355 16.29L14.055 12L18.355 7.71ZM13.645 5.83L15.525 7.71L13.645 9.59V5.83ZM15.525 16.29L13.645 18.17V14.41L15.525 16.29Z" />
    </Svg>
  )
}

Icon.displayName = 'Bluetooth'

/**
 * Material Icon: Bluetooth
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bluetooth Material Icon Docs}
 */
export const Bluetooth = memo(Icon)
