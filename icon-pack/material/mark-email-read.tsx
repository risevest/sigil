import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M19.5 3H3.5C2.4 3 1.51 3.9 1.51 5L1.5 17C1.5 18.1 2.4 19 3.5 19H11.5V17H3.5V7L11.5 12L19.5 7V12H21.5V5C21.5 3.9 20.6 3 19.5 3ZM11.5 10L3.5 5H19.5L11.5 10ZM16.84 21L13.3 17.46L14.71 16.05L16.83 18.17L21.07 13.93L22.5 15.34L16.84 21Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'MarkEmailRead'

/**
 * Material Icon: Mark Email Read
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mark_email_read Material Icon Docs}
 */
export const MarkEmailRead = memo(Icon)
