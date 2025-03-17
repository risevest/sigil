import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.915 16.035H12.885C16.375 15.635 19.085 12.675 19.085 9.08496C19.085 5.21496 15.955 2.08496 12.085 2.08496C8.21498 2.08496 5.08498 5.21496 5.08498 9.08496C5.08498 12.555 7.60498 15.425 10.915 15.975V19.915H4.91498V21.915H18.915V19.915H12.915V16.035ZM7.08498 9.08496C7.08498 6.32496 9.32498 4.08496 12.085 4.08496C14.845 4.08496 17.085 6.32496 17.085 9.08496C17.085 11.845 14.845 14.085 12.085 14.085C9.32498 14.085 7.08498 11.845 7.08498 9.08496Z" />
    </Svg>
  )
}

Icon.displayName = 'Nature'

/**
 * Material Icon: Nature
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:nature Material Icon Docs}
 */
export const Nature = memo(Icon)
