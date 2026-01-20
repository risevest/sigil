import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const InformationOffFill = /* @__PURE__ */ memo(function InformationOffFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19.743 18.329A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10a9.96 9.96 0 0 0-6.329 2.257l6.243 6.243H13v1.086zM10 11.414 4.257 5.671A9.96 9.96 0 0 0 2 12c0 5.523 4.477 10 10 10a9.96 9.96 0 0 0 6.329-2.257L14 15.414V17h-4v-2h1v-2.5h-1zM13.586 15H13v-.586zM13.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Information Off Fill
 * @see {@link https://remixicon.com/icon/information-off-fill Remix Icon Docs}
 */
export { InformationOffFill }
