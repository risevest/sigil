import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'MailOutline'

/**
 * Material Icon: Mail Outline
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mail_outline Material Icon Docs}
 */
export const MailOutline = memo(Icon)
