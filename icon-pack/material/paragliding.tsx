import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.48 17.94C14.68 18.54 14 19 12 19C10 19 9.32 18.54 8.52 17.94C8.04 17.55 7 16.76 7 14H5C5 16.7 5.93 18.41 7.3 19.5C7.8 19.9 8.4 20.2 9 20.4V24H15V20.4C15.6 20.2 16.2 19.9 16.7 19.5C18.07 18.41 19 16.7 19 14H17C17 16.76 15.96 17.55 15.48 17.94ZM23 4.25V7.74C23 8.54 22.12 9 21.44 8.57C21.3 8.48 21.16 8.39 21 8.31L19 13H17L15.5 6.72C14.4 6.58 13.22 6.5 12 6.5C10.78 6.5 9.6 6.58 8.5 6.72L7 13H5L3 8.31C2.84 8.39 2.7 8.48 2.56 8.57C1.88 9 1 8.55 1 7.74V4.25C1 1.9 5.92 0 12 0C18.08 0 23 1.9 23 4.25ZM6.9 6.98C5.97 7.17 5.12 7.41 4.37 7.69L5.88 11.24L6.9 6.98ZM19.63 7.69C18.88 7.41 18.03 7.17 17.1 6.98L18.12 11.23L19.63 7.69ZM21 4.31C20.65 3.63 17.57 2 12 2C6.43 2 3.35 3.63 3 4.31V6.08C5.34 5.07 8.56 4.5 12 4.5C15.44 4.5 18.66 5.07 21 6.08V4.31Z" />
    </Svg>
  )
}

Icon.displayName = 'Paragliding'

/**
 * Material Icon: Paragliding
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:paragliding Material Icon Docs}
 */
export const Paragliding = memo(Icon)
