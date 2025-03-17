import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.9 4.77068C15.73 4.77068 15.58 4.86068 15.49 5.00068L15.42 5.15068L10.24 16.8007C10.08 17.0907 9.98 17.4107 9.98 17.7607C9.98 18.8707 10.88 19.7707 11.99 19.7707C12.95 19.7707 13.76 19.0907 13.95 18.1807L13.96 18.1507L16.4 5.27068C16.4 4.99068 16.18 4.77068 15.9 4.77068ZM1 8.77068L3 10.7707C5.88 7.89068 9.79 6.69068 13.53 7.15068L14.72 4.47068C9.89 3.61068 4.74 5.04068 1 8.77068ZM21 10.7707L23 8.77068C21.36 7.13068 19.45 5.95068 17.41 5.20068L16.88 8.02068C18.38 8.64068 19.78 9.55068 21 10.7707ZM17 14.7707L19 12.7707C18.2 11.9707 17.3 11.3507 16.34 10.8807L15.79 13.8007C16.21 14.0707 16.62 14.3907 17 14.7707ZM5 12.7707L7 14.7707C8.13 13.6407 9.56 12.9807 11.03 12.7707L12.31 9.89068C9.68 9.81068 7.01 10.7607 5 12.7707Z" />
    </Svg>
  )
}

Icon.displayName = 'NetworkCheck'

/**
 * Material Icon: Network Check
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:network_check Material Icon Docs}
 */
export const NetworkCheck = memo(Icon)
