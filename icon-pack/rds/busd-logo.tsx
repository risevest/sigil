import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color =' #f0b90b', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 336.41 337.42" height={size} width={size} {...otherProps}>
      <Path
        fill="#f0b90b"
        stroke="#f0b90b"
        d="M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z"
      />
      <Path
        fill="#f0b90b"
        stroke="#f0b90b"
        d="M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z"
      />
      <Path
        fill="#f0b90b"
        stroke="#f0b90b"
        d="M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z"
      />
      <Path
        fill="#f0b90b"
        stroke="#f0b90b"
        d="M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z"
      />
    </Svg>
  )
}

Icon.displayName = 'BusdLogo'

export const BusdLogo = memo(Icon)
