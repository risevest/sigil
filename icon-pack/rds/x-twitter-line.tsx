import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 16 16" fill={color} height={size} width={size} {...otherProps}>
<Path d="M11.789 2.04167L8.45786 5.8495L5.5777 2.04167H1.40625L6.39047 8.55914L1.66658 13.9583H3.68936L7.33526 9.7924L10.5216 13.9583H14.5897L9.39406 7.08947L13.8106 2.04167H11.789ZM11.0795 12.7483L3.76697 3.18812H4.96903L12.1997 12.7483H11.0795Z" fill="currentColor"/>
    </Svg>
  )
}

Icon.displayName = 'XTwitterLine'

export const XTwitterLine = memo(Icon)

