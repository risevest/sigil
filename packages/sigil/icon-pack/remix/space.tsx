import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Space = /* @__PURE__ */ memo(function Space(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 9v4h16V9h2v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9z" />
    </Svg>
  )
})
/**
 * Remix Icon: Space
 * @see {@link https://remixicon.com/icon/space Remix Icon Docs}
 */
export { Space }
