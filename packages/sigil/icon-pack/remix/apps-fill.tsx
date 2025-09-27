import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 0 1 0-8.5m0 10.5H11v4.25A4.25 4.25 0 1 1 6.75 13m10.5-10.5a4.25 4.25 0 0 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25M13 13h4.25A4.25 4.25 0 1 1 13 17.25z" />
    </Svg>
  )
})
Icon.displayName = 'AppsFill'
/**
 * Remix Icon: Apps Fill
 * @see {@link https://remixicon.com/icon/apps-fill Remix Icon Docs}
 */
export const AppsFill = Icon
