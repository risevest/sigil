import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 28 28" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.75 13.5001C16.0309 13.5001 17.88 11.5973 17.88 9.25012C17.88 6.90291 16.0309 5.00012 13.75 5.00012C11.4691 5.00012 9.62 6.90291 9.62 9.25012C9.62 11.5973 11.4691 13.5001 13.75 13.5001Z" />
      <Path d="M13.75 15.2101C9.48 15.2101 6 18.6901 6 22.9601V23.9301H21.49V22.9601C21.49 18.6901 18.01 15.2101 13.74 15.2101H13.75Z" />
    </Svg>
  )
}

Icon.displayName = 'AccountActive'

export const AccountActive = memo(Icon)
