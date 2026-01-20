import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ImportLine = /* @__PURE__ */ memo(function ImportLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1zM4 15h3.416a5.001 5.001 0 0 0 9.168 0H20v4H4zM4 5h16v8h-5a3 3 0 1 1-6 0H4zm12 4h-3V6h-2v3H8l4 4.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Import Line
 * @see {@link https://remixicon.com/icon/import-line Remix Icon Docs}
 */
export { ImportLine }
