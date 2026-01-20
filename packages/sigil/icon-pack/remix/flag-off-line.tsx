import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FlagOffLine = /* @__PURE__ */ memo(function FlagOffLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m16.586 18 4.607 4.607 1.414-1.415-19.8-19.799-1.413 1.415L3 4.414V22h2v-6h7l.724 1.447a1 1 0 0 0 .894.553zm-2-2h-.35l-.35-.7zm-2-2H5V6.414zM21 6v10.758l-2-2V7h-6.236l-1-2H9.242l-2-2h5.14a1 1 0 0 1 .895.553L14 5h6a1 1 0 0 1 1 1" />
    </Svg>
  )
})
/**
 * Remix Icon: Flag Off Line
 * @see {@link https://remixicon.com/icon/flag-off-line Remix Icon Docs}
 */
export { FlagOffLine }
