import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.25 21H10.25C10.25 22.1 9.35 23 8.25 23C7.15 23 6.25 22.1 6.25 21ZM4.25 20H12.25V18H4.25V20ZM15.75 10.5C15.75 14.32 13.09 16.36 11.98 17H4.52C3.41 16.36 0.75 14.32 0.75 10.5C0.75 6.36 4.11 3 8.25 3C12.39 3 15.75 6.36 15.75 10.5ZM13.75 10.5C13.75 7.47 11.28 5 8.25 5C5.22 5 2.75 7.47 2.75 10.5C2.75 12.97 4.24 14.39 5.1 15H11.4C12.26 14.39 13.75 12.97 13.75 10.5ZM20.62 8.37L19.25 9L20.62 9.63L21.25 11L21.88 9.63L23.25 9L21.88 8.37L21.25 7L20.62 8.37ZM18.25 7L19.19 4.94L21.25 4L19.19 3.06L18.25 1L17.31 3.06L15.25 4L17.31 4.94L18.25 7Z" />
    </Svg>
  )
}

Icon.displayName = 'TipsAndUpdates'

/**
 * Material Icon: Tips And Updates
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:tips_and_updates Material Icon Docs}
 */
export const TipsAndUpdates = memo(Icon)
