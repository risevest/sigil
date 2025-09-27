import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13.001 19.938a8.001 8.001 0 0 0-1-15.938 8 8 0 0 0-1 15.938V14h-2v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.73 2.73 0 0 1 12.537 6.9c.382-.205.857-.328 1.687-.381q.494-.032 1.278.08v1.9h-.5c-.917 0-1.296.043-1.522.164a.73.73 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2zm-1 2.062c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10" />
    </Svg>
  )
})
Icon.displayName = 'FacebookCircleLine'
/**
 * Remix Icon: Facebook Circle Line
 * @see {@link https://remixicon.com/icon/facebook-circle-line Remix Icon Docs}
 */
export const FacebookCircleLine = Icon
