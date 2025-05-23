import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M18.5 6.5C15.46 6.5 13 8.96 13 12C13 13.33 13.47 14.55 14.26 15.5H9.74C10.53 14.55 11 13.33 11 12C11 8.96 8.54 6.5 5.5 6.5C2.46 6.5 0 8.96 0 12C0 15.04 2.46 17.5 5.5 17.5H18.5C21.54 17.5 24 15.04 24 12C24 8.96 21.54 6.5 18.5 6.5ZM5.5 15.5C3.57 15.5 2 13.93 2 12C2 10.07 3.57 8.5 5.5 8.5C7.43 8.5 9 10.07 9 12C9 13.93 7.43 15.5 5.5 15.5ZM18.5 15.5C16.57 15.5 15 13.93 15 12C15 10.07 16.57 8.5 18.5 8.5C20.43 8.5 22 10.07 22 12C22 13.93 20.43 15.5 18.5 15.5Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'Voicemail'

/**
 * Material Icon: Voicemail
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:voicemail Material Icon Docs}
 */
export const Voicemail = memo(Icon)
