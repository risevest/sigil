import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 6V4H5V2H15V6H16C16.5523 6 17 6.44772 17 7V9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V7C1 6.44772 1.44772 6 2 6H13ZM15 8H3V18H15V8ZM17 12.3587L21 15.1587V8.84131L17 11.6413V12.3587ZM5 10H7V12H5V10Z" />
    </Svg>
  )
}

Icon.displayName = 'Vidicon2Line'

/**
 * Remix Icon: Vidicon 2 Line
 * @see {@link https://remixicon.com/icon/vidicon-2-line Remix Icon Docs}
 */
export const Vidicon2Line = memo(Icon)
