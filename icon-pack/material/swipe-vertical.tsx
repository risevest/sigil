import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M1.25427 2H6.25427V7H4.75427V4.09C2.89427 6.2 1.75427 8.97 1.75427 12C1.75427 15.03 2.89427 17.79 4.75427 19.91V17H6.25427V22H1.25427V20.5H3.27427C1.38427 18.18 0.254272 15.22 0.254272 12C0.254272 8.78 1.38427 5.82 3.27427 3.5H1.25427V2ZM20.4743 10L16.3243 10.01C16.1643 10 16.0143 10.03 15.8743 10.09L15.2843 10.35L13.4543 6.25C12.8943 4.99 11.4143 4.42 10.1543 4.98C8.89427 5.54 8.32427 7.02 8.88427 8.28L12.1843 15.73L10.3143 16.12C10.1243 16.17 9.32427 16.39 8.95427 17.33L8.25427 19.19L15.0343 21.86C15.5243 22.05 16.0843 22.04 16.5643 21.82L22.5543 19.17C23.4443 18.77 23.9243 17.79 23.6843 16.85L22.3243 11.51C22.1043 10.65 21.3543 10.04 20.4743 10ZM21.7443 17.34L15.7543 20L10.8343 18.04L15.0143 17.16L10.7143 7.46C10.6043 7.21 10.7143 6.91 10.9643 6.8C11.2143 6.69 11.5143 6.8 11.6243 7.05L14.1243 12.7L15.7343 11.99L20.3843 12L21.7443 17.34Z" />
    </Svg>
  )
}

Icon.displayName = 'SwipeVertical'

/**
 * Material Icon: Swipe Vertical
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:swipe_vertical Material Icon Docs}
 */
export const SwipeVertical = memo(Icon)
