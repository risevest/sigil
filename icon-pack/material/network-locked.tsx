import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 16.5V16C22 14.62 20.88 13.5 19.5 13.5C18.12 13.5 17 14.62 17 16V16.5C16.45 16.5 16 16.95 16 17.5V21.5C16 22.05 16.45 22.5 17 22.5H22C22.55 22.5 23 22.05 23 21.5V17.5C23 16.95 22.55 16.5 22 16.5ZM21 16.5H18V16C18 15.17 18.67 14.5 19.5 14.5C20.33 14.5 21 15.17 21 16V16.5ZM18 6.33V11.76C18.47 11.6 18.97 11.5 19.5 11.5C19.67 11.5 19.83 11.53 20 11.55V1.5L1 20.5H14V18.5H5.83L18 6.33Z" />
    </Svg>
  )
}

Icon.displayName = 'NetworkLocked'

/**
 * Material Icon: Network Locked
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:network_locked Material Icon Docs}
 */
export const NetworkLocked = memo(Icon)
