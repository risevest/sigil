import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2v-2H6v2H4v-2H3a1 1 0 0 1-1-1zm2 14h16V5H4zm11.35-9.764a3.76 3.76 0 0 0-3.7 0l-1.332-1.332-1.414 1.414 1.333 1.333a3.76 3.76 0 0 0 0 3.698l-1.333 1.333 1.414 1.414 1.333-1.333a3.76 3.76 0 0 0 3.698 0l1.333 1.333 1.414-1.414-1.333-1.333a3.76 3.76 0 0 0 0-3.698l1.333-1.333-1.414-1.414zm-.613 2.026a1.75 1.75 0 1 1-2.474 2.475 1.75 1.75 0 0 1 2.474-2.475M5 8v7h2V8z" />
    </Svg>
  )
})
Icon.displayName = 'Safe3Line'
/**
 * Remix Icon: Safe 3 Line
 * @see {@link https://remixicon.com/icon/safe-3-line Remix Icon Docs}
 */
export const Safe3Line = Icon
