import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.00061 13.5C11.2106 13.5 13.0006 11.71 13.0006 9.5C13.0006 7.29 11.2106 5.5 9.00061 5.5C6.79061 5.5 5.00061 7.29 5.00061 9.5C5.00061 11.71 6.79061 13.5 9.00061 13.5ZM9.00061 7.5C10.1006 7.5 11.0006 8.4 11.0006 9.5C11.0006 10.6 10.1006 11.5 9.00061 11.5C7.90061 11.5 7.00061 10.6 7.00061 9.5C7.00061 8.4 7.90061 7.5 9.00061 7.5ZM9.00061 15.5C6.33061 15.5 1.00061 16.84 1.00061 19.5V21.5H17.0006V19.5C17.0006 16.84 11.6706 15.5 9.00061 15.5ZM3.00061 19.5C3.22061 18.78 6.31061 17.5 9.00061 17.5C11.7006 17.5 14.8006 18.79 15.0006 19.5H3.00061ZM15.0806 7.55C15.9206 8.73 15.9206 10.26 15.0806 11.44L16.7606 13.13C18.7806 11.11 18.7806 8.06 16.7606 5.86L15.0806 7.55ZM20.0706 2.5L18.4406 4.13C21.2106 7.15 21.2106 11.69 18.4406 14.87L20.0706 16.5C23.9706 12.61 23.9806 6.55 20.0706 2.5Z" />
    </Svg>
  )
}

Icon.displayName = 'RecordVoiceOver'

/**
 * Material Icon: Record Voice Over
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:record_voice_over Material Icon Docs}
 */
export const RecordVoiceOver = memo(Icon)
