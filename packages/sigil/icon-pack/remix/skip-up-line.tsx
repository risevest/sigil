import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SkipUpLine = /* @__PURE__ */ memo(function SkipUpLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 13.914 4.793 4.793 1.414-1.414L12 11.086l-6.207 6.207 1.414 1.414zM6 7h12v2H6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Skip Up Line
 * @see {@link https://remixicon.com/icon/skip-up-line Remix Icon Docs}
 */
export { SkipUpLine }
