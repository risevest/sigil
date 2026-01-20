import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ListSettingsLine = /* @__PURE__ */ memo(function ListSettingsLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 18h7v2H2zm0-7h9v2H2zm0-7h20v2H2zm18.674 9.025 1.156-.391 1 1.732-.916.805a4 4 0 0 1 0 1.658l.916.805-1 1.732-1.156-.391c-.41.37-.898.654-1.435.83L19 21h-2l-.24-1.196a4 4 0 0 1-1.434-.83l-1.156.392-1-1.732.916-.805a4 4 0 0 1 0-1.658l-.916-.805 1-1.732 1.156.391c.41-.37.898-.655 1.435-.83L17 11h2l.24 1.196c.536.175 1.024.46 1.434.83M18 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: List Settings Line
 * @see {@link https://remixicon.com/icon/list-settings-line Remix Icon Docs}
 */
export { ListSettingsLine }
