import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 3a1 1 0 0 1 1 1v2h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5V4a1 1 0 0 1 1-1zm1 5H8v11h8zM4 8v11h2V8zm10-3h-4v1h4zm4 3v11h2V8z" />
    </Svg>
  )
})
Icon.displayName = 'SuitcaseLine'
/**
 * Remix Icon: Suitcase Line
 * @see {@link https://remixicon.com/icon/suitcase-line Remix Icon Docs}
 */
export const SuitcaseLine = Icon
