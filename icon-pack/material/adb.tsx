import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 15.7797C5 19.6497 8.13 22.7797 12 22.7797C15.87 22.7797 19 19.6497 19 15.7797V11.7797H5V15.7797ZM16.12 4.14973L18.22 2.04973L17.4 1.21973L15.1 3.52973C14.16 3.05973 13.12 2.77973 12 2.77973C10.88 2.77973 9.84 3.05973 8.91 3.52973L6.6 1.21973L5.78 2.04973L7.88 4.14973C6.14 5.41973 5 7.45973 5 9.77973V10.7797H19V9.77973C19 7.45973 17.86 5.41973 16.12 4.14973ZM9 8.77973C8.45 8.77973 8 8.32973 8 7.77973C8 7.22973 8.45 6.77973 9 6.77973C9.55 6.77973 10 7.22973 10 7.77973C10 8.32973 9.55 8.77973 9 8.77973ZM15 8.77973C14.45 8.77973 14 8.32973 14 7.77973C14 7.22973 14.45 6.77973 15 6.77973C15.55 6.77973 16 7.22973 16 7.77973C16 8.32973 15.55 8.77973 15 8.77973Z" />
    </Svg>
  )
}

Icon.displayName = 'Adb'

/**
 * Material Icon: Adb
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:adb Material Icon Docs}
 */
export const Adb = memo(Icon)
