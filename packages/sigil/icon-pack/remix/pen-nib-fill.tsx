import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PenNibFill = /* @__PURE__ */ memo(function PenNibFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m4.929 21.482 5.846-5.846a2 2 0 1 0-1.414-1.414l-5.846 5.846-1.06-1.06c2.828-3.3 3.888-6.954 5.302-13.082l6.364-.708 5.657 5.657-.707 6.364c-6.128 1.415-9.782 2.475-13.081 5.304zM16.596 2.037l6.347 6.346a.5.5 0 0 1-.277.848l-1.474.23-5.656-5.657.212-1.485a.5.5 0 0 1 .848-.282" />
    </Svg>
  )
})
/**
 * Remix Icon: Pen Nib Fill
 * @see {@link https://remixicon.com/icon/pen-nib-fill Remix Icon Docs}
 */
export { PenNibFill }
