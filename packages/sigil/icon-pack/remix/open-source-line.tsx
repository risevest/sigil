import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const OpenSourceLine = /* @__PURE__ */ memo(function OpenSourceLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.001 2c5.523 0 10 4.477 10 10 0 4.4-2.841 8.136-6.789 9.473l-.226.074-2.904-7.55A2.016 2.016 0 0 0 14.001 12a2 2 0 1 0-2.083 1.998l-2.903 7.549-.225-.074C4.842 20.136 2 16.4 2 12c0-5.523 4.477-10 10-10m0 2a8 8 0 0 0-4.099 14.872l1.48-3.849a4 4 0 1 1 5.239 0q.848 2.21 1.479 3.85A8 8 0 0 0 12 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Open Source Line
 * @see {@link https://remixicon.com/icon/open-source-line Remix Icon Docs}
 */
export { OpenSourceLine }
