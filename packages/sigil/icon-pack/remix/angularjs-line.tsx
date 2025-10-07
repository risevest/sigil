import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17.524 16.65.489-.27 1.118-9.71-7.13-2.546-7.132 2.545 1.119 9.71.474.263L12 4.21zm-1.1.61h-.798l-1.168-2.92H9.523l-1.169 2.92h-.778L12 19.713zM12 2l9.3 3.32-1.418 12.31L12 22 4.12 17.63 2.7 5.32zm1.698 10.54L12 8.45l-1.698 4.09z" />
    </Svg>
  )
})
Icon.displayName = 'AngularjsLine'
/**
 * Remix Icon: Angularjs Line
 * @see {@link https://remixicon.com/icon/angularjs-line Remix Icon Docs}
 */
export const AngularjsLine = Icon
