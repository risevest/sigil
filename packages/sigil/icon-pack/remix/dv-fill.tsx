import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DvFill = /* @__PURE__ */ memo(function DvFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 14.745a7 7 0 1 1 8 0V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM8 14A5 5 0 1 0 8 4a5 5 0 0 0 0 10m-1 4v2h2v-2zm1-6a3 3 0 1 1 0-6 3 3 0 0 1 0 6m6 5v-1.292A8.98 8.98 0 0 0 17 9a8.97 8.97 0 0 0-2.292-6H21a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm4-10v2h2V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Dv Fill
 * @see {@link https://remixicon.com/icon/dv-fill Remix Icon Docs}
 */
export { DvFill }
