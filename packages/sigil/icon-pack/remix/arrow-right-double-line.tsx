import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m19.164 12-6.207-6.207-1.414 1.414L16.336 12l-4.793 4.793 1.414 1.414zm-5.65 0L7.307 5.793 5.893 7.207 10.686 12l-4.793 4.793 1.414 1.414z" />
    </Svg>
  )
})
Icon.displayName = 'ArrowRightDoubleLine'
/**
 * Remix Icon: Arrow Right Double Line
 * @see {@link https://remixicon.com/icon/arrow-right-double-line Remix Icon Docs}
 */
export const ArrowRightDoubleLine = Icon
