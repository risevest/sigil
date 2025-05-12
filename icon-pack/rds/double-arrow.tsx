import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg fill={color} viewBox="0 0 16 13" height={size} width={size} {...otherProps}>
      <Path
        d="M13.3 6.24267L10 2.94267L10.9427 2L15.1853 6.24267L10.9427 10.4853L10 9.54267L13.3 6.24267Z"
        fill={color}
      />
      <Path
        d="M4.95 6.364L0 1.414L1.414 0L7.778 6.364L1.414 12.728L0 11.314L4.95 6.364Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'DoubleArrow'

export const DoubleArrow = memo(Icon)
