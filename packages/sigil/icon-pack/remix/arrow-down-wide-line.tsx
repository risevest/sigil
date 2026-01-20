import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ArrowDownWideLine = /* @__PURE__ */ memo(function ArrowDownWideLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 15.632 8.968-4.748-.936-1.768L12 13.368 3.968 9.116l-.936 1.768z" />
    </Svg>
  )
})
/**
 * Remix Icon: Arrow Down Wide Line
 * @see {@link https://remixicon.com/icon/arrow-down-wide-line Remix Icon Docs}
 */
export { ArrowDownWideLine }
