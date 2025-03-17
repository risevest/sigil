import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 4H15V2H13V4H11V2H9V4H8C5.79 4 4 5.79 4 8V18C4 20.21 5.79 22 8 22H16C18.21 22 20 20.21 20 18V8C20 5.79 18.21 4 16 4ZM18 18C18 19.1 17.1 20 16 20H8C6.9 20 6 19.1 6 18V8C6 6.9 6.9 6 8 6H16C17.1 6 18 6.9 18 8V18Z" />
      <Path d="M9.5 15.54C9.5 16.9 10.62 18 12 18C13.38 18 14.5 16.9 14.5 15.54C14.5 14.45 14.05 14.13 12 11.75C9.93 14.15 9.5 14.46 9.5 15.54Z" />
      <Path d="M16 8H8V10H16V8Z" />
    </Svg>
  )
}

Icon.displayName = 'GasMeter'

/**
 * Material Icon: Gas Meter
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:gas_meter Material Icon Docs}
 */
export const GasMeter = memo(Icon)
