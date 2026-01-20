import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SafeLine = /* @__PURE__ */ memo(function SafeLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18.005 20h-12v2h-2v-2h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-1v2h-2zm-14-2h16V5h-16zm9-4.126V17h-2v-3.126a4.002 4.002 0 0 1 1-7.874 4 4 0 0 1 1 7.874m-1-1.874a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Safe Line
 * @see {@link https://remixicon.com/icon/safe-line Remix Icon Docs}
 */
export { SafeLine }
