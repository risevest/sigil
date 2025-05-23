import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M3 8L11 13L19 8V10H21V6C21 4.9 20.1 4 19 4H3C1.9 4 1.01 4.9 1.01 6L1 18C1 19.1 1.9 20 3 20H15V18H3V8ZM19 6L11 11L3 6H19Z"
        fill={color}
      />
      <Path
        d="M22 15V14C22 12.9 21.1 12 20 12C18.9 12 18 12.9 18 14V15C17.45 15 17 15.45 17 16V19C17 19.55 17.45 20 18 20H22C22.55 20 23 19.55 23 19V16C23 15.45 22.55 15 22 15ZM19 15V14C19 13.45 19.45 13 20 13C20.55 13 21 13.45 21 14V15H19Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'MailLock'

/**
 * Material Icon: Mail Lock
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mail_lock Material Icon Docs}
 */
export const MailLock = memo(Icon)
