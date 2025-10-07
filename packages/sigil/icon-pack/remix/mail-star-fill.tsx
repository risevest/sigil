import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 14.044A6 6 0 0 0 13.689 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-9.94-2.361L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513zM19.5 21.75l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L19.5 15l1.323 2.68 2.957.43-2.14 2.085.505 2.946z" />
    </Svg>
  )
})
Icon.displayName = 'MailStarFill'
/**
 * Remix Icon: Mail Star Fill
 * @see {@link https://remixicon.com/icon/mail-star-fill Remix Icon Docs}
 */
export const MailStarFill = Icon
