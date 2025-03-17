import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.75 4.25C11.03 4.25 11.25 4.47 11.25 4.75V6.75H17.25V12.75H19.25C19.53 12.75 19.75 12.97 19.75 13.25C19.75 13.53 19.53 13.75 19.25 13.75H17.25V19.75H15.13C14.45 18 12.74 16.75 10.75 16.75C8.76 16.75 7.05 18 6.37 19.75H4.25V17.63C6 16.95 7.25 15.24 7.25 13.25C7.25 11.26 6.01 9.55 4.26 8.87L4.25 6.75H10.25V4.75C10.25 4.47 10.47 4.25 10.75 4.25ZM10.75 2.25C9.37 2.25 8.25 3.37 8.25 4.75H4.25C3.15 4.75 2.26 5.65 2.26 6.75V10.55H2.55C4.04 10.55 5.25 11.76 5.25 13.25C5.25 14.74 4.04 15.95 2.55 15.95H2.25V19.75C2.25 20.85 3.15 21.75 4.25 21.75H8.05V21.45C8.05 19.96 9.26 18.75 10.75 18.75C12.24 18.75 13.45 19.96 13.45 21.45V21.75H17.25C18.35 21.75 19.25 20.85 19.25 19.75V15.75C20.63 15.75 21.75 14.63 21.75 13.25C21.75 11.87 20.63 10.75 19.25 10.75V6.75C19.25 5.65 18.35 4.75 17.25 4.75H13.25C13.25 3.37 12.13 2.25 10.75 2.25Z" />
    </Svg>
  )
}

Icon.displayName = 'Extension'

/**
 * Material Icon: Extension
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:extension Material Icon Docs}
 */
export const Extension = memo(Icon)
