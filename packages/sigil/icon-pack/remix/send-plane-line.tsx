import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m21.727 2.957-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37c-.51-.205-.503-.51.034-.689L21.043 2.32c.529-.176.832.12.684.638m-2.692 2.14L6.812 9.17l5.637 2.255 3.04 6.08z" />
    </Svg>
  )
})
Icon.displayName = 'SendPlaneLine'
/**
 * Remix Icon: Send Plane Line
 * @see {@link https://remixicon.com/icon/send-plane-line Remix Icon Docs}
 */
export const SendPlaneLine = Icon
