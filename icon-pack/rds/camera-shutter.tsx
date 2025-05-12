import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Circle as _Circle, Rect } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 65 64" fill="none" height={size} width={size} {...otherProps}>
      <Rect x="0.5" width="64" height="64" rx="32" fill={color} />
      <_Circle cx="32.5" cy="32" r="26" fill={color} stroke="#222222" strokeWidth="2" />
    </Svg>
  )
}

Icon.displayName = 'CameraShutter'

export const CameraShutter = memo(Icon)
