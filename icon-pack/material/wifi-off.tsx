import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 12.1696L23 10.1696C19.27 6.43957 14.13 5.01957 9.3 5.85957L11.88 8.43957C15.18 8.41957 18.49 9.65957 21 12.1696ZM19 14.1696C17.92 13.0896 16.64 12.3196 15.28 11.8396L18.3 14.8596L19 14.1696ZM9 18.1696L12 21.1696L15 18.1696C13.35 16.5096 10.66 16.5096 9 18.1696ZM3.41 2.80957L2 4.21957L5.05 7.26957C3.59 7.99957 2.22 8.95957 1 10.1696L3 12.1696C4.23 10.9396 5.65 10.0096 7.17 9.38957L9.41 11.6296C7.79 12.0596 6.27 12.9096 5 14.1696L7 16.1696C8.35 14.8196 10.11 14.1296 11.89 14.1096L18.97 21.1896L20.38 19.7796L3.41 2.80957Z" />
    </Svg>
  )
}

Icon.displayName = 'WifiOff'

/**
 * Material Icon: Wifi Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wifi_off Material Icon Docs}
 */
export const WifiOff = memo(Icon)
