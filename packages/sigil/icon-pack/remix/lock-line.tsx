import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LockLine = /* @__PURE__ */ memo(function LockLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0zM5 12v8h14v-8zm6 2h2v4h-2zm6-4V9A5 5 0 0 0 7 9v1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Lock Line
 * @see {@link https://remixicon.com/icon/lock-line Remix Icon Docs}
 */
export { LockLine }
