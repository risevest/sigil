import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9 20.986a8.5 8.5 0 1 1 7.715-12.983A6.5 6.5 0 0 1 17 20.981V21H9z" />
    </Svg>
  )
})
Icon.displayName = 'CloudyFill'
/**
 * Remix Icon: Cloudy Fill
 * @see {@link https://remixicon.com/icon/cloudy-fill Remix Icon Docs}
 */
export const CloudyFill = Icon
