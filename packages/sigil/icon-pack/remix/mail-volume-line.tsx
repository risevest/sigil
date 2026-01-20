import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MailVolumeLine = /* @__PURE__ */ memo(function MailVolumeLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 14.5v9L16.667 21H14v-4h2.667zM21 3a1 1 0 0 1 1 1v9h-2V7.237l-7.928 7.101L4 7.215V19h8v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 14a2 2 0 0 1 .15 3.994L21 21zM19.5 5H4.511l7.55 6.662z" />
    </Svg>
  )
})
/**
 * Remix Icon: Mail Volume Line
 * @see {@link https://remixicon.com/icon/mail-volume-line Remix Icon Docs}
 */
export { MailVolumeLine }
