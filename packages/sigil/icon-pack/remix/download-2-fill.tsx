import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Download2Fill = /* @__PURE__ */ memo(function Download2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2zM14 9h5l-7 7-7-7h5V3h4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Download 2 Fill
 * @see {@link https://remixicon.com/icon/download-2-fill Remix Icon Docs}
 */
export { Download2Fill }
