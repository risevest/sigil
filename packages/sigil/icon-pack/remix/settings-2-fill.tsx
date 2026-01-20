import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Settings2Fill = /* @__PURE__ */ memo(function Settings2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m8.686 4 2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </Svg>
  )
})
/**
 * Remix Icon: Settings 2 Fill
 * @see {@link https://remixicon.com/icon/settings-2-fill Remix Icon Docs}
 */
export { Settings2Fill }
